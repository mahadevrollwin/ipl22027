import type { Metadata } from "next";
import { AdMediumRectangle } from "@/components/AdSlot";
import { TermsContent } from "@/components/legal/TermsContent";
import { PageHero, Wrap } from "@/components/ui";
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.terms);

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms and Conditions"
        lede="Please read these terms carefully before using IPL2027.co."
      />
      <section className="py-12 sm:py-16">
        <Wrap>
          <TermsContent />
          <AdMediumRectangle slotId="terms-mid-300x250" />
        </Wrap>
      </section>
    </>
  );
}
