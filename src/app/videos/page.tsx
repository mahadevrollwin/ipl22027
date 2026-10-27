import type { Metadata } from "next";
import { AdLargeRectangle } from "@/components/AdSlot";
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
        <Wrap>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {videos.slice(0, 4).map((v) => (
              <VideoCard key={v.title} {...v} />
            ))}
          </div>
          {videos.length > 4 ? (
            <AdLargeRectangle slotId="videos-list-mid-336x280" />
          ) : (
            <AdLargeRectangle slotId="videos-list-mid-336x280" className="pt-8" />
          )}
          {videos.length > 4 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {videos.slice(4).map((v) => (
                <VideoCard key={v.title} {...v} />
              ))}
            </div>
          ) : null}
        </Wrap>
      </section>
    </>
  );
}
