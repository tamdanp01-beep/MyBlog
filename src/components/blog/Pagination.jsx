function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav
            className="flex items-center justify-center gap-2"
            aria-label="Blog pagination"
        >
            {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        aria-current={isActive ? "page" : undefined}
                        className={[
                            "flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
                            isActive
                                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                                : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
                        ].join(" ")}
                    >
                        {page}
                    </button>
                );
            })}
        </nav>
    );
}

export default Pagination;