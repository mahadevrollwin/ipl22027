import type { MetadataRoute } from "next";
import { NEWS, TEAMS, VIDEOS } from "@/lib/data";
import { getVideoSlug } from "@/lib/video";
import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import {
  sitemapArticlesQuery,
  sitemapTeamsQuery,
  sitemapVideosQuery,
} from "@/sanity/queries";

export const revalidate = 60;

const SITE_URL = (
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
};

function isValidSlug(slug: string | null | undefined): slug is string {
  return Boolean(slug && SLUG_RE.test(slug) && slug.length <= 200);
}

function latestDate(...values: Array<string | null | undefined>): Date {
  let max = 0;
  for (const value of values) {
    if (!value) continue;
    const time = new Date(value).getTime();
    if (!Number.isNaN(time) && time > max) max = time;
  }
  return max > 0 ? new Date(max) : new Date();
}

async function fetchSitemapDocs<T>(query: string): Promise<T[]> {
  if (!isSanityConfigured() || !client) return [];
  try {
    const docs = await client.fetch<T[]>(query, {}, { next: { revalidate: 60, tags: ["sanity"] } });
    return Array.isArray(docs) ? docs : [];
  } catch (error) {
    console.error("Sitemap Sanity fetch failed", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  const add = (
    path: string,
    lastModified: Date,
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
    priority: number,
  ) => {
    const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({ url, lastModified, changeFrequency, priority });
  };

  const now = new Date();

  const staticPages: Array<{
    path: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
  }> = [
    { path: "/", changeFrequency: "daily", priority: 1 },
    { path: "/news", changeFrequency: "daily", priority: 0.9 },
    { path: "/blogs", changeFrequency: "daily", priority: 0.9 },
    { path: "/videos", changeFrequency: "daily", priority: 0.9 },
    { path: "/matches", changeFrequency: "weekly", priority: 0.9 },
    { path: "/teams", changeFrequency: "weekly", priority: 0.9 },
    { path: "/points-table", changeFrequency: "weekly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  ];

  for (const page of staticPages) {
    add(page.path, now, page.changeFrequency, page.priority);
  }

  const [articles, videos, teams] = await Promise.all([
    fetchSitemapDocs<SitemapDoc>(sitemapArticlesQuery),
    fetchSitemapDocs<SitemapDoc>(sitemapVideosQuery),
    fetchSitemapDocs<SitemapDoc>(sitemapTeamsQuery),
  ]);

  // Sanity published documents only (perspective: "published"). Fall back to
  // local NEWS only when Sanity returns nothing (misconfig / outage).
  const articleDocs =
    articles.length > 0
      ? articles
      : NEWS.filter((article) => Boolean(article.coverUrl)).map((article) => ({
          slug: article.id,
          publishedAt: undefined,
          _updatedAt: undefined,
        }));

  for (const doc of articleDocs) {
    if (!isValidSlug(doc.slug)) continue;
    add(`/news/${doc.slug}`, latestDate(doc._updatedAt, doc.publishedAt), "weekly", 0.8);
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
    const slug = isValidSlug(doc.slug)
      ? doc.slug
      : doc.title
        ? slugifyFallback(doc.title)
        : null;
    if (!isValidSlug(slug)) continue;
    add(`/videos/${slug}`, latestDate(doc._updatedAt, doc._createdAt), "weekly", 0.8);
  }

  const teamDocs =
    teams.length > 0
      ? teams
      : TEAMS.map((team) => ({ slug: team.id, _updatedAt: undefined }));

  for (const doc of teamDocs) {
    if (!isValidSlug(doc.slug)) continue;
    add(`/teams/${doc.slug}`, latestDate(doc._updatedAt), "weekly", 0.8);
  }

  return entries;
}

function slugifyFallback(title: string): string | null {
  const slug = getVideoSlug({ title, slug: undefined, id: undefined });
  return isValidSlug(slug) ? slug : null;
}
