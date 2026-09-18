import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FormPips } from "@/components/TeamBadge";
import { PlayerCard } from "@/components/PlayerCard";
import { Kicker, Wrap } from "@/components/ui";
import { getTeamBySlug, getTeams } from "@/lib/cms";
import { groupPlayersByRole } from "@/lib/teamEnrich";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const teams = await getTeams();
  return teams.map((team) => ({ id: team.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const team = await getTeamBySlug(id);
  if (!team) return { title: "Team" };
  return { title: team.name, description: team.summary || team.blurb };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const team = await getTeamBySlug(id);
  if (!team) notFound();

  const about = team.about?.length ? team.about : [team.blurb];
  const players = team.players ?? [];
  const squadGroups = groupPlayersByRole(players);

  return (
    <div className="pb-16">
      <section className="relative overflow-hidden bg-navy text-white">
        {team.banner ? (
          <Image
            src={team.banner}
            alt=""
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
        ) : null}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${team.color}cc 0%, #0b1638f2 55%, #070e24f5 100%)`,
          }}
        />
        <Wrap className="relative z-[1] py-10 sm:py-14">
          <Link
            href="/teams"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/75 transition hover:text-white"
          >
            ← All teams
          </Link>
          <div className="mt-7 grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="mx-auto grid size-[148px] place-items-center rounded-[28px] bg-white/95 p-4 shadow-xl sm:size-[168px]">
              {team.logo ? (
                <Image
                  src={team.logo}
                  alt={`${team.name} logo`}
                  width={140}
                  height={140}
                  className="size-full object-contain"
                  priority
                />
              ) : (
                <span className="text-4xl font-extrabold" style={{ color: team.color }}>
                  {team.short}
                </span>
              )}
            </div>
            <div>
              <Kicker className="text-gold">
                {team.city} · {team.titles} IPL title{team.titles === 1 ? "" : "s"}
              </Kicker>
              <p className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">{team.short}</p>
              <h1 className="mt-2 text-[clamp(34px,7vw,64px)] leading-[0.95] font-extrabold">
                {team.name}
              </h1>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-white/85 sm:text-[17px]">
                {team.summary || team.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[13px] font-semibold">
                  {team.ground}
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[13px] font-semibold">
                  {team.last}
                </span>
                {team.trophyYears?.length ? (
                  <span className="rounded-full border border-gold/40 bg-gold/15 px-3 py-1.5 text-[13px] font-semibold text-gold">
                    Champions {team.trophyYears.join(" · ")}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      <Wrap className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-[22px] border border-line bg-linear-to-b from-bg-3 to-bg-2 p-[22px]">
          <div className="text-xs font-bold tracking-[0.16em] text-ipl uppercase">Home</div>
          <h3 className="mt-2.5 text-[20px] leading-snug font-extrabold sm:text-[22px]">{team.ground}</h3>
        </article>
        <article className="rounded-[22px] border border-line bg-linear-to-b from-bg-3 to-bg-2 p-[22px]">
          <div className="text-xs font-bold tracking-[0.16em] text-ipl uppercase">2026 record</div>
          <h3 className="mt-2.5 text-[32px] leading-none font-extrabold">
            {team.record2026.w}-{team.record2026.l}
          </h3>
          <p className="mt-2 text-muted">
            {team.record2026.pts} pts · {team.record2026.nrr} NRR
          </p>
        </article>
        <article className="rounded-[22px] border border-line bg-linear-to-b from-bg-3 to-bg-2 p-[22px]">
          <div className="text-xs font-bold tracking-[0.16em] text-ipl uppercase">Finish</div>
          <h3 className="mt-2.5 text-[32px] leading-none font-extrabold">#{team.record2026.pos}</h3>
          <p className="mt-2 text-muted">{team.last}</p>
        </article>
        <article className="rounded-[22px] border border-line bg-linear-to-b from-bg-3 to-bg-2 p-[22px]">
          <div className="text-xs font-bold tracking-[0.16em] text-ipl uppercase">Form</div>
          <div className="mt-3">
            <FormPips form={team.record2026.form} />
          </div>
        </article>
      </Wrap>

      {team.watch.length ? (
        <Wrap className="mt-8 sm:mt-10">
          <div className="rounded-[24px] border border-line bg-white p-5 sm:p-7">
            <h2 className="text-[22px] font-extrabold text-navy sm:text-[26px]">Names to watch</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {team.watch.map((player) => (
                <span
                  key={player}
                  className="rounded-full border border-line bg-bg-3 px-3.5 py-2 text-sm font-semibold text-navy"
                >
                  {player}
                </span>
              ))}
            </div>
          </div>
        </Wrap>
      ) : null}

      <Wrap className="mt-8 sm:mt-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[24px] border border-line bg-white p-5 sm:p-7">
            <h2 className="text-[22px] font-extrabold text-navy sm:text-[26px]">About the franchise</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-navy/80 sm:text-base">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section className="rounded-[24px] border border-line bg-white p-5 sm:p-7">
            <h2 className="text-[22px] font-extrabold text-navy sm:text-[26px]">Trophy cabinet</h2>
            {team.trophyYears?.length ? (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {team.trophyYears.map((year) => (
                  <span
                    key={year}
                    className="inline-flex min-w-[72px] items-center justify-center rounded-2xl px-3 py-3 text-sm font-extrabold text-white"
                    style={{ background: `linear-gradient(145deg, ${team.color}, ${team.color2})` }}
                  >
                    {year}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-muted">Still chasing a maiden IPL title.</p>
            )}
            <div className="mt-6 rounded-2xl bg-bg-3 p-4">
              <div className="text-xs font-bold tracking-[0.16em] text-ipl uppercase">Titles</div>
              <div className="mt-1 text-4xl font-extrabold text-navy">{team.titles}</div>
              <p className="mt-2 text-sm text-muted">{players.length} players listed in the current squad snapshot.</p>
            </div>
          </section>
        </div>
      </Wrap>

      <Wrap className="mt-10 sm:mt-12">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-ipl uppercase">Squad</p>
            <h2 className="mt-2 text-[28px] leading-none font-extrabold text-navy sm:text-[32px]">
              Team players
            </h2>
          </div>
          <p className="text-sm text-muted">{players.length} players · roles from the latest squad update</p>
        </div>

        {squadGroups.length ? (
          <div className="space-y-10">
            {squadGroups.map((group) => (
              <section key={group.title}>
                <h3 className="mb-4 text-sm font-bold tracking-[0.16em] text-navy uppercase">
                  {group.title}
                  <span className="ml-2 font-semibold text-muted normal-case">
                    ({group.players.length})
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
                  {group.players.map((player) => (
                    <PlayerCard key={`${player.name}-${player.role}`} player={player} accent={team.color} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-line bg-white p-7 text-muted">
            Squad details will appear here once published.
          </div>
        )}
      </Wrap>

      <Wrap className="mt-10">
        <Link href="/teams" className="text-sm font-bold text-ipl hover:underline">
          ← Back to all teams
        </Link>
      </Wrap>
    </div>
  );
}
