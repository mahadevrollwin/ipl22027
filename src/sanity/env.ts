export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-18";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0q48dl6f";

export function isSanityConfigured() {
  return Boolean(projectId && dataset && projectId !== "placeholder");
}
