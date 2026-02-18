"use client";

import Link from "next/link";
import {
  Zap,
  Smartphone,
  Globe,
  BarChart3,
  Share2,
  Lightbulb,
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  Network,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CyanGlow,
  CountUp,
  CyanShimmer,
  ParallaxSection,
  PulseGlow,
  ScaleReveal,
} from "@/components/motion";

const services = [
  {
    icon: Zap,
    title: "AI Process Automation",
    description:
      "Eliminate 20+ hours of manual work per week with Zapier, n8n, and GoHighLevel workflows built for your business.",
    price: "$1,000-$3,000/mo",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "AI-powered rapid builds that turn your idea into a production app in weeks, not months.",
    price: "$2,000-$10,000",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Modern Next.js sites on Vercel. Fast, accessible, and built to convert visitors into customers.",
    price: "$3,000-$8,000",
  },
  {
    icon: BarChart3,
    title: "CRM Setup & Management",
    description:
      "GoHighLevel, HubSpot, or custom CRM builds. Stop losing leads and start closing deals.",
    price: "$1,000-$2,500/mo",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Content creation, scheduling, analytics, and growth strategy across every platform that matters.",
    price: "$500-$2,000/mo",
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    description:
      "Tech stack audits, funnel optimization, and strategic roadmaps from operators who build, not just advise.",
    price: "$500/session",
  },
];

