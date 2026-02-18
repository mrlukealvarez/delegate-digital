"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, LayoutDashboard, Users, FolderKanban, DollarSign, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Revenue", href: "/dashboard/revenue", icon: DollarSign },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname === "/dashboard/login") {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-cyan/10 bg-surface/50 backdrop-blur-xl">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-3 border-b border-cyan/10 px-6">
            <Code className="h-8 w-8 text-cyan" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-cyan">
                DELEGATE DIGITAL
              </span>
              <span className="text-xs text-muted">Dashboard</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-cyan/10 text-cyan shadow-sm shadow-cyan/20"
                      : "text-foreground/60 hover:bg-surface-light hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Back to Site */}
          <div className="border-t border-cyan/10 p-3">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/60 transition-colors hover:bg-surface-light hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5 shrink-0" />
              Back to Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-64">
        <div className="mx-auto max-w-7xl p-8">{children}</div>
      </main>
    </div>
  )
}
