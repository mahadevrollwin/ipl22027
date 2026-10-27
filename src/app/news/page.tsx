import type { Metadata } from "next";
import { AdMediumRectangle } from "@/components/AdSlot";
import { NewsCard } from "@/components/NewsCard";
import { Pagination } from "@/components/Pagination";
import { PageHero, Wrap } from "@/components/ui";
import { getArticles, getPage } from "@/lib/cms";
import { paginateItems, parsePageParam } from "@/lib/pagination";
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return buildPageMetadata(PAGE_SEO.news);
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
            {items.slice(0, 3).map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
            {items.length > 3 ? (
              <div className="col-span-full">
                <AdMediumRectangle slotId="news-list-mid-300x250" className="py-2 sm:py-4" />
              </div>
            ) : null}
            {items.slice(3).map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
          </div>
          <Pagination basePath="/news" currentPage={currentPage} totalPages={totalPages} />
        </Wrap>
      </section>
    </>
  );
}
