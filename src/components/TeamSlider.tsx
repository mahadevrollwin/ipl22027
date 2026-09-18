"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Team } from "@/lib/data";

function usePerView() {
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 640) setPerView(2);
      else if (width < 1024) setPerView(3);
      else setPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

export function TeamSlider({
  teams,
  excludeId,
}: {
  teams: Team[];
  excludeId: string;
}) {
  const items = useMemo(
    () => teams.filter((team) => team.id !== excludeId),
    [teams, excludeId],
  );
  const perView = usePerView();
  const maxIndex = Math.max(0, items.length - perView);
  const [index, setIndex] = useState(0);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  if (items.length === 0) return null;

  const slidePercent = 100 / perView;

  return (
    <div className="relative mt-6">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-ipl uppercase">Explore</p>
          <h2 className="mt-1 text-[22px] font-extrabold text-navy sm:text-[26px]">Other IPL teams</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Show previous teams"
            onClick={() => setIndex((current) => Math.max(0, Math.min(current, maxIndex) - 1))}
            disabled={safeIndex <= 0}
            className="grid size-10 place-items-center rounded-full border border-line bg-white text-navy shadow-sm transition hover:border-ipl/30 hover:bg-bg-3 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
          </button>
          <button
            type="button"
            aria-label="Show next teams"
            onClick={() => setIndex((current) => Math.min(maxIndex, Math.min(current, maxIndex) + 1))}
            disabled={safeIndex >= maxIndex}
            className="grid size-10 place-items-center rounded-full border border-line bg-white text-navy shadow-sm transition hover:border-ipl/30 hover:bg-bg-3 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden className="text-lg leading-none">
              ›
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[24px]">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${safeIndex * slidePercent}%)` }}
        >
          {items.map((team) => (
            <div
              key={team.id}
              className="shrink-0 px-1.5 sm:px-2"
              style={{ width: `${slidePercent}%` }}
            >
              <Link
                href={`/teams/${team.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_8px_24px_rgb(19_46_115_/_0.06)] transition duration-300 hover:-translate-y-1 hover:border-ipl/25 hover:shadow-[0_16px_32px_rgb(19_46_115_/_0.12)]"
              >
                <div
                  className="h-[5px] w-full"
                  style={{ background: `linear-gradient(90deg, ${team.color}, ${team.color2})` }}
                />
                <div className="flex flex-1 flex-col items-center px-3 py-5 sm:px-4 sm:py-6">
                  <div className="grid size-[84px] place-items-center rounded-full bg-[radial-gradient(circle_at_center,#fff_42%,#eef2fb_100%)] ring-1 ring-line transition duration-300 group-hover:scale-105 sm:size-[96px]">
                    {team.logo ? (
                      <Image
                        src={team.logo}
                        alt={`${team.name} logo`}
                        width={80}
                        height={80}
                        className="size-[64px] object-contain sm:size-[72px]"
                      />
                    ) : (
                      <span className="text-xl font-extrabold" style={{ color: team.color }}>
                        {team.short}
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-4 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-[0.14em] text-white uppercase"
                    style={{ background: team.color }}
                  >
                    {team.short}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-center text-[13px] leading-snug font-extrabold text-navy sm:text-sm">
                    {team.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
