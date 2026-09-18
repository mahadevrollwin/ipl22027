import Image from "next/image";
import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="IPL 2027 Live home">
      <Image
        src="/ipl-logo.webp"
        alt="TATA IPL"
        width={160}
        height={64}
        className="h-11 w-auto"
        priority
      />
      <span
        className={`text-[11px] font-bold tracking-[0.18em] uppercase ${
          light ? "text-gold" : "text-ipl"
        }`}
      >
        2027
      </span>
    </Link>
  );
}
