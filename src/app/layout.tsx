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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "Lym04Ur4U_UoPz8MUkKslKZ2ajSsKyxl7aXQOs_R9w4",
  },
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
