"use client"

import { useState } from "react"
import { CyanGlow, StaggerContainer, StaggerItem, FadeIn } from "@/components/motion"
import { FolderKanban, Calendar, DollarSign } from "lucide-react"
import type { Project } from "@/lib/db/dashboard-queries"

const stageColors: Record<string, string> = {
  discovery: "bg-purple-500/20 text-purple-400 border-purple-500/20",
  "in-progress": "bg-cyan/20 text-cyan border-cyan/20",
  review: "bg-amber-500/20 text-amber-400 border-amber-500/20",
  complete: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
}

const stageLabels: Record<string, string> = {
  discovery: "Discovery",
  "in-progress": "In Progress",
  review: "Review",
  complete: "Complete",
}

interface ProjectsClientProps {
  projects: Project[]
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [stageFilter, setStageFilter] = useState<string>("all")

  const filteredProjects = projects.filter(
    (p) => stageFilter === "all" || p.stage === stageFilter
  )

  const stageCounts = {
    all: projects.length,
    discovery: projects.filter((p) => p.stage === "discovery").length,
    "in-progress": projects.filter((p) => p.stage === "in-progress").length,
    review: projects.filter((p) => p.stage === "review").length,
    complete: projects.filter((p) => p.stage === "complete").length,
  }

  const totalValue = projects.reduce((sum, p) => sum + p.value, 0)
  const activeValue = projects
    .filter((p) => p.stage !== "complete")
    .reduce((sum, p) => sum + p.value, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-cyan">Projects</h1>
        <p className="mt-2 text-muted">Track all active and completed project work</p>
      </div>

      {/* Summary Stats */}
      <FadeIn>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-cyan/10 bg-surface/50 p-4 backdrop-blur-xl">
            <p className="text-sm text-muted">Total Projects</p>
            <p className="text-2xl font-bold text-foreground">{projects.length}</p>
          </div>
          <div className="rounded-xl border border-cyan/10 bg-surface/50 p-4 backdrop-blur-xl">
            <p className="text-sm text-muted">Active Pipeline Value</p>
            <p className="text-2xl font-bold text-cyan">${activeValue.toLocaleString()}</p>
          </div>
          <div className="rounded-xl border border-cyan/10 bg-surface/50 p-4 backdrop-blur-xl">
            <p className="text-sm text-muted">Total Value (All Time)</p>
            <p className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</p>
          </div>
        </div>
      </FadeIn>

      {/* Stage Filters */}
      <div className="flex flex-wrap gap-2">
        {(["all", "discovery", "in-progress", "review", "complete"] as const).map((stage) => (
          <button
            key={stage}
            onClick={() => setStageFilter(stage)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              stageFilter === stage
                ? "bg-cyan/10 text-cyan"
                : "text-muted hover:text-foreground hover:bg-surface-light"
            }`}
          >
            {stage === "all" ? "All" : stageLabels[stage]}
            <span className="ml-1.5 text-xs opacity-60">
              ({stageCounts[stage]})
            </span>
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <StaggerContainer className="grid gap-4 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <CyanGlow className="rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10">
                    <FolderKanban className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                    <p className="text-sm text-muted">{project.clientName}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    stageColors[project.stage] || stageColors.discovery
                  }`}
                >
                  {stageLabels[project.stage]}
                </span>
              </div>

              <div className="mb-4">
                <span className="rounded-full bg-surface-light px-2.5 py-0.5 text-xs text-muted">
                  {project.type}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-cyan/10 pt-4">
                <div className="flex items-center gap-1.5 text-sm text-muted">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-mono font-bold text-cyan">
                    ${project.value.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted">
                  <Calendar className="h-4 w-4" />
                  <span>Due {new Date(project.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                </div>
              </div>
            </CyanGlow>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center text-muted">
          No projects match the selected stage.
        </div>
      )}
    </div>
  )
}
