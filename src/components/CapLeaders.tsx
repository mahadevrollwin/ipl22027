import Image from "next/image";
import type { ReactNode } from "react";
import type { OrangeCapPlayer, PurpleCapPlayer } from "@/lib/data";
import { Wrap } from "@/components/ui";

function PlayerPhoto({ name, image }: { name: string; image?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-bg-3 ring-1 ring-line sm:size-11">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={44}
          height={44}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <span className="text-[11px] font-extrabold text-navy/45">{initials}</span>
      )}
    </span>
  );
}

function CapCardShell({
  title,
  accentClass,
  children,
}: {
  title: string;
  accentClass: string;
  children: ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_18px_rgb(19_46_115_/_0.05)]">
      <div className={`border-b border-line px-4 py-3.5 sm:px-5 sm:py-4 ${accentClass}`}>
        <h2 className="text-[17px] font-extrabold tracking-tight text-navy sm:text-lg">{title}</h2>
        <p className="mt-0.5 text-xs font-semibold text-muted">IPL 2026 · Top 5</p>
      </div>
      {children}
    </article>
  );
}

function OrangeCapCard({ players }: { players: OrangeCapPlayer[] }) {
  return (
    <CapCardShell title="Orange Cap" accentClass="bg-gradient-to-r from-[#fff8e8] to-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr>
              {["#", "Player", "Runs", "SR", "Avg"].map((h) => (
                <th
                  key={h}
                  className="px-3 py-2.5 text-left text-[11px] font-bold tracking-widest text-faint uppercase sm:px-4"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.rank} className="border-t border-line">
                <td className="px-3 py-3 font-bold text-navy sm:px-4">{player.rank}</td>
                <td className="px-3 py-3 sm:px-4">
                  <div className="flex items-center gap-2.5">
                    <PlayerPhoto name={player.name} image={player.image} />
                    <div className="min-w-0">
                      <div className="truncate font-bold text-navy">{player.name}</div>
                      <div className="text-[11px] font-semibold text-faint">{player.team}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 font-extrabold text-navy sm:px-4">{player.runs}</td>
                <td className="px-3 py-3 text-muted sm:px-4">{player.strikeRate}</td>
                <td className="px-3 py-3 text-muted sm:px-4">{player.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CapCardShell>
  );
}

function PurpleCapCard({ players }: { players: PurpleCapPlayer[] }) {
  return (
    <CapCardShell title="Purple Cap" accentClass="bg-gradient-to-r from-[#f0eef8] to-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr>
              {["#", "Player", "Wkts", "Econ", "Best"].map((h) => (
                <th
                  key={h}
                  className="px-3 py-2.5 text-left text-[11px] font-bold tracking-widest text-faint uppercase sm:px-4"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.rank} className="border-t border-line">
                <td className="px-3 py-3 font-bold text-navy sm:px-4">{player.rank}</td>
                <td className="px-3 py-3 sm:px-4">
                  <div className="flex items-center gap-2.5">
                    <PlayerPhoto name={player.name} image={player.image} />
                    <div className="min-w-0">
                      <div className="truncate font-bold text-navy">{player.name}</div>
                      <div className="text-[11px] font-semibold text-faint">{player.team}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 font-extrabold text-navy sm:px-4">{player.wickets}</td>
                <td className="px-3 py-3 text-muted sm:px-4">{player.economy}</td>
                <td className="px-3 py-3 text-muted sm:px-4">{player.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CapCardShell>
  );
}

export function CapLeaders({
  orange,
  purple,
}: {
  orange: OrangeCapPlayer[];
  purple: PurpleCapPlayer[];
}) {
  return (
    <section className="py-12">
      <Wrap>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          <OrangeCapCard players={orange} />
          <PurpleCapCard players={purple} />
        </div>
      </Wrap>
    </section>
  );
}
