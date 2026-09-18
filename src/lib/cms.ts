import type { Article, Match, NewsHero, Team } from "@/lib/data";
import {
  AWARDS_2026,
  FAQS,
  MATCHES_2026,
  NEWS,
  PLAYOFFS_2026,
  SITE,
  STATS_2026,
  TEAMS,
  VIDEOS,
  WINNERS,
  getArticle as getStaticArticle,
  getTeam as getStaticTeam,
} from "@/lib/data";
import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import {
  articleBySlugQuery,
  articlesQuery,
  awardsQuery,
  faqsQuery,
  matchesQuery,
  pageBySlugQuery,
  siteSettingsQuery,
  statsQuery,
  teamBySlugQuery,
  teamsQuery,
  videosQuery,
  winnersQuery,
} from "@/sanity/queries";

export type SiteSettings = {
  name: string;
  tagline: string;
  auctionDate: string;
  seasonDate: string;
  winnersIntro: string;
  footerBlurb: string;
};

export type PageContent = {
  title: string;
  slug: string;
  kicker: string;
  lede: string;
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

type SanityArticle = {
  id: string;
  title: string;
  tag?: string;
  kind?: Article["kind"];
  excerpt: string;
  hero?: NewsHero;
  featured?: boolean;
  publishedAt?: string;
  coverUrl?: string;
  body?: unknown[];
};

type SanityMatch = Match & { season?: string; stage?: string };

const PAGE_FALLBACKS: Record<string, PageContent> = {
  home: {
    slug: "home",
    kicker: "Season 20",
    title: "IPL 2027 Live",
    lede: "Unofficial companion for auction watch, 2026 recap, points, teams and videos.",
    seoTitle: "IPL 2027 Live — Schedule, Points Table, Teams & Auction Watch",
    seoDescription:
      "Unofficial IPL 2027 companion: mini-auction news, 2026 recap, points table, ten teams, and Season 20 countdown. Not affiliated with BCCI.",
  },
  news: {
    slug: "news",
    kicker: "Desk",
    title: "Newsroom.",
    lede: "Auction, rules, and the hangover from a two-title RCB run.",
    seoTitle: "News",
    seoDescription:
      "IPL 2027 news: mini-auction returning to India, Impact Player review, RCB title defence and 2026 recap.",
  },
  blogs: {
    slug: "blogs",
    kicker: "Long read",
    title: "Blogs.",
    lede: "Longer Season 20 notes — records, title defence, and the road to the mini-auction.",
    seoTitle: "Blogs",
    seoDescription: "IPL 2027 blogs and long reads: Orange Cap, Season 20 preview, and title-race analysis.",
  },
  videos: {
    slug: "videos",
    kicker: "Watch",
    title: "Video hub.",
    lede: "Highlights live on the official IPL channels. We point you there instead of hosting copyrighted match film.",
    seoTitle: "Videos",
    seoDescription:
      "Watch IPL highlights on official channels. Video hub for 2026 magic moments, the final, Orange Cap sixes and Purple Cap wickets.",
  },
  matches: {
    slug: "matches",
    kicker: "Fixtures",
    title: "Match centre.",
    lede: "The IPL 2027 almanac is not public yet. Use the 2026 playoffs and a slice of last season while we wait for official dates.",
    seoTitle: "Matches",
    seoDescription:
      "IPL 2027 fixtures will appear when BCCI publishes the almanac. Until then, browse the 2026 playoffs and selected league results.",
  },
  teams: {
    slug: "teams",
    kicker: "Franchises",
    title: "All 10 teams.",
    lede: "Letter-mark tiles, 2026 records, and names to watch before the mini-auction. Full squads land after retentions.",
    seoTitle: "Teams",
    seoDescription:
      "All 10 IPL 2027 teams: RCB, GT, SRH, RR, PBKS, DC, KKR, CSK, MI and LSG. 2026 records and names to watch.",
  },
  "points-table": {
    slug: "points-table",
    kicker: "Standings",
    title: "Points table.",
    lede: "2027 cells stay empty until the league starts. Below is the closed IPL 2026 table — 2 points a win, NRR as tie-break, top four into the playoffs.",
    seoTitle: "Points Table",
    seoDescription:
      "IPL 2027 points table will update after Match 1. See the completed IPL 2026 standings, NRR and playoff qualifiers.",
  },
  about: {
    slug: "about",
    kicker: "Companion",
    title: "About this site.",
    lede: "IPL 2027 Live is an unofficial fan website — rebuilt for Season 20 with Next.js, Tailwind, and Sanity. It is not operated by BCCI.",
    seoTitle: "About",
    seoDescription:
      "About IPL 2027 Live, an unofficial Season 20 companion. FAQ on dates, teams, playoffs, auction and broadcast.",
  },
};

const SETTINGS_FALLBACK: SiteSettings = {
  name: SITE.name,
  tagline: SITE.tagline,
  auctionDate: SITE.auctionDate,
  seasonDate: SITE.seasonDate,
  winnersIntro:
    "Royal Challengers Bengaluru defeated Gujarat Titans by five wickets in the IPL 2026 final at Narendra Modi Stadium to successfully defend their crown.",
  footerBlurb: "Unofficial companion for IPL 2027 news, auction watch, points, squads and Season 20.",
};

async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!isSanityConfigured() || !client) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags: ["sanity"] },
    });
  } catch (error) {
    console.error("Sanity fetch failed", error);
    return null;
  }
}

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function portableToParagraphs(blocks?: unknown[]) {
  if (!Array.isArray(blocks)) return [];
  return blocks
    .map((block) => {
      if (!block || typeof block !== "object" || !("_type" in block) || block._type !== "block") return "";
      const children = "children" in block && Array.isArray(block.children) ? block.children : [];
      return children
        .map((child) => (typeof child === "object" && child && "text" in child ? String(child.text ?? "") : ""))
        .join("");
    })
    .filter(Boolean);
}

