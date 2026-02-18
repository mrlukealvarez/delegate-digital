import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Zap,
  Crown,
  Package,
  ArrowRight,
  Check,
  HelpCircle,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CyanGlow,
  CyanShimmer,
  ParallaxSection,
  PulseGlow,
  ScaleReveal,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Pricing | Delegate Digital",
  description:
    "Transparent pricing for all Delegate Digital services. Discovery sessions from $500, monthly plans from $1,500, project-based from $2,000.",
};

const tiers = [
  {
    icon: Search,
    name: "Discovery Session",
    price: "$500",
    period: "one-time",
    description:
      "A 2-hour deep dive into your business processes, tech stack, and growth opportunities. You walk away with a clear action plan.",
    features: [
      "2-hour process audit",
      "Current tech stack evaluation",
      "Automation opportunity mapping",
      "Detailed recommendations document",
      "ROI projections for top 3 opportunities",
      "48-hour delivery guarantee",
    ],
    cta: "Book a Session",
    popular: false,
  },
  {
    icon: Zap,
    name: "Growth Implementation",
    price: "$1,500-$3,000",
    period: "/mo",
    description:
      "Ongoing automation builds, CRM management, and digital optimization. Your dedicated team handles the implementation so you can focus on running your business.",
    features: [
      "Dedicated project manager",
      "Automation workflow builds",
      "CRM setup and optimization",
      "Monthly strategy calls",
      "Priority support response",
      "Performance reporting dashboard",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    icon: Crown,
    name: "Growth Partnership",
    price: "$3,000-$5,000",
    period: "/mo",
    description:
      "Full-service digital partnership. Apps, websites, social media, automation, and strategic consulting — all handled by one team.",
    features: [
      "Everything in Growth Implementation",
      "Web design and development",
      "Mobile app development",
      "Social media management",
      "Business consulting sessions",
      "Team training workshops",
      "BHC ecosystem access",
      "Quarterly strategy reviews",
    ],
    cta: "Partner With Us",
    popular: true,
  },
  {
    icon: Package,
    name: "Project-Based",
    price: "$2,000-$10,000",
    period: "/project",
    description:
      "One-time builds with clear scope and timeline. Mobile apps, website redesigns, digital products, and custom development projects.",
    features: [
      "Fixed scope and timeline",
      "Clear deliverables upfront",
      "Weekly progress updates",
      "Two rounds of revisions",
      "Launch support included",
      "30-day post-launch warranty",
    ],
    cta: "Start a Project",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the Discovery Session work?",
    answer:
      "We schedule a 2-hour call or in-person meeting where we map every repetitive process in your business. We identify which tasks cost the most time, which are most error-prone, and which would have the highest ROI if automated. Within 48 hours, you receive a detailed recommendations document with specific next steps and ROI projections.",
  },
  {
    question: "What if I only need one service?",
    answer:
      "That is perfectly fine. You can hire us for a single service like social media management or a one-time project like a website build. The Growth Partnership is for businesses that want comprehensive digital support, but it is not required. Start with what you need and expand when you are ready.",
  },
  {
    question: "Do you work with businesses outside South Dakota?",
    answer:
      "Absolutely. While we are based at the Grow Campus in Custer, SD, we serve clients nationwide. All of our services can be delivered remotely. The only thing that requires physical presence is the optional in-person Discovery Session, and even that can be done via video call.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Discovery Sessions can typically be scheduled within one week. Implementation projects begin within two weeks of signing. Monthly engagements start the first of the following month. If you have an urgent need, let us know — we build fast.",
  },
  {
    question: "What tools and platforms do you use?",
    answer:
      "We build with Next.js, React, Vercel, and Supabase for web and app development. For automation, we use Zapier, n8n, and GoHighLevel. For CRM, we work with GoHighLevel, HubSpot, and custom solutions. For design, we use Figma and AI-assisted design tools. We choose the best tool for each job, not a one-size-fits-all stack.",
  },
  {
    question: "What does the BHC ecosystem access include?",
    answer:
      "Growth Partnership clients get access to the full Black Hills Consortium network. That means warm referrals to Outpost Media for video content, Seed Academy for team training, Settle the West for workforce recruitment, and other entities as needed. These are not cold introductions — they are ecosystem partners who share infrastructure and clients.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection speed={0.1} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan">
                Transparent Pricing
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Pick a Plan.{" "}
                <CyanShimmer className="text-4xl md:text-6xl font-bold">
                  Start Growing.
                </CyanShimmer>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                No hidden fees. No long-term contracts. Every engagement starts
                with a Discovery Session so you know exactly what you are
                getting before you commit.
              </p>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <CyanGlow className="rounded-2xl h-full">
                  <div
                    className={`rounded-2xl border ${
                      tier.popular
                        ? "border-cyan bg-cyan/5"
                        : "border-cyan/10 bg-background/80"
                    } p-8 backdrop-blur-xl h-full flex flex-col relative`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-cyan text-background text-xs font-bold px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <tier.icon className="h-8 w-8 text-cyan mb-4" />
                    <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-cyan">
                        {tier.price}
                      </span>
                      <span className="text-sm text-muted ml-1">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block text-center font-semibold py-3 rounded-md transition-all duration-300 ${
                        tier.popular
                          ? "bg-cyan text-background hover:bg-cyan-light shadow-lg shadow-cyan/10"
                          : "border border-cyan/30 text-cyan hover:bg-cyan/10"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleReveal>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Discovery Session Guarantee
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                If your Discovery Session does not deliver at least three
                actionable recommendations that would save you time or money, we
                refund the $500. No questions asked. We have never had to issue a
                refund.
              </p>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <HelpCircle className="h-8 w-8 text-cyan mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold">
                Frequently Asked <span className="text-cyan">Questions</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {faqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="rounded-2xl border border-cyan/10 bg-background/80 p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Start With a{" "}
              <span className="text-cyan">Discovery Session</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              $500. Two hours. A complete process audit and recommendations
              document you can act on immediately.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <PulseGlow>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan text-background font-semibold px-8 py-3.5 rounded-md hover:bg-cyan-light transition-all duration-300 shadow-lg shadow-cyan/10"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
            </PulseGlow>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
