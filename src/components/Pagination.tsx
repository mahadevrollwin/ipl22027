import Link from "next/link";
import { listingHref } from "@/lib/pagination";

export function Pagination({
  basePath,
  currentPage,
  totalPages,
}: {
  basePath: string;
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 ? (
        <Link
          href={listingHref(basePath, currentPage - 1)}
          className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-navy transition hover:border-ipl/30"
        >
          ← Previous
        </Link>
      ) : (
        <span className="inline-flex min-h-9 items-center rounded-full border border-line bg-white/60 px-4 text-sm font-semibold text-faint">
          ← Previous
        </span>
      )}

      {pages.map((page) => {
        const active = page === currentPage;
        return (
          <Link
            key={page}
            href={listingHref(basePath, page)}
            aria-current={active ? "page" : undefined}
            className={`inline-flex size-9 items-center justify-center rounded-full border text-sm font-bold transition ${
              active
                ? "border-ipl bg-ipl text-white"
                : "border-line bg-white text-navy hover:border-ipl/30"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages ? (
        <Link
          href={listingHref(basePath, currentPage + 1)}
          className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-navy transition hover:border-ipl/30"
        >
          Next →
        </Link>
      ) : (
        <span className="inline-flex min-h-9 items-center rounded-full border border-line bg-white/60 px-4 text-sm font-semibold text-faint">
          Next →
        </span>
      )}
    </nav>
  );
}
