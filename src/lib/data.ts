export const SITE = {
  name: "IPL 2027 Live",
  tagline: "Season 20 companion",
  auctionDate: "2026-12-15T18:00:00+05:30",
  seasonDate: "2027-03-27T19:30:00+05:30",
};

export type Team = {
  id: string;
  short: string;
  name: string;
  city: string;
  color: string;
  color2: string;
  ground: string;
  titles: number;
  last: string;
  record2026: {
    p: number;
    w: number;
    l: number;
    nr: number;
    nrr: string;
    pts: number;
    pos: number;
    form: string;
  };
  watch: string[];
  blurb: string;
};

export const TEAMS: Team[] = [
  {
    id: "rcb",
    short: "RCB",
    name: "Royal Challengers Bengaluru",
    city: "Bengaluru",
    color: "#ec1c24",
    color2: "#1a1208",
    ground: "M. Chinnaswamy Stadium",
    titles: 2,
    last: "Champions, 2026",
    record2026: { p: 14, w: 9, l: 5, nr: 0, nrr: "+0.783", pts: 18, pos: 1, form: "L W W W L" },
    watch: ["Virat Kohli", "Rajat Patidar", "Jitesh Sharma", "Devdutt Padikkal", "Bhuvneshwar Kumar"],
    blurb:
      "Back-to-back champions heading into Season 20. Kohli’s final-night 75* in Ahmedabad sealed a five-wicket chase and made RCB only the third franchise to retain the title.",
  },
  {
    id: "gt",
    short: "GT",
    name: "Gujarat Titans",
    city: "Ahmedabad",
    color: "#1c3c78",
    color2: "#c9a227",
    ground: "Narendra Modi Stadium",
    titles: 1,
    last: "Runners-up, 2026",
    record2026: { p: 14, w: 9, l: 5, nr: 0, nrr: "+0.695", pts: 18, pos: 2, form: "W L W W W" },
    watch: ["Shubman Gill", "Sai Sudharsan", "Jos Buttler", "Kagiso Rabada", "Mohammed Siraj"],
    blurb:
      "League-stage powerhouse that returned to the final. Rabada’s 29 wickets won the Purple Cap; Gill and Sudharsan stacked the run charts before falling cheaply on the last night.",
  },
  {
    id: "srh",
    short: "SRH",
    name: "Sunrisers Hyderabad",
    city: "Hyderabad",
    color: "#f26522",
    color2: "#1a1a1a",
    ground: "Rajiv Gandhi International Stadium",
    titles: 1,
    last: "Playoffs, 2026",
    record2026: { p: 14, w: 9, l: 5, nr: 0, nrr: "+0.524", pts: 18, pos: 3, form: "W W L W L" },
    watch: ["Abhishek Sharma", "Heinrich Klaasen", "Ishan Kishan", "Pat Cummins"],
    blurb:
      "Nine wins and a top-three finish. Klaasen, Kishan and Abhishek kept the orange fire burning; the Eliminator against Rajasthan ended the campaign.",
  },
  {
    id: "rr",
    short: "RR",
    name: "Rajasthan Royals",
    city: "Jaipur",
    color: "#ea1a85",
    color2: "#1b1030",
    ground: "Sawai Mansingh Stadium",
    titles: 1,
    last: "Qualifier 2, 2026",
    record2026: { p: 14, w: 8, l: 6, nr: 0, nrr: "+0.189", pts: 16, pos: 4, form: "W W L L L" },
    watch: ["Vaibhav Sooryavanshi", "Sanju Samson", "Jofra Archer", "Yashasvi Jaiswal"],
    blurb:
      "Home of the 2026 Orange Cap. Sooryavanshi’s 776 runs, 72 sixes and MVP season turned a playoff run into a league-wide story.",
  },
  {
    id: "pbks",
    short: "PBKS",
    name: "Punjab Kings",
    city: "New Chandigarh",
    color: "#dd1f2d",
    color2: "#f7c948",
    ground: "New PCA Stadium, New Chandigarh",
    titles: 0,
    last: "5th, Fair Play Award",
    record2026: { p: 14, w: 7, l: 6, nr: 1, nrr: "+0.309", pts: 15, pos: 5, form: "W L L L L" },
    watch: ["Shreyas Iyer", "Prabhsimran Singh", "Arshdeep Singh"],
    blurb:
      "A win away from the four, and winners of the Fair Play Award. The mini-auction is a chance to turn a near-miss into a genuine title tilt.",
  },
  {
    id: "dc",
    short: "DC",
    name: "Delhi Capitals",
    city: "Delhi",
    color: "#2563eb",
    color2: "#ef4444",
    ground: "Arun Jaitley Stadium",
    titles: 0,
    last: "6th, 2026",
    record2026: { p: 14, w: 7, l: 7, nr: 0, nrr: "-0.651", pts: 14, pos: 6, form: "W W W L L" },
    watch: ["KL Rahul", "Axar Patel", "Kuldeep Yadav"],
    blurb:
      "Rahul’s 152 was the highest individual score of IPL 2026. A .500 season left Delhi hunting for bowling depth before December.",
  },
  {
    id: "kkr",
    short: "KKR",
    name: "Kolkata Knight Riders",
    city: "Kolkata",
    color: "#3b0a45",
    color2: "#d4af37",
    ground: "Eden Gardens",
    titles: 3,
    last: "7th, 2026",
    record2026: { p: 14, w: 6, l: 7, nr: 1, nrr: "-0.147", pts: 13, pos: 7, form: "L W W L W" },
    watch: ["Sunil Narine", "Andre Russell", "Rinku Singh", "Varun Chakravarthy"],
    blurb:
      "Three-time champions who slipped out of the playoff race. Eden Gardens still produced nights that reminded everyone why purple travels.",
  },
  {
    id: "csk",
    short: "CSK",
    name: "Chennai Super Kings",
    city: "Chennai",
    color: "#fdb913",
    color2: "#0081c9",
    ground: "M. A. Chidambaram Stadium",
    titles: 5,
    last: "8th, 2026",
    record2026: { p: 14, w: 6, l: 8, nr: 0, nrr: "-0.345", pts: 12, pos: 8, form: "L L L W W" },
    watch: ["Ruturaj Gaikwad", "Ravindra Jadeja", "Matheesha Pathirana", "MS Dhoni"],
    blurb:
      "A rare quiet year by Chepauk standards. Season 20 is a rebuild window — and a farewell-or-encore question that still follows Dhoni.",
  },
  {
    id: "mi",
    short: "MI",
    name: "Mumbai Indians",
    city: "Mumbai",
    color: "#004ba0",
    color2: "#d1a325",
    ground: "Wankhede Stadium",
    titles: 5,
    last: "9th, 2026",
    record2026: { p: 14, w: 4, l: 10, nr: 0, nrr: "-0.584", pts: 8, pos: 9, form: "L L W L W" },
    watch: ["Hardik Pandya", "Rohit Sharma", "Suryakumar Yadav", "Jasprit Bumrah"],
    blurb:
      "Five titles, a tough 2026. Mumbai will be among the most watched tables at the mini-auction as they look to reset a side that won only four league games.",
  },
  {
    id: "lsg",
    short: "LSG",
    name: "Lucknow Super Giants",
    city: "Lucknow",
    color: "#1c4c6a",
    color2: "#e4572e",
    ground: "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
    titles: 0,
    last: "10th, 2026",
    record2026: { p: 14, w: 4, l: 10, nr: 0, nrr: "-0.740", pts: 8, pos: 10, form: "L L W L W" },
    watch: ["Rishabh Pant", "Mitchell Marsh", "Nicholas Pooran", "Avesh Khan"],
    blurb:
      "The table’s last name in 2026. Ekana remains a fortress on its best nights; the auction is about finding a bowling group that can hold 200-plus totals.",
  },
];

