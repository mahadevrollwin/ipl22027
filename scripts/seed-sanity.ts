import { createClient } from "@sanity/client";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
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
} from "../src/lib/data";

function loadEnv() {
  for (const file of [".env.local", ".env"]) {
    const path = resolve(process.cwd(), file);
    if (!existsSync(path)) continue;
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (!match) continue;
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

function blocksFromParagraphs(paragraphs: string[], prefix: string) {
  return paragraphs.map((text, index) => ({
    _type: "block" as const,
    _key: `${prefix}${index}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `${prefix}s${index}`, text, marks: [] }],
  }));
}

function parseDisplayDate(value: string) {
  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
  const withYear = new Date(`${value} 2026`);
  if (!Number.isNaN(withYear.getTime())) return withYear.toISOString();
  return new Date("2026-09-16T09:00:00+05:30").toISOString();
}

const PAGES = [
  {
    slug: "home",
    title: "IPL 2027 Live",
    kicker: "Season 20",
    lede: "Unofficial companion for auction watch, 2026 recap, points, teams and videos.",
    seoTitle: "IPL 2027 Live — Schedule, Points Table, Teams & Auction Watch",
    seoDescription:
      "Unofficial IPL 2027 companion: mini-auction news, 2026 recap, points table, ten teams, and Season 20 countdown.",
  },
  {
    slug: "news",
    title: "Newsroom.",
    kicker: "Desk",
    lede: "Auction, rules, and the hangover from a two-title RCB run.",
    seoTitle: "News",
    seoDescription:
      "IPL 2027 news: mini-auction returning to India, Impact Player review, RCB title defence and 2026 recap.",
  },
  {
    slug: "blogs",
    title: "Blogs.",
    kicker: "Long read",
    lede: "Longer Season 20 notes — records, title defence, and the road to the mini-auction.",
    seoTitle: "Blogs",
    seoDescription: "IPL 2027 blogs and long reads: Orange Cap, Season 20 preview, and title-race analysis.",
  },
  {
    slug: "videos",
    title: "Video hub.",
    kicker: "Watch",
    lede: "Highlights live on the official IPL channels. We point you there instead of hosting copyrighted match film.",
    seoTitle: "Videos",
    seoDescription:
      "Watch IPL highlights on official channels. Video hub for 2026 magic moments, the final, Orange Cap sixes and Purple Cap wickets.",
  },
  {
    slug: "matches",
    title: "Match centre.",
    kicker: "Fixtures",
    lede: "The IPL 2027 almanac is not public yet. Use the 2026 playoffs and a slice of last season while we wait for official dates.",
    seoTitle: "Matches",
    seoDescription:
      "IPL 2027 fixtures will appear when BCCI publishes the almanac. Until then, browse the 2026 playoffs and selected league results.",
  },
  {
    slug: "teams",
    title: "All 10 teams.",
    kicker: "Franchises",
    lede: "Letter-mark tiles, 2026 records, and names to watch before the mini-auction. Full squads land after retentions.",
    seoTitle: "Teams",
    seoDescription:
      "All 10 IPL 2027 teams: RCB, GT, SRH, RR, PBKS, DC, KKR, CSK, MI and LSG. 2026 records and names to watch.",
  },
  {
    slug: "points-table",
    title: "Points table.",
    kicker: "Standings",
    lede: "2027 cells stay empty until the league starts. Below is the closed IPL 2026 table — 2 points a win, NRR as tie-break, top four into the playoffs.",
    seoTitle: "Points Table",
    seoDescription:
      "IPL 2027 points table will update after Match 1. See the completed IPL 2026 standings, NRR and playoff qualifiers.",
  },
  {
    slug: "about",
    title: "About this site.",
    kicker: "Companion",
    lede: "IPL 2027 Live is an unofficial fan website — rebuilt for Season 20 with Next.js, Tailwind, and Sanity. It is not operated by BCCI.",
    seoTitle: "About",
    seoDescription:
      "About IPL 2027 Live, an unofficial Season 20 companion. FAQ on dates, teams, playoffs, auction and broadcast.",
  },
];

async function main() {
  loadEnv();
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

  if (!projectId || !token) {
    console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local");
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-18",
    token,
    useCdn: false,
  });

  const docs: Record<string, unknown>[] = [
    {
      _id: "siteSettings",
      _type: "siteSettings",
      name: SITE.name,
      tagline: SITE.tagline,
      auctionDate: SITE.auctionDate,
      seasonDate: SITE.seasonDate,
      winnersIntro:
        "Royal Challengers Bengaluru defeated Gujarat Titans by five wickets in the IPL 2026 final at Narendra Modi Stadium to successfully defend their crown.",
      footerBlurb: "Unofficial companion for IPL 2027 news, auction watch, points, squads and Season 20.",
    },
  ];

  for (const page of PAGES) {
    docs.push({
      _id: `page-${page.slug}`,
      _type: "page",
      title: page.title,
      slug: { _type: "slug", current: page.slug },
      kicker: page.kicker,
      lede: page.lede,
      seoTitle: page.seoTitle,
      seoDescription: page.seoDescription,
    });
  }

  for (const article of NEWS) {
    docs.push({
      _id: `article-${article.id}`,
      _type: "article",
      title: article.title,
      slug: { _type: "slug", current: article.id },
      kind: article.kind || "news",
      tag: article.tag,
      publishedAt: parseDisplayDate(article.date),
      excerpt: article.excerpt,
      hero: article.hero,
      featured: ["auction-india", "three-peat", "impact-player", "sooryavanshi"].includes(article.id),
      body: blocksFromParagraphs(article.body, article.id),
    });
  }

  VIDEOS.forEach((video, index) => {
    docs.push({
      _id: `video-${index + 1}`,
      _type: "video",
      title: video.title,
      meta: video.meta,
      href: video.href,
      featured: index === 0,
      order: index,
    });
  });

  for (const team of TEAMS) {
    docs.push({
      _id: `team-${team.id}`,
      _type: "team",
      name: team.name,
      slug: { _type: "slug", current: team.id },
      short: team.short,
      city: team.city,
      color: team.color,
      color2: team.color2,
      ground: team.ground,
      titles: team.titles,
      last: team.last,
      record2026: team.record2026,
      watch: team.watch,
      blurb: team.blurb,
    });
  }

  PLAYOFFS_2026.forEach((match, index) => {
    docs.push({
      _id: `match-playoff-${index + 1}`,
      _type: "match",
      season: "2026",
      stage: "playoff",
      round: match.round,
      date: match.date,
      time: match.time,
      venue: match.venue,
      home: match.home,
      away: match.away,
      result: match.result,
      order: 100 + index,
    });
  });

  MATCHES_2026.forEach((match) => {
    docs.push({
      _id: `match-league-${match.n}`,
      _type: "match",
      season: "2026",
      stage: "league",
      n: match.n,
      date: match.date,
      time: match.time,
      venue: match.venue,
      home: match.home,
      away: match.away,
      result: match.result,
      order: match.n,
    });
  });

  FAQS.forEach((item, index) => {
    docs.push({
      _id: `faq-${index + 1}`,
      _type: "faq",
      question: item.q,
      answer: item.a,
      order: index,
    });
  });

  STATS_2026.forEach((item, index) => {
    docs.push({
      _id: `stat-${index + 1}`,
      _type: "stat",
      label: item.k,
      value: item.v,
      order: index,
    });
  });

  AWARDS_2026.forEach((item, index) => {
    docs.push({
      _id: `award-${index + 1}`,
      _type: "award",
      cap: item.cap,
      name: item.name,
      team: item.team,
      stat: item.stat,
      order: index,
    });
  });

  WINNERS.forEach((item) => {
    docs.push({
      _id: `winner-${item.year}`,
      _type: "winner",
      year: item.year,
      team: item.team,
    });
  });

  const transaction = docs.reduce(
    (tx, doc) => tx.createOrReplace(doc as { _id: string; _type: string }),
    client.transaction(),
  );
  await transaction.commit();
  console.log(`Seeded ${docs.length} documents into ${projectId}/${dataset}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
