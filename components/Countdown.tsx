"use client";

import { useEffect, useState } from "react";

function remaining(to: string) {
  const diff = new Date(to).getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Card({ label, date }: { label: string; date: string }) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => setT(remaining(date));
    const timeout = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(id);
    };
  }, [date]);

  const cells = [
    [t.d, "Days"],
    [t.h, "Hrs"],
    [t.m, "Min"],
    [t.s, "Sec"],
  ] as const;

  return (
    <article className="min-w-0 overflow-hidden rounded-2xl bg-white p-4 shadow-sm sm:p-5">
      <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">{label}</p>
      <div className="mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
        {cells.map(([value, unit]) => (
          <div key={unit} className="min-w-0 rounded-xl bg-bg px-0.5 py-2.5 text-center">
            <strong className="block text-[clamp(20px,5vw,32px)] leading-none font-extrabold text-ipl">
              {pad(value)}
            </strong>
            <span className="text-[10px] font-semibold tracking-widest text-faint uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export function Countdown({
  auctionDate,
  seasonDate,
}: {
  auctionDate: string;
  seasonDate: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Card label="Mini-auction (expected)" date={auctionDate} />
      <Card label="Season window (working date)" date={seasonDate} />
    </div>
  );
}
