import Link from "next/link";
import { Code } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan/10 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-cyan" />
              <span className="text-lg font-bold">
                <span className="text-cyan">DELEGATE</span>{" "}
                <span className="text-foreground">DIGITAL</span>
              </span>
            </div>
            <p className="text-sm text-muted max-w-sm">
              Enterprise-grade AI and digital services at small business prices.
              Web design, mobile apps, automation, CRM, and more.
            </p>
            <p className="text-xs text-muted mt-4">
              Part of{" "}
              <a
                href="https://bhconsortium.com"
                className="text-cyan hover:underline transition-colors"
              >
                Black Hills Consortium
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted hover:text-cyan transition-colors">All Services</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted hover:text-cyan transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-sm text-muted hover:text-cyan transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-cyan transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted hover:text-cyan transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-sm text-muted hover:text-cyan transition-colors">Careers</Link></li>
              <li><Link href="/perks" className="text-sm text-muted hover:text-cyan transition-colors">Perks</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan/10 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-muted/50 uppercase tracking-wider">Built With</span>
            <div className="flex items-center gap-2.5">
              {[
                { href: "https://anthropic.com", label: "Anthropic", char: "A" },
                { href: "https://vercel.com", label: "Vercel", char: "\u25B2" },
                { href: "https://supabase.com", label: "Supabase", char: "S" },
                { href: "https://meta.com", label: "Meta", char: "M" },
                { href: "https://nextjs.org", label: "Next.js", char: "N" },
                { href: "https://x.ai", label: "xAI", char: "X" },
                { href: "https://openai.com", label: "OpenAI", char: "O" },
                { href: "https://cursor.com", label: "Cursor", char: "C" },
                { href: "https://elevenlabs.io", label: "ElevenLabs", char: "11" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan/10 text-[10px] font-semibold text-muted/60 transition-all hover:bg-cyan/20 hover:text-cyan hover:scale-110"
                >
                  {item.char}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Delegate Digital. All rights reserved.
            </p>
            <p className="text-xs text-muted">
              Grow Campus &middot; Custer, South Dakota
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
