import { profile } from "../../data/profile";

function TimelineSection() {
  return (
    <section>
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          My journey
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          Education and experience
        </h2>
      </header>

      <div className="relative mt-10 space-y-10 border-l border-[var(--color-border)] pl-8">
        {profile.timeline.map((item) => (
          <article key={`${item.period}-${item.title}`} className="relative">
            <div className="absolute top-2 -left-[2.42rem] size-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-background)]" />

            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              {item.period}
            </p>

            <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>

            {item.institution && (
              <p className="mt-1 font-medium text-[var(--color-text)]">
                {item.institution}
              </p>
            )}

            <p className="mt-4 max-w-3xl leading-7 text-[var(--color-text-muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;