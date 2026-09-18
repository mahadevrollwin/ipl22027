import { FaqList } from "@/components/FaqList";
import { HeroVideos } from "@/components/HeroVideos";
import { MatchCard } from "@/components/MatchCard";
import { NewsCard } from "@/components/NewsCard";
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

  return (
    <>
      <HeroVideos videos={videos} />

      <section className="py-12">
        <Wrap>
          <SectionHead title="News" href="/news" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {articles.slice(0, 4).map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-12">
        <Wrap>
          <SectionHead
            title="2026 season in numbers"
            subtitle="The season RCB retained the cup — and a teenager took the Orange Cap."
          />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <article key={s.k} className="rounded-2xl bg-bg p-4">
                <span className="text-xs font-bold tracking-wider text-muted uppercase">{s.k}</span>
                <strong className="mt-2 block text-3xl font-extrabold text-ipl">{s.v}</strong>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-12">
        <Wrap>
          <SectionHead title="Top performers" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((a) => (
              <article key={a.cap} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-xs font-bold tracking-[0.16em] text-ipl uppercase">{a.cap}</div>
                <h3 className="mt-2 text-2xl font-extrabold text-navy">{a.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {a.team} · {a.stat}
                </p>
              </article>
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

      <section className="bg-ipl ipl-rays py-12 text-white">
        <Wrap>
          <h2 className="text-[32px] font-extrabold">2026 winners</h2>
          <p className="mt-3 max-w-[60ch] text-white/80">{settings.winnersIntro}</p>
        </Wrap>
      </section>

      <section className="py-12">
        <Wrap>
          <SectionHead title="Past winners" />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
            {winners.map((w) => (
              <article key={w.year} className="min-h-[88px] rounded-2xl bg-white p-3 shadow-sm">
                <b className="block text-sm text-ipl">{w.year}</b>
                <span className="text-[13px] font-bold">{w.team}</span>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-12">
        <Wrap>
          <SectionHead title="Questions" href="/about" />
          <FaqList items={faqs.slice(0, 6)} />
        </Wrap>
      </section>
    </>
  );
}
