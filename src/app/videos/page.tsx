import type { Metadata } from "next";
import { PageHero, Wrap } from "@/components/ui";
import { VideoCard } from "@/components/VideoCard";
import { getPage, getVideos } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("videos");
  return { title: page.seoTitle || "Videos", description: page.seoDescription || page.lede };
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
