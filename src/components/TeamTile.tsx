import Image from "next/image";
import Link from "next/link";
import type { Team } from "@/lib/data";

export function TeamTile({ team }: { team: Team }) {
  const logo = team.logo || `/teams/logos/${team.id}.png`;

  return (
    <Link
      href={`/teams/${team.id}`}
      className="relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl bg-[#120e0b] p-[18px] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.82]"
        style={{ background: `linear-gradient(160deg, ${team.color}, #120e0b 78%)` }}
      />
      <div aria-hidden className="absolute inset-0 bg-[#1a2338]/35" />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-3 -bottom-4 z-0 size-[118px] opacity-[0.38] sm:size-[128px]"
      >
        <Image
          src={logo}
          alt=""
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>

      <div className="relative z-[1] flex items-start justify-between gap-2">
        <strong className="text-[30px] leading-none font-extrabold tracking-tight sm:text-[32px]">
          {team.short}
        </strong>
      </div>

      <span className="relative z-[1] text-[13px] opacity-90">
        {team.name}
        <br />
        {team.last}
      </span>
    </Link>
  );
}
