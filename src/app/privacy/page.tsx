import type { Metadata } from "next";
import { AdMediumRectangle } from "@/components/AdSlot";
import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { PageHero, Wrap } from "@/components/ui";
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.privacy);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        lede="How IPL2027.co handles personal information, cookies, and related technologies."
      />
      <section className="py-12 sm:py-16">
        <Wrap>
          <PrivacyContent />
          <AdMediumRectangle slotId="privacy-mid-300x250" />
        </Wrap>
      </section>
    </>
  );
}
