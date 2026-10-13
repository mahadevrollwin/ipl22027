import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

/**
 * On-demand revalidation for Sanity webhooks (and manual refresh).
 *
 * Configure in Sanity → API → Webhooks:
 *   URL: https://www.ipl2027.co/api/revalidate?secret=YOUR_SECRET
 *   Trigger: Create, Update, Delete
 *   Filter (optional): _type in ["article", "video", "team", "page", "siteSettings"]
 *
 * Or send header: x-revalidate-secret: YOUR_SECRET
 *
 * Note: /sitemap.xml is also force-dynamic and reads Sanity without CDN, so new
 * posts appear even without a webhook. This endpoint still clears page caches.
 */
function getProvidedSecret(request: Request): string | null {
  const headerSecret = request.headers.get("x-revalidate-secret");
  if (headerSecret) return headerSecret;

  const auth = request.headers.get("authorization");
  if (auth?.toLowerCase().startsWith("bearer ")) {
    return auth.slice(7).trim();
  }

  return new URL(request.url).searchParams.get("secret");
}

function authorize(request: Request): boolean {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) return false;
  const provided = getProvidedSecret(request);
  return Boolean(provided && provided === expected);
}

async function handle(request: Request) {
  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      {
        revalidated: false,
        message:
          "REVALIDATE_SECRET is not configured on Vercel. Sitemap still updates on each request; set the secret to also purge page caches via webhook.",
      },
      { status: 500 },
    );
  }

  if (!authorize(request)) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  // Invalidate Sanity-tagged fetches and key routes (including sitemap).
  revalidateTag("sanity", { expire: 0 });
  revalidatePath("/sitemap.xml");
  revalidatePath("/");
  revalidatePath("/news");
  revalidatePath("/blogs");
  revalidatePath("/videos");
  revalidatePath("/teams");
  revalidatePath("/matches");
  revalidatePath("/points-table");
  revalidatePath("/about");
  revalidatePath("/news/[id]", "page");
  revalidatePath("/videos/[slug]", "page");
  revalidatePath("/teams/[id]", "page");

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
