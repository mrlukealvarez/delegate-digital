import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Megaphone,
  Zap,
  Users,
  DollarSign,
  Car,
  Mountain,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CyanGlow,
  CyanShimmer,
  CountUp,
  ScaleReveal,
  PulseGlow,
} from "@/components/motion";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Delegate Digital",
  description:
    "Join Delegate Digital in Custer, South Dakota. $145K minimum salary. Build AI-powered digital services for small businesses.",
};

/* ---------- Philosophy Cards ---------- */

const philosophyCards = [
  {
    icon: Briefcase,
    title: "Builders, Not Bureaucrats",
    description:
      "We ship products, automations, and websites every week. No meetings about meetings. No decks about decks. You build things that real businesses use.",
  },
  {
    icon: DollarSign,
    title: "$145K Minimum Base",
    description:
      "In Custer, SD — $145K buys what $210K+ buys in Denver or Austin. Zero state income tax. Five-minute commute. Mountains out your window.",
  },
  {
    icon: Mountain,
    title: "Black Hills Lifestyle",
    description:
      "Custer, South Dakota. Gateway to Custer State Park. 15-acre campus. Work surrounded by granite spires, not cubicle walls.",
  },
  {
    icon: Zap,
    title: "AI-First Methodology",
    description:
      "Every team member uses AI daily — Claude, Cursor, Vercel AI, automation tools. You will learn and use the most advanced AI development workflows in existence.",
  },
];

/* ---------- Positions ---------- */

