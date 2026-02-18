import Link from "next/link";
import { Code } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <Code className="h-12 w-12 text-cyan mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-cyan mb-4">404</h1>
        <p className="text-xl text-muted mb-8">
          This page doesn&apos;t exist yet.
        </p>
        <Link
          href="/"
          className="bg-cyan text-background font-semibold px-6 py-3 rounded-md hover:bg-cyan-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
