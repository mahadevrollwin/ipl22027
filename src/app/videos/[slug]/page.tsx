import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Kicker } from "@/components/ui";
import { getVideoBySlug, getVideos } from "@/lib/cms";
import { getPlayableVideoSrc, getVideoSlug } from "@/lib/video";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const videos = await getVideos();
  return videos
    .filter((video) => getPlayableVideoSrc(video))
    .map((video) => ({ slug: getVideoSlug(video) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);
  if (!video) return { title: "Video" };
  return {
    title: video.title,
    description: video.meta,
  };
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [video, videos] = await Promise.all([getVideoBySlug(slug), getVideos()]);
  if (!video) notFound();

  const src = getPlayableVideoSrc(video);
  if (!src) {
    if (video.href) {
      return (
        <div className="mx-auto w-[min(760px,calc(100%-40px))] pt-10 pb-16">
          <Kicker>{video.meta}</Kicker>
          <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.1] font-extrabold text-navy">
            {video.title}
          </h1>
          <p className="mt-6">
            <a
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-ipl px-5 py-2.5 text-sm font-bold text-white"
            >
              Watch video →
            </a>
          </p>
          <p className="mt-7">
            <Link href="/videos" className="text-sm font-bold text-teal">
              ← All videos
            </Link>
          </p>
        </div>
      );
    }
    notFound();
  }

  const related = videos
    .filter((item) => getVideoSlug(item) !== getVideoSlug(video) && getPlayableVideoSrc(item))
    .slice(0, 4);

  return (
    <article className="mx-auto w-[min(960px,calc(100%-40px))] pt-10 pb-16">
      <Kicker>{video.meta}</Kicker>
      <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.1] font-extrabold text-navy">
        {video.title}
      </h1>
      <div className="mt-6 overflow-hidden rounded-2xl bg-[#0c1f5c]">
        <VideoPlayer
          src={src}
          poster={video.thumbUrl}
          showInterestingFrame
          className="aspect-video h-auto w-full bg-black object-contain"
        />
      </div>
      <p className="mt-7">
        <Link href="/videos" className="text-sm font-bold text-teal">
          ← All videos
        </Link>
      </p>

      {related.length ? (
        <section className="mt-10 border-t border-line pt-8">
          <p className="mb-5 text-xs font-bold tracking-[0.18em] text-ipl uppercase">More videos</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <VideoCard key={getVideoSlug(item)} {...item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
