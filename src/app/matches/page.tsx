import type { Metadata } from "next";
import { MatchCard } from "@/components/MatchCard";
import { EmptyNote, PageHero, SectionHead, Wrap } from "@/components/ui";
import { getMatches, getPage, getTeams } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("matches");
  return { title: page.seoTitle || "Matches", description: page.seoDescription || page.lede };
}

export default async function MatchesPage() {
  const [page, matches, teams] = await Promise.all([getPage("matches"), getMatches(), getTeams()]);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap>
          <EmptyNote title="IPL 2027 schedule">
            Expected shape: 70 league matches, then four playoff nights. Typical start times 3:30 pm
            and 7:30 pm IST. Working season marker: 27 March 2027.
          </EmptyNote>
          <div className="mt-9">
            <SectionHead title="2026 playoffs" />
            <div className="grid gap-3">
              {matches.playoffs.map((m) => (
                <MatchCard key={m.round || `${m.home}-${m.away}`} match={m} teams={teams} />
              ))}
            </div>
          </div>
          <div className="mt-9">
            <SectionHead title="Selected 2026 league nights" />
            <div className="grid gap-3">
              {matches.league.map((m) => (
                <MatchCard key={m.n || `${m.home}-${m.away}-${m.date}`} match={m} teams={teams} />
              ))}
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
