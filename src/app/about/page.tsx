import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { PageHero, Wrap } from "@/components/ui";
import { getPage } from "@/lib/cms";
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return buildPageMetadata(PAGE_SEO.about);
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
