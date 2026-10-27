import Image from "next/image";

export type AdSize = "300x250" | "728x90" | "336x280" | "320x50" | "320x100";

const AD_DIMS: Record<AdSize, { width: number; height: number }> = {
  "300x250": { width: 300, height: 250 },
  "728x90": { width: 728, height: 90 },
  "336x280": { width: 336, height: 280 },
  "320x50": { width: 320, height: 50 },
  "320x100": { width: 320, height: 100 },
};

type PlayerCreative = {
  image: string;
  name: string;
  accent: string;
};

/** Rotate through these portraits so repeated slots still look varied. */
const PLAYER_CREATIVES: PlayerCreative[] = [
  { image: "/teams/players/rcb/virat-kohli.avif", name: "Virat Kohli", accent: "#ec1c24" },
  { image: "/teams/players/gt/shubman-gill.avif", name: "Shubman Gill", accent: "#1c3c78" },
  { image: "/teams/players/csk/ms-dhoni.avif", name: "MS Dhoni", accent: "#fdb913" },
  { image: "/teams/players/rr/vaibhav-suryavanshi.avif", name: "Vaibhav Suryavanshi", accent: "#ea1a85" },
  { image: "/teams/players/gt/kagiso-rabada.avif", name: "Kagiso Rabada", accent: "#0b3d91" },
  { image: "/teams/players/mi/rohit-sharma.avif", name: "Rohit Sharma", accent: "#004ba0" },
  { image: "/teams/players/dc/kl-rahul.avif", name: "KL Rahul", accent: "#0078bc" },
  { image: "/teams/players/srh/heinrich-klaasen.avif", name: "Heinrich Klaasen", accent: "#f26522" },
  { image: "/teams/players/csk/ruturaj-gaikwad.avif", name: "Ruturaj Gaikwad", accent: "#fdb913" },
  { image: "/teams/players/rcb/bhuvneshwar-kumar.avif", name: "Bhuvneshwar Kumar", accent: "#ec1c24" },
];

function pickCreative(slotId: string): PlayerCreative {
  let hash = 0;
  for (let i = 0; i < slotId.length; i += 1) {
    hash = (hash + slotId.charCodeAt(i) * (i + 1)) % PLAYER_CREATIVES.length;
  }
  return PLAYER_CREATIVES[hash] ?? PLAYER_CREATIVES[0];
}

type AdSlotProps = {
  /** Exact Google ad unit size */
  size: AdSize;
  /** Stable id for swapping in AdSense / GPT later */
  slotId: string;
  className?: string;
  label?: boolean;
};

function AdCreative({ size, slotId }: { size: AdSize; slotId: string }) {
  const { width, height } = AD_DIMS[size];
  const player = pickCreative(slotId);
  const isBanner = size === "728x90" || size === "320x50" || size === "320x100";
  const isCompact = size === "320x50";

  return (
    <div
      className="ad-slot-frame relative mx-auto shrink-0 overflow-hidden rounded-md border border-line shadow-[0_8px_24px_rgb(19_46_115_/_0.12)]"
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      {/* Player photo */}
      <Image
        src={player.image}
        alt=""
        fill
        sizes={`${width}px`}
        className={`pointer-events-none object-cover ${isBanner ? "object-[center_20%]" : "object-top"}`}
        unoptimized
      />

      {/* Brand wash + readability overlays */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isBanner
            ? `linear-gradient(90deg, #0b1638f2 0%, #0b1638d9 42%, ${player.accent}55 100%)`
            : `linear-gradient(180deg, ${player.accent}33 0%, #0b163800 28%, #0b1638cc 72%, #070e24f5 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 120%, rgb(46 196 182 / 0.35) 0 10%, transparent 12%), radial-gradient(circle at 108% -10%, rgb(245 197 24 / 0.28) 0 14%, transparent 16%)",
        }}
      />

      {/* Existing ad copy retained */}
      {isBanner ? (
        <div
          className={`pointer-events-none absolute inset-0 flex items-center ${isCompact ? "gap-2 px-2.5" : "gap-4 px-4"}`}
        >
          <div className={`min-w-0 flex-1 ${isCompact ? "" : "max-w-[58%]"}`}>
            <p
              className={`font-extrabold tracking-wide text-white ${isCompact ? "text-[11px] leading-none" : "text-sm sm:text-base"}`}
            >
              Advertisement
            </p>
            <p
              className={`font-semibold text-white/75 ${isCompact ? "mt-0.5 text-[9px] leading-none" : "mt-1 text-[11px]"}`}
            >
              {size} placeholder
            </p>
            {!isCompact ? (
              <p className="mt-1 truncate text-[11px] font-bold text-gold">{player.name}</p>
            ) : null}
          </div>
          {!isCompact ? (
            <div className="ml-auto hidden h-[70%] w-px bg-white/20 sm:block" aria-hidden />
          ) : null}
          <div
            className={`pointer-events-none relative overflow-hidden rounded-full ring-2 ring-white/70 ${isCompact ? "size-9" : size === "320x100" ? "size-16" : "size-[68px]"}`}
          >
            <Image
              src={player.image}
              alt=""
              fill
              sizes={isCompact ? "36px" : "68px"}
              className="object-cover object-top"
              unoptimized
            />
          </div>
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
          <div
            className="mb-2 h-1 w-12 rounded-full"
            style={{ background: `linear-gradient(90deg, ${player.accent}, #f5c518)` }}
          />
          <p className="text-[15px] font-extrabold tracking-wide text-white">Advertisement</p>
          <p className="mt-0.5 text-[12px] font-semibold text-white/75">{size} placeholder</p>
          <p className="mt-2 text-[13px] font-bold text-gold">{player.name}</p>
        </div>
      )}
    </div>
  );
}

/**
 * Reserved ad container with a sized player creative + original ad copy.
 * When you receive the ad script, replace the contents of `.ad-slot-frame`
 * with your <ins class="adsbygoogle"> (or GPT) tag — keep the outer wrapper
 * and frame dimensions unchanged.
 */
export function AdSlot({ size, slotId, className = "", label = true }: AdSlotProps) {
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
        <AdCreative size={size} slotId={slotId} />
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
