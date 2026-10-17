import Link from "next/link";
import type { ReactNode } from "react";

export function LegalArticle({ children }: { children: ReactNode }) {
  return <article className="mx-auto max-w-[760px]">{children}</article>;
}

export function LegalTitle({ children }: { children: string }) {
  return <h2 className="mt-10 text-2xl font-extrabold text-navy sm:mt-12">{children}</h2>;
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className="mt-3.5 text-[17px] leading-relaxed text-muted">{children}</p>;
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[17px] leading-relaxed text-muted sm:pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalUpdated({ children }: { children: string }) {
  return <p className="mt-1 text-sm font-semibold tracking-wide text-faint uppercase">{children}</p>;
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  const className = "font-semibold text-teal underline underline-offset-2";
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
