"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      <a
        href="#main"
        className="absolute left-3 top-[-40px] z-[100] bg-ipl px-3 py-2 text-white focus:top-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="relative z-[1] flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
