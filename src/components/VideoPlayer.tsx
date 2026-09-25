"use client";

import { useEffect, useRef, useState } from "react";
import { getPreviewSeekTime } from "@/lib/video";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
  /** When true and no poster, seek once to a mid-opening frame for preview. */
  showInterestingFrame?: boolean;
};

/**
 * Site HTML5 player — always starts unmuted, keeps audio on play.
 * Native controls stay available for volume / pause.
 */
export function VideoPlayer({
  src,
  poster,
  className,
  showInterestingFrame = true,
}: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [showSoundPrompt, setShowSoundPrompt] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const forceAudible = () => {
      video.defaultMuted = false;
      video.removeAttribute("muted");
      video.muted = false;
      if (video.volume < 0.05) video.volume = 1;
      setShowSoundPrompt(video.muted || video.volume === 0);
    };

    forceAudible();

    const onPlay = () => forceAudible();
    const onVolumeChange = () => {
      setShowSoundPrompt(video.muted || video.volume === 0);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("playing", onPlay);
    video.addEventListener("volumechange", onVolumeChange);

    let revealFrame: (() => void) | undefined;
    if (showInterestingFrame && !poster) {
      revealFrame = () => {
        if (video.readyState < 1) return;
        try {
          video.currentTime = getPreviewSeekTime(video.duration);
        } catch {
          // ignore seek errors
        }
      };
      video.addEventListener("loadedmetadata", revealFrame);
      if (video.readyState >= 1) revealFrame();
    }

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("playing", onPlay);
      video.removeEventListener("volumechange", onVolumeChange);
      if (revealFrame) video.removeEventListener("loadedmetadata", revealFrame);
    };
  }, [src, poster, showInterestingFrame]);

  const enableSound = () => {
    const video = ref.current;
    if (!video) return;
    video.defaultMuted = false;
    video.removeAttribute("muted");
    video.muted = false;
    video.volume = 1;
    setShowSoundPrompt(false);
    void video.play().catch(() => {
      // User gesture may still be required in some browsers.
    });
  };

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        // Never set muted / defaultMuted / autoPlay here.
        className="h-full w-full object-contain"
      />
      {showSoundPrompt ? (
        <button
          type="button"
          onClick={enableSound}
          className="absolute top-3 right-3 z-[2] rounded-full bg-black/75 px-3 py-1.5 text-xs font-bold text-white"
        >
          Tap for sound
        </button>
      ) : null}
    </div>
  );
}
