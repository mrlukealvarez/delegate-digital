import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  Car,
  Mountain,
  Cpu,
  Clock,
  Heart,
  GraduationCap,
  Sparkles,
  Coffee,
  Home,
  Dumbbell,
  Laptop,
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
  CountUp,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Perks | Delegate Digital",
  description:
    "Employee perks at Delegate Digital: $145K minimum salary, unlimited PTO, AI tools budget, Grow Campus, and more. Custer, South Dakota.",
};

const perks = [
  {
    icon: DollarSign,
    title: "$145K Minimum Salary",
    description:
      "Every position, every entity in the Black Hills Consortium starts at $145K. In Custer, SD, that buys what $210K+ buys in Denver. Zero state income tax.",
  },
  {
    icon: Car,
    title: "$1,500/mo Car Allowance",
    description:
      "Field roles — Account Manager, Digital Marketing Specialist — receive $1,500 per month for vehicle expenses. Client visits, conferences, and travel covered.",
  },
  {
    icon: Heart,
    title: "Health, Dental, Vision",
    description:
      "Comprehensive medical, dental, and vision insurance from day one. 100% employer-covered for you and your dependents. No waiting periods.",
  },
  {
    icon: Clock,
    title: "Unlimited PTO",
    description:
      "We track output, not hours. Take time when you need it. Mental health days, vacations, family time — no questions asked, no approval queues.",
  },
  {
    icon: Mountain,
    title: "Grow Campus",
    description:
      "Work from a 15-acre campus in Custer, South Dakota. Gateway to Custer State Park. Collaborative spaces, meeting rooms, and the Black Hills as your office view.",
  },
  {
    icon: Cpu,
    title: "AI Tools & Hardware Budget",
    description:
      "MacBook Pro from day one. Monthly stipend for AI tools — Claude Pro, Cursor, Midjourney, or whatever you need. We invest in the tools that make you fast.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description:
      "$3K annual development fund for books, courses, certifications, and conferences. Your growth is our investment. Use it however you want.",
  },
  {
    icon: Sparkles,
    title: "Kokada Snack Bar",
    description:
      "The official campus snack. Free access to the Kokada snack bar stocked with premium treats. Start every day right.",
  },
  {
    icon: Coffee,
    title: "THE OP Free Coffee",
    description:
      "Unlimited coffee and espresso at THE OP cafe, right on campus. Every morning, every afternoon pick-me-up — on the house.",
  },
  {
    icon: Home,
    title: "Campus Housing Available",
    description:
      "Subsidized housing near or on the Grow Campus. Walk to work in minutes. No commute, no traffic, no stress.",
  },
  {
    icon: Dumbbell,
    title: "$200/mo Wellness Stipend",
    description:
      "Monthly stipend for anything wellness-related. Gym membership, gear, massage, supplements, therapy — your call, your health.",
  },
  {
    icon: Laptop,
    title: "Employee Equity Program",
    description:
      "Equity participation in Delegate Digital. As the entity grows, so does your stake. Aligned incentives from day one.",
  },
];

export default function PerksPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection speed={0.1} className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
              Beyond Compensation
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Life at{" "}
              <CyanShimmer className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Delegate Digital
              </CyanShimmer>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
              {perks.length} perks designed around the idea that great work
              comes from great people who are taken care of. From the salary
              floor to the snack bar.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex flex-col rounded-2xl border border-cyan/20 bg-cyan/10 px-6 py-4">
                <span className="text-3xl font-bold text-cyan">
                  <CountUp
                    prefix="$"
                    end={145}
                    suffix="K"
                    duration={2}
                    className="text-3xl font-bold text-cyan"
                  />
                </span>
                <span className="text-xs font-medium text-cyan/70">
                  Salary Floor
                </span>
              </div>
              <div className="inline-flex flex-col rounded-2xl border border-cyan/20 bg-cyan/10 px-6 py-4">
                <span className="text-3xl font-bold text-cyan">
                  {perks.length}
                </span>
                <span className="text-xs font-medium text-cyan/70">
                  Total Perks
                </span>
              </div>
              <div className="inline-flex flex-col rounded-2xl border border-cyan/20 bg-cyan/10 px-6 py-4">
                <span className="text-3xl font-bold text-cyan">15</span>
                <span className="text-xs font-medium text-cyan/70">
                  Acre Campus
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Perks Grid */}
      <section className="bg-surface px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <CyanGlow className="rounded-2xl h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-cyan/10 bg-background/80 p-6 backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 mb-4">
                      <perk.icon className="h-5 w-5 text-cyan" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {perk.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {perk.description}
                    </p>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Ecosystem Access */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Plus: <span className="text-cyan">Full Ecosystem Access</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Every Delegate Digital employee gets access to the full Black Hills
              Consortium network. Cross-entity training rotations. Seed Academy
              courses for you and your family. Demo Day front-row seats. Outpost
              Media content workshops. The whole ecosystem is your workplace.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cyan/10 bg-surface px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Ready to Experience This?
            </h2>
            <p className="mb-8 text-muted">
              These are not hypothetical perks on a corporate benefits page.
              This is the actual lifestyle waiting for you at a digital services
              company in the Black Hills.
            </p>
            <PulseGlow>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-cyan px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-cyan-light rounded-md"
              >
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Link>
            </PulseGlow>
          </FadeIn>
        </div>
      </section>

      {/* Footer Blurb */}
      <section className="bg-background px-6 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-sm leading-relaxed text-muted/60">
              Delegate Digital is entity #13 in the Black Hills Consortium. All
              perks are available to full-time Delegate Digital employees from
              day one. The $145K salary floor applies to all positions across all
              13 BHC entities.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
