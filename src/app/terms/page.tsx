import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Delegate Digital — B2B digital services and AI consulting. Client service agreements, deliverables, IP ownership, and third-party tool usage.",
};

export default function TermsPage() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-cyan">
            Legal
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-muted">
            Effective Date: February 20, 2026 &middot; Last Updated: February 20, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-cyan prose-a:no-underline hover:prose-a:underline">
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to Delegate Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a B2B digital services and AI consulting agency operating as part of the Black Hills Consortium. By accessing or using our website, engaging our services, or interacting with any of our digital properties (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Delegate Digital provides enterprise-grade AI and digital services to small and mid-sized businesses. Our service offerings include AI process automation, mobile app development, digital product creation, web design and development, CRM setup and management, social media management, workflow optimization, team training and onboarding, and business consulting. All services are delivered through our AI-augmented delivery model from our base at the Grow Campus in Custer, South Dakota.
          </p>

          <h2>3. Client Service Agreements</h2>
          <p>
            All client engagements are governed by a separate written Service Agreement that outlines the specific scope of work, deliverables, timelines, payment terms, and applicable service level commitments. These Terms of Service apply generally to all interactions with Delegate Digital; in the event of a conflict between these Terms and a signed Service Agreement, the Service Agreement shall prevail.
          </p>
          <p>
            <strong>Project Proposals:</strong> Before commencing any work, we provide clients with a detailed project proposal including scope, estimated timeline, pricing, and key deliverables. Work does not begin until the proposal is accepted and any required deposits are received.
          </p>
          <p>
            <strong>Change Orders:</strong> Any material changes to the agreed scope of work require a written change order signed by both parties. Additional work beyond the original scope will be quoted and invoiced separately.
          </p>

          <h2>4. Deliverables and Intellectual Property Ownership</h2>
          <p>
            <strong>Client-Owned Deliverables:</strong> Unless otherwise specified in the Service Agreement, all final deliverables created specifically for a client (websites, applications, marketing materials, custom automations) become the property of the client upon full payment. This includes source code, design files, and content created as part of the engagement.
          </p>
          <p>
            <strong>Delegate Digital IP:</strong> We retain ownership of all proprietary tools, frameworks, templates, processes, methodologies, and AI workflows used in the delivery of our services. Clients receive a non-exclusive license to use these tools as incorporated into their deliverables, but may not extract, reverse-engineer, or redistribute our proprietary systems.
          </p>
          <p>
            <strong>Portfolio Rights:</strong> Unless a client requests confidentiality in writing, Delegate Digital reserves the right to showcase completed work in our portfolio, case studies, and marketing materials.
          </p>

          <h2>5. Marketing Campaign Disclaimers</h2>
          <p>
            For clients engaging our social media management, digital advertising, or marketing services:
          </p>
          <ul>
            <li>We do not guarantee specific results, rankings, follower counts, or revenue outcomes from marketing campaigns.</li>
            <li>Campaign performance depends on numerous factors outside our control including market conditions, competition, platform algorithm changes, and audience behavior.</li>
            <li>Projections and estimates provided during the proposal process are based on industry benchmarks and historical data, and are not guarantees of future performance.</li>
            <li>Clients are responsible for the accuracy and legality of all information and claims made in their marketing materials, even when we produce those materials on their behalf.</li>
          </ul>

          <h2>6. Analytics and Data Handling</h2>
          <p>
            As part of our services, we may access and analyze client business data including website analytics, social media metrics, CRM records, advertising performance data, and customer engagement metrics. All client data is handled in accordance with our Privacy Policy and any data processing terms in the applicable Service Agreement.
          </p>
          <p>
            We implement industry-standard security measures to protect client data. However, clients are responsible for maintaining the security of their own account credentials for any third-party platforms we manage on their behalf.
          </p>

          <h2>7. Third-Party Tool Usage</h2>
          <p>
            Our services often involve the use of third-party tools and platforms including but not limited to:
          </p>
          <ul>
            <li><strong>CRM platforms</strong> (HubSpot, Salesforce, and similar systems)</li>
            <li><strong>Advertising platforms</strong> (Meta Ads, Google Ads, LinkedIn Ads)</li>
            <li><strong>Analytics tools</strong> (Google Analytics, Vercel Analytics)</li>
            <li><strong>AI services</strong> (OpenAI, Anthropic, and other AI providers)</li>
            <li><strong>Cloud infrastructure</strong> (Vercel, Supabase, AWS)</li>
            <li><strong>Design tools</strong> (Figma, Adobe Creative Suite)</li>
          </ul>
          <p>
            Clients are responsible for maintaining their own accounts and subscriptions for third-party tools unless otherwise specified in the Service Agreement. We are not responsible for changes in third-party tool pricing, features, or availability. All third-party tools are subject to their respective terms of service and privacy policies.
          </p>

          <h2>8. Payment Terms</h2>
          <p>
            Payment terms are specified in each client&rsquo;s Service Agreement. Unless otherwise agreed, invoices are due within 30 days of issuance. Late payments may incur interest at a rate of 1.5% per month. We reserve the right to pause or suspend services for accounts with outstanding balances exceeding 60 days.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of proprietary information exchanged during the course of the engagement. This includes business strategies, financial information, customer data, technical specifications, and trade secrets. Confidentiality obligations survive the termination of any Service Agreement for a period of two years.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            Our website and publicly available resources are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. For client engagements, warranties and service level commitments are defined in the applicable Service Agreement. We do not warrant that third-party platforms, tools, or services integrated into our deliverables will remain available, unchanged, or error-free.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Delegate Digital, Black Hills Consortium, and their respective officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our Services. Our total liability for any claim arising from a Service Agreement shall not exceed the total fees paid by the client under that agreement in the twelve months preceding the claim.
          </p>

          <h2>12. Termination</h2>
          <p>
            Either party may terminate a Service Agreement with 30 days&rsquo; written notice unless otherwise specified. Upon termination, the client is responsible for payment of all services rendered through the effective date of termination. Completed deliverables will be transferred to the client upon final payment.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of South Dakota. Any disputes arising from these Terms shall be resolved in the courts of Custer County, South Dakota.
          </p>

          <h2>14. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Services after changes are posted constitutes acceptance of the modified Terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            For questions about these Terms of Service, please contact:
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
