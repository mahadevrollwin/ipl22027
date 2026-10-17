const COVER_ITEMS = [
  {
    title: "Latest IPL News",
    text: "Updates on teams, players, coaches, and important developments.",
  },
  {
    title: "IPL 2027 Schedule",
    text: "Match fixtures, dates, timings, and venue information as they become available.",
  },
  {
    title: "Teams and Squads",
    text: "Information about IPL franchises, team combinations, and player line-ups.",
  },
  {
    title: "Auction and Player Updates",
    text: "News about player auctions, retentions, releases, and transfer developments.",
  },
  {
    title: "Points Table and Standings",
    text: "Team positions, match results, wins, losses, and net run rate information.",
  },
  {
    title: "Player Statistics",
    text: "Batting, bowling, performance records, and other cricket statistics.",
  },
  {
    title: "IPL Records and History",
    text: "Memorable performances, past champions, and significant moments from previous seasons.",
  },
] as const;

const WHY_ITEMS = [
  {
    title: "Fan-Focused Content",
    text: "Information created around the topics IPL fans care about.",
  },
  {
    title: "Easy Navigation",
    text: "A simple browsing experience that helps readers find relevant updates.",
  },
  {
    title: "Regular Updates",
    text: "Coverage of important developments as information becomes available.",
  },
  {
    title: "Comprehensive Coverage",
    text: "News, teams, fixtures, statistics, auction developments, and more.",
  },
  {
    title: "Passion for Cricket",
    text: "A commitment to celebrating the excitement and spirit of the IPL.",
  },
] as const;

function SectionTitle({ children }: { children: string }) {
  return <h2 className="mt-10 text-2xl font-extrabold text-navy sm:mt-12">{children}</h2>;
}

function Paragraph({ children }: { children: string }) {
  return <p className="mt-3.5 text-[17px] leading-relaxed text-muted">{children}</p>;
}

function BulletList({
  items,
}: {
  items: ReadonlyArray<{ title: string; text: string }>;
}) {
  return (
    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[17px] leading-relaxed text-muted sm:pl-6">
      {items.map((item) => (
        <li key={item.title}>
          <strong className="font-bold text-navy">{item.title}:</strong> {item.text}
        </li>
      ))}
    </ul>
  );
}

export function AboutContent() {
  return (
    <article className="mx-auto max-w-[760px]">
      <Paragraph>
        Welcome to IPL2027.co, your destination for the latest news, updates, and information about
        the Indian Premier League (IPL) 2027. We are passionate about cricket and dedicated to
        bringing fans closer to the excitement, competition, and unforgettable moments of the IPL.
      </Paragraph>
      <Paragraph>
        From the latest team news and player updates to auction developments, match schedules,
        points tables, and team statistics, our goal is to make it easier for cricket lovers to
        follow everything happening around IPL 2027 in one place.
      </Paragraph>

      <SectionTitle>Our Mission</SectionTitle>
      <Paragraph>
        Our mission is to keep IPL fans informed, engaged, and connected throughout the cricket
        season. We aim to present cricket-related information in a clear, accessible, and
        reader-friendly format so fans can easily follow their favourite teams, players, and the
        latest developments.
      </Paragraph>
      <Paragraph>
        We believe cricket is more than just a game. It is a shared passion that brings millions of
        people together, creates lasting memories, and inspires fans across the world.
      </Paragraph>

      <SectionTitle>What We Cover</SectionTitle>
      <Paragraph>
        At IPL2027.co, we aim to provide a wide range of IPL-related content, including:
      </Paragraph>
      <BulletList items={COVER_ITEMS} />
      <Paragraph>
        Our aim is to help readers find useful IPL information without having to search across
        multiple websites.
      </Paragraph>

      <SectionTitle>Why Choose IPL2027.co?</SectionTitle>
      <Paragraph>
        We understand how important timely and reliable information is to cricket fans. That is why
        we strive to make our content informative, easy to navigate, and relevant to the interests of
        IPL followers.
      </Paragraph>
      <Paragraph>Our approach focuses on:</Paragraph>
      <BulletList items={WHY_ITEMS} />
      <Paragraph>
        We aim to distinguish confirmed information from speculation and encourage readers to verify
        important announcements through official sources.
      </Paragraph>

      <SectionTitle>Our Vision</SectionTitle>
      <Paragraph>
        Our vision is to build a useful online destination for IPL enthusiasts who want to stay
        informed about every major development leading up to and throughout the IPL 2027 season.
      </Paragraph>
      <Paragraph>
        We want IPL2027.co to be a place where fans can follow the tournament, explore team
        information, discover player performances, and enjoy the stories that make the Indian Premier
        League one of cricket&apos;s most exciting competitions.
      </Paragraph>

      <SectionTitle>Join Us for IPL 2027</SectionTitle>
      <Paragraph>
        The excitement of IPL is about more than boundaries, wickets, and trophies. It is about
        rivalries, teamwork, rising stars, unforgettable finishes, and the millions of fans who make
        every season special.
      </Paragraph>
      <Paragraph>
        Whether you support a particular franchise or simply love watching great cricket, IPL2027.co
        is here to help you stay connected with the action.
      </Paragraph>
      <Paragraph>
        Thank you for visiting IPL2027.co and being part of our cricket-loving audience. Stay
        connected, explore our latest updates, and get ready for another exciting chapter of IPL
        cricket!
      </Paragraph>
      <p className="mt-6 text-[17px] leading-relaxed font-extrabold text-navy">
        IPL2027.co – Stay Updated. Stay Connected. Live the IPL.
      </p>

      <aside className="mt-10 rounded-2xl border border-line bg-bg-2 p-5 sm:mt-12 sm:p-6">
        <h2 className="text-lg font-extrabold text-navy sm:text-xl">Disclaimer</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">
          IPL2027.co is an independent informational website created for cricket fans. We are not the
          official website of the Indian Premier League (IPL) and are not affiliated with, endorsed
          by, or officially associated with the Board of Control for Cricket in India (BCCI), IPL
          franchises, or their official partners. All team names, logos, trademarks, and related
          materials belong to their respective owners. We aim to provide useful information for
          general informational and entertainment purposes, and readers should refer to official
          sources for confirmed announcements and updates.
        </p>
      </aside>
    </article>
  );
}
