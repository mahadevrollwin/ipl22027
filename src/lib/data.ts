export const SITE = {
  name: "IPL 2027 Live",
  tagline: "Season 20 companion",
  auctionDate: "2026-12-15T18:00:00+05:30",
  seasonDate: "2027-03-27T19:30:00+05:30",
};

export type TeamPlayer = {
  name: string;
  role: string;
  image?: string;
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
  logo?: string;
  banner?: string;
  trophyYears?: string[];
  about?: string[];
  summary?: string;
  players?: TeamPlayer[];
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

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

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
  blocks?: ArticleBlock[];
};

export const NEWS: Article[] = [
  {
    id: "auction-india",
    tag: "Auction",
    date: "16 Sep 2026",
    kind: "news",
    title: "IPL 2027 mini-auction set to return to India",
    excerpt:
      "After three consecutive years of globe-trotting across the Middle East, the Indian Premier League auction gavel is finally returning home.",
    hero: "ember",
    coverUrl: "/news/auction-india.jpg",
    body: [
      "After three consecutive years of globe-trotting across the Middle East, the Indian Premier League auction gavel is finally returning home. The BCCI and the IPL Governing Council have confirmed that the mini-auction ahead of the 2027 season will take place on Indian soil.",
      "The decision ends a wanderlust phase that saw team owners, think tanks, and broadcast crews pack their bags for Dubai, Jeddah, and Abu Dhabi. While those desert stopovers cemented the tournament’s international clout, bringing the auction back to India restores a distinct grassroots buzz to the league’s most strategic off-field showdown.",
    ],
    blocks: [
      {
        type: "p",
        text: "After three consecutive years of globe-trotting across the Middle East, the Indian Premier League auction gavel is finally returning home. The BCCI and the IPL Governing Council have confirmed that the mini-auction ahead of the 2027 season will take place on Indian soil.",
      },
      {
        type: "p",
        text: "The decision ends a wanderlust phase that saw team owners, think tanks, and broadcast crews pack their bags for Dubai, Jeddah, and Abu Dhabi. While those desert stopovers cemented the tournament’s international clout, bringing the auction back to India restores a distinct grassroots buzz to the league’s most strategic off-field showdown.",
      },
      { type: "h2", text: "The Three-Year Overseas Odyssey" },
      {
        type: "p",
        text: "The IPL’s overseas auction era was an ambitious experiment in sports marketing:",
      },
      {
        type: "ul",
        items: [
          "Dubai (2024): Marked the IPL’s maiden auction venture abroad, offering world-class infrastructure and testing neutral-ground logistics.",
          "Jeddah (2025): Raised the stakes with a high-glamour, two-day mega-auction held in Saudi Arabia, underscoring the Gulf region's growing appetite for cricket investments.",
          "Abu Dhabi (2026): Provided a sleek, high-tech backdrop for tactical squad fine-tuning.",
        ],
      },
      {
        type: "p",
        text: "Taking the auction outside India proved the IPL could command global attention purely through business negotiations and player tables. Yet, the sheen of international convention centers couldn't entirely mask the operational friction that came with it.",
      },
      { type: "h2", text: "Why the Shift Back? Logistics, Fatigue, and Common Sense" },
      {
        type: "p",
        text: "The primary catalyst for bringing the 2027 mini-auction back home boils down to practical governance:",
      },
      {
        type: "table",
        caption: "Overseas Auction vs. Home Soil Mini-Auction",
        headers: ["International Venues", "Indian Return (2027)"],
        rows: [
          ["Visas, travel logistics", "Minimal travel friction for franchises"],
          ["Multi-day staff disruption", "Compact 1-day targeted bidding setup"],
          ["High operational overhead", "Streamlined broadcast and team operations"],
          ["Distant fan engagement", "Direct domestic media and fan resonance"],
        ],
      },
      {
        type: "p",
        text: "For a mega-auction, dispatching extensive scouting groups, analysts, owners, and legal teams across borders makes tactical sense. Franchises build entire three-year squads from scratch.",
      },
      {
        type: "p",
        text: "A mini-auction, however, is a swift, surgical affair. Teams rarely buy more than three to six players to plug tactical holes. Several franchises voiced valid concerns regarding the disproportionate logistics of flying 15-to-20-member delegations abroad for an event wrapped up in an afternoon. The BCCI listened, acknowledging that a streamlined domestic setup delivers identical broadcast drama without the bureaucratic hurdles.",
      },
      { type: "h2", text: "The Wedding Season Conundrum" },
      {
        type: "p",
        text: "Hosting an IPL auction in India during the November–December window involves an unusual logistical rival: India’s peak winter wedding calendar.",
      },
      {
        type: "p",
        text: "As IPL Chairman Arun Dhumal highlighted, room inventory has historically been the biggest roadblock to hosting late-year auctions at home. An IPL auction requires:",
      },
      {
        type: "ul",
        items: [
          "Over 100 five-star rooms locked down for franchise owners, analysts, and support staff.",
          "Dedicated, uninterrupted banquet ballrooms for setup, rehearsals, and the live auction day.",
          "Secure wings for BCCI officials, tech operators, and multi-network broadcast crew teams.",
        ],
      },
      {
        type: "p",
        text: "Securing that level of luxury inventory on short notice in major metros like Mumbai or Delhi during auspicious wedding dates has often proven near-impossible. For 2027, the BCCI is vetting tier-one and tier-two destinations early. Cities like Kochi (which successfully hosted the manic 2023 auction), Bengaluru, Kolkata, or Jaipur remain prime candidates depending on hotel block availability.",
      },
      { type: "h2", text: "The Mechanics of the Mini-Auction: High Purses, Higher Chaos" },
      {
        type: "p",
        text: "Mini-auctions often produce more erratic bidding wars than mega-auctions. With core playing XIs largely established, franchises don’t need to spread their purse across 20 slots. Instead, they arrive with 20 to 30 crore rupees targeting just one or two specific player profiles.",
      },
      {
        type: "p",
        text: "Whether it’s a death-overs tearaway, an explosive left-handed finisher, or an overseas spin-bowling all-rounder, mini-auctions consistently break individual price records due to sheer supply-and-demand imbalance. Returning to a domestic media environment ensures that this high-stakes table theatre will play out under intense local scrutiny.",
      },
      { type: "h2", text: "The Tactical Wildcard: The Impact Player Rule" },
      {
        type: "p",
        text: "The 2027 auction won't just be about venues; it will be defined by what rules govern the pitch. The IPL Governing Council is actively reviewing the controversial Impact Player rule.",
      },
      {
        type: "p",
        text: "Prominent international voices and senior Indian players—including Rohit Sharma and Shubman Gill—have pointed out that twelve-a-side dynamics undermine traditional all-rounders. If the BCCI decides to scrap or tweak the substitute rule ahead of 2027, every team’s purse strategy will change overnight:",
      },
      {
        type: "ul",
        items: [
          "If the rule stays: Teams can continue hoarding specialist power-hitters and express tailenders without worrying about batting depth.",
          "If the rule goes: True multi-skill all-rounders will command astronomical bidding wars, turning the mini-auction into an intense scramble for balance.",
        ],
      },
      { type: "h2", text: "Looking Ahead" },
      {
        type: "p",
        text: "Moving the IPL 2027 auction back to India is a pragmatic, welcome recalibration. While overseas events showcased the IPL’s global footprint, the heart of the tournament belongs on home soil. As franchise boardrooms begin auditing their rosters and tracking availability windows, Indian cricket fans can prepare for an electric winter bidding battle right in their own backyard.",
      },
    ],
  },
  {
    id: "three-peat",
    tag: "RCB",
    date: "12 Sep 2026",
    kind: "blog",
    title: "Can RCB make it three in a row in Season 20?",
    excerpt:
      "For seventeen agonizing years, Royal Challengers Bengaluru was cricket’s most tragic romantic narrative. Then came back-to-back titles — and Season 20’s chase for immortality.",
    hero: "red",
    coverUrl: "/news/three-peat.jpg",
    body: [
      "For seventeen agonizing years, Royal Challengers Bengaluru was cricket’s most tragic romantic narrative. They possessed the biggest names, the loudest fanbase, the most electric stadium atmosphere, and an empty trophy cabinet.",
      "Then came the breakthrough of 2025, followed by an emphatic coronation on May 31, 2026, when Virat Kohli guided RCB to a five-wicket victory over Gujarat Titans to secure back-to-back Indian Premier League championships.",
    ],
    blocks: [
      {
        type: "p",
        text: "For seventeen agonizing years, Royal Challengers Bengaluru was cricket’s most tragic romantic narrative. They possessed the biggest names, the loudest fanbase, the most electric stadium atmosphere, and an empty trophy cabinet. Then came the breakthrough of 2025, followed by an emphatic coronation on May 31, 2026, when Virat Kohli guided RCB to a five-wicket victory over Gujarat Titans to secure back-to-back Indian Premier League championships.",
      },
      {
        type: "p",
        text: "Suddenly, the narrative has inverted entirely. Bengaluru is no longer chasing validation; they are chasing immortality. As the league gears up for its milestone Season 20 in 2027, the burning question dominating franchise cricket is simple yet monumental: can RCB achieve the holy grail and make it three IPL titles in a row?",
      },
      { type: "h2", text: "The Final Frontier: Escaping the Two-Title Trap" },
      {
        type: "p",
        text: "In the history of the IPL, establishing a dynasty is brutally difficult. Going back-to-back has only ever been achieved three times: Chennai Super Kings (2010–2011), Mumbai Indians (2019–2020), and now Royal Challengers Bengaluru (2025–2026).",
      },
      {
        type: "p",
        text: "Yet no franchise has ever crossed the threshold to win three successive titles.",
      },
      {
        type: "table",
        caption: "The Three-Peat Chase",
        headers: ["Franchise", "Back-to-Back Years", 'The "Three-Peat" Attempt Year', "What Happened?"],
        rows: [
          ["Chennai Super Kings", "2010, 2011", "2012 (Season 5)", "Reached Final; lost a thriller to KKR"],
          ["Mumbai Indians", "2019, 2020", "2021 (Season 14)", "Finished 5th; missed playoffs on NRR"],
          ["Royal Challengers Bengaluru", "2025, 2026", "2027 (Season 20)", "In Pursuit"],
        ],
      },
      {
        type: "p",
        text: "The mechanics of the IPL are engineered for competitive parity. Between retention limits, tactical adaptations by opposing analysts, and the sheer volatility of T20 knockout cricket, defending a crown once is rare; defending it twice borders on the impossible.",
      },
      { type: "h2", text: "The Engine Behind the Red & Gold Empire" },
      {
        type: "p",
        text: "RCB’s transformation into a ruthless winning machine wasn't accidental. It stemmed from shedding their historic over-reliance on individual top-order fireworks and constructing an adaptable, ice-veined unit.",
      },
      {
        type: "ul",
        items: [
          "The Ageless Talisman: Virat Kohli remains the spiritual and tactical heartbeat of the lineup. His match-winning 75 in the 2026 final demonstrated an evolved T20 blueprint—anchoring when required while tearing away through the middle overs with unmatched intent.",
          "Middle-Order Insurance: In previous eras, an early wicket triggered an inevitable RCB collapse. Over 2025 and 2026, Rajat Patidar, Tim David, Krunal Pandya, and Jitesh Sharma provided a bulletproof spine capable of hauling targets down from improbable deficits or launching late assaults beyond the 200-run mark.",
          "Bowling Discipline at M. Chinnaswamy: The most critical shift has been with the ball. Where Bengaluru once bled boundaries at home, the disciplined hit-the-deck precision of Josh Hazlewood combined with the veteran swing craft of Bhuvneshwar Kumar and the wicket-taking bursts of Rasikh Salam turned their bowling attack into one of the league's stingiest.",
        ],
      },
      { type: "h2", text: "The Hurdles Between RCB and Cricket Immortality" },
      {
        type: "p",
        text: "Completing a hat-trick of titles in Season 20 will test RCB's resilience like never before.",
      },
      { type: "h3", text: "1. The Giant Bullseye" },
      {
        type: "p",
        text: "Every franchise measures its tactical progress against the reigning double champions. By Season 20, opposition video analysts will have dissected every release point of Hazlewood’s slower balls and mapped out every boundary zone against Patidar's spin assault. RCB will rarely face a complacent opponent; every side treats a fixture against them as their personal final.",
      },
      { type: "h3", text: "2. Squad Fatigue and Age Curves" },
      {
        type: "p",
        text: "Key pillars of RCB’s successive triumphs—including Kohli, Bhuvneshwar, and Hazlewood—are in the veteran stages of their careers. Sustaining peak physical conditioning, injury-free spells, and relentless intensity across a grueling two-month campaign becomes significantly steeper with each passing year. How RCB manages squad rotation in the mini-auction will make or break their campaign.",
      },
      { type: "h3", text: "3. Playoff Roulette" },
      {
        type: "p",
        text: "The IPL playoff format is inherently high-stakes. Even the most dominant regular-season team can be eliminated by one bad 15-minute passage of play, an extraordinary individual counter-attack, or an unfavorable toss under heavy dew.",
      },
      { type: "h2", text: "The Blueprint: What It Will Take to Win Season 20" },
      {
        type: "p",
        text: "If RCB is to lift the trophy again in Season 20, their strategy must prioritize proactive evolution over comfortable complacency:",
      },
      {
        type: "ul",
        items: [
          "Surgical Mini-Auction Acquisitions: Rather than altering the core, RCB must recruit high-pace dynamic backup seamers and a flexible left-hand hitting prospect to prevent predictable matchups.",
          "Empowering the New Guard: Relying on Kohli’s heroics cannot be Plan A in every high-pressure chase. Season 20 requires the middle order to take unconditional ownership during the league phases.",
          "Sustaining Fielding Standards: The hidden differentiator in RCB’s 2025 and 2026 campaigns was boundary-riding athleticism and ground fielding efficiency—saving 10–15 runs every game that routinely tipped tight finishes in their favor.",
        ],
      },
      {
        type: "p",
        text: "The romantic desperation that shadowed Royal Challengers Bengaluru for nearly two decades is gone, replaced by the swagger of back-to-back champions. But the step from great to immortal is the steepest climb in sport. If Andy Flower, the coaching staff, and the playing eleven can weather the inevitable target on their backs, Season 20 could etch this RCB side as the greatest franchise dynasty cricket has ever seen.",
      },
    ],
  },
  {
    id: "sooryavanshi",
    tag: "Players",
    date: "01 Jun 2026",
    kind: "blog",
    title: "Vaibhav Sooryavanshi: the season that rewrote the record book",
    excerpt:
      "Every few decades, cricket encounters a prodigy who does not merely knock on the doors of top-tier cricket, but kicks them off their hinges.",
    hero: "pink",
    coverUrl: "/news/sooryavanshi.jpg",
    body: [
      "Every few decades, cricket encounters a prodigy who does not merely knock on the doors of top-tier cricket, but kicks them off their hinges. From Sachin Tendulkar taking on Waqar Younis at sixteen to Brian Lara carving up domestic attacks in the Caribbean, early brilliance is an indelible part of the sport's lore.",
      "Yet, the sheer velocity of Vaibhav Sooryavanshi’s ascent has turned standard developmental curves into relics of the past.",
    ],
    blocks: [
      {
        type: "p",
        text: "Every few decades, cricket encounters a prodigy who does not merely knock on the doors of top-tier cricket, but kicks them off their hinges. From Sachin Tendulkar taking on Waqar Younis at sixteen to Brian Lara carving up domestic attacks in the Caribbean, early brilliance is an indelible part of the sport's lore. Yet, the sheer velocity of Vaibhav Sooryavanshi’s ascent has turned standard developmental curves into relics of the past.",
      },
      {
        type: "p",
        text: "What cricket witnessed across his breakout domestic and IPL campaign wasn't just raw talent finding its footing—it was a comprehensive, aggressive dismantling of historical benchmarks.",
      },
      { type: "h2", text: "From Samastipur to the World Stage" },
      {
        type: "p",
        text: "Born in March 2011 in Tajpur, a small town in Bihar’s Samastipur district, Sooryavanshi’s story began with grueling commutes. Accompanied by his father Sanjiv, who harbored his own unfulfilled cricketing ambitions, the boy traveled over 100 kilometers back and forth between Samastipur and Patna on alternate days just to access quality nets.",
      },
      {
        type: "p",
        text: "His progress was instantaneous:",
      },
      {
        type: "ul",
        items: [
          "January 2024: Made his Ranji Trophy debut for Bihar against Mumbai at 12 years and 284 days, becoming the fourth-youngest player in first-class history and the youngest in nearly four decades.",
          "September 2024: Smashed a 58-ball youth Test century against Australia U-19, the fastest ever by an Indian player at that level.",
          "November 2024: Became the youngest player bought at an IPL auction when Rajasthan Royals secured him for ₹1.10 crore.",
        ],
      },
      {
        type: "p",
        text: "What looked like a bold bet on the future quickly turned into an immediate tactical masterstroke.",
      },
      { type: "h2", text: "The Numbers That Stunned the Game" },
      {
        type: "p",
        text: "Sooryavanshi didn't spend his debut campaigns absorbing pressure from the bench. Thrust into opening the innings, the left-hander unleashed an ultra-aggressive style that left seasoned international bowlers scrambling for answers.",
      },
      {
        type: "p",
        text: "The statistics from his whirlwind surge speak for themselves:",
      },
      {
        type: "table",
        caption: "Record-Breaking Surge",
        headers: ["Milestone / Record", "Achievement Details", "Historical Context"],
        rows: [
          [
            "Youngest T20 Centurion",
            "101 off 38 balls vs. Gujarat Titans (IPL)",
            "Achieved at 14 years, 32 days; youngest in professional men's T20 history.",
          ],
          [
            "Fastest Indian IPL Century",
            "35 balls to three figures",
            "Second-fastest overall behind Chris Gayle’s legendary 30-ball blitz.",
          ],
          [
            "Fastest to 1,000 T20 Runs",
            "Reached in 473 balls",
            "Eclipsed the global mark held by Mitchell Owen (533 balls).",
          ],
          [
            "IPL Season Sixes Record",
            "Smashed 72 maximums in a single edition",
            "Broke Chris Gayle’s long-standing single-season record of 59 sixes.",
          ],
          [
            "U-19 World Cup Final Apex",
            "175 off 80 balls vs. England",
            "Highest individual score ever recorded in an Under-19 World Cup final.",
          ],
        ],
      },
      { type: "h2", text: "Mechanics of a Teenage Powerhouse" },
      {
        type: "p",
        text: "Cricket purists often associate youthful prodigies with delicate timing, nimble footwork, and wristy placements. Sooryavanshi, however, represents modern power hitting engineered from the ground up.",
      },
      {
        type: "ul",
        items: [
          "Base and Stillness: Modeled loosely on Brian Lara’s high backlift, Sooryavanshi remains remarkably still through impact. He transfers his body weight onto his front foot with clean bat flow, allowing him to pull 140+ kph deliveries in front of square with disdain.",
          'Aggression in the First Over: Against Sunrisers Hyderabad, he became the first batter in IPL history to hit four sixes in the opening over of an innings, taking down Praful Hinge from ball one. His mindset eliminates tentative "sighters"—every delivery within his arc is targeted for the boundary rope.',
          "Fearless Range: While conventional openers rely on the powerplay field restrictions to punch through the infield, Sooryavanshi clears boundary fences with ease. His tally of 12 sixes in a single IPL innings against SRH set a new benchmark for an Indian batter.",
        ],
      },
      { type: "h2", text: "Rewriting Domestic Cricket Benchmarks" },
      {
        type: "p",
        text: "Beyond the bright lights of the IPL, his domestic output was equally staggering. In the 2025–26 Vijay Hazare Trophy, he smashed a 36-ball hundred against Arunachal Pradesh, obliterating AB de Villiers' record for the fastest 150 in List A cricket by getting there in just 59 deliveries before finishing with 190 off 84 balls.",
      },
      {
        type: "p",
        text: "Later that season, appointed vice-captain of Bihar's Ranji squad at just 14, he balanced tactical maturity with uninhibited hitting, proving his dominance was format-agnostic.",
      },
      { type: "h2", text: "The Road Ahead" },
      {
        type: "p",
        text: "Managing a prodigy in the era of social media scrutiny and 24/7 franchise coverage is fraught with peril. Bowlers will find tape, analysts will study his trigger movements, and opposition captains will set deeper traps outside off stump.",
      },
      {
        type: "p",
        text: "Yet, watching Vaibhav Sooryavanshi stand tall in Rajasthan pink, flashing his bat through the line with utter clarity, suggests this record-shattering year was no flash in the pan. He did not merely arrive on the scene; he redefined what is possible for a teenager in modern professional cricket. The record books have been rewritten, and at this rate, the ink will barely have time to dry.",
      },
    ],
  },
  {
    id: "rcb-2026-ipl-champions-a-historic-back-to-back-triumph",
    tag: "RCB",
    date: "31 May 2026",
    kind: "blog",
    title: "RCB 2026 IPL Champions: A Historic Back-to-Back Triumph",
    excerpt:
      "Royal Challengers Bengaluru have done it again. After finally ending their long wait for an IPL title in 2025, RCB successfully defended their crown in 2026, defeating Gujarat Titans by five wickets in the IPL final.",
    hero: "gold",
    coverUrl: "/news/rcb-2026-ipl-champions.jpg",
    body: [
      "There are nights that belong to the record books, and then there are nights etched straight into cricketing folklore. The IPL 2026 Final at the Narendra Modi Stadium in Ahmedabad belonged firmly to the latter.",
      "Under the blinding floodlights of the world’s largest cricket stadium, Royal Challengers Bengaluru defended their crown, overpowering Gujarat Titans by five wickets.",
    ],
    blocks: [
      {
        type: "p",
        text: "There are nights that belong to the record books, and then there are nights etched straight into cricketing folklore. The IPL 2026 Final at the Narendra Modi Stadium in Ahmedabad belonged firmly to the latter. Under the blinding floodlights of the world’s largest cricket stadium, Royal Challengers Bengaluru defended their crown, overpowering Gujarat Titans by five wickets.",
      },
      {
        type: "p",
        text: "At the center of it all was Virat Kohli. In a tournament defined by young guns and frantic powerplays, the 37-year-old maestro authored a definitive chase clinic: an unbeaten 75 off just 42 deliveries that sealed back-to-back championships and solidified RCB's status as a modern T20 dynasty.",
      },
      { type: "h2", text: "Setting the Stage: The Bowlers Strangle Gujarat" },
      {
        type: "p",
        text: "Rajat Patidar’s decision to insert Gujarat Titans after winning the toss proved decisive early on. While Ahmedabad pitches can often transform into batting paradises, RCB’s disciplined bowling attack gave GT's explosive top order no breathing room.",
      },
      {
        type: "ul",
        items: [
          "The Powerplay Lockdown: Bhuvneshwar Kumar and Josh Hazlewood operated with textbook Test-match discipline. Bhuvneshwar struck first to remove Sai Sudharsan, while Hazlewood dismissed Titans skipper Shubman Gill, crippling Gujarat's primary run-scorers inside the opening five overs.",
          "Middle-Overs Choke: Rasikh Salam Dar emerged as the wrecker-in-chief in the middle phase. His seam variations and cutters yielded superb figures of 3 for 27. When Krunal Pandya lured Jos Buttler into a stumping, GT was gasping at 99 for 5.",
          "Sundar’s Lone Stand: Only a gritty, counter-attacking 50 not out off 37 balls from Washington Sundar allowed Gujarat to drag their total to a respectable 155 for 8 in their 20 overs.",
        ],
      },
      {
        type: "p",
        text: "It was a competitive total on a sticky surface, but it needed Gujarat's bowling attack to deliver early breakthroughs.",
      },
      { type: "h2", text: "Match Summary: The Final at a Glance" },
      {
        type: "table",
        caption: "IPL 2026 Final — Narendra Modi Stadium, Ahmedabad",
        headers: ["Team / Phase", "Score / Key Figures", "Key Performers"],
        rows: [
          [
            "Gujarat Titans",
            "155/8 in 20.0 overs",
            "Washington Sundar 50* (37), Rasikh Salam 3/27, Bhuvneshwar Kumar 2/29",
          ],
          [
            "RCB (Chase)",
            "161/5 in 18.0 overs",
            "Virat Kohli 75* (42), Venkatesh Iyer 32 (16), Rashid Khan 2/25",
          ],
          [
            "Result",
            "RCB won by 5 wickets with 12 balls to spare",
            "Player of the Match: Virat Kohli",
          ],
        ],
      },
      { type: "h2", text: "The Chase: Kohli and Iyer Blitz the Powerplay" },
      {
        type: "p",
        text: "If Gujarat held any hopes of choking the chase through spin, RCB blew those plans apart within the first twenty minutes.",
      },
      {
        type: "p",
        text: "Venkatesh Iyer partnered with Kohli to launch an uninhibited blitzkrieg from ball one. Iyer's fearless 32 off just 16 balls punished Kagiso Rabada and Mohammed Siraj, setting up a 62-run opening stand in only 4.3 overs.",
      },
      {
        type: "p",
        text: "When Iyer fell, Kohli took complete command. Playing with an evolved mindset tailored to high-tempo cricket, Kohli reached his half-century off just 25 balls—the fastest fifty of his entire IPL career. He dismantled the Titans' bowling changes, depositing Siraj over wide long-on and pulling hard through mid-wicket with pristine authority.",
      },
      { type: "h2", text: "Weathering the Mid-Innings Turbulence" },
      {
        type: "p",
        text: "Chases in championship finals rarely conclude without drama. Gujarat briefly clawed their way back into contention through their premier match-winner, Rashid Khan.",
      },
      {
        type: "p",
        text: "Rashid broke through RCB's middle order, picking up Rajat Patidar and trapping Jitesh Sharma in rapid succession.",
      },
      {
        type: "p",
        text: "A flurry of quick dismissals saw RCB stumble from 104/1 to 132/5, setting off anxious ripples among the traveling red-and-gold supporters.",
      },
      {
        type: "p",
        text: "Yet, while chaos unfolded around him, Kohli remained ice-cold. He refused to let Rashid dictate terms, calmly picking singles against the Afghan leg-spinner before picking off boundary balls against the support pacers. Partnered by Tim David (24* off 17), Kohli ensured Gujarat’s window of opportunity slammed shut immediately.",
      },
      { type: "h2", text: "The Crowning Moment" },
      {
        type: "p",
        text: "Fittingly, the winning moment belonged entirely to RCB’s talisman. With just a handful of runs needed in the 18th over, Kohli stepped across to an overpitched delivery from Arshad Khan, lifting it cleanly into the Ahmedabad night sky over mid-wicket for a massive six.",
      },
      {
        type: "p",
        text: "The roar inside Narendra Modi Stadium shook the concrete as Kohli pumped his fists, leaped into the air, and embraced Tim David. Finishing unbeaten on 75 with nine boundaries and three towering sixes, he walked off as the undisputed Player of the Match.",
      },
      { type: "h2", text: "A Chapter of Immortality" },
      {
        type: "p",
        text: "This triumph carries monumental historic weight. By retaining the crown they first lifted in 2025, RCB joined Chennai Super Kings (2010–2011) and Mumbai Indians (2019–2020) as only the third team in IPL history to defend a title.",
      },
      {
        type: "p",
        text: "For years, critics questioned whether Kohli’s classical batsmanship could continually thrive as franchise cricket embraced frantic strike rates. In Ahmedabad, he gave his definitive answer: combining tactical game management with an unyielding strike rate of nearly 180 to anchor an IPL final chase. It was a vintage batting clinic that sealed Bengaluru's golden era in unforgettable fashion.",
      },
    ],
  },
];

