import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { Pagination } from "@/components/Pagination";
import { EmptyNote, PageHero, Wrap } from "@/components/ui";
import { getBlogs, getPage } from "@/lib/cms";
import { paginateItems, parsePageParam } from "@/lib/pagination";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("blogs");
  return { title: page.seoTitle || "Blogs", description: page.seoDescription || page.lede };
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ page: pageParam }, page, blogs] = await Promise.all([
    searchParams,
    getPage("blogs"),
    getBlogs(),
  ]);

  const { items, currentPage, totalPages } = paginateItems(blogs, parsePageParam(pageParam));

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap>
          {blogs.length ? (
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
              <Pagination basePath="/blogs" currentPage={currentPage} totalPages={totalPages} />
            </>
          ) : (
            <EmptyNote title="No blogs yet">
              Publish a document in Sanity with type Blog to show it here. News stories stay on the newsroom.
            </EmptyNote>
          )}
        </Wrap>
      </section>
    </>
  );
}
