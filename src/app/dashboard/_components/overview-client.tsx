"use client"

import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CyanGlow, StaggerContainer, StaggerItem, CountUp } from "@/components/motion"
import { Users, DollarSign, TrendingUp, Percent } from "lucide-react"
import type { Client, MonthlyRevenue, DashboardStats } from "@/lib/db/dashboard-queries"

const serviceBreakdown = [
  { name: "Web Design", value: 30, color: "#06B6D4" },
  { name: "Automation", value: 22, color: "#22D3EE" },
  { name: "CRM Setup", value: 18, color: "#0891B2" },
  { name: "Social Media", value: 15, color: "#155E75" },
  { name: "Mobile Apps", value: 10, color: "#083344" },
  { name: "Consulting", value: 5, color: "#888888" },
]

interface OverviewClientProps {
  stats: DashboardStats
  topClients: Client[]
  revenueData: MonthlyRevenue[]
}

export default function OverviewClient({ stats, topClients, revenueData }: OverviewClientProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-cyan">Dashboard Overview</h1>
        <p className="mt-2 text-muted">
          Track client performance, revenue, and project status
        </p>
      </div>

      {/* KPI Cards */}
      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <Users className="h-8 w-8 text-cyan" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted">Active Clients</p>
              <p className="text-3xl font-bold text-cyan">
                <CountUp end={stats.activeClients} />
              </p>
              <p className="text-xs text-muted">Currently subscribed</p>
            </div>
          </CyanGlow>
        </StaggerItem>

        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <DollarSign className="h-8 w-8 text-cyan" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted">Monthly Recurring Revenue</p>
              <p className="text-3xl font-bold text-cyan">
                $<CountUp end={stats.mrr / 1000} decimals={1} suffix="K" />
              </p>
              <p className="text-xs text-muted">MRR across all clients</p>
            </div>
          </CyanGlow>
        </StaggerItem>

        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <TrendingUp className="h-8 w-8 text-cyan" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted">Annual Revenue</p>
              <p className="text-3xl font-bold text-cyan">
                $<CountUp end={stats.annualRevenue / 1000} decimals={0} suffix="K" />
              </p>
              <p className="text-xs text-muted">Projected annually</p>
            </div>
          </CyanGlow>
        </StaggerItem>

        <StaggerItem>
          <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <Percent className="h-8 w-8 text-cyan" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted">Client Retention</p>
              <p className="text-3xl font-bold text-cyan">
                <CountUp end={stats.retention} suffix="%" />
              </p>
              <p className="text-xs text-muted">12-month retention rate</p>
            </div>
          </CyanGlow>
        </StaggerItem>
      </StaggerContainer>

      {/* Top Clients Table */}
      <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
        <h2 className="mb-4 text-xl font-bold text-cyan">Top Clients by Revenue</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cyan/10">
                <th className="py-3 text-left font-semibold text-muted">Client</th>
                <th className="py-3 text-left font-semibold text-muted">Services</th>
                <th className="py-3 text-right font-semibold text-muted">Monthly Revenue</th>
                <th className="py-3 text-right font-semibold text-muted">Since</th>
              </tr>
            </thead>
            <tbody>
              {topClients.map((client) => (
                <tr key={client.id} className="border-b border-surface-light">
                  <td className="py-3 font-medium text-foreground">{client.name}</td>
                  <td className="py-3">
                    <div className="flex flex-wrap gap-1">
                      {client.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-cyan/10 px-2 py-0.5 text-xs text-cyan"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 text-right font-mono font-bold text-cyan">
                    ${client.monthlyRevenue.toLocaleString()}
                  </td>
                  <td className="py-3 text-right text-muted">
                    {new Date(client.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CyanGlow>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue by Service Breakdown */}
        <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-bold text-cyan">Revenue by Service</h2>
          <p className="mb-6 text-sm text-muted">Percentage breakdown across service lines</p>
          <ChartContainer
            config={{
              value: { label: "Percentage", color: "#06B6D4" },
            }}
            className="h-[300px]"
          >
            <PieChart>
              <Pie
                data={serviceBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#06B6D4"
                dataKey="value"
              >
                {serviceBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CyanGlow>

        {/* Monthly Revenue Trend */}
        <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-bold text-cyan">Monthly Revenue Trend</h2>
          <p className="mb-6 text-sm text-muted">Revenue growth over 12 months</p>
          <ChartContainer
            config={{
              revenue: { label: "Revenue", color: "#06B6D4" },
            }}
            className="h-[300px]"
          >
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#888" tick={{ fontSize: 11 }} />
              <YAxis stroke="#888" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#06B6D4"
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ChartContainer>
        </CyanGlow>
      </div>
    </div>
  )
}
