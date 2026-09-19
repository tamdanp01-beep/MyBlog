import { Link, useParams } from "react-router";

function BlogPostPage() {
    const { slug } = useParams();

    return (
        <article className="mx-auto max-w-3xl px-6 py-20">
            <Link
                to="/blog"
                className="font-medium text-[#d96c2c] hover:text-[#a94718]"
            >
                ← All blog entries
            </Link>

            <h1 className="mt-10 text-5xl font-bold">Blog entry</h1>

            <p className="mt-4 text-sm text-[#74665b]">Article: {slug}</p>

            <hr className="my-10 border-[#cdbda9]" />

            <p className="text-lg leading-8 text-[#74665b]">
                The selected blog article will appear here.
            </p>
        </article>
    );
}

export default BlogPostPage;