export type Video = {
  id?: string;
  title: string;
  slug?: string;
  meta: string;
  /** External watch link (YouTube / IPL / etc.). Used when no Sanity upload exists. */
  href?: string;
  /** Sanity CDN URL for an uploaded MP4/WebM asset. */
  videoUrl?: string | null;
  videoMimeType?: string | null;
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
  {
    cap: "Orange Cap",
    name: "Vaibhav Sooryavanshi",
    team: "RR",
    stat: "776 runs · Avg 48.50 · SR 237.30",
    image: "/teams/players/rr/vaibhav-suryavanshi.avif",
    logo: "/teams/logos/rr.png",
  },
  {
    cap: "Purple Cap",
    name: "Kagiso Rabada",
    team: "GT",
    stat: "29 wickets · Best 3/25",
    image: "/teams/players/gt/kagiso-rabada.avif",
    logo: "/teams/logos/gt.png",
  },
  {
    cap: "MVP",
    name: "Vaibhav Sooryavanshi",
    team: "RR",
    stat: "436.55 points · 16 matches",
    image: "/teams/players/rr/vaibhav-suryavanshi.avif",
    logo: "/teams/logos/rr.png",
  },
  {
    cap: "Highest score",
    name: "KL Rahul",
    team: "DC",
    stat: "152 vs PBKS · SR 226.86",
    image: "/teams/players/dc/kl-rahul.avif",
    logo: "/teams/logos/dc.png",
  },
  {
    cap: "Fair Play",
    name: "Punjab Kings",
    team: "PBKS",
    stat: "Season award",
    image: "/teams/logos/pbks.png",
    logo: "/teams/logos/pbks.png",
  },
  {
    cap: "Player of the Final",
    name: "Virat Kohli",
    team: "RCB",
    stat: "75* off 42",
    image: "/teams/players/rcb/virat-kohli.avif",
    logo: "/teams/logos/rcb.png",
  },
];

