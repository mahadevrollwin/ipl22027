import type { Metadata } from "next";

export type PageSeo = {
  title: string;
  description: string;
};

/** Unique meta titles/descriptions from the IPL 2027 SEO brief (absolute titles). */
export const PAGE_SEO = {
  home: {
    title: "IPL 2027 Live — Schedule, Points Table, Teams & Auction Watch",
    description:
      "Unofficial IPL 2027 companion: mini-auction news, 2026 recap, points table, ten teams, and Season 20 countdown. Not affiliated with BCCI.",
  },
  news: {
    title: "IPL 2027 News: Latest Updates, Trades & Auction",
    description:
      "Get the latest IPL 2027 news, player trades, team updates, coaching changes, auction news, and breaking Indian Premier League headlines.",
  },
  videos: {
    title: "IPL 2027 Videos: Cricket Highlights & Star Players",
    description:
      "Explore IPL 2027 videos featuring cricket highlights, star players, team promos, and memorable IPL moments. Watch videos from official IPL channels.",
  },
  matches: {
    title: "IPL 2027 Matches: Schedule, Fixtures & Results",
    description:
      "Check the IPL 2027 matches schedule, fixtures, match dates, timings, venues, live scores, and results. Stay updated on every IPL game.",
  },
  teams: {
    title: "IPL 2027 Teams: All 10 IPL Teams, Squads & Players",
    description:
      "Explore all 10 IPL 2027 teams, including team names, home grounds, squads, key players, and franchise details. Get the latest IPL team updates.",
  },
  blogs: {
    title: "IPL 2027 Blogs: Latest Cricket News, Analysis & Updates",
    description:
      "Read the latest IPL 2027 blogs featuring cricket news, team updates, player analysis, auction insights, match previews, and expert opinions.",
  },
  "points-table": {
    title: "IPL 2027 Points Table: Standings, Team Rankings & NRR",
    description:
      "Check the IPL 2027 points table for team standings, rankings, matches played, wins, losses, points, and net run rate (NRR). Follow the latest updates.",
  },
  about: {
    title: "About IPL 2027",
    description:
      "Learn about IPL2027.co, your source for IPL 2027 news, team details, match schedules, points tables, cricket videos, and the latest tournament updates.",
  },
  contact: {
    title: "Contact Us | IPL2027.co",
    description:
      "Contact IPL2027.co with questions, feedback, or concerns about IPL 2027 news and coverage. Email rollwin.seo@gmail.com — we aim to respond quickly.",
  },
  terms: {
    title: "Terms and Conditions | IPL2027.co",
    description:
      "Read the Terms and Conditions for using IPL2027.co, an independent IPL informational website. Last updated October 17, 2026.",
  },
  privacy: {
    title: "Privacy Policy | IPL2027.co",
    description:
      "Privacy Policy for IPL2027.co — how we handle personal information, cookies, analytics, and advertising. Last updated October 17, 2026.",
  },
} as const satisfies Record<string, PageSeo>;

export const TEAM_SEO: Record<string, PageSeo> = {
  rcb: {
    title: "RCB (Royal Challengers Bengaluru) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the RCB team for IPL 2027, including squad details, key players, home ground, team news, and the latest Royal Challengers Bengaluru updates.",
  },
  gt: {
    title: "GT (Gujarat Titans) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Gujarat Titans team for IPL 2027, including squad details, key players, home ground, team news, and the latest GT updates.",
  },
  srh: {
    title: "SRH (Sunrisers Hyderabad) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Sunrisers Hyderabad team for IPL 2027, including squad details, key players, home ground, team news, and the latest SRH updates.",
  },
  rr: {
    title: "RR (Rajasthan Royals) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Rajasthan Royals team for IPL 2027, including squad details, key players, home ground, team news, and the latest RR updates.",
  },
  pbks: {
    title: "PBKS (Punjab Kings) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Punjab Kings team for IPL 2027, including squad details, key players, home ground, team news, and the latest PBKS updates.",
  },
  dc: {
    title: "DC (Delhi Capitals) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Delhi Capitals team for IPL 2027, including squad details, key players, home ground, team news, and the latest DC updates.",
  },
  kkr: {
    title: "KKR (Kolkata Knight Riders) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Kolkata Knight Riders team for IPL 2027, including squad details, key players, home ground, team news, and the latest KKR updates.",
  },
  csk: {
    title: "CSK (Chennai Super Kings) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Chennai Super Kings team for IPL 2027, including squad details, key players, home ground, team news, and the latest CSK updates.",
  },
  mi: {
    title: "MI (Mumbai Indians) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Mumbai Indians team for IPL 2027, including squad details, key players, home ground, team news, and the latest MI updates.",
  },
  lsg: {
    title: "LSG (Lucknow Super Giants) Team 2027: Squad, Players & IPL Updates",
    description:
      "Explore the Lucknow Super Giants team for IPL 2027, including squad details, key players, home ground, team news, and the latest LSG updates.",
  },
};

/** Build Metadata with absolute title so the root template does not append a duplicate brand suffix. */
export function buildPageMetadata(seo: PageSeo): Metadata {
  return {
    title: { absolute: seo.title },
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function getTeamSeo(teamId: string, fallbackName?: string): PageSeo {
  return (
    TEAM_SEO[teamId] || {
      title: fallbackName ? `${fallbackName} Team 2027: Squad, Players & IPL Updates` : "IPL 2027 Team",
      description: fallbackName
        ? `Explore the ${fallbackName} team for IPL 2027, including squad details, key players, home ground, and the latest franchise updates.`
        : "Explore IPL 2027 team squads, key players, home grounds, and franchise updates.",
    }
  );
}