export const STANDINGS_2026 = TEAMS.map((t) => ({
  ...t.record2026,
  id: t.id,
  short: t.short,
  name: t.name,
  color: t.color,
  qualified: t.record2026.pos <= 4,
})).sort((a, b) => a.pos - b.pos);

export type NewsHero = "ember" | "red" | "teal" | "pink" | "gold" | "blue" | "violet";

export type ArticleKind = "news" | "blog" | "report";

export type Article = {
  id: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  hero: NewsHero;
  kind?: ArticleKind;
  coverUrl?: string;
  portableBody?: unknown[];
  body: string[];
};

export const NEWS: Article[] = [
  {
    id: "auction-india",
    tag: "Auction",
    date: "16 Sep 2026",
    kind: "news",
    title: "IPL 2027 mini-auction set to return to India",
    excerpt:
      "After three overseas auctions, the Governing Council is pushing to host the December mini-auction on home soil. Venue still TBA.",
    hero: "ember",
    body: [
      "The IPL 2027 player auction is expected back in India for the first time since Kochi hosted the 2023 sale. Reports after the Governing Council meeting on 15 September 2026 say the event will be a mini-auction, likely in the mid-December window.",
      "Dubai (2024), Jeddah (2025) and Abu Dhabi (2026) hosted the last three auctions. IPL chairman Arun Dhumal has said the league wants the smaller 2027 sale in India, with hotel inventory during wedding season the main constraint on picking a city.",
      "More than 100 five-star rooms are typically needed for franchise delegations. The host city will be confirmed once accommodation and a suitable arena line up. The next mega auction, due the following cycle, could again be staged overseas.",
      "For fans, an India auction means a primetime, home-broadcast spectacle in the weeks before Season 20. Retention lists and purse remaining will drop first; this site will track both the moment they are published.",
    ],
  },
  {
    id: "three-peat",
    tag: "RCB",
    date: "12 Sep 2026",
    kind: "blog",
    title: "Can RCB make it three in a row in Season 20?",
    excerpt:
      "Only CSK and MI have retained the trophy before. Bengaluru join that club — and now chase a three-peat.",
    hero: "red",
    body: [
      "Royal Challengers Bengaluru beat Gujarat Titans by five wickets in the IPL 2026 final at Narendra Modi Stadium, chasing 156 with 12 balls to spare. Virat Kohli’s unbeaten 75 off 42, including the fastest fifty of his IPL career, won player of the match.",
      "That made RCB only the third franchise after Chennai Super Kings and Mumbai Indians to defend the title. They finished the league on 18 points, tied with GT and SRH, and first on net run rate.",
      "Season 20 is a different exam. Mini-auctions punish complacency, and GT, SRH and Rajasthan all have cores that already lived in the 2026 playoffs. The question around Chinnaswamy is not whether RCB belong — it is whether the dressing room still has another May in it.",
    ],
  },
  {
    id: "impact-player",
    tag: "Rules",
    date: "16 Sep 2026",
    kind: "news",
    title: "Impact Player rule back on the Governing Council table",
    excerpt:
      "Franchises are being asked for fresh feedback on the substitute rule that has shaped tactics since 2023.",
    hero: "teal",
    body: [
      "Alongside the auction-venue discussion, the BCCI has asked franchises and other stakeholders for updated views on the Impact Player rule. The substitute has defined strategy since 2023, letting sides bowl with five specialists and still bat deep.",
      "No final call has been announced. Another Governing Council sitting is expected in the coming weeks. If the rule stays, auction lists will keep privileging specialist quicks and finishers; if it is tweaked or dropped, squad construction for 2027 changes overnight.",
      "We will update this page the moment an official playing-condition note is released. Until then, treat every ‘confirmed XI’ graphic you see on social media as speculation.",
    ],
  },
  {
    id: "sooryavanshi",
    tag: "Players",
    date: "01 Jun 2026",
    kind: "blog",
    title: "Vaibhav Sooryavanshi: the season that rewrote the record book",
    excerpt: "776 runs, 72 sixes, Orange Cap, MVP, Emerging Player — and still a teenager.",
    hero: "pink",
    body: [
      "Rajasthan Royals batter Vaibhav Sooryavanshi finished IPL 2026 with 776 runs in 16 innings at a strike rate of 237.30. He was 15 years and 65 days old when the Orange Cap was confirmed, the youngest winner in league history.",
      "He also took Most Valuable Player, Emerging Player, Super Striker and Super Sixes (72 sixes). Shubman Gill (732) and Sai Sudharsan (722) were the next names on the run chart; both fell cheaply in the final, locking the cap in Jaipur pink.",
      "Season 20 will be the first time oppositions have a full winter to plan for him. That is the tax on a historic summer — and the reason every net session in Jaipur will be watched a little more closely.",
    ],
  },
  {
    id: "final-recap",
    tag: "Match report",
    date: "31 May 2026",
    kind: "report",
    title: "Final recap: Kohli steers RCB home in Ahmedabad",
    excerpt:
      "GT 155/8, RCB 161/5 in 18 overs. A five-wicket win, a second straight title, a night owned by No. 18.",
    hero: "gold",
    body: [
      "Gujarat Titans posted 155 for 8. Royal Challengers Bengaluru reached 161 for 5 in 18 overs. The margin was five wickets and 12 balls; the story was Virat Kohli’s 75 not out off 42.",
      "Kagiso Rabada removed Devdutt Padikkal for one — the wicket that sealed the Purple Cap on 29. It was not enough. Kohli’s fifty came off 25 balls, the fastest of his IPL career, and he hit the winning run.",
      "RCB had already beaten GT in Qualifier 1. Returning to the same matchup in the final, they finished the job and joined CSK and MI as title-retainers. Season 20 now opens with a champion that no longer has anything to prove — and everything to defend.",
    ],
  },
  {
    id: "auction-watch",
    tag: "Preview",
    date: "10 Sep 2026",
    kind: "blog",
    title: "Auction watch: who needs what before Season 20",
    excerpt:
      "MI and LSG won four games each. CSK missed the four. The mini-auction is not cosmetic for half the table.",
    hero: "blue",
    body: [
      "A mini-auction is usually about finishing pieces. Not this year for everyone. Mumbai Indians and Lucknow Super Giants each won four of 14 league matches. Chennai Super Kings finished eighth. Kolkata, Delhi and Punjab were in the mix and still went home.",
      "The sides with less work are RCB, GT, SRH and RR — all playoff teams with identifiable cores. Even they will chase a death bowler or a finisher if the Impact Player conversation changes the value of specialists.",
      "Purse remaining and the released-player list will tell the real story. Until those drop, the sensible read is: four teams polishing, six teams rebuilding, and one December night that can redraw the 2027 table before a ball is bowled.",
    ],
  },
  {
    id: "season-20",
    tag: "Season 20",
    date: "08 Sep 2026",
    kind: "blog",
    title: "Season 20: format, window, and what we know so far",
    excerpt:
      "Ten teams, a league of 70 games, four playoff nights. The 2027 fixture list is still unreleased.",
    hero: "ember",
    body: [
      "IPL 2027 will be the 20th edition of the league. The playing group remains the ten current franchises. The standard shape is a double round-robin of 70 league matches, then Qualifier 1, Eliminator, Qualifier 2 and the final.",
      "The 2026 season ran from 28 March to 31 May. A similar late-March start is the working assumption for 2027 until BCCI publishes the almanac. Evening games typically begin at 7:30 pm IST; double-headers add a 3:30 pm IST afternoon slot.",
      "Broadcast in India has been Star Sports on television and JioHotstar for streaming. Confirm 2027 rights closer to the first ball. This companion will add the full fixture grid, venues and start times the day they are official.",
    ],
  },
  {
    id: "purple-cap",
    tag: "Bowling",
    date: "31 May 2026",
    kind: "news",
    title: "Rabada’s 29: how the Purple Cap was won",
    excerpt: "One wicket in the final — Padikkal, for one — and Kagiso Rabada closed the race at 29.",
    hero: "violet",
    body: [
      "Kagiso Rabada finished IPL 2026 with 29 wickets, one ahead of Royal Challengers Bengaluru’s Bhuvneshwar Kumar (28) and four ahead of Rajasthan’s Jofra Archer (25).",
      "The cap was still live on final night. Rabada’s dismissal of Devdutt Padikkal for one ended the argument. It was a bowler’s season in a batter’s league: 835 wickets fell across the tournament, against 2,332 fours and 1,426 sixes.",
      "GT take a purple-capped attack into the off-season. Whether they can add a title to the individual medal is the question Ahmedabad will live with until May.",
    ],
  },
];

