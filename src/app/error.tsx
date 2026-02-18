"use client";

import { Code } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <Code className="h-12 w-12 text-cyan mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted mb-8">
          Our systems encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-cyan text-background font-semibold px-6 py-3 rounded-md hover:bg-cyan-light transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
