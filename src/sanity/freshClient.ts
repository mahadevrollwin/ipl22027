import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

/**
 * Non-CDN Sanity client for freshness-critical reads (sitemap, revalidation).
 * Avoids stale API CDN responses after publish.
 */
export function getFreshSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "published",
  });
}
