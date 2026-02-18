// ── Delegate Digital Dashboard Queries ────────────────────────────────
// Stub functions returning sample data. Replace with live Supabase queries
// when the CRM tables for Delegate Digital are provisioned.

export interface Client {
  id: string
  name: string
  status: "active" | "prospect" | "churned"
  services: string[]
  monthlyRevenue: number
  startDate: string
  contactEmail: string
}

export interface Project {
  id: string
  name: string
  clientName: string
  stage: "discovery" | "in-progress" | "review" | "complete"
  type: string
  value: number
  startDate: string
  dueDate: string
}

export interface MonthlyRevenue {
  month: string
  revenue: number
  clients: number
}

export interface DashboardStats {
  activeClients: number
  mrr: number
  annualRevenue: number
  retention: number
}

// ── Sample Data ──────────────────────────────────────────────────────

const sampleClients: Client[] = [
  { id: "1", name: "Skogen Kitchen", status: "active", services: ["Web Design", "Social Media"], monthlyRevenue: 800, startDate: "2025-09-15", contactEmail: "info@skogenkitchen.com" },
  { id: "2", name: "Wall Drug", status: "active", services: ["CRM Setup", "Automation"], monthlyRevenue: 1200, startDate: "2025-08-01", contactEmail: "marketing@walldrug.com" },
  { id: "3", name: "Prairie Berry Winery", status: "active", services: ["Web Design", "Mobile App"], monthlyRevenue: 950, startDate: "2025-10-01", contactEmail: "contact@prairieberry.com" },
  { id: "4", name: "Black Hills Bagels", status: "active", services: ["Social Media", "Automation"], monthlyRevenue: 500, startDate: "2025-11-15", contactEmail: "owner@bhbagels.com" },
  { id: "5", name: "Custer State Park Resort", status: "active", services: ["Web Design", "CRM Setup", "Automation"], monthlyRevenue: 1500, startDate: "2025-07-01", contactEmail: "marketing@custerresorts.com" },
  { id: "6", name: "Deadwood Gulch Gaming", status: "active", services: ["Mobile App", "Digital Products"], monthlyRevenue: 700, startDate: "2025-12-01", contactEmail: "ops@deadwoodgulch.com" },
  { id: "7", name: "Rapid City Downtown Alliance", status: "prospect", services: ["Web Design", "Social Media"], monthlyRevenue: 0, startDate: "", contactEmail: "director@downtownrc.com" },
  { id: "8", name: "Mount Rushmore Brewing", status: "active", services: ["Web Design", "Social Media", "Automation"], monthlyRevenue: 850, startDate: "2026-01-01", contactEmail: "tap@mtrushmorebrew.com" },
  { id: "9", name: "Hills Dental", status: "prospect", services: ["CRM Setup", "Workflow Optimization"], monthlyRevenue: 0, startDate: "", contactEmail: "front@hillsdental.com" },
  { id: "10", name: "Crazy Horse Memorial Gift Shop", status: "active", services: ["Web Design", "Digital Products"], monthlyRevenue: 600, startDate: "2026-01-15", contactEmail: "shop@crazyhorse.org" },
]

const sampleProjects: Project[] = [
  { id: "p1", name: "Website Redesign", clientName: "Skogen Kitchen", stage: "complete", type: "Web Design", value: 4500, startDate: "2025-09-15", dueDate: "2025-10-30" },
  { id: "p2", name: "CRM Migration", clientName: "Wall Drug", stage: "in-progress", type: "CRM Setup", value: 8000, startDate: "2026-01-01", dueDate: "2026-03-01" },
  { id: "p3", name: "Mobile Ordering App", clientName: "Prairie Berry Winery", stage: "in-progress", type: "Mobile App", value: 12000, startDate: "2025-12-01", dueDate: "2026-04-01" },
  { id: "p4", name: "Social Media Automation", clientName: "Black Hills Bagels", stage: "complete", type: "Automation", value: 2500, startDate: "2025-11-15", dueDate: "2025-12-15" },
  { id: "p5", name: "Booking System", clientName: "Custer State Park Resort", stage: "review", type: "Web Design", value: 15000, startDate: "2025-10-01", dueDate: "2026-02-01" },
  { id: "p6", name: "Loyalty App", clientName: "Deadwood Gulch Gaming", stage: "discovery", type: "Mobile App", value: 9000, startDate: "2026-02-01", dueDate: "2026-05-01" },
  { id: "p7", name: "Workflow Automation", clientName: "Mount Rushmore Brewing", stage: "in-progress", type: "Automation", value: 3500, startDate: "2026-01-15", dueDate: "2026-03-15" },
  { id: "p8", name: "E-Commerce Store", clientName: "Crazy Horse Memorial Gift Shop", stage: "review", type: "Digital Products", value: 7500, startDate: "2026-01-15", dueDate: "2026-03-01" },
]

const sampleMonthlyRevenue: MonthlyRevenue[] = [
  { month: "Mar 2025", revenue: 2800, clients: 5 },
  { month: "Apr 2025", revenue: 3500, clients: 7 },
  { month: "May 2025", revenue: 4200, clients: 9 },
  { month: "Jun 2025", revenue: 5100, clients: 11 },
  { month: "Jul 2025", revenue: 6300, clients: 14 },
  { month: "Aug 2025", revenue: 7800, clients: 16 },
  { month: "Sep 2025", revenue: 8900, clients: 18 },
  { month: "Oct 2025", revenue: 10200, clients: 21 },
  { month: "Nov 2025", revenue: 11500, clients: 23 },
  { month: "Dec 2025", revenue: 12800, clients: 25 },
  { month: "Jan 2026", revenue: 14100, clients: 28 },
  { month: "Feb 2026", revenue: 15000, clients: 30 },
]

// ── Query Functions ──────────────────────────────────────────────────

export async function getActiveClients(): Promise<Client[]> {
  // TODO: Replace with Supabase query when delegate_digital CRM tables exist
  return sampleClients
}

export async function getProjects(): Promise<Project[]> {
  // TODO: Replace with Supabase query
  return sampleProjects
}

export async function getRevenueData(): Promise<MonthlyRevenue[]> {
  // TODO: Replace with Supabase query
  return sampleMonthlyRevenue
}

export async function getDashboardStats(): Promise<DashboardStats> {
  // Computed from sample data
  const activeClients = sampleClients.filter(c => c.status === "active").length
  const mrr = sampleClients.reduce((sum, c) => sum + c.monthlyRevenue, 0)
  return {
    activeClients,
    mrr,
    annualRevenue: mrr * 12,
    retention: 80,
  }
}