interface Position {
  title: string;
  salary: string;
  type: string;
  icon: LucideIcon;
  fieldRole: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const positions: Position[] = [
  {
    title: "Full-Stack Developer",
    salary: "$145K - $175K",
    type: "Full-Time",
    icon: Code,
    fieldRole: false,
    description:
      "Build websites, mobile apps, and automation systems for Delegate Digital clients. Next.js, React, Supabase, and AI-powered development workflows. You ship production code every week.",
    responsibilities: [
      "Client website and app development",
      "Automation workflow builds (Zapier, n8n)",
      "API integrations and backend services",
      "Code review and quality assurance",
    ],
    requirements: [
      "3+ years full-stack development experience",
      "Next.js, React, TypeScript proficiency",
      "Database design and API development",
      "Comfortable with AI-assisted coding tools",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    salary: "$145K - $165K",
    type: "Full-Time",
    icon: Megaphone,
    fieldRole: true,
    description:
      "Run social media, content strategy, and growth campaigns for Delegate Digital clients. You manage multiple accounts, create content, and deliver measurable results.",
    responsibilities: [
      "Social media management across platforms",
      "Content creation and editorial calendars",
      "Analytics reporting and optimization",
      "Client strategy calls and updates",
    ],
    requirements: [
      "2+ years social media management experience",
      "Content creation skills (copy, graphics)",
      "Analytics and reporting proficiency",
      "Experience managing multiple client accounts",
    ],
  },
  {
    title: "AI Automation Engineer",
    salary: "$145K - $180K",
    type: "Full-Time",
    icon: Zap,
    fieldRole: false,
    description:
      "Design and build automation workflows that save Delegate Digital clients 20+ hours per week. Zapier, n8n, GoHighLevel, and custom integrations. You make businesses run on autopilot.",
    responsibilities: [
      "Client process audit and automation design",
      "Workflow build and testing",
      "CRM setup and pipeline automation",
      "Integration maintenance and optimization",
    ],
    requirements: [
      "2+ years automation or integration experience",
      "Zapier, n8n, or Make proficiency",
      "CRM platform experience (GoHighLevel, HubSpot)",
      "Problem-solving and process thinking",
    ],
  },
  {
    title: "Account Manager",
    salary: "$145K - $165K",
    type: "Full-Time",
    icon: Users,
    fieldRole: true,
    description:
      "Own client relationships from Discovery Session to ongoing engagement. You are the single point of contact for Delegate Digital clients — managing projects, expectations, and results.",
    responsibilities: [
      "Client onboarding and Discovery Sessions",
      "Project coordination and timeline management",
      "Monthly strategy calls and reporting",
      "Upsell and cross-sell ecosystem services",
    ],
    requirements: [
      "2+ years account management or client services",
      "Project management experience",
      "Strong communication and presentation skills",
      "Comfortable with digital and tech concepts",
    ],
  },
];

/* ---------- Page ---------- */

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 py-16 md:py-24 text-foreground">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
              Join the Team
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Build the Future of{" "}
              <CyanShimmer>Small Business Digital</CyanShimmer>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
              Delegate Digital is hiring operators who build things. AI-powered
              digital services for businesses that deserve enterprise
              capabilities at prices they can actually afford.
            </p>
            <div className="inline-flex flex-col rounded-2xl border border-cyan/20 bg-cyan/10 px-10 py-8">
              <CountUp
                end={145}
                prefix="$"
                suffix="K"
                className="text-5xl font-bold text-cyan md:text-6xl"
              />
              <div className="mt-2 text-sm font-medium text-cyan/70">
                Minimum Base Salary
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COL Callout */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <ScaleReveal>
            <div className="rounded-2xl border border-cyan/20 bg-background p-8 text-center md:p-12">
              <DollarSign className="mx-auto mb-4 h-10 w-10 text-cyan" />
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Your Dollar Goes Further Here
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
                <span className="font-semibold text-foreground">
                  $145K in Custer, SD = $210K+ in Denver or Austin.
                </span>{" "}
                Zero state income tax. Five-minute commute. Mountains out your
                window. Median home price under $350K.
              </p>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Our Hiring Philosophy
            </h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {philosophyCards.map((card) => (
              <StaggerItem key={card.title}>
                <CyanGlow className="rounded-2xl">
                  <div className="rounded-2xl border border-cyan/10 bg-surface p-8">
                    <card.icon className="mb-4 h-8 w-8 text-cyan" />
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {card.title}
                    </h3>
                    <p className="leading-relaxed text-muted">
                      {card.description}
                    </p>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
              Open Positions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
              Four roles to build and run a digital services engine. Every seat
              matters.
            </p>
          </FadeIn>
          <StaggerContainer className="space-y-8">
            {positions.map((pos) => (
              <StaggerItem key={pos.title}>
                <PulseGlow className="rounded-2xl">
                  <div className="rounded-2xl border border-cyan/10 bg-cyan/5 p-8">
                    {/* Header Row */}
                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10">
                          <pos.icon className="h-6 w-6 text-cyan" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {pos.title}
                          </h3>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="inline-flex rounded-full bg-cyan/10 px-3 py-0.5 text-xs font-semibold text-cyan">
                              {pos.type}
                            </span>
                            {pos.fieldRole && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-cyan/20 px-3 py-0.5 text-xs font-semibold text-cyan">
                                <Car className="h-3 w-3" />
                                Field Role — $1,500/mo car allowance
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <span className="text-xl font-bold text-cyan">
                        {pos.salary}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-muted">
                      {pos.description}
                    </p>

                    {/* Responsibilities & Requirements */}
                    <div className="mb-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {pos.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {pos.requirements.map((r) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/30" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex rounded-full bg-cyan px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-cyan-light"
                    >
                      Apply Now
                    </Link>
                  </div>
                </PulseGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Perks Link */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <ScaleReveal>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Benefits Beyond the Salary
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted mb-8">
                Unlimited PTO. Health, dental, vision. AI tools budget.
                Professional development fund. Kokada snack bar. And the entire
                Black Hills as your backyard.
              </p>
              <Link
                href="/perks"
                className="inline-flex items-center gap-2 text-cyan font-semibold hover:text-cyan-light transition-colors"
              >
                See All Perks <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="leading-relaxed text-muted">
              Delegate Digital is entity #13 in the Black Hills Consortium.
              Every team member gets access to 13 interconnected entities, a
              15-acre campus, and an AI-first development methodology that
              produces enterprise-quality work at small business prices.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
