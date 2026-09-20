import { useMemo, useState } from "react";
import { Link } from "react-router";

import { blogPosts } from "../../data/blogPosts";
import BlogCard from "../blog/BlogCard";
import Pagination from "../blog/Pagination";

const POSTS_PER_PAGE = 2;

function RecentPostsSection() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

    const visiblePosts = useMemo(() => {
        const firstPostIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const lastPostIndex = firstPostIndex + POSTS_PER_PAGE;

        return blogPosts.slice(firstPostIndex, lastPostIndex);
    }, [currentPage]);

    function changePage(page) {
        setCurrentPage(page);

        document
            .getElementById("recent-posts")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <section
            id="recent-posts"
            className="scroll-mt-28 py-16 sm:py-20"
        >
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        Notes and discoveries
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight">
                        Recent blog entries
                    </h2>
                </div>

                <Link
                    to="/blog"
                    className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
                >
                    View all entries →
                </Link>
            </div>

            <div className="my-10">
                {visiblePosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={changePage}
            />
        </section>
    );
}

/* This displays a maximum of two blog entries on each Home page.
*/
export default RecentPostsSection;