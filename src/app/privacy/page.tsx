import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Delegate Digital — how we handle client business data, campaign performance data, and third-party platform data sharing.",
};

export default function PrivacyPage() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-cyan">
            Legal
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted">
            Effective Date: February 20, 2026 &middot; Last Updated: February 20, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-cyan prose-a:no-underline hover:prose-a:underline">
          <h2>1. Introduction</h2>
          <p>
            Delegate Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), part of the Black Hills Consortium, is committed to protecting the privacy of our clients, website visitors, and users. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, engage our services, or interact with us in any capacity.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Website Visitor Data</h3>
          <p>
            When you visit our website, we automatically collect:
          </p>
          <ul>
            <li>IP address and approximate geographic location</li>
            <li>Browser type, operating system, and device information</li>
            <li>Pages visited, time spent on site, and navigation patterns</li>
            <li>Referring website or source of traffic</li>
            <li>Interaction data (clicks, form submissions, scroll depth)</li>
          </ul>

          <h3>2.2 Contact and Inquiry Data</h3>
          <p>
            When you submit a contact form, book a discovery session, or otherwise reach out to us, we collect:
          </p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Company name, role, and business size</li>
            <li>Project requirements and service interests</li>
            <li>Budget range and timeline preferences (if provided)</li>
          </ul>

          <h3>2.3 Client Business Data</h3>
          <p>
            In the course of providing our services, we may access and process client business data including:
          </p>
          <ul>
            <li>Website content, analytics, and performance data</li>
            <li>CRM records including customer lists, contact information, and sales data</li>
            <li>Business financial information relevant to service delivery (revenue targets, budgets)</li>
            <li>Brand assets including logos, style guides, messaging documents, and photography</li>
            <li>Login credentials for client-owned accounts and platforms (stored securely, never shared)</li>
            <li>Internal processes, workflows, and operational documentation</li>
          </ul>

          <h3>2.4 Campaign Performance Data</h3>
          <p>
            For clients using our marketing and advertising services, we collect and analyze:
          </p>
          <ul>
            <li>Advertising spend, impressions, clicks, and conversion metrics across all platforms</li>
            <li>Audience targeting parameters and demographic breakdowns</li>
            <li>A/B testing results and creative performance data</li>
            <li>Cost-per-acquisition, return on ad spend, and other KPI measurements</li>
            <li>Email marketing metrics (open rates, click rates, unsubscribe rates)</li>
            <li>Social media engagement, reach, and follower growth analytics</li>
          </ul>

          <h3>2.5 Third-Party Platform Data</h3>
          <p>
            When managing client accounts on third-party platforms, we access data provided by those platforms:
          </p>
          <ul>
            <li><strong>Meta (Facebook/Instagram):</strong> Ad account data, page insights, audience analytics, pixel data, and conversion tracking</li>
            <li><strong>Google Ads:</strong> Campaign performance, keyword data, search query reports, audience segments, and conversion data</li>
            <li><strong>Google Analytics:</strong> Website traffic, user behavior, conversion funnels, and audience demographics</li>
            <li><strong>LinkedIn:</strong> Campaign metrics, audience insights, and lead generation data</li>
            <li><strong>Other platforms:</strong> Data specific to each platform as required by the client engagement</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use collected information to:
          </p>
          <ul>
            <li>Deliver contracted services including web development, marketing, CRM management, and AI automation</li>
            <li>Respond to inquiries and provide project proposals</li>
            <li>Optimize and report on campaign performance for clients</li>
            <li>Improve our website, service offerings, and internal processes</li>
            <li>Send relevant communications about our services (with your consent)</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Protect against unauthorized access, fraud, and security threats</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell personal or client business information. We may share information with:
          </p>
          <ul>
            <li>
              <strong>Black Hills Consortium entities:</strong> We may share aggregated business metrics with the consortium for reporting purposes. Client-specific data is not shared between entities without client consent.
            </li>
            <li>
              <strong>Third-party service providers:</strong> We use trusted service providers for hosting (Vercel), database management (Supabase), analytics, and email delivery. These providers process data on our behalf under strict contractual obligations.
            </li>
            <li>
              <strong>Advertising platforms:</strong> When managing advertising campaigns, client data is shared with platforms like Meta and Google as necessary to run and optimize campaigns, subject to those platforms&rsquo; own privacy policies.
            </li>
            <li>
              <strong>AI service providers:</strong> Our AI-augmented workflows may process client data through AI providers (Anthropic, OpenAI) for content generation, data analysis, or automation purposes. We use enterprise-grade API access and do not allow AI providers to use client data for model training.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose information when required by law, court order, or governmental regulation.
            </li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect data including:
          </p>
          <ul>
            <li>Encryption in transit (TLS/SSL) and at rest for sensitive data</li>
            <li>Secure credential management with environment-level variable storage</li>
            <li>Regular access audits and principle of least privilege</li>
            <li>Two-factor authentication on all client-facing platform accounts</li>
            <li>Secure code practices and regular dependency updates</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            Website visitor data is retained for 26 months. Client engagement records and deliverables are retained for the duration of the client relationship plus three years for contractual and legal purposes. Campaign performance data is retained for the duration of the engagement plus one year for reporting purposes. Financial records are retained for seven years in accordance with tax requirements.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You may have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you or your business</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information (subject to legal retention requirements)</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request data portability for information you have provided</li>
            <li>Object to processing of your information in certain circumstances</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:legal@blackhillsconsortium.org">legal@blackhillsconsortium.org</a>.
          </p>

          <h2>8. Cookies and Tracking</h2>
          <p>
            Our website uses cookies and analytics tools (including Vercel Analytics and Speed Insights) to understand traffic patterns and improve user experience. These tools collect anonymized usage data. You can manage cookie preferences through your browser settings.
          </p>

          <h2>9. Children&rsquo;s Privacy</h2>
          <p>
            Our Services are designed for businesses and professionals. We do not knowingly collect personal information from individuals under the age of 13. If we become aware of such collection, we will delete the information promptly.
          </p>

          <h2>10. International Data</h2>
          <p>
            Our services are primarily delivered within the United States. If you access our services from outside the US, your information may be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. For material changes affecting existing clients, we will provide notice through our regular communication channels.
          </p>

          <h2>12. Contact</h2>
          <p>
            For privacy-related questions or requests, please contact:
          </p>
          <p>
            Delegate Digital<br />
            Part of Black Hills Consortium<br />
            Grow Campus, Custer, South Dakota<br />
            <a href="mailto:legal@blackhillsconsortium.org">legal@blackhillsconsortium.org</a>
          </p>
        </div>
      </div>
    </div>
  );
}
