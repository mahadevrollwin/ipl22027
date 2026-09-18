"use client";

import Image from "next/image";
import { useState } from "react";
import type { TeamPlayer } from "@/lib/data";

export function PlayerCard({
  player,
  accent,
}: {
  player: TeamPlayer;
  accent: string;
}) {
  const [broken, setBroken] = useState(!player.image);

  return (
    <article className="group overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_8px_24px_rgb(19_46_115_/_0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgb(19_46_115_/_0.12)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-3">
        <div
          className="absolute inset-x-0 bottom-0 z-[1] h-1/2 opacity-80"
          style={{ background: `linear-gradient(to top, ${accent}, transparent)` }}
        />
        {!broken && player.image ? (
          <Image
            src={player.image}
            alt={player.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="grid h-full place-items-center text-4xl font-extrabold text-navy/25">
            {player.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
      </div>
      <div className="p-3.5 sm:p-4">
        <h3 className="text-[15px] leading-snug font-extrabold text-navy sm:text-base">{player.name}</h3>
        <p className="mt-1 text-xs font-semibold tracking-[0.04em] text-muted uppercase">
          {player.role}
        </p>
      </div>
    </article>
  );
}