export type Video = {
  title: string;
  meta: string;
  href: string;
  featured?: boolean;
  thumbUrl?: string;
};

export const VIDEOS: Video[] = [
  { title: "Top moments of TATA IPL 2026", meta: "22:23 · Magic Moments", href: "https://www.iplt20.com/", featured: true },
  { title: "IPL 2026 Final: RCB vs GT — highlights", meta: "14:05 · Final", href: "https://www.iplt20.com/" },
  { title: "All 72 sixes: Vaibhav Sooryavanshi", meta: "09:21 · Orange Cap", href: "https://www.iplt20.com/" },
  { title: "All 29 wickets: Kagiso Rabada", meta: "04:36 · Purple Cap", href: "https://www.iplt20.com/" },
  { title: "Best catches of TATA IPL 2026", meta: "05:12 · Fielding", href: "https://www.iplt20.com/" },
  { title: "All 28 wickets: Bhuvneshwar Kumar", meta: "04:22 · RCB", href: "https://www.iplt20.com/" },
  { title: "All 25 wickets: Jofra Archer", meta: "04:02 · RR", href: "https://www.iplt20.com/" },
  { title: "All 43 sixes: Abhishek Sharma", meta: "05:25 · SRH", href: "https://www.iplt20.com/" },
];

export type Match = {
  round?: string;
  n?: number;
  date: string;
  time: string;
  venue: string;
  home: string;
  away: string;
  result: string;
};

