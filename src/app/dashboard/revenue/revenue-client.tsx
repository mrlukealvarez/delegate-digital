"use client"

import {
  AreaChart, Area,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Legend,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CyanGlow, StaggerContainer, StaggerItem, CountUp, FadeIn } from "@/components/motion"
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"
import type { MonthlyRevenue, DashboardStats, Client } from "@/lib/db/dashboard-queries"

const tierBreakdown = [
  { name: "Starter ($299/mo)", value: 35, color: "#083344" },
  { name: "Growth ($499/mo)", value: 40, color: "#06B6D4" },
  { name: "Premium ($999/mo)", value: 20, color: "#22D3EE" },
  { name: "Enterprise ($1,500+/mo)", value: 5, color: "#67E8F9" },
]

const serviceRevenue = [
  { service: "Web Design", revenue: 4500 },
  { service: "Automation", revenue: 3300 },
  { service: "CRM Setup", revenue: 2700 },
  { service: "Social Media", revenue: 2250 },
  { service: "Mobile Apps", revenue: 1500 },
  { service: "Consulting", revenue: 750 },
]

interface RevenueClientProps {
  revenueData: MonthlyRevenue[]
  stats: DashboardStats
  clients: Client[]
}

export default function RevenueClient({ revenueData, stats, clients }: RevenueClientProps) {
  const activeClients = clients.filter((c) => c.status === "active")
  const avgRevenuePerClient = activeClients.length > 0
    ? Math.round(stats.mrr / activeClients.length)
    : 0

  // Calculate month-over-month growth
  const currentMonth = revenueData[revenueData.length - 1]
  const previousMonth = revenueData[revenueData.length - 2]
  const momGrowth = previousMonth
    ? ((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue * 100).toFixed(1)
    : "0"
  const isPositiveGrowth = Number(momGrowth) >= 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-cyan">Revenue Analytics</h1>
        <p className="mt-2 text-muted">Track revenue trends, tiers, and service performance</p>
      </div>

      {/* KPI Cards */}
      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <DollarSign className="h-6 w-6 text-cyan" />
              <div className={`flex items-center gap-1 text-xs font-medium ${isPositiveGrowth ? "text-emerald-400" : "text-red-400"}`}>
                {isPositiveGrowth ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {momGrowth}%
              </div>
            </div>
            <p className="text-sm text-muted">Current MRR</p>
            <p className="text-2xl font-bold text-cyan">
              $<CountUp end={stats.mrr / 1000} decimals={1} suffix="K" />
            </p>
          </CyanGlow>
        </StaggerItem>

        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-3">
              <TrendingUp className="h-6 w-6 text-cyan" />
            </div>
            <p className="text-sm text-muted">Annual Run Rate</p>
            <p className="text-2xl font-bold text-cyan">
              $<CountUp end={stats.annualRevenue / 1000} decimals={0} suffix="K" />
            </p>
          </CyanGlow>
        </StaggerItem>

        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-3">
              <DollarSign className="h-6 w-6 text-cyan" />
            </div>
            <p className="text-sm text-muted">Avg Revenue / Client</p>
            <p className="text-2xl font-bold text-foreground">
              $<CountUp end={avgRevenuePerClient} suffix="/mo" />
            </p>
          </CyanGlow>
        </StaggerItem>

        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-3">
              <TrendingUp className="h-6 w-6 text-cyan" />
            </div>
            <p className="text-sm text-muted">Y1 Revenue Target</p>
            <p className="text-2xl font-bold text-cyan">$180K</p>
            <p className="text-xs text-muted mt-1">
              {((stats.annualRevenue / 180000) * 100).toFixed(0)}% of target
            </p>
          </CyanGlow>
        </StaggerItem>
      </StaggerContainer>

      {/* Monthly Revenue Chart (Full Width) */}
      <FadeIn>
        <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-bold text-cyan">Monthly Revenue</h2>
          <p className="mb-6 text-sm text-muted">Revenue growth trajectory over 12 months</p>
          <ChartContainer
            config={{
              revenue: { label: "Revenue", color: "#06B6D4" },
              clients: { label: "Clients", color: "#22D3EE" },
            }}
            className="h-[400px]"
          >
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#888" tick={{ fontSize: 11 }} />
              <YAxis stroke="#888" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#06B6D4"
                fill="url(#revenueGrad)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CyanGlow>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue by Tier */}
        <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-bold text-cyan">Revenue by Tier</h2>
          <p className="mb-6 text-sm text-muted">Client distribution across pricing tiers</p>
          <ChartContainer
            config={{
              value: { label: "Percentage", color: "#06B6D4" },
            }}
            className="h-[300px]"
          >
            <PieChart>
              <Pie
                data={tierBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${(name ?? "").split(" ")[0]}: ${value}%`}
                outerRadius={100}
                fill="#06B6D4"
                dataKey="value"
              >
                {tierBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CyanGlow>

        {/* Revenue by Service */}
        <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-bold text-cyan">Revenue by Service</h2>
          <p className="mb-6 text-sm text-muted">Monthly revenue contribution by service type</p>
          <ChartContainer
            config={{
              revenue: { label: "Monthly Revenue", color: "#06B6D4" },
            }}
            className="h-[300px]"
          >
            <BarChart data={serviceRevenue} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" stroke="#888" tickFormatter={(v) => `$${(v / 1000).toFixed(1)}K`} />
              <YAxis dataKey="service" type="category" stroke="#888" width={100} tick={{ fontSize: 11 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="revenue" fill="#06B6D4" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ChartContainer>
        </CyanGlow>
      </div>

      {/* MRR Growth Milestones */}
      <FadeIn>
        <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-bold text-cyan">MRR Growth Milestones</h2>
          <div className="space-y-4">
            {[
              { milestone: "$5K MRR", target: 5000, achieved: true },
              { milestone: "$10K MRR", target: 10000, achieved: true },
              { milestone: "$15K MRR", target: 15000, achieved: true },
              { milestone: "$20K MRR", target: 20000, achieved: false },
              { milestone: "$50K MRR", target: 50000, achieved: false },
            ].map((item) => {
              const progress = Math.min((stats.mrr / item.target) * 100, 100)
              return (
                <div key={item.milestone} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className={item.achieved ? "text-cyan font-semibold" : "text-muted"}>
                      {item.milestone}
                    </span>
                    <span className={`font-mono text-sm ${item.achieved ? "text-emerald-400" : "text-muted"}`}>
                      {item.achieved ? "Achieved" : `${progress.toFixed(0)}%`}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-light">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.achieved
                          ? "bg-gradient-to-r from-cyan/60 to-cyan"
                          : "bg-cyan/30"
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </CyanGlow>
      </FadeIn>
    </div>
  )
}
