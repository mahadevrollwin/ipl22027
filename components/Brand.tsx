import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="IPL 2027 Live home">
      <span
        className={`grid h-11 w-11 place-items-center rounded-full border-2 font-extrabold leading-none ${
          light
            ? "border-gold bg-white text-ipl"
            : "border-gold bg-ipl text-white"
        }`}
      >
        27
      </span>
      <span className="flex flex-col leading-none">
        <strong className={`text-[22px] font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          IPL
        </strong>
        <span className={`text-[11px] font-bold tracking-[0.18em] uppercase ${light ? "text-gold" : "text-ipl"}`}>
          2027
        </span>
      </span>
    </Link>
  );
}
