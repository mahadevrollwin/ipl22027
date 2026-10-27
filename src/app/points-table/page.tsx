import type { Metadata } from "next";
import { AdMediumRectangle } from "@/components/AdSlot";
import { StandingsTable } from "@/components/StandingsTable";
import { EmptyNote, PageHero, SectionHead, Wrap } from "@/components/ui";
import { getPage, getTeams, standingsFromTeams } from "@/lib/cms";
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return buildPageMetadata(PAGE_SEO["points-table"]);
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
          <AdMediumRectangle slotId="points-table-mid-300x250" />
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
