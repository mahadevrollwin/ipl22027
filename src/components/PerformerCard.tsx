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
    <article className="group h-full overflow-hidden rounded-xl border border-line bg-white shadow-[0_6px_18px_rgb(19_46_115_/_0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgb(19_46_115_/_0.1)]">
      <div className="relative aspect-[5/4] overflow-hidden bg-[linear-gradient(180deg,#f4f7fd_0%,#e8eef9_55%,#dce6f5_100%)]">
        {award.logo ? (
          <div className="absolute top-2.5 right-2.5 z-10 grid size-9 place-items-center rounded-full bg-white/90 p-1 shadow-sm ring-1 ring-line">
            <Image
              src={award.logo}
              alt={`${award.team} logo`}
              width={32}
              height={32}
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
                ? "object-contain p-8 transition duration-500 group-hover:scale-105"
                : "object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            }
          />
        ) : (
          <div className="grid h-full place-items-center text-4xl font-extrabold text-navy/20">
            {award.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
      </div>

      <div className="border-t border-line px-3.5 py-3 sm:px-4 sm:py-3.5">
        <div className="text-[11px] font-bold tracking-[0.14em] text-ipl uppercase">{award.cap}</div>
        <h3 className="mt-1 text-base leading-snug font-extrabold text-navy sm:text-lg">{award.name}</h3>
        <p className="mt-1 text-xs leading-snug text-muted sm:text-[13px]">
          {award.team} · {award.stat}
        </p>
      </div>
    </article>
  );
}
