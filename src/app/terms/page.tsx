import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";
import { PageHero, Wrap } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using IPL2027.co — an independent IPL informational website. Last updated October 17, 2026.",
};

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
        </Wrap>
      </section>
    </>
  );
}
