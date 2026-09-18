import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  if (!article) return { title: "Story" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticleBySlug(id);
  if (!article) notFound();

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
        <img src={article.coverUrl} alt="" className="mt-6 w-full rounded-2xl" />
      ) : null}
      <PortableBody value={article.portableBody} fallback={article.body} />
      <p className="mt-7">
        <Link href={article.kind === "blog" ? "/blogs" : "/news"} className="text-sm font-bold text-teal">
          ← {article.kind === "blog" ? "All blogs" : "All news"}
        </Link>
      </p>
    </article>
  );
}
