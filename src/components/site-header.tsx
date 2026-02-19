"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/careers", label: "Careers" },
  { href: "/perks", label: "Perks" },
  { href: "/get-involved", label: "Get Involved" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Code className="h-6 w-6 text-cyan group-hover:text-cyan-light transition-colors" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-cyan">DELEGATE</span>{" "}
              <span className="text-foreground">DIGITAL</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold bg-cyan text-background px-4 py-2 rounded-md hover:bg-cyan-light transition-colors"
            >
              Book a Call
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-cyan/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold bg-cyan text-background px-4 py-2 rounded-md text-center hover:bg-cyan-light transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
