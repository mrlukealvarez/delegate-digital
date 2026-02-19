"use client";

import Link from "next/link";
import { Code, Handshake, Users, Gift, Search } from "lucide-react";
import {
  FadeIn,
  CyanShimmer,
  CyanGlow,
  ParallaxSection,
  PulseGlow,
  ScaleReveal,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "@/components/motion";

const involvementCards = [
  {
    icon: Code,
    title: "Hire Us",
    description:
      "Need a website, app, or platform? Delegate Digital builds production-grade products for BHC entities and beyond.",
    cta: "Book a Call",
    href: "/contact",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "Agencies and freelancers: partner with Delegate Digital on overflow projects and specialized builds.",
    cta: "Partner With Us",
    href: "/contact",
  },
  {
    icon: Users,
    title: "Join the Team",
    description:
      "Engineers, designers, and PMs: join the team building rural America's digital infrastructure.",
    cta: "View Openings",
    href: "/careers",
  },
  {
    icon: Gift,
    title: "Refer a Client",
    description:
      "Know a business that needs digital transformation? Our referral program rewards introductions.",
    cta: "Refer Now",
    href: "/contact",
  },
  {
    icon: Search,
    title: "Request an Audit",
    description:
      "Get a free technical audit of your existing platform. Performance, security, and UX review.",
    cta: "Request Audit",
    href: "/contact",
  },
];

const stats = [
  { end: 13, suffix: " Entity Clients", label: "Internal + External" },
  { end: 15, suffix: " Websites", label: "Built & Deployed" },
  { end: 443, suffix: "K+", label: "Lines of Code" },
  { end: 99, suffix: ".9%", label: "Platform Uptime" },
];

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <ParallaxSection className="relative overflow-hidden">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Get <CyanShimmer>Involved</CyanShimmer>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
              Delegate Digital builds the tech behind rural transformation.
              Here&apos;s how to work with us.
            </p>
          </FadeIn>
        </section>
      </ParallaxSection>

      {/* Involvement Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {involvementCards.map((card) => (
            <StaggerItem key={card.title}>
              <CyanGlow className="rounded-xl border border-cyan/10 bg-surface p-8 h-full">
                <card.icon className="h-8 w-8 text-cyan mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted mb-4">{card.description}</p>
                <Link
                  href={card.href}
                  className="text-cyan font-semibold hover:underline"
                >
                  {card.cta} &rarr;
                </Link>
              </CyanGlow>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Stats Bar */}
      <section className="bg-cyan py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  className="text-background text-4xl font-bold"
                />
                <p className="text-background/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleReveal>
            <div className="bg-gradient-to-r from-cyan to-blue-700 rounded-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let&apos;s Build Something
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                From concept to production — Delegate Digital ships fast and
                builds to last.
              </p>
              <PulseGlow className="inline-block rounded-full">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-cyan font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </PulseGlow>
            </div>
          </ScaleReveal>
        </div>
      </section>
    </main>
  );
}
