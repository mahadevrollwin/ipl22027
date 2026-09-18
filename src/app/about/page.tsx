import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { PortableBody } from "@/components/PortableBody";
import { PageHero, Wrap } from "@/components/ui";
import { getFaqs, getPage } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("about");
  return { title: page.seoTitle || "About", description: page.seoDescription || page.lede };
}

export default async function AboutPage() {
  const [page, faqs] = await Promise.all([getPage("about"), getFaqs()]);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap>
          {page.body?.length ? <PortableBody value={page.body} /> : null}
          <FaqList items={faqs} />
        </Wrap>
      </section>
    </>
  );
}
