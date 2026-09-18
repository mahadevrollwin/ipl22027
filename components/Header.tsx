"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "@/components/Brand";
import { MORE_NAV, NAV } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const moreActive = MORE_NAV.some((item) => isActive(item.href));

  return (
    <header className="sticky top-0 z-50 bg-ipl">
      <div className="relative mx-auto flex min-h-[72px] w-[min(1180px,calc(100%-40px))] items-center gap-8">
        <Brand light />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[15px] font-semibold text-white ${
                isActive(item.href) ? "bg-white/15" : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className={`rounded-full px-4 py-2 text-[15px] font-semibold text-white ${
                moreActive || more ? "bg-white/15" : "hover:bg-white/10"
              }`}
              onClick={() => setMore((v) => !v)}
            >
              More
            </button>
            {more ? (
              <div className="absolute top-full right-0 z-50 mt-2 min-w-[180px] rounded-2xl bg-white p-2 shadow-lg">
                {MORE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMore(false)}
                    className={`block rounded-xl px-3 py-2.5 text-sm font-semibold ${
                      isActive(item.href) ? "bg-bg-3 text-ipl" : "text-navy hover:bg-bg"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
        <button
          type="button"
          className="ml-auto flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/30 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-[18px] bg-white" />
          <span className="block h-0.5 w-[18px] bg-white" />
          <span className="block h-0.5 w-[18px] bg-white" />
        </button>
        {open ? (
          <nav className="absolute top-[72px] right-0 left-0 z-50 flex flex-col bg-ipl p-3 md:hidden">
            {[...NAV, ...MORE_NAV].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-sm font-semibold text-white ${
                  isActive(item.href) ? "bg-white/15" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
