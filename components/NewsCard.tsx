import Link from "next/link";
import type { Article } from "@/lib/data";
import { NEWS_TONES } from "@/lib/data";

export function NewsCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className={`relative grid h-[150px] place-items-center overflow-hidden text-3xl font-extrabold text-white ${NEWS_TONES[article.hero]}`}
      >
        {article.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.coverUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <span>27</span>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-black/35 px-2 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
          {article.tag}
        </span>
      </div>
      <div className="p-4">
        <time className="text-xs font-semibold text-faint">{article.date}</time>
        <h3 className="mt-1.5 text-[17px] leading-snug font-bold text-navy">{article.title}</h3>
        <p className="mt-1.5 text-sm text-muted">{article.excerpt}</p>
      </div>
    </Link>
  );
}
