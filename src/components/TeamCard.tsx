import Image from "next/image";
import Link from "next/link";
import type { Team } from "@/lib/data";
import { FormPips } from "@/components/TeamBadge";

export function TeamCard({ team, index = 0 }: { team: Team; index?: number }) {
  return (
    <Link
      href={`/teams/${team.id}`}
      className="team-card group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_10px_30px_rgb(19_46_115_/_0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-ipl/25 hover:shadow-[0_18px_40px_rgb(19_46_115_/_0.14)]"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div
        className="relative h-[7px] w-full"
        style={{ background: `linear-gradient(90deg, ${team.color}, ${team.color2})` }}
      />
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span
            className="inline-flex rounded-full px-2.5 py-1 text-[11px] font-extrabold tracking-[0.14em] text-white uppercase"
            style={{ background: team.color }}
          >
            {team.short}
          </span>
          <span className="rounded-full bg-bg-3 px-2.5 py-1 text-[11px] font-bold text-ipl">
            #{team.record2026.pos}
          </span>
        </div>

        <div className="mx-auto grid size-[118px] place-items-center rounded-full bg-[radial-gradient(circle_at_center,#fff_42%,#eef2fb_100%)] ring-1 ring-line transition duration-300 group-hover:scale-[1.04] sm:size-[132px]">
          {team.logo ? (
            <Image
              src={team.logo}
              alt={`${team.name} logo`}
              width={112}
              height={112}
              className="size-[88px] object-contain sm:size-[96px]"
            />
          ) : (
            <span className="text-3xl font-extrabold" style={{ color: team.color }}>
              {team.short}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <h2 className="text-[18px] leading-tight font-extrabold text-navy sm:text-[20px]">
            {team.name}
          </h2>
          <p className="mt-1.5 text-sm text-muted">
            {team.city} · {team.ground}
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy/75">
            {team.summary || team.blurb}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
            <div>
              <div className="text-[10px] font-bold tracking-[0.14em] text-faint uppercase">2026</div>
              <div className="mt-1 text-sm font-extrabold text-navy">
                {team.record2026.w}-{team.record2026.l}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.14em] text-faint uppercase">Pts</div>
              <div className="mt-1 text-sm font-extrabold text-navy">{team.record2026.pts}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.14em] text-faint uppercase">Titles</div>
              <div className="mt-1 text-sm font-extrabold text-navy">{team.titles}</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <FormPips form={team.record2026.form} />
            <span className="text-xs font-bold text-ipl transition group-hover:translate-x-0.5">
              View team →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
