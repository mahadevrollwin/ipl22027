import Image from "next/image";

export type AdSize = "300x250" | "728x90" | "336x280" | "320x50" | "320x100";

const AD_DIMS: Record<AdSize, { width: number; height: number }> = {
  "300x250": { width: 300, height: 250 },
  "728x90": { width: 728, height: 90 },
  "336x280": { width: 336, height: 280 },
  "320x50": { width: 320, height: 50 },
  "320x100": { width: 320, height: 100 },
};

type AdSlotProps = {
  /** Exact Google ad unit size */
  size: AdSize;
  /** Stable id for swapping in AdSense / GPT later */
  slotId: string;
  className?: string;
  label?: boolean;
};

/**
 * Reserved ad container with a sized placeholder image.
 * When you receive the ad script, replace the <Image> inside
 * `.ad-slot-frame` with your <ins class="adsbygoogle"> (or GPT) tag —
 * keep the outer wrapper and frame dimensions unchanged.
 */
export function AdSlot({ size, slotId, className = "", label = true }: AdSlotProps) {
  const { width, height } = AD_DIMS[size];

  return (
    <aside
      className={`ad-slot w-full ${className}`.trim()}
      data-ad-slot={slotId}
      data-ad-size={size}
      aria-label="Advertisement"
    >
      <div className="flex w-full flex-col items-center gap-1.5 overflow-x-auto">
        {label ? (
          <span className="text-[10px] font-bold tracking-[0.16em] text-faint uppercase">Ad</span>
        ) : null}
        {/* Fixed creative frame — keep exact px size when swapping in AdSense/GPT */}
        <div
          className="ad-slot-frame relative mx-auto shrink-0 overflow-hidden rounded-md border border-dashed border-line bg-bg-3"
          style={{ width, height, minWidth: width, minHeight: height }}
        >
          <Image
            src={`/ads/${size}.svg`}
            alt=""
            width={width}
            height={height}
            className="pointer-events-none h-full w-full object-contain"
            unoptimized
          />
        </div>
      </div>
    </aside>
  );
}

/** Top-of-page banner: 728×90 on desktop, 320×50 on mobile. */
export function AdLeaderboard({ slotId, className = "" }: { slotId: string; className?: string }) {
  return (
    <div className={`w-full border-b border-line/60 bg-bg-3/40 py-3 ${className}`.trim()}>
      <div className="md:hidden">
        <AdSlot size="320x50" slotId={`${slotId}-320x50`} />
      </div>
      <div className="hidden md:block">
        <AdSlot size="728x90" slotId={`${slotId}-728x90`} />
      </div>
    </div>
  );
}

/** Bottom banner: 728×90 on desktop, 320×100 on mobile. */
export function AdFooterBanner({ slotId, className = "" }: { slotId: string; className?: string }) {
  return (
    <div className={`w-full border-t border-line/60 bg-bg-3/40 py-3 ${className}`.trim()}>
      <div className="md:hidden">
        <AdSlot size="320x100" slotId={`${slotId}-320x100`} />
      </div>
      <div className="hidden md:block">
        <AdSlot size="728x90" slotId={`${slotId}-728x90`} />
      </div>
    </div>
  );
}

/** In-content medium rectangle (300×250). */
export function AdMediumRectangle({ slotId, className = "" }: { slotId: string; className?: string }) {
  return (
    <div className={`py-6 sm:py-8 ${className}`.trim()}>
      <AdSlot size="300x250" slotId={slotId} />
    </div>
  );
}

/** In-content large rectangle (336×280). */
export function AdLargeRectangle({ slotId, className = "" }: { slotId: string; className?: string }) {
  return (
    <div className={`py-6 sm:py-8 ${className}`.trim()}>
      <AdSlot size="336x280" slotId={slotId} />
    </div>
  );
}
