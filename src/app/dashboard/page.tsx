export const dynamic = "force-dynamic"

import { getDashboardStats, getActiveClients, getRevenueData } from "@/lib/db/dashboard-queries"
import OverviewClient from "./_components/overview-client"

export default async function DashboardPage() {
  const [stats, clients, revenueData] = await Promise.all([
    getDashboardStats(),
    getActiveClients(),
    getRevenueData(),
  ])

  const topClients = clients
    .filter((c) => c.status === "active")
    .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)
    .slice(0, 5)

  return (
    <OverviewClient
      stats={stats}
      topClients={topClients}
      revenueData={revenueData}
    />
  )
}
