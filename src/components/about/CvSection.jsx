import { profile } from "../../data/profile";

function CvSection() {
  const hasCv = Boolean(profile.links.cv);

  return (
    <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8 sm:p-10">
      <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Curriculum vitae
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Education, experience, and skills
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-muted)]">
            My CV contains a detailed overview of my academic background,
            technical experience, and research interests.
          </p>
        </div>

        {hasCv ? (
          <a
            href={profile.links.cv}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-[var(--color-accent)] px-6 py-3 text-center font-semibold text-white hover:bg-[var(--color-accent-dark)]"
          >
            View my CV
          </a>
        ) : (
          <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-center font-semibold text-[var(--color-text-muted)]">
            CV coming soon
          </span>
        )}
      </div>
    </section>
  );
}

export default CvSection;