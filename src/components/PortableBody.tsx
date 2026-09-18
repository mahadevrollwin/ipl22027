"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ArticleBlock } from "@/lib/data";
import { urlFor } from "@/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = value?.asset ? urlFor(value)?.width(1200).url() : null;
      if (!src) return null;
      return (
        <figure className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={value.alt || ""} className="h-auto w-full rounded-2xl" />
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

function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-blocks">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "h2":
            return (
              <h2 key={key} className="mt-8 text-2xl font-extrabold text-navy">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="mt-6 text-xl font-bold text-navy">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={key} className="mt-4 list-disc space-y-2 pl-6 text-[17px] text-muted">
                {block.items.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={key} className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
                {block.caption ? (
                  <p className="border-b border-line bg-bg-3 px-4 py-3 text-sm font-bold text-navy sm:px-5">
                    {block.caption}
                  </p>
                ) : null}
                <table className="w-full min-w-[520px] border-collapse text-left text-[15px] sm:text-[16px]">
                  <thead>
                    <tr className="bg-ipl text-white">
                      {block.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-bold sm:px-5">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row.join("|")} className="border-t border-line odd:bg-white even:bg-bg-3/60">
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-3 align-top text-muted sm:px-5">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return (
              <p key={key} className="mt-3.5 text-[17px] text-muted">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}

export function PortableBody({
  value,
  fallback = [],
  blocks,
}: {
  value?: unknown[];
  fallback?: string[];
  blocks?: ArticleBlock[];
}) {
  if (Array.isArray(blocks) && blocks.length) {
    return <ArticleBlocks blocks={blocks} />;
  }
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
