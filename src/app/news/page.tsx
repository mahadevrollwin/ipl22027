import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { PageHero, Wrap } from "@/components/ui";
import { getArticles, getPage } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("news");
  return { title: page.seoTitle || "News", description: page.seoDescription || page.lede };
}

export default async function NewsPage() {
  const [page, articles] = await Promise.all([getPage("news"), getArticles()]);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((n) => (
            <NewsCard key={n.id} article={n} />
          ))}
        </Wrap>
      </section>
    </>
  );
}
