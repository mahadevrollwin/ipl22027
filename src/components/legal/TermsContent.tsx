import {
  LegalArticle,
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalTitle,
  LegalUpdated,
} from "@/components/legal/LegalProse";

export function TermsContent() {
  return (
    <LegalArticle>
      <LegalUpdated>Last Updated: October 17, 2026</LegalUpdated>

      <LegalTitle>1. Introduction</LegalTitle>
      <LegalParagraph>
        Welcome to IPL2027.co (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or &quot;the Website&quot;).
      </LegalParagraph>
      <LegalParagraph>
        These Terms and Conditions govern your access to and use of{" "}
        <LegalLink href="https://www.ipl2027.co/">https://www.ipl2027.co/</LegalLink>, including all
        content, information, features, and services made available through the Website.
      </LegalParagraph>
      <LegalParagraph>
        By accessing or using IPL2027.co, you agree to comply with these Terms and Conditions. If you
        do not agree with any part of these terms, please discontinue using the Website.
      </LegalParagraph>

      <LegalTitle>2. Purpose of the Website</LegalTitle>
      <LegalParagraph>
        IPL2027.co is an independent informational website created for cricket fans. We aim to provide
        content related to the Indian Premier League (IPL), including:
      </LegalParagraph>
      <LegalList
        items={[
          "IPL news and updates",
          "Match schedules, fixtures, and results",
          "Team and squad information",
          "Player profiles and statistics",
          "Auction news and player updates",
          "Points tables and tournament standings",
          "Cricket records and related information",
        ]}
      />
      <LegalParagraph>
        All content is provided for general informational and entertainment purposes. We do not
        guarantee that every feature or category will always be available or updated in real time.
      </LegalParagraph>

      <LegalTitle>3. Independent Website Disclaimer</LegalTitle>
      <LegalParagraph>
        IPL2027.co is not the official website of the Indian Premier League (IPL) and is not
        affiliated with, endorsed by, or officially associated with the Board of Control for Cricket
        in India (BCCI), the IPL governing body, or any IPL franchise unless expressly stated
        otherwise.
      </LegalParagraph>
      <LegalParagraph>
        All trademarks, team names, logos, images, and other identifying materials belong to their
        respective owners. Their appearance on this Website does not imply any partnership,
        sponsorship, or endorsement.
      </LegalParagraph>

      <LegalTitle>4. Acceptance of Terms</LegalTitle>
      <LegalParagraph>
        By using this Website, you confirm that you have read, understood, and agreed to these Terms
        and Conditions, together with any applicable policies published on the Website.
      </LegalParagraph>
      <LegalParagraph>
        We may update these terms from time to time. Any revised version will be published on this
        page with an updated &quot;Last Updated&quot; date. Your continued use of the Website after
        changes are published constitutes acceptance of the revised terms, to the extent permitted by
        applicable law.
      </LegalParagraph>

      <LegalTitle>5. Accuracy of Information</LegalTitle>
      <LegalParagraph>
        We make reasonable efforts to provide useful and accurate cricket-related information.
        However, match schedules, player squads, auction details, statistics, results, and other
        tournament information may change or contain errors.
      </LegalParagraph>
      <LegalParagraph>
        We do not warrant that all information on the Website is complete, accurate, current, or
        error-free. Information should be independently verified through official IPL, BCCI, team, or
        other relevant sources when accuracy is important.
      </LegalParagraph>
      <LegalParagraph>
        We are not responsible for decisions made solely on the basis of information published on
        this Website, subject to applicable law.
      </LegalParagraph>

      <LegalTitle>6. Acceptable Use</LegalTitle>
      <LegalParagraph>You agree to use IPL2027.co only for lawful purposes. You must not:</LegalParagraph>
      <LegalList
        items={[
          "Use the Website in violation of applicable laws or regulations.",
          "Attempt to gain unauthorized access to the Website, its servers, or related systems.",
          "Introduce malware, viruses, or other harmful code.",
          "Attempt to disrupt, damage, or interfere with the Website's functionality.",
          "Scrape, copy, or collect Website content through automated means in a manner that violates applicable law or our rights.",
          "Use Website content for unlawful, fraudulent, or misleading purposes.",
          "Misrepresent your affiliation with IPL2027.co.",
        ]}
      />
      <LegalParagraph>
        We reserve the right to restrict access to the Website where reasonably necessary to protect
        our services, users, or legal rights.
      </LegalParagraph>

      <LegalTitle>7. Intellectual Property Rights</LegalTitle>
      <LegalParagraph>
        Unless otherwise indicated, original text, website design, graphics, branding, and other
        materials created by IPL2027.co are protected by applicable intellectual property laws.
      </LegalParagraph>
      <LegalParagraph>
        You may access and use the content for personal, non-commercial purposes. You must not
        reproduce, republish, redistribute, sell, modify, or commercially exploit our original
        content without prior written permission, except where permitted by law.
      </LegalParagraph>
      <LegalParagraph>
        Third-party trademarks, images, logos, and materials remain the property of their respective
        owners. Their use is subject to the applicable rights and permissions of those owners.
      </LegalParagraph>
      <LegalParagraph>
        If you believe that material published on this Website infringes your intellectual property
        rights, please contact us with the relevant details so that we can review the matter.
      </LegalParagraph>

      <LegalTitle>8. Third-Party Links</LegalTitle>
      <LegalParagraph>
        Our Website may contain links to external websites, services, or resources for additional
        information and convenience.
      </LegalParagraph>
      <LegalParagraph>
        We do not own or control these third-party websites and are not responsible for their
        content, accuracy, availability, privacy practices, or terms of use.
      </LegalParagraph>
      <LegalParagraph>
        Visiting an external website through a link on IPL2027.co is at your own discretion and risk.
        You should review the relevant third-party policies before using those services.
      </LegalParagraph>

      <LegalTitle>9. Advertising and Affiliate Links</LegalTitle>
      <LegalParagraph>
        IPL2027.co may display advertisements or include affiliate links in the future, where
        applicable.
      </LegalParagraph>
      <LegalParagraph>
        Third-party advertisers and advertising partners may use cookies or similar technologies in
        accordance with their own policies and applicable law. We do not control every aspect of
        third-party advertising services.
      </LegalParagraph>
      <LegalParagraph>
        Where required by applicable law, we will provide appropriate disclosures regarding
        advertisements, sponsorships, or affiliate relationships. The presence of an advertisement
        does not necessarily constitute an endorsement of the advertised product or service.
      </LegalParagraph>

      <LegalTitle>10. Privacy and Cookies</LegalTitle>
      <LegalParagraph>
        Your use of the Website may involve the collection or processing of certain information,
        depending on the features you use and the technologies enabled on the Website.
      </LegalParagraph>
      <LegalParagraph>
        Please review our <LegalLink href="/privacy">Privacy Policy</LegalLink> for information
        about how personal information, cookies, and related technologies are handled.
      </LegalParagraph>
      <LegalParagraph>
        Where required by applicable law, we will provide appropriate notices and obtain consent for
        relevant data processing or cookie use.
      </LegalParagraph>

      <LegalTitle>11. Limitation of Liability</LegalTitle>
      <LegalParagraph>
        To the maximum extent permitted by applicable law, IPL2027.co and its operators shall not be
        liable for indirect, incidental, special, consequential, or punitive damages arising from or
        related to your use of, or inability to use, the Website.
      </LegalParagraph>
      <LegalParagraph>
        This includes losses arising from reliance on inaccurate or outdated information, temporary
        Website unavailability, technical errors, or third-party websites and services.
      </LegalParagraph>
      <LegalParagraph>
        Nothing in these Terms and Conditions excludes or limits any liability or consumer rights
        that cannot lawfully be excluded or limited under applicable law.
      </LegalParagraph>

      <LegalTitle>12. No Professional Advice</LegalTitle>
      <LegalParagraph>
        The content published on IPL2027.co is intended for general informational and entertainment
        purposes only. It does not constitute legal, financial, investment, or other professional
        advice.
      </LegalParagraph>
      <LegalParagraph>
        You are responsible for independently assessing information before relying on it for any
        purpose.
      </LegalParagraph>

      <LegalTitle>13. Indemnification</LegalTitle>
      <LegalParagraph>
        To the extent permitted by applicable law, you agree to be responsible for losses, claims,
        liabilities, and reasonable expenses arising directly from your unlawful use of the Website
        or your material violation of these Terms and Conditions.
      </LegalParagraph>
      <LegalParagraph>
        Nothing in this section creates obligations that cannot lawfully be imposed on you under
        applicable law.
      </LegalParagraph>

      <LegalTitle>14. Website Availability and Changes</LegalTitle>
      <LegalParagraph>
        We reserve the right to modify, suspend, discontinue, or remove any part of the Website or
        its content at any time, where reasonably necessary and subject to applicable law.
      </LegalParagraph>
      <LegalParagraph>
        We do not guarantee uninterrupted, secure, or error-free access to the Website at all times.
      </LegalParagraph>

      <LegalTitle>15. Governing Law</LegalTitle>
      <LegalParagraph>
        These Terms and Conditions shall be governed by the applicable laws of India, without
        prejudice to any mandatory consumer protection rights or other legal protections available to
        users under applicable law.
      </LegalParagraph>
      <LegalParagraph>
        Any disputes relating to the Website or these terms shall be handled by the competent courts
        or authorities having jurisdiction under applicable law.
      </LegalParagraph>

      <LegalTitle>16. Changes to These Terms</LegalTitle>
      <LegalParagraph>
        We may revise these Terms and Conditions to reflect changes in our Website, services, legal
        obligations, or business practices.
      </LegalParagraph>
      <LegalParagraph>
        The latest version will be available on this page, together with the date of the most recent
        update. We encourage users to review this page periodically.
      </LegalParagraph>

      <LegalTitle>17. Contact Us</LegalTitle>
      <LegalParagraph>
        If you have questions about these Terms and Conditions, wish to report an issue, or believe
        that content on our Website infringes your rights, please contact us through the contact
        details provided on our Website.
      </LegalParagraph>
      <LegalParagraph>
        Website: <LegalLink href="https://www.ipl2027.co/">https://www.ipl2027.co/</LegalLink>
      </LegalParagraph>
      <LegalParagraph>
        Email: <LegalLink href="mailto:rollwin.seo@gmail.com">rollwin.seo@gmail.com</LegalLink>
      </LegalParagraph>
      <LegalParagraph>We will review your inquiry and respond as appropriate.</LegalParagraph>
      <LegalParagraph>
        Thank you for visiting IPL2027.co. By using our Website, you acknowledge that you have read
        and understood these Terms and Conditions.
      </LegalParagraph>
    </LegalArticle>
  );
}