export const PLAYOFFS_2026: Match[] = [
  { round: "Qualifier 1", date: "Tue 26 May 2026", time: "7:30 pm IST", venue: "HPCA Stadium, Dharamshala", home: "RCB", away: "GT", result: "RCB won by 92 runs" },
  { round: "Eliminator", date: "Wed 27 May 2026", time: "7:30 pm IST", venue: "New International Cricket Stadium, New Chandigarh", home: "SRH", away: "RR", result: "RR won by 47 runs" },
  { round: "Qualifier 2", date: "Fri 29 May 2026", time: "7:30 pm IST", venue: "New International Cricket Stadium, New Chandigarh", home: "GT", away: "RR", result: "GT won by 7 wickets" },
  { round: "Final", date: "Sun 31 May 2026", time: "7:30 pm IST", venue: "Narendra Modi Stadium, Ahmedabad", home: "GT", away: "RCB", result: "RCB won by 5 wickets" },
];

export const MATCHES_2026: Match[] = [
  { n: 1, date: "Sat 28 Mar", time: "7:30 pm IST", venue: "M. Chinnaswamy Stadium, Bengaluru", home: "RCB", away: "SRH", result: "RCB won by 6 wickets" },
  { n: 2, date: "Sun 29 Mar", time: "7:30 pm IST", venue: "Wankhede Stadium, Mumbai", home: "MI", away: "KKR", result: "MI won by 6 wickets" },
  { n: 3, date: "Mon 30 Mar", time: "7:30 pm IST", venue: "ACA Stadium, Guwahati", home: "RR", away: "CSK", result: "RR won by 8 wickets" },
  { n: 4, date: "Tue 31 Mar", time: "7:30 pm IST", venue: "New PCA Stadium, New Chandigarh", home: "PBKS", away: "GT", result: "PBKS won by 3 wickets" },
  { n: 5, date: "Wed 1 Apr", time: "7:30 pm IST", venue: "Ekana Cricket Stadium, Lucknow", home: "LSG", away: "DC", result: "DC won by 6 wickets" },
  { n: 6, date: "Thu 2 Apr", time: "7:30 pm IST", venue: "Eden Gardens, Kolkata", home: "KKR", away: "SRH", result: "SRH won by 65 runs" },
  { n: 18, date: "Sat 11 Apr", time: "7:30 pm IST", venue: "M. A. Chidambaram Stadium, Chennai", home: "CSK", away: "MI", result: "CSK won by 23 runs" },
  { n: 33, date: "Thu 23 Apr", time: "7:30 pm IST", venue: "Wankhede Stadium, Mumbai", home: "MI", away: "CSK", result: "CSK won by 103 runs" },
  { n: 54, date: "Sun 10 May", time: "7:30 pm IST", venue: "Shaheed Veer Narayan Singh Stadium, Raipur", home: "RCB", away: "MI", result: "RCB won by 2 wickets" },
  { n: 66, date: "Thu 21 May", time: "7:30 pm IST", venue: "Narendra Modi Stadium, Ahmedabad", home: "GT", away: "CSK", result: "GT won by 89 runs" },
  { n: 67, date: "Fri 22 May", time: "7:30 pm IST", venue: "Rajiv Gandhi International Stadium, Hyderabad", home: "SRH", away: "RCB", result: "SRH won by 55 runs" },
  { n: 70, date: "Sun 24 May", time: "7:30 pm IST", venue: "Eden Gardens, Kolkata", home: "KKR", away: "DC", result: "DC won by 40 runs" },
];

