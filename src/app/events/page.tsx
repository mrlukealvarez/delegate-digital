import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Search,
  Cpu,
  Monitor,
  Trophy,
  Coffee,
  Megaphone,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CountUp,
  CyanShimmer,
  CyanGlow,
  ScaleReveal,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Free digital audits, AI automation workshops, webinars, and tech meetups from Delegate Digital. Helping small businesses modernize.",
  openGraph: {
    title: "Events | Delegate Digital",
    description:
      "Free digital audits, AI automation workshops, webinars, and tech meetups from Delegate Digital.",
  },
};

const events = [
  {
    icon: Search,
    title: "Free Digital Audit Days",
    pricing: "Free",
    frequency: "Monthly",
    description:
      "Walk-in process audits for local businesses. We map your workflows, find the bottlenecks, and show you exactly where automation saves you 20+ hours a week.",
    details: "First Friday of each month, 10 AM - 4 PM",
  },
  {
    icon: Cpu,
    title: "AI Automation Workshops",
    pricing: "$49/seat",
    frequency: "Bi-Weekly",
    description:
      "Hands-on GoHighLevel, Zapier, and n8n training. Build your first automation live. Walk out with a working workflow, not just a slide deck.",
    details: "Every other Tuesday, 1 PM - 3 PM",
  },
  {
    icon: Monitor,
    title: "Small Business Webinars",
    pricing: "Free",
    frequency: "Weekly",
    description:
      "30-minute remote sessions on SEO, social media, AI tools, and digital marketing. Short, actionable, and recorded for replay.",
    details: "Every Wednesday, 12 PM (remote)",
  },
  {
    icon: Trophy,
    title: "Quarterly Client Showcase",
    pricing: "Free",
    frequency: "Quarterly",
    description:
      "Client success stories, live demos of completed projects, and networking. See what AI automation actually looks like in real Black Hills businesses.",
    details: "4 events/yr, networking + case studies",
  },
  {
    icon: Coffee,
    title: "Tech Tuesday Meetups",
    pricing: "Free",
    frequency: "Weekly",
    description:
      "Informal tech community gathering at THE OP. Developers, designers, and business owners sharing what they're building. No agenda, just builders.",
    details: "Every Tuesday, 5 PM at THE OP cafe",
  },
  {
    icon: Megaphone,
    title: "Annual Digital Summit",
    pricing: "GA $99 | VIP $299",
    frequency: "Yearly",
    description:
      "Full-day conference with keynotes, breakout sessions, and hands-on labs. The premier small-business tech event in the Black Hills region.",
    details: "Year 2+ launch, 200 attendee target",
  },
];

const revenueModel = [
  { label: "Workshop Revenue", value: 25, prefix: "$", suffix: "K/yr", icon: DollarSign },
  { label: "Summit Revenue", value: 50, prefix: "$", suffix: "K/yr", icon: TrendingUp },
  { label: "Events per Year", value: 80, prefix: "", suffix: "+", icon: Calendar },
  { label: "Leads per Event", value: 15, prefix: "", suffix: " avg", icon: Users },
];

const weeklySchedule = [
  { day: "Monday", event: "Client Onboarding Calls", detail: "New project kickoffs" },
  { day: "Tuesday", event: "Tech Tuesday (5 PM)", detail: "Community meetup at THE OP" },
  { day: "Wednesday", event: "Webinar (12 PM)", detail: "Free 30-min remote session" },
  { day: "Thursday", event: "Workshop Prep", detail: "Content development" },
  { day: "Friday", event: "Digital Audit Day", detail: "1st Friday monthly, walk-ins" },
  { day: "Saturday", event: "Open Office Hours", detail: "Drop-in Q&A (1st & 3rd Sat)" },
  { day: "Sunday", event: "Rest", detail: "Recharge for the week" },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 py-20 text-foreground">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan">
              Learn. Automate. Grow.
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              <CyanShimmer>Events</CyanShimmer> at Delegate Digital
            </h1>
            <p className="max-w-xl text-muted">
              Free audits, hands-on workshops, weekly webinars, and community meetups.
              Every event is designed to help small businesses modernize with AI.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Revenue Model Callout */}
      <section className="border-b border-cyan/20 bg-surface px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {revenueModel.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan/20">
                    <stat.icon className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
              Every Delegate Digital event feeds the BHC flywheel. Free audit attendees
              become retainer clients. Workshop participants refer neighbors. Tech Tuesday
              regulars build the regional tech community across all 13 entities.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Event Calendar</h2>
            <p className="mt-2 text-muted">
              Six event types built to educate, convert, and grow the Black Hills tech ecosystem.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <CyanGlow className="h-full rounded-2xl">
                  <div className="flex h-full flex-col rounded-2xl border border-cyan/20 bg-surface p-6 transition-all hover:border-cyan/40 hover:shadow-lg hover:shadow-cyan/10">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/20">
                        <event.icon className="h-5 w-5 text-cyan" />
                      </div>
                      <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                        {event.frequency}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-cyan">
                      {event.pricing}
                    </p>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                      {event.description}
                    </p>
                    <p className="text-xs text-muted/70">
                      {event.details}
                    </p>
                  </div>
                </CyanGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Weekly Schedule</h2>
          </FadeIn>

          <div className="space-y-3">
            {weeklySchedule.map((day, i) => (
              <ScaleReveal key={day.day} delay={i * 0.08}>
                <div className="flex flex-col rounded-xl border border-cyan/10 bg-background p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-28 text-sm font-semibold text-cyan">
                      {day.day}
                    </span>
                    <span className="font-medium text-foreground">{day.event}</span>
                  </div>
                  <span className="mt-2 text-sm text-muted sm:mt-0">
                    {day.detail}
                  </span>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-20 text-center">
        <ScaleReveal>
          <div className="mx-auto max-w-2xl">
            <Cpu className="mx-auto mb-4 h-12 w-12 text-cyan" />
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to Modernize Your Business?
            </h2>
            <p className="mb-8 text-muted">
              Start with a free digital audit. We will map your workflows, find the
              bottlenecks, and show you exactly where AI saves you time and money.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-cyan px-8 py-3 font-semibold text-background transition-colors hover:bg-cyan-light"
            >
              Book a Discovery Session
            </Link>
          </div>
        </ScaleReveal>
      </section>
    </>
  );
}