function mapArticle(doc: SanityArticle): Article {
  const hero = (doc.hero || "ember") as NewsHero;
  return {
    id: doc.id,
    tag: doc.tag || (doc.kind === "blog" ? "Blog" : "News"),
    date: formatDate(doc.publishedAt),
    title: doc.title,
    excerpt: doc.excerpt,
    hero,
    kind: doc.kind || "news",
    coverUrl: doc.coverUrl,
    portableBody: doc.body,
    body: portableToParagraphs(doc.body),
  };
}

function mapTeam(doc: Team): Team {
  return {
    ...doc,
    titles: doc.titles ?? 0,
    watch: doc.watch ?? [],
    record2026: {
      p: doc.record2026?.p ?? 0,
      w: doc.record2026?.w ?? 0,
      l: doc.record2026?.l ?? 0,
      nr: doc.record2026?.nr ?? 0,
      nrr: doc.record2026?.nrr ?? "0",
      pts: doc.record2026?.pts ?? 0,
      pos: doc.record2026?.pos ?? 0,
      form: doc.record2026?.form ?? "",
    },
  };
}

export async function getSettings(): Promise<SiteSettings> {
  const doc = await fetchSanity<Partial<SiteSettings>>(siteSettingsQuery);
  if (!doc) return SETTINGS_FALLBACK;
  return {
    name: doc.name || SETTINGS_FALLBACK.name,
    tagline: doc.tagline || SETTINGS_FALLBACK.tagline,
    auctionDate: doc.auctionDate || SETTINGS_FALLBACK.auctionDate,
    seasonDate: doc.seasonDate || SETTINGS_FALLBACK.seasonDate,
    winnersIntro: doc.winnersIntro || SETTINGS_FALLBACK.winnersIntro,
    footerBlurb: doc.footerBlurb || SETTINGS_FALLBACK.footerBlurb,
  };
}

export async function getPage(slug: string): Promise<PageContent> {
  const fallback = PAGE_FALLBACKS[slug] ?? PAGE_FALLBACKS.home;
  const doc = await fetchSanity<PageContent>(pageBySlugQuery, { slug });
  if (!doc) return fallback;
  return { ...fallback, ...doc, slug: doc.slug || slug };
}

export async function getArticles(): Promise<Article[]> {
  const docs = await fetchSanity<SanityArticle[]>(articlesQuery);
  if (!docs?.length) return NEWS;
  return docs.map(mapArticle);
}

export async function getBlogs(): Promise<Article[]> {
  const articles = await getArticles();
  return articles.filter((article) => article.kind === "blog");
}

export async function getArticleBySlug(id: string): Promise<Article | undefined> {
  const doc = await fetchSanity<SanityArticle>(articleBySlugQuery, { slug: id });
  if (doc?.id) return mapArticle(doc);
  return getStaticArticle(id);
}

export async function getVideos() {
  const docs = await fetchSanity<typeof VIDEOS>(videosQuery);
  return docs?.length ? docs : VIDEOS;
}

export async function getTeams(): Promise<Team[]> {
  const docs = await fetchSanity<Team[]>(teamsQuery);
  if (!docs?.length) return TEAMS;
  return docs.map(mapTeam);
}

export async function getTeamBySlug(id: string): Promise<Team | undefined> {
  const doc = await fetchSanity<Team>(teamBySlugQuery, { slug: id });
  if (doc?.id) return mapTeam(doc);
  return getStaticTeam(id);
}

export async function getMatches(): Promise<{ playoffs: Match[]; league: Match[] }> {
  const docs = await fetchSanity<SanityMatch[]>(matchesQuery);
  if (!docs?.length) return { playoffs: PLAYOFFS_2026, league: MATCHES_2026 };
  const playoffs = docs.filter((match) => match.stage === "playoff");
  const league = docs.filter((match) => match.stage !== "playoff");
  return {
    playoffs: playoffs.length ? playoffs : PLAYOFFS_2026,
    league: league.length ? league : MATCHES_2026,
  };
}

export async function getFaqs() {
  const docs = await fetchSanity<{ question: string; answer: string }[]>(faqsQuery);
  if (!docs?.length) return FAQS;
  return docs.map((item) => ({ q: item.question, a: item.answer }));
}

export async function getStats() {
  const docs = await fetchSanity<typeof STATS_2026>(statsQuery);
  return docs?.length ? docs : STATS_2026;
}

export async function getAwards() {
  const docs = await fetchSanity<typeof AWARDS_2026>(awardsQuery);
  return docs?.length ? docs : AWARDS_2026;
}

export async function getWinners() {
  const docs = await fetchSanity<typeof WINNERS>(winnersQuery);
  return docs?.length ? docs : WINNERS;
}

export function standingsFromTeams(teams: Team[]) {
  return teams
    .map((team) => ({
      ...team.record2026,
      id: team.id,
      short: team.short,
      name: team.name,
      color: team.color,
      qualified: team.record2026.pos <= 4,
    }))
    .sort((a, b) => a.pos - b.pos);
}
