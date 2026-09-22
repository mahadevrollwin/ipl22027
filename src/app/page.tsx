import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { HeroVideos } from "@/components/HeroVideos";
import { MatchCard } from "@/components/MatchCard";
import { NewsCard } from "@/components/NewsCard";
import { PerformerCard } from "@/components/PerformerCard";
import { StandingsTable } from "@/components/StandingsTable";
import { TeamTile } from "@/components/TeamTile";
import { SectionHead, Wrap } from "@/components/ui";
import { VideoCard } from "@/components/VideoCard";
import {
  getArticles,
  getAwards,
  getFaqs,
  getMatches,
  getSettings,
  getStats,
  getTeams,
  getVideos,
  getWinners,
  standingsFromTeams,
} from "@/lib/cms";
import { withAwardMedia, winnerCardColor } from "@/lib/data";

export const revalidate = 60;

export default async function HomePage() {
  const [articles, videos, teams, matches, faqs, stats, awards, winners, settings] = await Promise.all([
    getArticles(),
    getVideos(),
    getTeams(),
    getMatches(),
    getFaqs(),
    getStats(),
    getAwards(),
    getWinners(),
    getSettings(),
  ]);

  const championsId = "rcb-2026-ipl-champions-a-historic-back-to-back-triumph";
  const championsBlog = articles.find((article) => article.id === championsId);
  const homepageNews = championsBlog
    ? [championsBlog, ...articles.filter((article) => article.id !== championsId)].slice(0, 4)
    : articles.slice(0, 4);

  return (
    <>
      <HeroVideos videos={videos} />

      <section className="py-12">
        <Wrap>
          <SectionHead title="News" href="/news" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepageNews.map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
          </div>
        </Wrap>
      </section>

      <section className="relative overflow-hidden bg-white py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ipl/20 to-transparent"
        />
        <Wrap>
          <SectionHead
            title="2026 season in numbers"
            subtitle="The season RCB retained the cup — and a teenager took the Orange Cap."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <article
                key={s.k}
                className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-white to-bg-3/80 p-4 shadow-[0_6px_18px_rgb(19_46_115_/_0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-ipl/25 hover:shadow-[0_12px_28px_rgb(19_46_115_/_0.1)] sm:p-5"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-ipl via-gold to-ipl opacity-80"
                />
                <span className="text-[11px] font-bold tracking-[0.14em] text-muted uppercase">{s.k}</span>
                <strong className="mt-2.5 block text-[28px] leading-none font-extrabold text-navy sm:text-3xl">
                  {s.v}
                </strong>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-12">
        <Wrap>
          <SectionHead title="Top performers" />
          <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {withAwardMedia(awards).map((a) => (
              <PerformerCard key={a.cap} award={a} />
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-12">
        <Wrap>
          <SectionHead
            title="Points table"
            subtitle="IPL 2027 standings will replace this table after Match 1."
            href="/points-table"
          />
          <StandingsTable rows={standingsFromTeams(teams)} />
        </Wrap>
      </section>

      <section className="py-12">
        <Wrap>
          <SectionHead title="Teams" href="/teams" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {teams.map((t) => (
              <TeamTile key={t.id} team={t} />
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-12">
        <Wrap>
          <SectionHead title="Playoffs 2026" href="/matches" />
          <div className="grid gap-3">
            {matches.playoffs.map((m) => (
              <MatchCard key={m.round || `${m.home}-${m.away}`} match={m} teams={teams} />
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-12">
        <Wrap>
          <SectionHead title="Videos" href="/videos" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {videos.slice(0, 4).map((v) => (
              <VideoCard key={v.title} {...v} />
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-12">
        <Wrap>
          <div className="flex flex-col-reverse overflow-hidden rounded-2xl bg-bg-3 md:flex-row-reverse">
            <div className="relative aspect-video w-full shrink-0 md:aspect-auto md:min-h-[300px] md:w-1/2">
              <Image
                src="/news/three-peat.jpg"
                alt="RCB 2026 IPL Champions: A Historic Back-to-Back Triumph"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-start gap-4 p-6 sm:p-8 md:p-10">
              <h2 className="text-[28px] leading-tight font-semibold text-navy sm:text-[32px]">
                RCB 2026 IPL Champions: A Historic Back-to-Back Triumph
              </h2>
              <p className="max-w-[54ch] text-[16px] leading-7 text-navy/80">
                Royal Challengers Bengaluru have done it again. After finally ending their long wait for an
                IPL title in 2025, RCB successfully defended their crown in 2026, defeating Gujarat Titans by
                five wickets in the IPL final.
              </p>
              <div className="mt-auto flex flex-wrap items-center pt-2">
                <Link
                  href="/news/rcb-2026-ipl-champions-a-historic-back-to-back-triumph"
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-ipl px-5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="py-12">
        <Wrap>
          <SectionHead title="Past winners" />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
            {winners.map((w) => (
              <article
                key={w.year}
                className="min-h-[88px] rounded-2xl p-3 text-white shadow-sm"
                style={{ backgroundColor: winnerCardColor(w.team) }}
              >
                <b className="block text-sm text-white/90">{w.year}</b>
                <span className="text-[13px] font-bold text-white">{w.team}</span>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-12">
        <Wrap>
          <div className="mx-auto w-full max-w-[760px]">
            <SectionHead title="Questions" href="/about" />
            <FaqList items={faqs.slice(0, 6)} />
          </div>
        </Wrap>
      </section>
    </>
  );
}
