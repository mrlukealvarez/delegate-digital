"use client"

import { useState } from "react"
import { CyanGlow, StaggerContainer, StaggerItem, FadeIn } from "@/components/motion"
import { Users, Search } from "lucide-react"
import type { Client } from "@/lib/db/dashboard-queries"

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
  prospect: "bg-cyan/20 text-cyan border-cyan/20",
  churned: "bg-red-500/20 text-red-400 border-red-500/20",
}

interface ClientsClientProps {
  clients: Client[]
}

export default function ClientsClient({ clients }: ClientsClientProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredClients = clients.filter((client) => {
    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const statusCounts = {
    all: clients.length,
    active: clients.filter((c) => c.status === "active").length,
    prospect: clients.filter((c) => c.status === "prospect").length,
    churned: clients.filter((c) => c.status === "churned").length,
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-cyan">Clients</h1>
        <p className="mt-2 text-muted">Manage and track all client relationships</p>
      </div>

      {/* Filters */}
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {(["all", "active", "prospect", "churned"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  statusFilter === status
                    ? "bg-cyan/10 text-cyan"
                    : "text-muted hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                <span className="ml-1.5 text-xs opacity-60">({statusCounts[status]})</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg border border-cyan/10 bg-surface pl-10 pr-4 py-2 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-cyan"
            />
          </div>
        </div>
      </FadeIn>

      {/* Client Cards */}
      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredClients.map((client) => (
          <StaggerItem key={client.id}>
            <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10">
                    <Users className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{client.name}</h3>
                    <p className="text-xs text-muted">{client.contactEmail}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    statusColors[client.status] || statusColors.prospect
                  }`}
                >
                  {client.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {client.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-cyan/10 px-2 py-0.5 text-xs text-cyan"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-cyan/10 pt-4">
                <div>
                  <p className="text-xs text-muted">Monthly Revenue</p>
                  <p className="font-mono text-lg font-bold text-cyan">
                    ${client.monthlyRevenue.toLocaleString()}
                  </p>
                </div>
                {client.startDate && (
                  <div className="text-right">
                    <p className="text-xs text-muted">Client Since</p>
                    <p className="text-sm text-foreground">
                      {new Date(client.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </div>
            </CyanGlow>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {filteredClients.length === 0 && (
        <div className="py-12 text-center text-muted">
          No clients match your current filters.
        </div>
      )}
    </div>
  )
}
