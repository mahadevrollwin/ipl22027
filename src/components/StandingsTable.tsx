import Link from "next/link";
import { FormPips, TeamBadge } from "@/components/TeamBadge";

export type StandingRow = {
  id: string;
  short: string;
  name: string;
  color: string;
  p: number;
  w: number;
  l: number;
  nr: number;
  nrr: string;
  pts: number;
  pos: number;
  form: string;
  qualified: boolean;
};

export function StandingsTable({ rows }: { rows: StandingRow[] }) {
  return (
    <div className="overflow-x-auto rounded-[22px] border border-line bg-bg-2">
      <table className="w-full min-w-[780px] border-collapse text-sm">
        <thead>
          <tr>
            {["#", "Team", "P", "W", "L", "NR", "NRR", "Pts", "Form"].map((h) => (
              <th
                key={h}
                className="px-4 py-3.5 text-left text-[11px] font-bold tracking-widest text-faint uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-line">
              <td className="px-4 py-3.5">{r.pos}</td>
              <td className="px-4 py-3.5">
                <Link href={`/teams/${r.id}`} className="flex items-center gap-2.5 font-bold">
                  <TeamBadge short={r.short} color={r.color} />
                  {r.short}
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      r.qualified ? "bg-ipl/10 text-ipl" : "bg-bg-4 text-muted"
                    }`}
                  >
                    {r.qualified ? "Q" : "E"}
                  </span>
                </Link>
              </td>
              <td className="px-4 py-3.5">{r.p}</td>
              <td className="px-4 py-3.5">{r.w}</td>
              <td className="px-4 py-3.5">{r.l}</td>
              <td className="px-4 py-3.5">{r.nr}</td>
              <td className="px-4 py-3.5">{r.nrr}</td>
              <td className="px-4 py-3.5">
                <b>{r.pts}</b>
              </td>
              <td className="px-4 py-3.5">
                <FormPips form={r.form} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
