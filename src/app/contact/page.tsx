"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
} from "lucide-react";
import {
  FadeIn,
  CyanGlow,
  CyanShimmer,
  ParallaxSection,
  PulseGlow,
  ScaleReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <ParallaxSection speed={0.1} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan">
                Let&apos;s Talk
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Book a{" "}
                <CyanShimmer className="text-4xl md:text-6xl font-bold">
                  Discovery Session
                </CyanShimmer>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                $500. Two hours. A complete process audit and recommendations
                document you can act on immediately — whether you hire us or
                not.
              </p>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <FadeIn>
                <h2 className="text-2xl font-bold mb-8">
                  Tell Us About Your{" "}
                  <span className="text-cyan">Business</span>
                </h2>
              </FadeIn>

              {submitted ? (
                <ScaleReveal>
                  <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 md:p-12 text-center">
                    <CheckCircle className="h-16 w-16 text-cyan mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">
                      Request Received
                    </h3>
                    <p className="text-muted text-lg leading-relaxed mb-6">
                      We will review your submission and get back to you within
                      48 hours to schedule your Discovery Session.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-cyan font-medium hover:text-cyan-light transition-colors"
                    >
                      Back to Home <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScaleReveal>
              ) : (
                <FadeIn delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-cyan/10 bg-background py-3 px-4 text-foreground placeholder:text-muted focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        required
                        value={formState.business}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-cyan/10 bg-background py-3 px-4 text-foreground placeholder:text-muted focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors"
                        placeholder="Smith & Co."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-cyan/10 bg-background py-3 px-4 text-foreground placeholder:text-muted focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors"
                        placeholder="jane@smithco.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-cyan/10 bg-background py-3 px-4 text-foreground placeholder:text-muted focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors"
                        placeholder="(605) 555-0123"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="challenge"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        What&apos;s your biggest business challenge?
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        required
                        rows={5}
                        value={formState.challenge}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-cyan/10 bg-background py-3 px-4 text-foreground placeholder:text-muted focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors resize-none"
                        placeholder="Tell us about the manual processes eating your time, the systems that don't talk to each other, or the growth you can't quite reach..."
                      />
                    </div>

                    <PulseGlow>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-cyan text-background font-semibold py-3.5 rounded-md hover:bg-cyan-light transition-all duration-300 shadow-lg shadow-cyan/10"
                      >
                        <Send className="h-4 w-4" />
                        Request Discovery Session
                      </button>
                    </PulseGlow>
                  </form>
                </FadeIn>
              )}
            </div>

            {/* Info Panel */}
            <div>
              <FadeIn delay={0.2}>
                <h2 className="text-2xl font-bold mb-8">
                  Get in <span className="text-cyan">Touch</span>
                </h2>
              </FadeIn>

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <CyanGlow className="rounded-2xl">
                    <div className="rounded-2xl border border-cyan/10 bg-background/80 p-6 flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10">
                        <MapPin className="h-5 w-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Address</h3>
                        <p className="text-sm text-muted leading-relaxed">
                          Grow Campus
                          <br />
                          Custer, South Dakota 57730
                        </p>
                      </div>
                    </div>
                  </CyanGlow>
                </StaggerItem>

                <StaggerItem>
                  <CyanGlow className="rounded-2xl">
                    <div className="rounded-2xl border border-cyan/10 bg-background/80 p-6 flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10">
                        <Mail className="h-5 w-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-sm text-muted">
                          hello@delegatedigital.com
                        </p>
                      </div>
                    </div>
                  </CyanGlow>
                </StaggerItem>

                <StaggerItem>
                  <CyanGlow className="rounded-2xl">
                    <div className="rounded-2xl border border-cyan/10 bg-background/80 p-6 flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10">
                        <Phone className="h-5 w-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p className="text-sm text-muted">(605) 555-0100</p>
                      </div>
                    </div>
                  </CyanGlow>
                </StaggerItem>
              </StaggerContainer>

              {/* What to Expect */}
              <FadeIn delay={0.3}>
                <div className="mt-8 rounded-2xl border border-cyan/10 bg-background/80 p-6">
                  <h3 className="font-bold mb-4 text-lg">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">
                          48-Hour Response
                        </p>
                        <p className="text-xs text-muted">
                          We respond to every inquiry within 48 hours.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">
                          2-Hour Deep Dive
                        </p>
                        <p className="text-xs text-muted">
                          Your Discovery Session covers every process, tool, and
                          growth opportunity.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Send className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">
                          Actionable Deliverable
                        </p>
                        <p className="text-xs text-muted">
                          Walk away with a recommendations document — whether
                          you hire us or not.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
