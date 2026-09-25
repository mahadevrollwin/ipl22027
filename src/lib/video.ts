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

export function slugifyVideoTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function getVideoSlug(video: Pick<Video, "slug" | "title" | "id">): string {
  if (video.slug) return video.slug;
  if (video.id) return video.id;
  return slugifyVideoTitle(video.title);
}

export function getVideoPath(video: Pick<Video, "slug" | "title" | "id">): string {
  return `/videos/${getVideoSlug(video)}`;
}

/** Seek past the common black/fade-in opening to a more useful preview frame. */
export function getPreviewSeekTime(duration: number): number {
  if (!Number.isFinite(duration) || duration <= 0) return 1;
  return Math.min(Math.max(duration * 0.12, 1.25), Math.max(duration - 0.25, 0));
}
