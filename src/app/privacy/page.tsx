import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { PageHero, Wrap } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for IPL2027.co — how we handle personal information, cookies, analytics, and advertising. Last updated October 17, 2026.",
};

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
        </Wrap>
      </section>
    </>
  );
}
