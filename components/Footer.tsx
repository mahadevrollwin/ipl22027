import Link from "next/link";
import { Brand } from "@/components/Brand";

export function Footer() {
  return (
    <footer className="relative z-[1] mt-6 bg-navy pt-12 pb-6 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand light />
          <p className="mt-3.5 text-sm text-white/70">
            Unofficial companion for IPL 2027 news, auction watch, points, squads and Season 20.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold">Explore</h3>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/points-table">
            Points table
          </Link>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/matches">
            Matches
          </Link>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/teams">
            Teams
          </Link>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/videos">
            Videos
          </Link>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/blogs">
            Blogs
          </Link>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold">Season</h3>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/news">
            News
          </Link>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/news/auction-india">
            Auction
          </Link>
          <Link className="my-1.5 block text-sm text-white/75 hover:text-white" href="/about">
            About & FAQ
          </Link>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold">Official</h3>
          <a
            className="my-1.5 block text-sm text-white/75 hover:text-white"
            href="https://www.iplt20.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iplt20.com
          </a>
          <a
            className="my-1.5 block text-sm text-white/75 hover:text-white"
            href="https://www.bcci.tv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BCCI
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-[min(1180px,calc(100%-40px))] flex-wrap justify-between gap-3 border-t border-white/15 pt-4 text-xs text-white/55">
        <span>© 2026 IPL2027 Live. Unofficial fan site. Not affiliated with BCCI or the Indian Premier League.</span>
        <span>Team names are used for identification only.</span>
      </div>
    </footer>
  );
}
