"use client";

import { useEffect, useState } from "react";
import { getPreviewSeekTime } from "@/lib/video";

type VideoThumbProps = {
  src?: string | null;
  poster?: string;
  className?: string;
  alt?: string;
};

/**
 * Card thumbnail from Sanity poster, or a one-off off-DOM frame capture.
 * Never mounts a muted <video> in the page (that can silence the real player
 * when both share the same CDN URL).
 */
export function VideoThumb({ src, poster, className, alt = "" }: VideoThumbProps) {
  const [frameUrl, setFrameUrl] = useState<string | undefined>(poster);

  useEffect(() => {
    setFrameUrl(poster);
  }, [poster]);

  useEffect(() => {
    if (poster || !src || typeof window === "undefined") return;

    let cancelled = false;
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    // Distinct URL so Chrome does not reuse the main player's media pipeline.
    const separator = src.includes("?") ? "&" : "?";
    video.src = `${src}${separator}preview=1`;

    const cleanup = () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("seeked", onSeeked);
      video.src = "";
      video.load();
    };

    const onSeeked = () => {
      if (cancelled || !video.videoWidth) {
        cleanup();
        return;
      }
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          cleanup();
          return;
        }
        ctx.drawImage(video, 0, 0);
        const url = canvas.toDataURL("image/jpeg", 0.85);
        if (!cancelled) setFrameUrl(url);
      } catch {
        // CORS / empty frame — keep gradient fallback.
      } finally {
        cleanup();
      }
    };

    const onMeta = () => {
      try {
        video.currentTime = getPreviewSeekTime(video.duration);
      } catch {
        cleanup();
      }
    };

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("seeked", onSeeked);
    video.load();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [src, poster]);

  if (frameUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={frameUrl} alt={alt} className={className} />;
  }

  return (
    <span
      className={`block bg-[linear-gradient(135deg,#19398a,#0c1f5c)] ${className || ""}`}
      aria-hidden
    />
  );
}
