import { useMemo, useState } from "react";

import BlogList from "../components/blog/BlogList";
import Pagination from "../components/blog/Pagination";
import { blogPosts } from "../data/blogPosts";

const POSTS_PER_PAGE = 5;

function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const sortedPosts = useMemo(() => {
        return [...blogPosts].sort(
            (firstPost, secondPost) =>
                new Date(secondPost.date) - new Date(firstPost.date),
        );
    }, []);

    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const visiblePosts = useMemo(() => {
        const firstPostIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const lastPostIndex = firstPostIndex + POSTS_PER_PAGE;

        return sortedPosts.slice(firstPostIndex, lastPostIndex);
    }, [currentPage, sortedPosts]);

    function changePage(page) {
        setCurrentPage(page);

        document
            .getElementById("blog-entries")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <div
            id="blog-entries"
            className="mx-auto max-w-5xl scroll-mt-28 px-6 py-16 sm:py-20"
        >
            <header className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Notes and discoveries
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                    Blog entries
                </h1>

                <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
                    Reflections and progress notes from my work in bioinformatics,
                    research, programming, and computational biology.
                </p>
            </header>

            <hr className="my-10 border-[var(--color-border)]" />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={changePage}
            />

            <div className={totalPages > 1 ? "my-10" : "mb-10"}>
                <BlogList posts={visiblePosts} />
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={changePage}
            />
        </div>
    );
}

export default BlogPage;