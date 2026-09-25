import Link from "next/link";
import type { Video } from "@/lib/data";
import { getPlayableVideoSrc } from "@/lib/video";

export function HeroVideos({ videos }: { videos: Video[] }) {
  const featured = videos.find((video) => video.featured) ?? videos[0];
  const rest = videos.filter((video) => video !== featured);
  if (!featured) return null;

  const featuredSrc = getPlayableVideoSrc(featured);

  return (
    <section className="ipl-rays">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-6 py-8 lg:grid-cols-[1.4fr_0.9fr]">
        {featuredSrc ? (
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#0c1f5c]">
            <video
              controls
              playsInline
              preload="metadata"
              poster={featured.thumbUrl}
              className="absolute inset-0 h-full w-full object-contain"
              src={featuredSrc}
            />
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 bg-[linear-gradient(180deg,transparent,rgb(8_20_60/0.92))] p-6 text-white">
              <p className="text-sm font-semibold text-gold">
                {featured.meta.split(" · ")[1] || "Video"}
              </p>
              <h1 className="mt-1 text-[28px] leading-tight font-extrabold md:text-[34px]">
                {featured.title}
              </h1>
              <p className="mt-2 text-sm text-white/75">{featured.meta}</p>
            </div>
          </div>
        ) : featured.href ? (
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#0c1f5c]"
          >
            {featured.thumbUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={featured.thumbUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgb(8_20_60/0.92))]" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-white text-2xl text-ipl">
                ▶
              </span>
            </div>
            <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-semibold text-gold">
                {featured.meta.split(" · ")[1] || "Video"}
              </p>
              <h1 className="mt-1 text-[28px] leading-tight font-extrabold md:text-[34px]">
                {featured.title}
              </h1>
              <p className="mt-2 text-sm text-white/75">{featured.meta}</p>
            </div>
          </a>
        ) : null}
        <div className="flex flex-col justify-center gap-4">
          {rest.slice(0, 4).map((v) => {
            const playable = Boolean(getPlayableVideoSrc(v));
            const linkHref = playable ? "/videos" : v.href;
            if (!linkHref) return null;
            return (
              <a
                key={v.title}
                href={linkHref}
                {...(playable ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="grid grid-cols-[1fr_110px] items-center gap-3 text-white"
              >
                <span className="text-[15px] leading-snug font-semibold">{v.title}</span>
                <span className="relative h-[68px] overflow-hidden rounded-xl bg-[#0c1f5c]">
                  {v.thumbUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={v.thumbUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <span className="absolute inset-0 bg-[linear-gradient(135deg,#19398a,#0c1f5c)]" />
                  )}
                  <span className="absolute right-1.5 bottom-1 rounded bg-black/70 px-1.5 text-[10px] font-bold">
                    {v.meta.split(" · ")[0]}
                  </span>
                </span>
              </a>
            );
          })}
          <Link href="/videos" className="self-start text-sm font-bold text-gold">
            More videos →
          </Link>
        </div>
      </div>
    </section>
  );
}
