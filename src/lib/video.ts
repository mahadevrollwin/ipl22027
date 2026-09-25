import type { Video } from "@/lib/data";

/** True when href points at a playable media file (self-hosted or CDN). */
export function isDirectVideoUrl(href: string): boolean {
  try {
    const path = new URL(href, "https://example.com").pathname;
    return /\.(mp4|webm|ogg)$/i.test(path);
  } catch {
    return /\.(mp4|webm|ogg)(\?|#|$)/i.test(href);
  }
}

/** Prefer Sanity-uploaded asset; otherwise a direct file URL in Watch URL. */
export function getPlayableVideoSrc(video: Pick<Video, "videoUrl" | "href">): string | null {
  if (video.videoUrl) return video.videoUrl;
  if (video.href && isDirectVideoUrl(video.href)) return video.href;
  return null;
}

export function hasExternalWatchLink(video: Pick<Video, "videoUrl" | "href">): boolean {
  return !getPlayableVideoSrc(video) && Boolean(video.href);
}
