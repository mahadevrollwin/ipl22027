import type { Metadata } from "next";
import { PageHero, Wrap } from "@/components/ui";
import { VideoCard } from "@/components/VideoCard";
import { getPage, getVideos } from "@/lib/cms";
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return buildPageMetadata(PAGE_SEO.videos);
}

export default async function VideosPage() {
  const [page, videos] = await Promise.all([getPage("videos"), getVideos()]);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="py-16">
        <Wrap className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v) => (
            <VideoCard key={v.title} {...v} />
          ))}
        </Wrap>
      </section>
    </>
  );
}
