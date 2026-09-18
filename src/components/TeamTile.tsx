import Link from "next/link";
import type { Team } from "@/lib/data";

export function TeamTile({ team }: { team: Team }) {
  return (
    <Link
      href={`/teams/${team.id}`}
      className="relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl p-[18px] text-white"
      style={{ background: `linear-gradient(160deg, ${team.color}, #120e0b 78%)` }}
    >
      <strong className="text-[42px] leading-none font-extrabold">{team.short}</strong>
      <span className="text-[13px] opacity-90">
        {team.name}
        <br />
        {team.last}
      </span>
    </Link>
  );
}