/** Fill player/logo paths when Sanity awards omit media fields. */
export function withAwardMedia<T extends { cap: string; name: string; team: string; stat: string; image?: string; logo?: string }>(
  awards: T[],
) {
  const byCap = new Map(AWARDS_2026.map((a) => [a.cap, a]));
  return awards.map((award) => {
    const fallback = byCap.get(award.cap);
    return {
      ...award,
      image: award.image || fallback?.image,
      logo: award.logo || fallback?.logo,
    };
  });
}

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

/** Card backgrounds for Past winners — brand-aligned, tuned for white text. */
const WINNER_CARD_COLORS: Record<string, string> = {
  "Royal Challengers Bengaluru": "#c8102e",
  "Kolkata Knight Riders": "#3b0a45",
  "Chennai Super Kings": "#a86f00",
  "Gujarat Titans": "#1c3c78",
  "Mumbai Indians": "#004ba0",
  "Sunrisers Hyderabad": "#c44f12",
  "Deccan Chargers": "#1a1a1a",
  "Rajasthan Royals": "#c4166e",
};

const WINNER_TEAM_META: Record<string, { short: string; logo?: string }> = {
  "Royal Challengers Bengaluru": { short: "RCB", logo: "/teams/logos/rcb.png" },
  "Kolkata Knight Riders": { short: "KKR", logo: "/teams/logos/kkr.png" },
  "Chennai Super Kings": { short: "CSK", logo: "/teams/logos/csk.png" },
  "Gujarat Titans": { short: "GT", logo: "/teams/logos/gt.png" },
  "Mumbai Indians": { short: "MI", logo: "/teams/logos/mi.png" },
  "Sunrisers Hyderabad": { short: "SRH", logo: "/teams/logos/srh.png" },
  "Deccan Chargers": { short: "DC", logo: "/teams/logos/deccan-chargers.png" },
  "Rajasthan Royals": { short: "RR", logo: "/teams/logos/rr.png" },
};

export function winnerCardColor(teamName: string) {
  if (WINNER_CARD_COLORS[teamName]) return WINNER_CARD_COLORS[teamName];
  const team = TEAMS.find((t) => t.name === teamName);
  return team?.color ?? "#132e73";
}

export function winnerTeamMeta(teamName: string) {
  if (WINNER_TEAM_META[teamName]) return WINNER_TEAM_META[teamName];
  const team = TEAMS.find((t) => t.name === teamName);
  if (team) {
    return { short: team.short, logo: team.logo || `/teams/logos/${team.id}.png` };
  }
  return { short: teamName };
}

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
