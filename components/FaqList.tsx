"use client";

import { useState } from "react";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="grid max-w-[760px] gap-3.5">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <article key={f.q} className="rounded-2xl border border-line bg-bg-2">
            <button
              type="button"
              className="flex w-full cursor-pointer justify-between px-[18px] py-4 text-left font-bold"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {f.q}
              <span>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <div className="px-[18px] pb-4 text-muted">{f.a}</div> : null}
          </article>
        );
      })}
    </div>
  );
}
