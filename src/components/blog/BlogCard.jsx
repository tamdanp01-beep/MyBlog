import { Link } from "react-router";

import { formatDate } from "../../utils/formatDate";

function BlogCard({ post }) {
    return (
        <article className="group border-b border-[var(--color-border)] py-8 first:pt-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                <span className="font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                    {post.category}
                </span>

                <span aria-hidden="true" className="text-[var(--color-border)]">
                    ·
                </span>

                <time
                    dateTime={post.date}
                    className="text-[var(--color-text-muted)]"
                >
                    {formatDate(post.date)}
                </time>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                <Link
                    to={`/blog/${post.slug}`}
                    className="transition-colors group-hover:text-[var(--color-accent)]"
                >
                    {post.title}
                </Link>
            </h3>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-text-muted)]">
                {post.preview}
            </p>

            <Link
                to={`/blog/${post.slug}`}
                className="mt-5 inline-flex font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
            >
                Read article
                <span aria-hidden="true" className="ml-2">
                    →
                </span>
            </Link>
        </article>
    );
}

export default BlogCard;