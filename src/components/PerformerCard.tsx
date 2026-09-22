import Image from "next/image";

export type PerformerAward = {
  cap: string;
  name: string;
  team: string;
  stat: string;
  image?: string;
  logo?: string;
};

export function PerformerCard({ award }: { award: PerformerAward }) {
  const isTeamAward = award.cap === "Fair Play";

  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_24px_rgb(19_46_115_/_0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgb(19_46_115_/_0.12)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(180deg,#f4f7fd_0%,#e8eef9_55%,#dce6f5_100%)]">
        {award.logo ? (
          <div className="absolute top-3 right-3 z-10 grid size-11 place-items-center rounded-full bg-white/90 p-1.5 shadow-sm ring-1 ring-line sm:size-12">
            <Image
              src={award.logo}
              alt={`${award.team} logo`}
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
        ) : null}

        {award.image ? (
          <Image
            src={award.image}
            alt={award.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className={
              isTeamAward
                ? "object-contain p-10 transition duration-500 group-hover:scale-105 sm:p-12"
                : "object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            }
          />
        ) : (
          <div className="grid h-full place-items-center text-5xl font-extrabold text-navy/20">
            {award.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
      </div>

      <div className="border-t border-line p-4 sm:p-5">
        <div className="text-xs font-bold tracking-[0.16em] text-ipl uppercase">{award.cap}</div>
        <h3 className="mt-2 text-xl leading-tight font-extrabold text-navy sm:text-2xl">{award.name}</h3>
        <p className="mt-1.5 text-sm text-muted">
          {award.team} · {award.stat}
        </p>
      </div>
    </article>
  );
}
