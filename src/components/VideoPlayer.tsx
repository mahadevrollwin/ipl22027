"use client";

import { useEffect, useRef } from "react";
import { getPreviewSeekTime } from "@/lib/video";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
  /** When true, seek to a non-black frame once metadata loads (for preview). */
  showInterestingFrame?: boolean;
};

/**
 * HTML5 player with controls and audio enabled.
 * Never mutes by default; user starts playback via native controls.
 */
export function VideoPlayer({
  src,
  poster,
  className,
  showInterestingFrame = true,
}: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;

    const ensureAudio = () => {
      video.defaultMuted = false;
      video.muted = false;
      if (video.volume === 0) video.volume = 1;
    };

    video.addEventListener("play", ensureAudio);
    video.addEventListener("volumechange", () => {
      // If a browser forces mute before a gesture, clear it on the next play.
    });

    if (!showInterestingFrame || poster) {
      return () => video.removeEventListener("play", ensureAudio);
    }

    const revealFrame = () => {
      if (!video || video.readyState < 1) return;
      try {
        video.currentTime = getPreviewSeekTime(video.duration);
      } catch {
        // Ignore seek errors on incomplete metadata.
      }
    };

    video.addEventListener("loadedmetadata", revealFrame);
    if (video.readyState >= 1) revealFrame();

    return () => {
      video.removeEventListener("play", ensureAudio);
      video.removeEventListener("loadedmetadata", revealFrame);
    };
  }, [src, poster, showInterestingFrame]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      controls
      playsInline
      preload="auto"
      controlsList="nodownload"
      className={className}
      // Keep audio available — do not set muted or autoPlay.
    />
  );
}
