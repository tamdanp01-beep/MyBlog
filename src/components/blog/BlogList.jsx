import BlogCard from "./BlogCard";

function BlogList({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
        <h2 className="text-2xl font-bold">No blog entries found</h2>

        <p className="mt-3 text-[var(--color-text-muted)]">
          New articles will be published here soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;