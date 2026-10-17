import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { PageHero, Wrap } from "@/components/ui";
import { getPage } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("about");
  return {
    title: page.seoTitle || "About Us",
    description:
      page.seoDescription ||
      "About IPL2027.co — independent IPL 2027 news, updates, teams, auction coverage, and fan information. Not affiliated with BCCI.",
  };
}

export default async function AboutPage() {
  const page = await getPage("about");

  return (
    <>
      <PageHero
        kicker={page.kicker || "About"}
        title="About Us"
        lede="Your destination for the latest news, updates, and information about IPL 2027."
      />
      <section className="py-12 sm:py-16">
        <Wrap>
          <AboutContent />
        </Wrap>
      </section>
    </>
  );
}
