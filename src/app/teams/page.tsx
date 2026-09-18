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
      <PageHero kicker={page.kicker} title={page.title} />
      <section className="py-10 sm:py-14 lg:py-16">
        <Wrap>
          <div className="mb-8 sm:mb-10">
            <h2 className="text-[28px] leading-none font-extrabold text-navy sm:text-[32px]">
              All 10 IPL teams
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {sorted.map((team, index) => (
              <TeamCard key={team.id} team={team} index={index} />
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
