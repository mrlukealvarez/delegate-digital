import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, CyanGlow, PulseGlow } from "@/components/motion";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found | Delegate Digital" };
  return {
    title: `${post.title} | Delegate Digital`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Article Header */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <span className="flex items-center gap-1 text-sm text-muted">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="border-t border-cyan/10">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <FadeIn delay={0.1}>
            <article className="space-y-6">
              {paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted sm:text-lg sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cyan/10 bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">
              Ready to Put This Into <span className="text-cyan">Action?</span>
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              A Discovery Session turns insights like these into a concrete
              action plan for your business.
            </p>
            <PulseGlow>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan text-background font-semibold px-8 py-3.5 rounded-md hover:bg-cyan-light transition-all duration-300 shadow-lg shadow-cyan/10"
              >
                Book a Discovery Session <ArrowRight className="h-4 w-4" />
              </Link>
            </PulseGlow>
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-cyan/10">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <FadeIn>
              <h2 className="mb-8 text-2xl font-bold tracking-tight">
                More from the Blog
              </h2>
            </FadeIn>
            <StaggerContainer className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <StaggerItem key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block h-full"
                  >
                    <CyanGlow className="rounded-2xl h-full">
                      <div className="h-full rounded-2xl border border-cyan/10 bg-surface/50 p-6 backdrop-blur-xl transition-colors group-hover:border-cyan/40">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-xs text-muted">
                            {related.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold leading-snug group-hover:text-cyan transition-colors">
                          {related.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-sm text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                          Read article
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </CyanGlow>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}
