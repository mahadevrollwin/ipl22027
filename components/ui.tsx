import Link from "next/link";
import type { ReactNode } from "react";

export function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[min(1180px,calc(100%-40px))] ${className}`.trim()}>
      {children}
    </div>
  );
}

export function Kicker({
  children,
  className = "text-ipl",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase ${className}`.trim()}>
      <i className="size-1.5 rounded-full bg-gold" />
      {children}
    </p>
  );
}

export function SectionHead({
  title,
  subtitle,
  href,
  linkLabel = "More",
}: {
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-[32px] leading-none font-extrabold text-navy">{title}</h2>
        {subtitle ? <p className="mt-2 text-muted">{subtitle}</p> : null}
      </div>
      {href ? (
        <Link
          href={href}
          className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-navy"
        >
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="bg-ipl ipl-rays">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-10">
        <Kicker className="text-gold">{kicker}</Kicker>
        <h1 className="text-[clamp(36px,6vw,56px)] leading-[1.05] font-extrabold text-white">{title}</h1>
        <p className="mt-3 max-w-[52ch] text-[17px] text-white/80">{lede}</p>
      </div>
    </section>
  );
}

export function EmptyNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-white p-7 text-muted">
      <strong className="text-navy">{title}</strong>
      <p className="mt-1">{children}</p>
    </div>
  );
}
