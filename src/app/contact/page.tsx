import type { Metadata } from "next";
import { ContactContent } from "@/components/legal/ContactContent";
import { PageHero, Wrap } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact IPL2027.co with questions, feedback, or concerns. Email rollwin.seo@gmail.com — we aim to respond as soon as possible.",
};

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
