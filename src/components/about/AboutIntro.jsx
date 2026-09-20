import profileImage from "../../assets/hero.png";
import { profile } from "../../data/profile";

function AboutIntro() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[360px_1fr]">
      <div className="relative mx-auto">
        <div className="absolute -inset-5 rounded-full border border-[var(--color-border)]" />

        <div className="absolute -inset-10 -z-10 rounded-full bg-[var(--color-surface-muted)] opacity-70 blur-2xl" />

        <img
          src={profileImage}
          alt={`Portrait of ${profile.name}`}
          className="relative size-72 rounded-full border-8 border-[var(--color-surface)] object-cover shadow-xl sm:size-80"
        />
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          About me
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl font-semibold text-[var(--color-text)]">
          {profile.role}
        </p>

        <p className="mt-2 text-[var(--color-text-muted)]">
          {profile.location}
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
          {profile.shortDescription}
        </p>
      </div>
    </section>
  );
}

export default AboutIntro;