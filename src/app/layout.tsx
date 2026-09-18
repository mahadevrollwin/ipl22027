import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "IPL 2027 Live — Schedule, Points Table, Teams & Auction Watch",
    template: "%s · IPL 2027 Live",
  },
  description:
    "Unofficial IPL 2027 companion: mini-auction news, 2026 recap, points table, ten teams, and Season 20 countdown. Not affiliated with BCCI.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="relative min-h-full bg-bg font-sans text-navy">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
