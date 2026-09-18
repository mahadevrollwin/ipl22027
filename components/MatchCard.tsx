import { TeamBadge } from "@/components/TeamBadge";
import type { Match, Team } from "@/lib/data";
import { TEAMS } from "@/lib/data";

export function MatchCard({ match, teams = TEAMS }: { match: Match; teams?: Team[] }) {
  const home = teams.find((team) => team.short === match.home);
  const away = teams.find((team) => team.short === match.away);
  return (
    <article className="grid items-center gap-4 rounded-[18px] border border-line bg-bg-2 p-[18px] md:grid-cols-[minmax(180px,0.7fr)_1.2fr_auto]">
      <div>
        <div className="text-xs font-bold tracking-wider text-ipl uppercase">
          {match.round || `Match ${match.n}`}
        </div>
        <div className="text-xs text-faint">
          {match.date} · {match.time}
        </div>
        <div className="text-[13px] text-muted">{match.venue}</div>
      </div>
      <div className="flex items-center gap-3 font-extrabold">
        {home ? <TeamBadge short={home.short} color={home.color} /> : null}
        {match.home}
        <em className="text-xs not-italic text-faint">VS</em>
        {away ? <TeamBadge short={away.short} color={away.color} /> : null}
        {match.away}
      </div>
      <div className="text-sm font-bold text-ipl">{match.result}</div>
    </article>
  );
}
