import type { Metadata } from "next";
import { ContactContent } from "@/components/legal/ContactContent";
import { PageHero, Wrap } from "@/components/ui";
import { buildPageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.contact);

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title="Contact Us"
        lede="We value your feedback and are always happy to hear from our readers."
      />
      <section className="py-12 sm:py-16">
        <Wrap>
          <ContactContent />
        </Wrap>
      </section>
    </>
  );
}
