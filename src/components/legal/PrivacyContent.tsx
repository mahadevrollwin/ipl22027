import {
  LegalArticle,
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalTitle,
  LegalUpdated,
} from "@/components/legal/LegalProse";

export function PrivacyContent() {
  return (
    <LegalArticle>
      <LegalUpdated>Last Updated: October 17, 2026</LegalUpdated>

      <LegalTitle>1. Introduction</LegalTitle>
      <LegalParagraph>
        Welcome to IPL2027.co (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or &quot;the Website&quot;).
      </LegalParagraph>
      <LegalParagraph>
        At IPL2027.co, accessible at{" "}
        <LegalLink href="https://www.ipl2027.co/">https://www.ipl2027.co/</LegalLink>, we respect
        your privacy and are committed to handling your personal information responsibly.
      </LegalParagraph>
      <LegalParagraph>
        This Privacy Policy explains what information may be collected when you visit our Website,
        how that information may be used, when it may be shared, and what choices may be available to
        you.
      </LegalParagraph>
      <LegalParagraph>
        By using our Website, you acknowledge this Privacy Policy. Where consent is required by
        applicable law, we will seek your consent before carrying out the relevant processing.
      </LegalParagraph>

      <LegalTitle>2. Information We May Collect</LegalTitle>
      <LegalParagraph>
        Depending on how you use our Website and which features are enabled, we may collect the
        following types of information.
      </LegalParagraph>

      <h3 className="mt-6 text-xl font-bold text-navy">A. Personal Information</h3>
      <LegalParagraph>
        We may collect personal information that you voluntarily provide when you contact us or
        communicate with us, such as:
      </LegalParagraph>
      <LegalList
        items={[
          "Your name.",
          "Your email address.",
          "Information included in your message or inquiry.",
          "Other details you choose to provide voluntarily.",
        ]}
      />
      <LegalParagraph>
        You can browse general informational content on our Website without necessarily providing
        your name or email address.
      </LegalParagraph>

      <h3 className="mt-6 text-xl font-bold text-navy">B. Automatically Collected Information</h3>
      <LegalParagraph>
        When you visit our Website, certain technical information may be collected automatically by
        our hosting provider, analytics tools, security services, or other technologies, where
        enabled. This may include:
      </LegalParagraph>
      <LegalList
        items={[
          "IP address.",
          "Browser type and version.",
          "Device type and operating system.",
          "Pages visited and time spent on pages.",
          "Referring website or page.",
          "Date and time of access.",
          "Basic diagnostic and security information.",
        ]}
      />
      <LegalParagraph>
        We use this information, where appropriate, to maintain website functionality, understand
        visitor activity, improve performance, and protect our services.
      </LegalParagraph>

      <h3 className="mt-6 text-xl font-bold text-navy">C. Cookies and Similar Technologies</h3>
      <LegalParagraph>
        Our Website or the third-party services used on it may use cookies, pixels, tags, or similar
        technologies.
      </LegalParagraph>
      <LegalParagraph>These technologies may help us:</LegalParagraph>
      <LegalList
        items={[
          "Operate and secure the Website.",
          "Remember certain preferences.",
          "Understand website traffic and performance.",
          "Measure the effectiveness of content.",
          "Support advertising and advertising measurement, where enabled.",
        ]}
      />
      <LegalParagraph>
        You can manage cookies through your browser settings and, where available or required,
        through our cookie consent controls. Disabling certain cookies may affect some Website
        features.
      </LegalParagraph>

      <LegalTitle>3. How We Use Information</LegalTitle>
      <LegalParagraph>
        We may use information collected through our Website for the following purposes:
      </LegalParagraph>
      <LegalList
        items={[
          "To operate, maintain, and improve IPL2027.co.",
          "To respond to questions, feedback, and other communications.",
          "To understand visitor interests and website usage.",
          "To identify technical issues and prevent fraudulent or harmful activity.",
          "To protect the security and integrity of our Website.",
          "To display and measure advertisements, where applicable.",
          "To comply with legal obligations and enforce our policies.",
        ]}
      />
      <LegalParagraph>
        We will process personal information only where we have an appropriate legal basis under
        applicable law, such as consent, legitimate use, or another legally permitted basis.
      </LegalParagraph>

      <LegalTitle>4. Google AdSense and Third-Party Advertising</LegalTitle>
      <LegalParagraph>
        IPL2027.co may display advertisements provided by third-party advertising networks, including
        Google AdSense, if such services are enabled on the Website.
      </LegalParagraph>
      <LegalParagraph>
        Third-party advertising providers may use cookies or similar technologies to display
        advertisements, measure performance, limit repeated advertisements, or personalize
        advertising where permitted.
      </LegalParagraph>
      <LegalParagraph>
        Google and its partners may process information in accordance with their own privacy policies
        and applicable requirements.
      </LegalParagraph>
      <LegalParagraph>
        For more information about how Google handles data in advertising products, please review:
      </LegalParagraph>
      <LegalList
        items={[
          <>
            Google Privacy Policy:{" "}
            <LegalLink href="https://policies.google.com/privacy">
              https://policies.google.com/privacy
            </LegalLink>
          </>,
          <>
            Google Ads Settings:{" "}
            <LegalLink href="https://adssettings.google.com/">https://adssettings.google.com/</LegalLink>
          </>,
        ]}
      />
      <LegalParagraph>
        If we use advertising services that require a consent management platform or specific user
        disclosures, we will implement the relevant measures as required by applicable law and the
        service provider&apos;s policies.
      </LegalParagraph>

      <LegalTitle>5. Analytics and Website Performance</LegalTitle>
      <LegalParagraph>
        We may use analytics services to understand how visitors interact with IPL2027.co, identify
        popular pages, monitor performance, and improve the user experience.
      </LegalParagraph>
      <LegalParagraph>
        These services may collect information such as page views, approximate location derived from
        technical information, device details, referral sources, and interaction data.
      </LegalParagraph>
      <LegalParagraph>
        If an analytics service is enabled, its provider may process information under its own terms
        and privacy policy. Where required, we will obtain consent before activating non-essential
        analytics technologies.
      </LegalParagraph>

      <LegalTitle>6. How We Share Information</LegalTitle>
      <LegalParagraph>
        We do not intend to sell personal information in exchange for money. However, certain
        advertising or analytics activities may involve the disclosure or processing of online
        identifiers and usage information by third parties. Where applicable law treats these
        activities as a sale, sharing, or targeted advertising, we will honor relevant legal
        obligations and available user choices.
      </LegalParagraph>
      <LegalParagraph>We may share information in the following circumstances:</LegalParagraph>
      <LegalList
        items={[
          <>
            <strong className="font-bold text-navy">Service providers:</strong> With hosting
            providers, security services, analytics providers, or other vendors that help operate the
            Website.
          </>,
          <>
            <strong className="font-bold text-navy">Advertising partners:</strong> With advertising
            providers where advertising services are enabled and the relevant processing is
            permitted.
          </>,
          <>
            <strong className="font-bold text-navy">Legal requirements:</strong> When disclosure is
            required by law, a valid legal process, or a competent authority.
          </>,
          <>
            <strong className="font-bold text-navy">Protection of rights:</strong> Where reasonably
            necessary to protect the Website, our users, or our legal rights.
          </>,
          <>
            <strong className="font-bold text-navy">Business changes:</strong> In connection with a
            merger, acquisition, restructuring, or transfer of Website operations, subject to
            applicable law.
          </>,
        ]}
      />
      <LegalParagraph>
        We seek to limit information sharing to what is reasonably necessary for the relevant
        purpose.
      </LegalParagraph>

      <LegalTitle>7. Third-Party Websites</LegalTitle>
      <LegalParagraph>
        Our Website may contain links to external websites, including official cricket websites, team
        websites, advertisers, and other information resources.
      </LegalParagraph>
      <LegalParagraph>
        We do not control the privacy practices, content, or security of these external websites.
        When you follow an external link, the third party&apos;s privacy policy and terms may apply.
      </LegalParagraph>
      <LegalParagraph>
        We recommend reviewing the relevant policies before submitting personal information to
        another website.
      </LegalParagraph>

      <LegalTitle>8. Data Retention</LegalTitle>
      <LegalParagraph>
        We retain personal information only for as long as reasonably necessary for the purposes
        described in this Privacy Policy, including responding to inquiries, maintaining security,
        meeting legal obligations, and resolving disputes.
      </LegalParagraph>
      <LegalParagraph>
        Retention periods may vary depending on the type of information, the purpose of processing,
        applicable law, and the requirements of our service providers.
      </LegalParagraph>
      <LegalParagraph>
        When information is no longer required, we will take reasonable steps to delete it or
        otherwise handle it in accordance with applicable law.
      </LegalParagraph>

      <LegalTitle>9. Data Security</LegalTitle>
      <LegalParagraph>
        We take reasonable technical and organizational measures to protect information against
        unauthorized access, alteration, disclosure, or destruction.
      </LegalParagraph>
      <LegalParagraph>
        However, no internet transmission or electronic storage system can be guaranteed to be
        completely secure. We therefore cannot guarantee absolute security of information transmitted
        to or stored by the Website.
      </LegalParagraph>
      <LegalParagraph>
        You should avoid sending confidential or sensitive personal information through ordinary
        website contact forms or unsecured communications.
      </LegalParagraph>

      <LegalTitle>10. Your Privacy Rights and Choices</LegalTitle>
      <LegalParagraph>
        Depending on your location and applicable law, you may have rights concerning your personal
        information, including the right to:
      </LegalParagraph>
      <LegalList
        items={[
          "Request access to personal information we hold about you.",
          "Request correction of inaccurate information.",
          "Request deletion of personal information where legally applicable.",
          "Withdraw consent where processing is based on consent.",
          "Object to or restrict certain processing where applicable.",
          "Request information about how your personal information is handled.",
          "Exercise applicable choices relating to cookies and personalized advertising.",
          "Lodge a complaint with the relevant data protection authority, where available.",
        ]}
      />
      <LegalParagraph>
        To exercise a privacy right, contact us using the details provided in the Contact Us section.
        We may need to verify your identity before fulfilling certain requests.
      </LegalParagraph>
      <LegalParagraph>
        We will respond to valid requests in accordance with applicable law. Some requests may be
        subject to legal exceptions or limitations.
      </LegalParagraph>

      <LegalTitle>11. Children&apos;s Privacy</LegalTitle>
      <LegalParagraph>
        IPL2027.co is intended for a general audience interested in cricket. Our Website is not
        knowingly designed to collect personal information from children in violation of applicable
        law.
      </LegalParagraph>
      <LegalParagraph>
        If you are a parent or legal guardian and believe that a child has provided personal
        information to us inappropriately, please contact us. We will review the matter and take
        appropriate action as required by law.
      </LegalParagraph>

      <LegalTitle>12. International Data Processing</LegalTitle>
      <LegalParagraph>
        Depending on the hosting provider and third-party services we use, information may be
        processed or stored in countries other than your country of residence.
      </LegalParagraph>
      <LegalParagraph>
        Where required by applicable law, we will take appropriate steps to ensure that international
        transfers of personal information receive the necessary protection.
      </LegalParagraph>

      <LegalTitle>13. Changes to This Privacy Policy</LegalTitle>
      <LegalParagraph>
        We may update this Privacy Policy to reflect changes in our Website, technologies, service
        providers, or legal obligations.
      </LegalParagraph>
      <LegalParagraph>
        Any revised version will be published on this page with an updated &quot;Last Updated&quot;
        date. We encourage you to review this page periodically.
      </LegalParagraph>
      <LegalParagraph>
        Where legally required, we will provide additional notice or obtain consent for material
        changes.
      </LegalParagraph>

      <LegalTitle>14. Contact Us</LegalTitle>
      <LegalParagraph>
        If you have questions about this Privacy Policy, wish to exercise your privacy rights, or
        want to raise a concern about how information is handled, please contact us.
      </LegalParagraph>
      <LegalParagraph>
        Website: <LegalLink href="https://www.ipl2027.co/">https://www.ipl2027.co/</LegalLink>
      </LegalParagraph>
      <LegalParagraph>
        Email: <LegalLink href="mailto:rollwin.seo@gmail.com">rollwin.seo@gmail.com</LegalLink>
      </LegalParagraph>
      <LegalParagraph>
        Or visit our <LegalLink href="/contact">Contact Us</LegalLink> page. Please include enough
        information for us to understand and respond to your request. Do not send passwords or
        unnecessary sensitive information.
      </LegalParagraph>
      <LegalParagraph>
        Thank you for visiting IPL2027.co. We appreciate your trust and are committed to handling
        information responsibly while providing cricket-related news and updates.
      </LegalParagraph>
    </LegalArticle>
  );
}
