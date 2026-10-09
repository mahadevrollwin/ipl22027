import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Secure on-demand revalidation for Sanity webhooks (and manual refresh).
 *
 * Sanity webhook (POST):
 *   URL: https://www.ipl2027.co/api/revalidate?secret=YOUR_SECRET
 *   Or header: x-revalidate-secret: YOUR_SECRET
 *
 * Trigger on: Create / Update / Delete of article (and optionally video, team).
 */
function authorize(request: Request): boolean {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) return false;

  const headerSecret = request.headers.get("x-revalidate-secret");
  const querySecret = new URL(request.url).searchParams.get("secret");
  return headerSecret === expected || querySecret === expected;
}

async function handle(request: Request) {
  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "REVALIDATE_SECRET is not configured" }, { status: 500 });
  }

  if (!authorize(request)) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("sanity", "max");
  revalidatePath("/sitemap.xml");
  revalidatePath("/");
  revalidatePath("/news");
  revalidatePath("/blogs");
  revalidatePath("/videos");
  revalidatePath("/teams");

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}

export async function POST(request: Request) {
  return handle(request);
}

export async function GET(request: Request) {
  return handle(request);
}
