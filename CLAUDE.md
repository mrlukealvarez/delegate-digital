# DELEGATE DIGITAL
> Entity #13 | B2B Digital Services & AI Consulting
> Part of Black Hills Consortium
> Updated: February 2026

## Quick Reference
- **Slug:** delegate-iq
- **Stack:** Next.js 16.1.6, React 19.2.3, Tailwind v4, Framer Motion 12.33
- **Brand Color:** Cyan #06B6D4
- **Dashboard Auth:** Cookie `delegate_dashboard_auth`, password `delegate2026`
- **Parent Org:** Black Hills Consortium (501c6)

## Revenue
- Y1: $180K (30 clients x $500/mo avg)
- Y5: $1.5M (150 clients x $833/mo avg)

## Services (9)
1. AI Process Automation
2. Mobile App Development
3. Digital Products
4. Web Design & Development
5. CRM Setup & Management
6. Social Media Management
7. Workflow Optimization
8. Team Training & Onboarding
9. Business Consulting

## Key Files
| Purpose | Path |
|---------|------|
| Design tokens | `src/app/globals.css` |
| Motion components | `src/components/motion.tsx` |
| Dashboard queries | `src/lib/db/dashboard-queries.ts` |
| Root layout | `src/app/layout.tsx` |
| Dashboard layout | `src/app/dashboard/layout.tsx` |
| Auth middleware | `middleware.ts` |

## Architecture
- **Public pages:** Homepage, Services, About, Pricing, Blog, Careers, Perks, Contact
- **Dashboard:** Overview, Clients, Projects, Revenue (cookie-auth protected)
- **Motion system:** 10 components — FadeIn, SlideIn, StaggerContainer, StaggerItem, CyanGlow, CyanShimmer, CountUp, ParallaxSection, PulseGlow, ScaleReveal
- **Charts:** Recharts with ChartContainer/ChartTooltip wrapper

## Deployment
- **Vercel project:** delegate-digital
- **Domain:** TBD
- **Supabase:** Shared BHC instance (service_role for dashboard queries)

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| --cyan | #06B6D4 | Primary accent |
| --cyan-light | #22D3EE | Hover states, highlights |
| --cyan-dark | #0891B2 | Active states |
| --background | #0A0A0A | Page background |
| --surface | #111111 | Card backgrounds |
| --surface-light | #1A1A1A | Elevated surfaces |
| --foreground | #F5F5F5 | Primary text |
| --muted | #888888 | Secondary text |

## Chart Colors (cyan palette)
`#06B6D4`, `#22D3EE`, `#0891B2`, `#155E75`, `#083344`

## DO NOT
- Change brand color from cyan (#06B6D4)
- Use gold/emerald/green accent colors (those belong to other entities)
- Modify verified financial numbers without checking master-hub
- Add Supabase live queries without testing fallback behavior
- Remove motion component accessibility (useReducedMotion checks)
