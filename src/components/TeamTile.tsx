import Image from "next/image";
import Link from "next/link";
import type { Team } from "@/lib/data";

export function TeamTile({ team }: { team: Team }) {
  const logo = team.logo || `/teams/logos/${team.id}.png`;

  return (
    <Link
      href={`/teams/${team.id}`}
      className="relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl p-[18px] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.62]"
        style={{ background: `linear-gradient(160deg, ${team.color}, #120e0b 78%)` }}
      />
      <div aria-hidden className="absolute inset-0 bg-[#1a2338]/35" />

      <div className="relative z-[1] flex items-start justify-between gap-2">
        <strong className="text-[30px] leading-none font-extrabold tracking-tight sm:text-[32px]">
          {team.short}
        </strong>
        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-white/90 p-1.5 shadow-sm ring-1 ring-white/40 sm:size-12">
          <Image
            src={logo}
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <span className="relative z-[1] text-[13px] opacity-90">
        {team.name}
        <br />
        {team.last}
      </span>
    </Link>
  );
}
