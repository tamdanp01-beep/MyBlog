function Tag({ children }) {
  return (
    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)]">
      {children}
    </span>
  );
}

export default Tag;