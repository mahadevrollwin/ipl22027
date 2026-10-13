import { buildSitemapEntries, entriesToXml } from "@/lib/sitemap";

/**
 * Dynamic sitemap route — always generated on request from live Sanity data.
 * Avoids Next.js metadata sitemap.ts + Vercel ISR serving a stale build-time XML.
 */
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export async function GET() {
  const entries = await buildSitemapEntries();
  const xml = entriesToXml(entries);

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Prevent Vercel/CDN from holding a weeks-old sitemap after Sanity publishes.
      "Cache-Control": "public, max-age=0, s-maxage=0, must-revalidate",
      "CDN-Cache-Control": "no-store",
      "Vercel-CDN-Cache-Control": "no-store",
    },
  });
}
