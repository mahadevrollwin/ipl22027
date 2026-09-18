import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { EmptyNote, PageHero, Wrap } from "@/components/ui";
import { getBlogs, getPage } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("blogs");
  return { title: page.seoTitle || "Blogs", description: page.seoDescription || page.lede };
}

export default async function BlogsPage() {
  const [page, blogs] = await Promise.all([getPage("blogs"), getBlogs()]);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap>
          {blogs.length ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
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
