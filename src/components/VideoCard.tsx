import { isDirectVideoUrl } from "@/lib/video";

export function VideoCard({
  title,
  meta,
  href,
  thumbUrl,
}: {
  title: string;
  meta: string;
  href: string;
  thumbUrl?: string;
}) {
  if (isDirectVideoUrl(href)) {
    return (
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#19398A,#0C1F5C)]">
          <video
            controls
            playsInline
            preload="metadata"
            poster={thumbUrl}
            className="aspect-video h-auto w-full bg-black object-contain"
            src={href}
          >
            <track kind="captions" />
          </video>
          <span className="pointer-events-none absolute right-2 bottom-2 rounded bg-black/70 px-1.5 text-[10px] font-bold text-white">
            {meta.split(" · ")[0]}
          </span>
        </div>
        <div className="p-3.5">
          <h3 className="text-[15px] leading-snug font-bold text-navy">{title}</h3>
          <p className="mt-1 text-xs font-semibold text-faint">{meta}</p>
        </div>
      </article>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden rounded-2xl bg-white shadow-sm"
    >
      <div className="relative grid h-[140px] place-items-center overflow-hidden bg-[linear-gradient(135deg,#19398A,#0C1F5C)] text-2xl text-white">
        {thumbUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : null}
        <span className="relative z-[1]">▶</span>
        <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 text-[10px] font-bold">
          {meta.split(" · ")[0]}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="text-[15px] leading-snug font-bold text-navy">{title}</h3>
        <p className="mt-1 text-xs font-semibold text-faint">{meta}</p>
      </div>
    </a>
  );
}
