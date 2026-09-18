import type { Metadata } from "next";
import { StandingsTable } from "@/components/StandingsTable";
import { EmptyNote, PageHero, SectionHead, Wrap } from "@/components/ui";
import { getPage, getTeams, standingsFromTeams } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("points-table");
  return { title: page.seoTitle || "Points Table", description: page.seoDescription || page.lede };
}

export default async function PointsTablePage() {
  const [page, teams] = await Promise.all([getPage("points-table"), getTeams()]);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap>
          <EmptyNote title="IPL 2027">
            No matches played. Table updates here after the first ball of Season 20.
          </EmptyNote>
          <div className="mt-9">
            <SectionHead title="IPL 2026 · final" />
            <StandingsTable rows={standingsFromTeams(teams)} />
            <p className="mt-3 text-[13px] text-faint">
              Q = qualified for playoffs. E = eliminated. Source: completed 2026 league stage.
            </p>
          </div>
        </Wrap>
      </section>
    </>
  );
}
