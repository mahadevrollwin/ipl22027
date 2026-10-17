import { LegalArticle, LegalLink, LegalParagraph } from "@/components/legal/LegalProse";

export function ContactContent() {
  return (
    <LegalArticle>
      <LegalParagraph>
        Thank you for visiting IPL2027.co! We value your feedback and are always happy to hear from
        our readers.
      </LegalParagraph>
      <LegalParagraph>
        If you have any questions, suggestions, feedback, or concerns regarding our content, please
        contact us.
      </LegalParagraph>
      <LegalParagraph>
        Email: <LegalLink href="mailto:rollwin.seo@gmail.com">rollwin.seo@gmail.com</LegalLink>
      </LegalParagraph>
      <LegalParagraph>We will do our best to respond as soon as possible.</LegalParagraph>
      <LegalParagraph>Thank you for being part of our cricket-loving community!</LegalParagraph>
      <p className="mt-6 text-[17px] leading-relaxed font-extrabold text-navy">
        IPL2027.co – Your Destination for IPL Updates.
      </p>
    </LegalArticle>
  );
}
