import { Link, useParams } from "react-router";

import ArticleContent from "../components/blog/ArticleContent";
import { blogPosts } from "../data/blogPosts";
import { formatDate } from "../utils/formatDate";

function BlogPostPage() {
  const { slug } = useParams();

  const currentPostIndex = blogPosts.findIndex((post) => post.slug === slug);
  const post = blogPosts[currentPostIndex];

  if (!post) {
    return (
      <div className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Article not found
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          This blog entry does not exist
        </h1>

        <Link
          to="/blog"
          className="mt-8 rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-accent-dark)]"
        >
          Return to the blog
        </Link>
      </div>
    );
  }

  const newerPost =
    currentPostIndex > 0 ? blogPosts[currentPostIndex - 1] : null;

  const olderPost =
    currentPostIndex < blogPosts.length - 1
      ? blogPosts[currentPostIndex + 1]
      : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        to="/blog"
        className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
      >
        ← All blog entries
      </Link>

      <header className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {post.category}
        </p>

        <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>

          {post.readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>
      </header>

      <hr className="my-10 border-[var(--color-border)]" />

      <ArticleContent content={post.content} />

      <hr className="my-12 border-[var(--color-border)]" />

      <nav
        className="grid gap-6 sm:grid-cols-2"
        aria-label="Article navigation"
      >
        <div>
          {newerPost && (
            <Link
              to={`/blog/${newerPost.slug}`}
              className="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent)]"
            >
              <span className="text-sm text-[var(--color-text-muted)]">
                ← Newer article
              </span>

              <span className="mt-2 block font-bold group-hover:text-[var(--color-accent)]">
                {newerPost.title}
              </span>
            </Link>
          )}
        </div>

        <div>
          {olderPost && (
            <Link
              to={`/blog/${olderPost.slug}`}
              className="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-right hover:border-[var(--color-accent)]"
            >
              <span className="text-sm text-[var(--color-text-muted)]">
                Older article →
              </span>

              <span className="mt-2 block font-bold group-hover:text-[var(--color-accent)]">
                {olderPost.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}

export default BlogPostPage;