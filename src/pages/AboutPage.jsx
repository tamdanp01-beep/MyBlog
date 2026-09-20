import AboutIntro from "../components/about/AboutIntro";
import CvSection from "../components/about/CvSection";
import SkillsSection from "../components/about/SkillsSection";
import TimelineSection from "../components/about/TimelineSection";
import { profile } from "../data/profile";
import Tag from "../components/ui/Tag";

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <AboutIntro />

      <hr className="my-16 border-[var(--color-border)]" />

      <section className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Motivation
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Why bioinformatics?
          </h2>
        </div>

        <div className="space-y-6">
          {profile.motivation.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-8 text-[var(--color-text-muted)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Research interests</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {profile.researchInterests.map((interest) => (
            <Tag key={interest}>{interest}</Tag>
          ))}
        </div>
      </section>

      <hr className="my-16 border-[var(--color-border)]" />

      <TimelineSection />

      <hr className="my-16 border-[var(--color-border)]" />

      <SkillsSection />

      <div className="mt-16">
        <CvSection />
      </div>
    </div>
  );
}

export default AboutPage;