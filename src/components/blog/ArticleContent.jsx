function ArticleContent({ content }) {
    if (!content?.length) {
        return (
            <p className="text-lg leading-8 text-[var(--color-text-muted)]">
                This article is still being written.
            </p>
        );
    }

    return (
        <div className="space-y-7">
            {content.map((block, index) => {
                const key = `${block.type}-${index}`;

                if (block.type === "heading") {
                    return (
                        <h2
                            key={key}
                            className="pt-6 text-3xl font-bold tracking-tight text-[var(--color-text)]"
                        >
                            {block.text}
                        </h2>
                    );
                }

                if (block.type === "paragraph") {
                    return (
                        <p
                            key={key}
                            className="text-lg leading-8 text-[var(--color-text-muted)]"
                        >
                            {block.text}
                        </p>
                    );
                }

                if (block.type === "list") {
                    return (
                        <ul
                            key={key}
                            className="list-disc space-y-3 pl-7 text-lg leading-8 text-[var(--color-text-muted)]"
                        >
                            {block.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    );
                }

                if (block.type === "code") {
                    return (
                        <pre
                            key={key}
                            className="overflow-x-auto rounded-2xl bg-[#30261f] p-6 text-sm leading-7 text-[#fffdf8]"
                        >
                            <code>{block.code}</code>
                        </pre>
                    );
                }

                if (block.type === "image") {
                    return (
                        <figure key={key} className="py-4">
                            <img
                                src={block.src}
                                alt={block.alt}
                                className="w-full rounded-2xl border border-[var(--color-border)] object-cover"
                            />

                            {block.caption && (
                                <figcaption className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
                                    {block.caption}
                                </figcaption>
                            )}
                        </figure>
                    );
                }

                return null;
            })}
        </div>
    );
}

export default ArticleContent;