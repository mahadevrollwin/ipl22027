/** True when href points at a playable media file (self-hosted or CDN). */
export function isDirectVideoUrl(href: string): boolean {
  try {
    const path = new URL(href, "https://example.com").pathname;
    return /\.(mp4|webm|ogg)$/i.test(path);
  } catch {
    return /\.(mp4|webm|ogg)(\?|#|$)/i.test(href);
  }
}