const advantages = [
  {
    icon: DollarSign,
    title: "Enterprise Quality, Small Business Prices",
    description:
      "AI-powered delivery lets us produce $20K-quality output at $3K-$8K price points. The same tools that built 13 companies work for your business.",
  },
  {
    icon: Network,
    title: "13-Entity Ecosystem",
    description:
      "Every client plugs into the Black Hills Consortium network — media, real estate, education, accelerator, and community development.",
  },
  {
    icon: Clock,
    title: "Speed of AI, Judgment of Humans",
    description:
      "AI handles the repetitive work. Our team handles strategy, customization, and the decisions that require real experience.",
  },
  {
    icon: Shield,
    title: "Black Hills Based, Globally Capable",
    description:
      "Based at the Grow Campus in Custer, SD. We serve clients nationwide with the cost advantages of a rural base.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.04),transparent_50%)]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cyan/5 opacity-40 animate-pulse pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 border border-cyan/20 bg-cyan/5 rounded-full px-4 py-1.5 backdrop-blur-sm mb-8">
              <Zap className="h-4 w-4 text-cyan" />
              <span className="text-xs font-medium text-cyan tracking-wide">
                Now Accepting Clients
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Enterprise AI.{" "}
              <CyanShimmer className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                Small Business Prices.
              </CyanShimmer>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              AI automation, web development, mobile apps, and digital strategy
              for businesses that want enterprise capabilities without
              enterprise budgets. Part of the Black Hills Consortium.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PulseGlow>
                <Link
                  href="/contact"
                  className="group bg-cyan text-background font-semibold px-8 py-3.5 rounded-md hover:bg-cyan-light transition-all duration-300 text-base shadow-lg shadow-cyan/10 hover:shadow-cyan/20"
                >
                  Book a Discovery Session
                </Link>
              </PulseGlow>
              <Link
                href="/services"
                className="border border-cyan/30 text-cyan font-medium px-8 py-3.5 rounded-md hover:bg-cyan/10 hover:border-cyan/50 transition-all duration-300 text-base"
              >
                View Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-cyan/10 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cyan">
                  <CountUp
                    end={40}
                    suffix="+"
                    duration={2}
                    className="text-2xl sm:text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-sm text-muted mt-1">Warm Leads</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cyan">
                  <CountUp
                    end={9}
                    duration={1.5}
                    className="text-2xl sm:text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-sm text-muted mt-1">Services</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cyan">
                  <CountUp
                    prefix="$"
                    end={180}
                    suffix="K"
                    duration={2.5}
                    className="text-2xl sm:text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-sm text-muted mt-1">Y1 Revenue Target</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cyan">
                  <CountUp
                    end={13}
                    duration={1.5}
                    className="text-2xl sm:text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-sm text-muted mt-1">BHC Entities</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              What We <span className="text-cyan">Build for You</span>
            </h2>
            <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-16">
              Nine services, one team. From automation workflows to full-stack
              applications, we handle the digital work so you can focus on your
              business.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <CyanGlow className="rounded-2xl h-full">
                  <div className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl h-full hover:border-cyan/30 transition-colors">
                    <service.icon className="h-8 w-8 text-cyan mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold text-cyan">
                      {service.price}
                    </p>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-cyan font-medium hover:text-cyan-light transition-colors"
              >
                View all 9 services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Why <span className="text-cyan">Delegate Digital</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage) => (
              <StaggerItem key={advantage.title}>
                <CyanGlow className="rounded-2xl h-full">
                  <div className="rounded-2xl border border-cyan/10 bg-surface-light p-8 h-full hover:border-cyan/30 transition-colors">
                    <advantage.icon className="h-8 w-8 text-cyan mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Proof Section */}
      <ParallaxSection speed={0.15} className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-cyan uppercase tracking-widest mb-4">
              Built by the Black Hills Consortium
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              The Same AI That Built{" "}
              <span className="text-cyan">13 Companies in 13 Days</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Delegate Digital is not a startup guessing at what works. We are
              entity #13 in a consortium that used AI agent swarms to build 13
              companies, 200+ production pages, a $52M raise strategy, and a
              full SaaS platform. Your business gets the same infrastructure.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScaleReveal delay={0}>
              <div className="bg-surface border border-cyan/10 rounded-lg p-5 hover:border-cyan/20 transition-colors">
                <p className="text-3xl font-bold text-cyan">
                  <CountUp
                    end={13}
                    duration={1.5}
                    className="text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-xs text-muted mt-1.5">Entities Built</p>
              </div>
            </ScaleReveal>
            <ScaleReveal delay={0.1}>
              <div className="bg-surface border border-cyan/10 rounded-lg p-5 hover:border-cyan/20 transition-colors">
                <p className="text-3xl font-bold text-cyan">
                  <CountUp
                    end={711}
                    suffix="+"
                    duration={2.5}
                    className="text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-xs text-muted mt-1.5">AI Agents Deployed</p>
              </div>
            </ScaleReveal>
            <ScaleReveal delay={0.2}>
              <div className="bg-surface border border-cyan/10 rounded-lg p-5 hover:border-cyan/20 transition-colors">
                <p className="text-3xl font-bold text-cyan">
                  <CountUp
                    end={200}
                    suffix="+"
                    duration={2}
                    className="text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-xs text-muted mt-1.5">Pages Live</p>
              </div>
            </ScaleReveal>
            <ScaleReveal delay={0.3}>
              <div className="bg-surface border border-cyan/10 rounded-lg p-5 hover:border-cyan/20 transition-colors">
                <p className="text-3xl font-bold text-cyan">
                  <CountUp
                    prefix="$"
                    end={52}
                    suffix="M"
                    duration={1.5}
                    className="text-3xl font-bold text-cyan"
                  />
                </p>
                <p className="text-xs text-muted mt-1.5">Capital Strategy</p>
              </div>
            </ScaleReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA */}
      <ParallaxSection speed={0.1} className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-cyan uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to{" "}
              <CyanShimmer className="text-3xl sm:text-4xl font-bold">
                Automate Your Growth?
              </CyanShimmer>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book a $500 Discovery Session. Two hours, a full process audit,
              and a recommendations document you can act on immediately —
              whether you hire us or not.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <PulseGlow>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan text-background font-semibold px-8 py-3.5 rounded-md hover:bg-cyan-light transition-all duration-300 shadow-lg shadow-cyan/10 hover:shadow-cyan/25"
              >
                Book a Discovery Session <ArrowRight className="h-4 w-4" />
              </Link>
            </PulseGlow>
          </FadeIn>
        </div>
      </ParallaxSection>
    </>
  );
}
