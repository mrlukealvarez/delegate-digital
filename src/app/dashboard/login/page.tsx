"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Code } from "lucide-react"

function LoginForm() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/dashboard/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        const from = searchParams.get("from") || "/dashboard"
        router.push(from)
      } else {
        setError("Incorrect password. Please try again.")
      }
    } catch {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-muted">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter dashboard password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className="w-full rounded-lg border border-cyan/20 bg-surface px-4 py-3 text-foreground placeholder-muted outline-none transition-colors focus:border-cyan focus:ring-1 focus:ring-cyan disabled:opacity-50"
        />
      </div>

      {error && (
        <div className="rounded-lg bg-red-500/20 border border-red-500/20 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-cyan px-4 py-3 font-semibold text-background transition-all hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  )
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-2xl border border-cyan/10 bg-surface/50 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 flex flex-col items-center gap-3">
          <Code className="h-10 w-10 text-cyan" />
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-wider text-cyan">DELEGATE DIGITAL</h1>
            <p className="mt-1 text-sm text-muted">Enter your password to access the dashboard</p>
          </div>
        </div>
        <Suspense fallback={<div className="py-4 text-center text-muted">Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  )
}