export const STATS_2026 = [
  { k: "Fours", v: "2,332" },
  { k: "Sixes", v: "1,426" },
  { k: "Wickets", v: "835" },
  { k: "Dot balls", v: "5,686" },
  { k: "Batting avg", v: "29.89" },
  { k: "Bowling avg", v: "33.47" },
];

export const AWARDS_2026 = [
  { cap: "Orange Cap", name: "Vaibhav Sooryavanshi", team: "RR", stat: "776 runs · Avg 48.50 · SR 237.30" },
  { cap: "Purple Cap", name: "Kagiso Rabada", team: "GT", stat: "29 wickets · Best 3/25" },
  { cap: "MVP", name: "Vaibhav Sooryavanshi", team: "RR", stat: "436.55 points · 16 matches" },
  { cap: "Highest score", name: "KL Rahul", team: "DC", stat: "152 vs PBKS · SR 226.86" },
  { cap: "Fair Play", name: "Punjab Kings", team: "PBKS", stat: "Season award" },
  { cap: "Player of the Final", name: "Virat Kohli", team: "RCB", stat: "75* off 42" },
];

export const WINNERS = [
  { year: 2026, team: "Royal Challengers Bengaluru" },
  { year: 2025, team: "Royal Challengers Bengaluru" },
  { year: 2024, team: "Kolkata Knight Riders" },
  { year: 2023, team: "Chennai Super Kings" },
  { year: 2022, team: "Gujarat Titans" },
  { year: 2021, team: "Chennai Super Kings" },
  { year: 2020, team: "Mumbai Indians" },
  { year: 2019, team: "Mumbai Indians" },
  { year: 2018, team: "Chennai Super Kings" },
  { year: 2017, team: "Mumbai Indians" },
  { year: 2016, team: "Sunrisers Hyderabad" },
  { year: 2015, team: "Mumbai Indians" },
  { year: 2014, team: "Kolkata Knight Riders" },
  { year: 2013, team: "Mumbai Indians" },
  { year: 2012, team: "Kolkata Knight Riders" },
  { year: 2011, team: "Chennai Super Kings" },
  { year: 2010, team: "Chennai Super Kings" },
  { year: 2009, team: "Deccan Chargers" },
  { year: 2008, team: "Rajasthan Royals" },
];

