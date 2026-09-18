import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto w-[min(760px,calc(100%-40px))] py-24">
      <p className="text-xs font-bold tracking-[0.18em] text-ipl uppercase">404</p>
      <h1 className="mt-3 text-[clamp(40px,7vw,64px)] leading-none font-extrabold">
        Page not found.
      </h1>
      <p className="mt-4 text-muted">That route isn’t on the Season 20 map.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ipl px-5 font-bold text-white"
      >
        Back home
      </Link>
    </section>
  );
}
