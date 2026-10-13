import { NEWS, TEAMS, VIDEOS } from "@/lib/data";
import { getVideoSlug } from "@/lib/video";
import { getFreshSanityClient } from "@/sanity/freshClient";
import {
  sitemapArticlesQuery,
  sitemapTeamsQuery,
  sitemapVideosQuery,
} from "@/sanity/queries";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  "https://www.ipl2027.co"
).replace(/\/$/, "");

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

type SitemapDoc = {
  slug?: string | null;
  title?: string | null;
  publishedAt?: string | null;
  _updatedAt?: string | null;
  _createdAt?: string | null;
  hasCover?: boolean | null;
};

export type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
};

function isValidSlug(slug: string | null | undefined): slug is string {
  return Boolean(slug && SLUG_RE.test(slug) && slug.length <= 200);
}

function toLastmod(...values: Array<string | null | undefined>): string {
  let max = 0;
  for (const value of values) {
    if (!value) continue;
    const time = new Date(value).getTime();
    if (!Number.isNaN(time) && time > max) max = time;
  }
  return new Date(max > 0 ? max : Date.now()).toISOString();
}

async function fetchFreshDocs<T>(query: string): Promise<T[]> {
  const client = getFreshSanityClient();
  if (!client) return [];
  try {
    const docs = await client.fetch<T[]>(query, {}, { cache: "no-store" });
    return Array.isArray(docs) ? docs : [];
  } catch (error) {
    console.error("Sitemap Sanity fetch failed", error);
    return [];
  }
}

function slugifyFallback(title: string): string | null {
  const slug = getVideoSlug({ title, slug: undefined, id: undefined });
  return isValidSlug(slug) ? slug : null;
}

/** Build the full sitemap URL list from live Sanity published content. */
export async function buildSitemapEntries(): Promise<SitemapEntry[]> {
  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];

  const add = (
    path: string,
    lastmod: string,
    changefreq: SitemapEntry["changefreq"],
    priority: string,
  ) => {
    const loc = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    if (seen.has(loc)) return;
    seen.add(loc);
    entries.push({ loc, lastmod, changefreq, priority });
  };

  const now = toLastmod();

  const staticPages: Array<{ path: string; changefreq: SitemapEntry["changefreq"]; priority: string }> = [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/news", changefreq: "daily", priority: "0.9" },
    { path: "/blogs", changefreq: "daily", priority: "0.9" },
    { path: "/videos", changefreq: "daily", priority: "0.9" },
    { path: "/matches", changefreq: "weekly", priority: "0.9" },
    { path: "/teams", changefreq: "weekly", priority: "0.9" },
    { path: "/points-table", changefreq: "weekly", priority: "0.9" },
    { path: "/about", changefreq: "monthly", priority: "0.9" },
  ];

  for (const page of staticPages) {
    add(page.path, now, page.changefreq, page.priority);
  }

  const [articles, videos, teams] = await Promise.all([
    fetchFreshDocs<SitemapDoc>(sitemapArticlesQuery),
    fetchFreshDocs<SitemapDoc>(sitemapVideosQuery),
    fetchFreshDocs<SitemapDoc>(sitemapTeamsQuery),
  ]);

  const articleDocs =
    articles.length > 0
      ? articles.filter((doc) => doc.hasCover !== false)
      : NEWS.filter((article) => Boolean(article.coverUrl)).map((article) => ({
          slug: article.id,
          publishedAt: undefined,
          _updatedAt: undefined,
          hasCover: true,
        }));

  for (const doc of articleDocs) {
    if (!isValidSlug(doc.slug)) continue;
    add(`/news/${doc.slug}`, toLastmod(doc._updatedAt, doc.publishedAt), "weekly", "0.8");
  }

  const videoDocs =
    videos.length > 0
      ? videos
      : VIDEOS.map((video) => ({
          slug: getVideoSlug(video),
          title: video.title,
          _updatedAt: undefined,
          _createdAt: undefined,
        }));

  for (const doc of videoDocs) {
    const slug = isValidSlug(doc.slug) ? doc.slug : doc.title ? slugifyFallback(doc.title) : null;
    if (!isValidSlug(slug)) continue;
    add(`/videos/${slug}`, toLastmod(doc._updatedAt, doc._createdAt), "weekly", "0.8");
  }

  const teamDocs =
    teams.length > 0
      ? teams
      : TEAMS.map((team) => ({ slug: team.id, _updatedAt: undefined }));

  for (const doc of teamDocs) {
    if (!isValidSlug(doc.slug)) continue;
    add(`/teams/${doc.slug}`, toLastmod(doc._updatedAt), "weekly", "0.8");
  }

  return entries;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function entriesToXml(entries: SitemapEntry[]): string {
  const body = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
