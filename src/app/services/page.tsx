import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Smartphone,
  Globe,
  BarChart3,
  Share2,
  Lightbulb,
  BookOpen,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CyanGlow,
  CyanShimmer,
  ParallaxSection,
  PulseGlow,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Services | Delegate Digital",
  description:
    "9 digital services: AI automation, mobile apps, web development, CRM, social media, consulting, and more. Enterprise quality at small business prices.",
};

const services = [
  {
    icon: Zap,
    title: "AI Process Automation",
    price: "$1,000-$3,000/mo",
    description:
      "Eliminate repetitive tasks with intelligent automation workflows. We build and maintain Zapier, n8n, and GoHighLevel automations that save your team 20+ hours per week.",
    features: [
      "Email sequence automation",
      "Invoice and payment triggers",
      "Lead routing and scoring",
      "Cross-platform data sync",
      "Custom webhook integrations",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    price: "$2,000-$10,000/project",
    description:
      "AI-powered rapid builds that turn your idea into a production mobile app. From concept to App Store in weeks, not months.",
    features: [
      "iOS and Android native apps",
      "Cross-platform React Native builds",
      "API integration and backend",
      "Push notifications and analytics",
      "App Store submission support",
    ],
  },
  {
    icon: BookOpen,
    title: "Digital Products",
    price: "$1,500-$5,000/project",
    description:
      "Coloring books, branded content, digital guides, and downloadable products that generate passive revenue for your business.",
    features: [
      "Custom coloring book creation",
      "Branded digital content",
      "E-book and guide production",
      "Print-on-demand setup",
      "Digital storefront integration",
    ],
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    price: "$3,000-$8,000/project",
    description:
      "Modern websites built on Next.js and deployed on Vercel. Fast, accessible, SEO-optimized, and built to convert visitors into customers.",
    features: [
      "Next.js modern architecture",
      "Responsive mobile-first design",
      "SEO optimization built-in",
      "Analytics and conversion tracking",
      "Vercel hosting and CDN",
    ],
  },
  {
    icon: BarChart3,
    title: "CRM Setup & Management",
    price: "$1,000-$2,500/mo",
    description:
      "Stop losing leads. GoHighLevel, HubSpot, or custom CRM builds with automated pipelines, follow-ups, and reporting.",
    features: [
      "CRM platform selection and setup",
      "Pipeline and workflow design",
      "Automated follow-up sequences",
      "Reporting dashboard creation",
      "Data migration and cleanup",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    price: "$500-$2,000/mo",
    description:
      "Content creation, scheduling, analytics, and growth strategy. We handle your social presence so you can focus on running your business.",
    features: [
      "Content creation and curation",
      "Multi-platform scheduling",
      "Engagement and community management",
      "Analytics and performance reporting",
      "Growth strategy and optimization",
    ],
  },
  {
    icon: Settings,
    title: "Workflow Optimization",
    price: "$500 consult + implementation",
    description:
      "Lean and Kaizen methodology applied to your business processes. We identify bottlenecks, eliminate waste, and streamline operations.",
    features: [
      "Process mapping and audit",
      "Bottleneck identification",
      "Standard operating procedures",
      "Tool selection and integration",
      "Ongoing optimization support",
    ],
  },
  {
    icon: Users,
    title: "Team Training",
    price: "$500-$2,000/session",
    description:
      "Custom workshops and SOPs for your team. AI tools, CRM systems, workflow automation, and digital best practices.",
    features: [
      "Custom workshop design",
      "AI tool training sessions",
      "SOP documentation",
      "Video training library creation",
      "Follow-up coaching calls",
    ],
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    price: "$500/session",
    description:
      "Tech stack audits, funnel optimization, and strategic roadmaps from operators who build businesses, not just advise them.",
    features: [
      "Tech stack evaluation",
      "Funnel analysis and optimization",
      "Growth strategy roadmap",
      "Competitive landscape review",
      "Vendor selection guidance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection speed={0.1} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan">
                9 Services, One Team
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Everything Your Business Needs to{" "}
                <CyanShimmer className="text-4xl md:text-6xl font-bold">
                  Go Digital
                </CyanShimmer>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                From AI automation to full-stack development, we deliver
                enterprise-quality digital services at prices built for small
                businesses. Powered by AI. Guided by humans.
              </p>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <CyanGlow className="rounded-2xl h-full">
                  <div className="rounded-2xl border border-cyan/10 bg-background/80 p-8 backdrop-blur-xl h-full hover:border-cyan/30 transition-colors flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="h-8 w-8 text-cyan" />
                      <span className="text-sm font-semibold text-cyan">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="mt-auto space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              How It <span className="text-cyan">Works</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2">
            {[
              {
                step: "01",
                title: "Discovery Session",
                desc: "$500 for a 2-hour deep dive. We map your processes, identify automation opportunities, and deliver a recommendations document.",
              },
              {
                step: "02",
                title: "Proposal & Scope",
                desc: "Within 48 hours, you receive a clear proposal with scope, timeline, pricing, and expected ROI. No surprises.",
              },
              {
                step: "03",
                title: "Build & Deliver",
                desc: "Our team builds your solution using AI-accelerated workflows. Weekly check-ins keep you informed. You see progress in real time.",
              },
              {
                step: "04",
                title: "Launch & Optimize",
                desc: "We launch, train your team, and provide ongoing optimization. Most clients see positive ROI within 60 days.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <CyanGlow className="rounded-2xl">
                  <div className="rounded-2xl border border-cyan/10 bg-surface p-8">
                    <span className="mb-3 inline-block text-3xl font-bold text-cyan/30">
                      {item.step}
                    </span>
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to See What We Can{" "}
              <span className="text-cyan">Build for You?</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Every engagement starts with a Discovery Session. Two hours, a
              full process audit, and a clear roadmap — whether you hire us or
              not.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PulseGlow>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan text-background font-semibold px-8 py-3.5 rounded-md hover:bg-cyan-light transition-all duration-300 shadow-lg shadow-cyan/10"
                >
                  Book Discovery Session <ArrowRight className="h-4 w-4" />
                </Link>
              </PulseGlow>
              <Link
                href="/pricing"
                className="border border-cyan/30 text-cyan font-medium px-8 py-3.5 rounded-md hover:bg-cyan/10 hover:border-cyan/50 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
