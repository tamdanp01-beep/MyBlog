function DecorationPlaceholder({ className, label }) {
    return (
        <div
            className={[
                "pointer-events-none absolute hidden items-center justify-center rounded-full",
                "border border-dashed border-[var(--color-border)]",
                "bg-[var(--color-surface-muted)]/60 text-center text-xs",
                "font-semibold uppercase tracking-wider text-[var(--color-text-muted)]",
                "xl:flex",
                className,
            ].join(" ")}
            aria-hidden="true"
        >
            {label}
        </div>
    );
}

function ScienceDecorations() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <DecorationPlaceholder
                label="Large biology icon"
                className="top-[20%] right-6 size-36"
            />

            <DecorationPlaceholder
                label="Medium icon"
                className="top-[60%] left-6 size-28"
            />

            <DecorationPlaceholder
                label="Small icon"
                className="top-[80%] right-12 size-20"
            />
        </div>
    );
}

export default ScienceDecorations;