export const FAQS = [
  { q: "What is IPL 2027?", a: "IPL 2027 is the 20th season of the Indian Premier League, a professional T20 competition run by the BCCI with ten city franchises." },
  { q: "When does IPL 2027 start?", a: "The official fixture list is not out yet. Recent seasons have opened in late March. This site uses 27 March 2027 as a working marker until BCCI confirms dates." },
  { q: "When is the IPL 2027 auction?", a: "A mini-auction is expected in mid-December 2026, with the BCCI aiming to host it in India after three years overseas. City and exact date are still to be announced." },
  { q: "How many teams are playing?", a: "Ten: CSK, MI, RCB, KKR, RR, PBKS, DC, GT, SRH and LSG." },
  { q: "Who are the defending champions?", a: "Royal Challengers Bengaluru. They beat Gujarat Titans by five wickets in the 2026 final and are going for a third straight title." },
  { q: "How is the points table calculated?", a: "A win is worth two points. Ties on points are split by net run rate. The top four after the league stage qualify for the playoffs." },
  { q: "What is the playoff format?", a: "Qualifier 1 (1st vs 2nd), Eliminator (3rd vs 4th), Qualifier 2 (loser of Q1 vs winner of the Eliminator), then the final." },
  { q: "Where can I watch IPL 2027?", a: "In India, recent seasons have been on Star Sports (TV) and JioHotstar (streaming). Confirm 2027 rights closer to the season." },
  { q: "Is this the official IPL website?", a: "No. IPL 2027 Live is an unofficial fan companion. Official scores, videos and statements live at iplt20.com." },
];

export const NAV = [
  { href: "/news", label: "News" },
  { href: "/videos", label: "Videos" },
  { href: "/matches", label: "Matches" },
  { href: "/teams", label: "Teams" },
];

export const MORE_NAV = [
  { href: "/blogs", label: "Blogs" },
  { href: "/points-table", label: "Points Table" },
  { href: "/about", label: "About" },
];

export const NEWS_TONES: Record<NewsHero, string> = {
  ember: "bg-[linear-gradient(135deg,#19398A,#0C1F5C)]",
  red: "bg-[linear-gradient(135deg,#9b1c2a,#19398A)]",
  teal: "bg-[linear-gradient(135deg,#0e8f86,#19398A)]",
  pink: "bg-[linear-gradient(135deg,#b91c7a,#19398A)]",
  gold: "bg-[linear-gradient(135deg,#d4a017,#19398A)]",
  blue: "bg-[linear-gradient(135deg,#1d4ed8,#132E73)]",
  violet: "bg-[linear-gradient(135deg,#5b21b6,#19398A)]",
};

export function teamByShort(short: string) {
  return TEAMS.find((t) => t.short === short);
}

export function getTeam(id: string) {
  return TEAMS.find((t) => t.id === id);
}

export function getArticle(id: string) {
  return NEWS.find((n) => n.id === id);
}
