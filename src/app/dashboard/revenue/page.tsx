export const dynamic = "force-dynamic"

import { getRevenueData, getDashboardStats, getActiveClients } from "@/lib/db/dashboard-queries"
import RevenueClient from "./revenue-client"

export default async function RevenuePage() {
  const [revenueData, stats, clients] = await Promise.all([
    getRevenueData(),
    getDashboardStats(),
    getActiveClients(),
  ])

  return (
    <RevenueClient
      revenueData={revenueData}
      stats={stats}
      clients={clients}
    />
  )
}
