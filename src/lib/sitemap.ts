import { NEWS, TEAMS, VIDEOS } from "@/lib/data";
import { getVideoSlug } from "@/lib/video";
import { getFreshSanityClient } from "@/sanity/freshClient";
import {
  sitemapArticlesQuery,
  sitemapPagesQuery,
  sitemapTeamsQuery,
  sitemapVideosQuery,
} from "@/sanity/queries";

/** Production canonical origin (no trailing slash). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  "https://www.ipl2027.co"
).replace(/\/$/, "");

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

/** Sanity `page` slug.current → public App Router path (only routes that exist). */
const PAGE_SLUG_TO_PATH: Record<string, string> = {
  home: "/",
  news: "/news",
  blogs: "/blogs",
  videos: "/videos",
  matches: "/matches",
  teams: "/teams",
  "points-table": "/points-table",
  about: "/about",
};

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
  lastmod?: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
};

function isValidSlug(slug: string | null | undefined): slug is string {
  return Boolean(slug && SLUG_RE.test(slug) && slug.length <= 200);
}

/** Prefer the newest real Sanity timestamp; returns undefined if none are valid. */
function toLastmod(...values: Array<string | null | undefined>): string | undefined {
  let max = 0;
  for (const value of values) {
    if (!value) continue;
    const time = new Date(value).getTime();
    if (!Number.isNaN(time) && time > max) max = time;
  }
  return max > 0 ? new Date(max).toISOString() : undefined;
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

/** Build the full sitemap URL list from live Sanity published content (+ static fallbacks). */
export async function buildSitemapEntries(): Promise<SitemapEntry[]> {
  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];

  const add = (
    path: string,
    lastmod: string | undefined,
    changefreq: SitemapEntry["changefreq"],
    priority: string,
  ) => {
    const loc = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    if (seen.has(loc)) return;
    seen.add(loc);
    entries.push(lastmod ? { loc, lastmod, changefreq, priority } : { loc, changefreq, priority });
  };

  const [articles, videos, teams, pages] = await Promise.all([
    fetchFreshDocs<SitemapDoc>(sitemapArticlesQuery),
    fetchFreshDocs<SitemapDoc>(sitemapVideosQuery),
    fetchFreshDocs<SitemapDoc>(sitemapTeamsQuery),
    fetchFreshDocs<SitemapDoc>(sitemapPagesQuery),
  ]);

  const pageLastmod = new Map<string, string>();
  for (const doc of pages) {
    if (!doc.slug || !(doc.slug in PAGE_SLUG_TO_PATH)) continue;
    const lastmod = toLastmod(doc._updatedAt);
    if (lastmod) pageLastmod.set(PAGE_SLUG_TO_PATH[doc.slug], lastmod);
  }

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
    add(page.path, pageLastmod.get(page.path), page.changefreq, page.priority);
  }

  // Sanity published articles (perspective: published). Cover required — detail pages 404 without it.
  // Merge static NEWS entries that still resolve via getArticleBySlug fallback.
  const articleBySlug = new Map<string, SitemapDoc>();
  for (const article of NEWS) {
    if (!article.coverUrl || !isValidSlug(article.id)) continue;
    articleBySlug.set(article.id, { slug: article.id, hasCover: true });
  }
  for (const doc of articles) {
    if (!isValidSlug(doc.slug) || !doc.hasCover) continue;
    articleBySlug.set(doc.slug, doc);
  }
  for (const doc of articleBySlug.values()) {
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

  const teamBySlug = new Map<string, SitemapDoc>();
  if (teams.length > 0) {
    for (const doc of teams) {
      if (!isValidSlug(doc.slug)) continue;
      teamBySlug.set(doc.slug, doc);
    }
  } else {
    for (const team of TEAMS) {
      if (!isValidSlug(team.id)) continue;
      teamBySlug.set(team.id, { slug: team.id });
    }
  }
  for (const doc of teamBySlug.values()) {
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
    .map((entry) => {
      const lines = [`  <url>`, `    <loc>${escapeXml(entry.loc)}</loc>`];
      if (entry.lastmod) lines.push(`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`);
      lines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
      lines.push(`    <priority>${entry.priority}</priority>`);
      lines.push(`  </url>`);
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
