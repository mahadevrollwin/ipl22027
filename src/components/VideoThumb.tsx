"use client";

import { useEffect, useRef, useState } from "react";
import { getPreviewSeekTime } from "@/lib/video";

type VideoThumbProps = {
  src?: string | null;
  poster?: string;
  className?: string;
  alt?: string;
};

/**
 * Card/list thumbnail: prefers Sanity poster, otherwise captures a mid-opening frame.
 * The throwaway capture element may be muted; real players never are.
 */
export function VideoThumb({ src, poster, className, alt = "" }: VideoThumbProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [frameUrl, setFrameUrl] = useState<string | undefined>(poster);

  useEffect(() => {
    setFrameUrl(poster);
  }, [poster]);

  useEffect(() => {
    if (poster || !src) return;
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const seekPreview = () => {
      if (cancelled || video.readyState < 1) return;
      try {
        video.currentTime = getPreviewSeekTime(video.duration);
      } catch {
        // ignore
      }
    };

    const capture = () => {
      if (cancelled || !video.videoWidth) return;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0);
        const url = canvas.toDataURL("image/jpeg", 0.85);
        if (!cancelled) setFrameUrl(url);
      } catch {
        // Cross-origin block — keep the paused video frame as the preview.
      }
    };

    video.addEventListener("loadedmetadata", seekPreview);
    video.addEventListener("seeked", capture);
    if (video.readyState >= 1) seekPreview();
    else video.load();

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", seekPreview);
      video.removeEventListener("seeked", capture);
    };
  }, [src, poster]);

  if (frameUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={frameUrl} alt={alt} className={className} />;
  }

  if (!src) {
    return <span className={`bg-[linear-gradient(135deg,#19398a,#0c1f5c)] ${className || ""}`} aria-hidden />;
  }

  return (
    <video
      ref={videoRef}
      src={src}
      crossOrigin="anonymous"
      muted
      playsInline
      preload="auto"
      className={className}
      aria-hidden
      tabIndex={-1}
    />
  );
}
