"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "@/components/Brand";
import { MORE_NAV, NAV, TEAMS } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const moreActive = MORE_NAV.some((item) => isActive(item.href));
  const teamsActive = isActive("/teams");

  const navLinkClass = (active: boolean) =>
    `rounded-full px-4 py-2 text-[15px] font-semibold text-white ${
      active ? "bg-white/15" : "hover:bg-white/10"
    }`;

  const dropdownLinkClass = (active: boolean) =>
    `block rounded-xl px-3 py-2.5 text-sm font-semibold ${
      active ? "bg-bg-3 text-ipl" : "text-navy hover:bg-bg"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-ipl">
      <div className="relative mx-auto flex min-h-[72px] w-[min(1180px,calc(100%-40px))] items-center gap-8">
        <Brand light />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            if (item.href === "/teams") {
              return (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseEnter={() => setMore(false)}
                >
                  <Link href="/teams" className={navLinkClass(teamsActive)}>
                    {item.label}
                  </Link>
                  <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="max-h-[min(70vh,420px)] min-w-[260px] overflow-y-auto rounded-2xl bg-white p-2 shadow-lg">
                      {TEAMS.map((team) => (
                        <Link
                          key={team.id}
                          href={`/teams/${team.id}`}
                          className={dropdownLinkClass(pathname === `/teams/${team.id}`)}
                        >
                          {team.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(isActive(item.href))}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="relative">
            <button
              type="button"
              className={navLinkClass(moreActive || more)}
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
                    className={dropdownLinkClass(isActive(item.href))}
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
          <nav className="absolute top-[72px] right-0 left-0 z-50 flex max-h-[calc(100dvh-72px)] flex-col overflow-y-auto bg-ipl p-3 md:hidden">
            {NAV.map((item) => {
              if (item.href === "/teams") {
                return (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      href="/teams"
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-3 py-2.5 text-sm font-semibold text-white ${
                        teamsActive ? "bg-white/15" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="mb-1 ml-2 flex flex-col border-l border-white/20 pl-2">
                      {TEAMS.map((team) => (
                        <Link
                          key={team.id}
                          href={`/teams/${team.id}`}
                          onClick={() => setOpen(false)}
                          className={`rounded-xl px-3 py-2 text-sm font-semibold text-white/90 ${
                            pathname === `/teams/${team.id}` ? "bg-white/15" : ""
                          }`}
                        >
                          {team.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
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
              );
            })}
            {MORE_NAV.map((item) => (
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
