import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Users,
  Mountain,
  ArrowRight,
  Video,
  Monitor,
  GraduationCap,
  Rocket,
  Leaf,
  MapPin,
  Network,
  Building2,
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
  CountUp,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "About | Delegate Digital",
  description:
    "Delegate Digital is entity #13 in the Black Hills Consortium. Enterprise AI capabilities for small businesses, based at the Grow Campus in Custer, South Dakota.",
};

const ecosystemConnections = [
  {
    icon: Video,
    entity: "Outpost Media",
    role: "Video and photo content production for our clients",
  },
  {
    icon: Monitor,
    entity: "THE OP",
    role: "Digital signage and screens for client businesses",
  },
  {
    icon: GraduationCap,
    entity: "Seed Academy",
    role: "AI training curriculum and workforce development",
  },
  {
    icon: Rocket,
    entity: "THE CULT",
    role: "Tech showcase applications and demos",
  },
  {
    icon: Leaf,
    entity: "GrowWise",
    role: "Cannabis business digital referrals pipeline",
  },
  {
    icon: MapPin,
    entity: "Settle the West",
    role: "Remote worker digital setup and onboarding",
  },
  {
    icon: Building2,
    entity: "Auric Labs",
    role: "Accelerator company digital services",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection speed={0.1} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan">
                Entity #13
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Enterprise Capabilities.{" "}
                <CyanShimmer className="text-4xl md:text-6xl font-bold">
                  Main Street Prices.
                </CyanShimmer>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
                Delegate Digital was founded to solve a structural problem: rural
                and small businesses need the same digital capabilities as their
                metro counterparts but cannot afford enterprise agency rates. AI
                changes that equation permanently.
              </p>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Our <span className="text-cyan">Story</span>
            </h2>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted leading-relaxed">
                Delegate Digital is entity #13 in the Black Hills Consortium, a
                13-entity holding company based in Custer, South Dakota. We
                exist because the same AI agent swarms that built 13 companies
                in 13 days can build enterprise-quality digital solutions for
                small businesses at a fraction of the traditional cost.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed">
                The traditional digital agency model is broken for small
                businesses. A basic website from a metro agency costs $10,000 to
                $25,000. CRM setup runs $5,000 to $15,000. Social media
                management costs $3,000 to $5,000 per month. These prices are
                built for companies doing $50 million in revenue, not $500,000.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-muted leading-relaxed">
                AI-powered delivery changes the math. When AI handles initial
                design generation, content drafting, and responsive testing, our
                team can focus on strategy, customization, and the human judgment
                that AI cannot replicate. The result is a $3,000 website that
                performs like a $20,000 build. A $1,000/month automation service
                that delivers enterprise-grade workflows.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              The <span className="text-cyan">Team</span>
            </h2>
          </FadeIn>
          <ScaleReveal>
            <div className="rounded-2xl border border-cyan/20 bg-surface p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-cyan/10">
                  <Code className="h-10 w-10 text-cyan" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Luke Alvarez</h3>
                  <p className="text-cyan font-medium mb-4">
                    Founder & CEO, Black Hills Consortium
                  </p>
                  <p className="text-muted leading-relaxed mb-4">
                    Luke built 13 entities, deployed 711+ AI agents, and
                    generated 430,000+ lines of code in 13 days using AI agent
                    swarms. Delegate Digital is the digital services arm of that
                    ecosystem — bringing the same AI-first methodology to every
                    client engagement.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Before BHC, Luke spent years in technology and
                    entrepreneurship, building the operational playbooks that now
                    power every entity in the consortium. His approach is simple:
                    use AI for everything it does well, use humans for everything
                    it does not.
                  </p>
                </div>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* BHC Ecosystem */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan">
                <Network className="inline h-4 w-4 mr-1" />
                The Ecosystem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Connected to{" "}
                <span className="text-cyan">12 Other Entities</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Every Delegate Digital client plugs into the full Black Hills
                Consortium network. Media, real estate, education, technology,
                and community development — all working together.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemConnections.map((connection) => (
              <StaggerItem key={connection.entity}>
                <CyanGlow className="rounded-2xl h-full">
                  <div className="rounded-2xl border border-cyan/10 bg-background/80 p-6 h-full hover:border-cyan/30 transition-colors">
                    <connection.icon className="h-6 w-6 text-cyan mb-3" />
                    <h3 className="font-bold mb-1">{connection.entity}</h3>
                    <p className="text-sm text-muted">{connection.role}</p>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan">
                  <CountUp
                    end={13}
                    duration={1.5}
                    className="text-2xl font-bold text-cyan"
                  />
                </p>
                <p className="text-xs text-muted mt-1">Entities</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan">
                  <CountUp
                    end={18786}
                    duration={2.5}
                    separator=","
                    className="text-2xl font-bold text-cyan"
                  />
                </p>
                <p className="text-xs text-muted mt-1">CRM Accounts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan">
                  <CountUp
                    prefix="$"
                    end={52}
                    suffix="M"
                    duration={2}
                    className="text-2xl font-bold text-cyan"
                  />
                </p>
                <p className="text-xs text-muted mt-1">Capital Raise</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan">15</p>
                <p className="text-xs text-muted mt-1">Acre Campus</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Grow Campus */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Mountain className="h-10 w-10 text-cyan mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Based at <span className="text-cyan">Grow Campus</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                15 acres in Custer, South Dakota. Gateway to Custer State Park.
                Five-minute commute. Mountains out every window. A campus
                purpose-built for building the future.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Collaborative Space",
                desc: "Open workspace, meeting rooms, and collaboration areas designed for creative and technical work.",
              },
              {
                icon: Mountain,
                title: "Black Hills Location",
                desc: "Custer, SD. Population 2,100. Zero state income tax. Median home under $350K. Real quality of life.",
              },
              {
                icon: Network,
                title: "Ecosystem Hub",
                desc: "All 13 BHC entities operate from or connect through the Grow Campus. Cross-entity collaboration is built in.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <CyanGlow className="rounded-2xl h-full">
                  <div className="rounded-2xl border border-cyan/10 bg-surface p-6 h-full">
                    <item.icon className="h-6 w-6 text-cyan mb-3" />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
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
              Let&apos;s Talk About{" "}
              <span className="text-cyan">Your Business</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Every great partnership starts with a conversation. Book a
              Discovery Session and let us show you what AI-powered digital
              services can do for your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <PulseGlow>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan text-background font-semibold px-8 py-3.5 rounded-md hover:bg-cyan-light transition-all duration-300 shadow-lg shadow-cyan/10"
              >
                Book a Discovery Session <ArrowRight className="h-4 w-4" />
              </Link>
            </PulseGlow>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
