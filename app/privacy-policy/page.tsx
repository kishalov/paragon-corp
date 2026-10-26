
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Paragon Corp',
  description:
    'Learn how Paragon Corp collects, uses and protects personal information.',
};

const sections = [
  {
    title: 'Introduction',
    content: [
      'Paragon Corp ("we", "us", or "our") respects the privacy of its customers, business partners, and website visitors. This Privacy Policy explains how we collect, use, store, and protect personal information when you visit our website or contact us.',
      'By submitting information through our website, you acknowledge that your personal data will be processed as described in this Privacy Policy.',
    ],
  },
  {
    title: '1. Information We Collect',
    content: [
      'Contact Information: When you submit an inquiry through our website, we may collect your company name, email address, phone number, and any information you provide in your message.',
      'Business Information: We may collect information relevant to your inquiry, including product requirements, part numbers, quantities, and other business-related details that you voluntarily provide.',
      'Technical Information: Depending on the technologies used on our website, certain technical data, such as IP addresses, browser types, and device information, may be processed for website operation, security, and performance.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'Responding to Inquiries: To review your requests, answer questions, and provide information about our products and services.',
      'Business Communication: To prepare quotations, discuss requirements, and manage potential or existing business relationships.',
      'Service Improvement: To improve our customer support, website functionality, and overall service quality.',
      'Legal Compliance: To comply with applicable legal and regulatory obligations.',
      'Marketing Communications: Where permitted by applicable law and with any required consent, to provide relevant updates about our services and business activities.',
    ],
  },
  {
    title: '3. Sharing Your Information',
    content: [
      'We may share personal information with trusted service providers who assist us in operating our website, processing contact form submissions, and managing business communications.',
      'Our website uses EmailJS to transmit contact form submissions to our designated email service. Relevant information may therefore be processed by these service providers.',
      'We may also disclose information when required by applicable law or a lawful request from an authorized authority.',
    ],
  },
  {
    title: '4. Security of Your Information',
    content: [
      'We take reasonable technical and organizational measures intended to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.',
      'However, no method of electronic transmission or storage can be guaranteed to be completely secure.',
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      'We retain personal information only for as long as reasonably necessary to respond to inquiries, manage business relationships, fulfill legitimate business purposes, or comply with applicable legal obligations.',
      'When personal information is no longer required, we take appropriate steps to delete or securely dispose of it.',
    ],
  },
  {
    title: '6. Your Privacy Rights',
    content: [
      'Depending on applicable data protection laws, you may have the right to request access to your personal information, correction of inaccurate information, deletion of personal data, or restriction of certain processing activities.',
      'Where processing is based on your consent, you may also have the right to withdraw that consent.',
      'To exercise your rights, please contact us using the email address provided below. Certain requests may be subject to applicable legal requirements and exceptions.',
    ],
  },
  {
    title: '7. Third-Party Services',
    content: [
      'Our website may use third-party providers for hosting, communication, and website functionality. These providers may process limited information as necessary to deliver their services.',
      'We encourage visitors to review the privacy policies of external websites before providing personal information through those services.',
    ],
  },
  {
    title: '8. International Data Transfers',
    content: [
      'Some service providers may process or store information outside the country in which you are located. Where applicable, we take steps to ensure that international transfers are handled in accordance with relevant data protection requirements.',
    ],
  },
  {
    title: '9. Updates to This Policy',
    content: [
      'We may update this Privacy Policy periodically to reflect changes in our business operations, website functionality, or legal requirements.',
      'Any updates will be published on this page, together with a revised effective date where appropriate.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060305] text-white font-sans">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-28">

        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-white/50 hover:text-[#2FFFCB] transition-colors text-[14px] mb-16"
        >
          <span aria-hidden="true">←</span>
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-16 md:mb-24">
          <p className="text-[#2FFFCB] text-[12px] uppercase tracking-[0.25em] mb-6">
            Legal Information
          </p>

          <h1 className="text-[44px] md:text-[72px] font-semibold tracking-tight leading-[1.1] mb-8">
            Privacy Policy
          </h1>

          <p className="text-white/40 text-[14px]">
            Last updated: October 26, 2026
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-12 md:space-y-16">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-t border-white/10 pt-8 md:pt-10"
            >
              <h2 className="text-[22px] md:text-[28px] font-medium text-white mb-6">
                {section.title}
              </h2>

              <div className="space-y-5">
                {section.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-white/60 text-[15px] md:text-[17px] leading-[1.9] font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Contact */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-[22px] md:text-[28px] font-medium mb-6">
              Contact Us
            </h2>

            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.9] mb-6">
              If you have questions about this Privacy Policy
              or would like to make a request regarding
              your personal information, please contact us:
            </p>

            <a
              href="mailto:sales@paragoncorp.ae"
              className="inline-block text-[#2FFFCB] text-[17px] md:text-[20px] hover:text-white transition-colors break-all"
            >
              sales@paragoncorp.ae
            </a>
          </section>
        </div>

        {/* Bottom */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-5 text-[12px] text-white/30">
          <span>© 2026 Paragon Corp. All rights reserved.</span>

          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Return to website
          </Link>
        </div>

      </div>
    </main>
  );
}
