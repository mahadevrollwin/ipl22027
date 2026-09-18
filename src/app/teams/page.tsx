import type { Metadata } from "next";
import { TeamCard } from "@/components/TeamCard";
import { PageHero, Wrap } from "@/components/ui";
import { getPage, getTeams } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("teams");
  return { title: page.seoTitle || "Teams", description: page.seoDescription || page.lede };
}

export default async function TeamsPage() {
  const [page, teams] = await Promise.all([getPage("teams"), getTeams()]);
  const sorted = [...teams].sort((a, b) => a.record2026.pos - b.record2026.pos);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-10 sm:py-14 lg:py-16">
        <Wrap>
          <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-ipl uppercase">Season 20 franchises</p>
              <h2 className="mt-2 text-[28px] leading-none font-extrabold text-navy sm:text-[32px]">
                All 10 IPL teams
              </h2>
            </div>
            <p className="max-w-[42ch] text-sm text-muted sm:text-right">
              Logos, squads and 2026 records — open any card for the full franchise page.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
            {sorted.map((team, index) => (
              <TeamCard key={team.id} team={team} index={index} />
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
