"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = value?.asset ? urlFor(value)?.width(1200).url() : null;
      if (!src) return null;
      return (
        <figure className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={value.alt || ""} className="w-full rounded-2xl" />
        </figure>
      );
    },
    videoEmbed: ({ value }) => {
      if (!value?.url) return null;
      return (
        <p className="my-6">
          <a
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-teal underline"
          >
            {value.caption || "Watch video"}
          </a>
        </p>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="mt-8 text-2xl font-extrabold text-navy">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 text-xl font-bold text-navy">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-4 border-gold pl-4 text-muted">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="mt-3.5 text-[17px] text-muted">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc space-y-1 pl-6 text-[17px] text-muted">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal space-y-1 pl-6 text-[17px] text-muted">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="font-semibold text-teal underline"
      >
        {children}
      </a>
    ),
  },
};

export function PortableBody({
  value,
  fallback = [],
}: {
  value?: unknown[];
  fallback?: string[];
}) {
  if (Array.isArray(value) && value.length) {
    return <PortableText value={value} components={components} />;
  }
  return (
    <>
      {fallback.map((paragraph) => (
        <p key={paragraph.slice(0, 32)} className="mt-3.5 text-[17px] text-muted">
          {paragraph}
        </p>
      ))}
    </>
  );
}
