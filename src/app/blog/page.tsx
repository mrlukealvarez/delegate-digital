import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, User, ArrowRight } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CyanGlow,
  CyanShimmer,
  ParallaxSection,
} from "@/components/motion";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Delegate Digital",
  description:
    "Insights on AI automation, digital transformation, and small business growth from the Delegate Digital team.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection speed={0.1} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan">
                <BookOpen className="mr-1 inline h-3 w-3" />
                Delegate Digital Blog
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Insights for{" "}
                <CyanShimmer className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Growing Businesses
                </CyanShimmer>
              </h1>
              <p className="mt-4 text-lg text-muted">
                AI automation, digital transformation, and growth strategies for
                small businesses that think big.
              </p>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Posts Grid */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <CyanGlow className="rounded-2xl h-full">
                    <div className="h-full rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl transition-colors group-hover:border-cyan/40">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-snug group-hover:text-cyan transition-colors">
                        {post.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-cyan" />
                      </div>
                    </div>
                  </CyanGlow>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {blogPosts.length === 0 && (
            <FadeIn>
              <div className="py-16 text-center text-muted">
                No posts yet. Check back soon.
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
