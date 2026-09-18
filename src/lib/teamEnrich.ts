import type { Team, TeamPlayer } from "@/lib/data";
import teamMedia from "@/lib/teamMedia.json";

type TeamMedia = {
  logo: string;
  banner: string;
  trophyYears: string[];
  about: string[];
  summary: string;
  players: TeamPlayer[];
};

const MEDIA = teamMedia as Record<string, TeamMedia>;

export function enrichTeam(team: Team): Team {
  const media = MEDIA[team.id];
  if (!media) return team;
  return {
    ...team,
    logo: team.logo || media.logo,
    banner: team.banner || media.banner,
    trophyYears: team.trophyYears?.length ? team.trophyYears : media.trophyYears,
    about: team.about?.length ? team.about : media.about,
    summary: team.summary || media.summary,
    players: team.players?.length ? team.players : media.players,
  };
}

export function enrichTeams(teams: Team[]): Team[] {
  return teams.map(enrichTeam);
}

export function playerRoleGroup(role: string): "Batters" | "All-Rounders" | "Bowlers" | "Wicket-Keepers" {
  const lower = role.toLowerCase();
  if (lower.includes("wicket")) return "Wicket-Keepers";
  if (lower.includes("all")) return "All-Rounders";
  if (lower.includes("bowl")) return "Bowlers";
  return "Batters";
}

export function groupPlayersByRole(players: TeamPlayer[]) {
  const order = ["Batters", "Wicket-Keepers", "All-Rounders", "Bowlers"] as const;
  const groups = Object.fromEntries(order.map((key) => [key, [] as TeamPlayer[]])) as Record<
    (typeof order)[number],
    TeamPlayer[]
  >;
  for (const player of players) {
    groups[playerRoleGroup(player.role)].push(player);
  }
  return order
    .map((title) => ({ title, players: groups[title] }))
    .filter((group) => group.players.length > 0);
}
