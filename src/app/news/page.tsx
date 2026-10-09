import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { Pagination } from "@/components/Pagination";
import { PageHero, Wrap } from "@/components/ui";
import { getArticles, getPage } from "@/lib/cms";
import { paginateItems, parsePageParam } from "@/lib/pagination";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("news");
  return { title: page.seoTitle || "News", description: page.seoDescription || page.lede };
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ page: pageParam }, page, articles] = await Promise.all([
    searchParams,
    getPage("news"),
    getArticles(),
  ]);

  const { items, currentPage, totalPages } = paginateItems(articles, parsePageParam(pageParam));

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
          </div>
          <Pagination basePath="/news" currentPage={currentPage} totalPages={totalPages} />
        </Wrap>
      </section>
    </>
  );
}
