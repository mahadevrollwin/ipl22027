import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdLargeRectangle, AdMediumRectangle } from "@/components/AdSlot";
import { NewsCard } from "@/components/NewsCard";
import { PortableBody } from "@/components/PortableBody";
import { Kicker } from "@/components/ui";
import { getArticleBySlug, getArticles } from "@/lib/cms";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleBySlug(id);
  if (!article) return { title: { absolute: "IPL 2027 Story" }, description: "IPL 2027 news and updates on IPL2027.co." };
  const title = `${article.title} | IPL 2027`;
  const description = article.excerpt?.trim() || `Read ${article.title} — latest IPL 2027 news and analysis on IPL2027.co.`;
  return {
    title: { absolute: title },
    description,
    openGraph: { title, description, type: "article" },
  };
}

function relatedArticles<T extends { id: string }>(articles: T[], currentId: string, count = 3) {
  const others = articles.filter((article) => article.id !== currentId);
  if (others.length <= count) return others;

  const currentIndex = Math.max(
    0,
    articles.findIndex((article) => article.id === currentId),
  );
  const rotated = [...others.slice(currentIndex), ...others.slice(0, currentIndex)];
  return rotated.slice(0, count);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [article, articles] = await Promise.all([getArticleBySlug(id), getArticles()]);
  if (!article) notFound();

  const related = relatedArticles(articles, article.id, 3);
  const listingHref = article.kind === "blog" ? "/blogs" : "/news";
  const listingLabel = article.kind === "blog" ? "All blogs" : "All news";

  return (
    <article className="mx-auto w-[min(760px,calc(100%-40px))] pt-10 pb-16">
      <Kicker>
        {article.tag} · {article.date}
      </Kicker>
      <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.1] font-extrabold text-navy">
        {article.title}
      </h1>
      <p className="mt-4 max-w-[52ch] text-[17px] text-muted">{article.excerpt}</p>
      {article.coverUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.coverUrl}
          alt=""
          className="mt-6 h-auto w-full rounded-2xl object-contain"
        />
      ) : null}
      <AdMediumRectangle slotId={`article-${article.id}-after-cover-300x250`} className="py-6" />
      <PortableBody value={article.portableBody} fallback={article.body} blocks={article.blocks} />
      <AdLargeRectangle slotId={`article-${article.id}-after-body-336x280`} className="py-6" />
      <p className="mt-7">
        <Link href={listingHref} className="text-sm font-bold text-teal">
          ← {listingLabel}
        </Link>
      </p>

      {related.length ? (
        <section className="mt-8 border-t border-line pt-8">
          <div className="mb-5">
            <p className="text-xs font-bold tracking-[0.18em] text-ipl uppercase">More stories</p>
            <h2 className="mt-1 text-[24px] font-extrabold text-navy sm:text-[28px]">Other news</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <NewsCard key={item.id} article={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
