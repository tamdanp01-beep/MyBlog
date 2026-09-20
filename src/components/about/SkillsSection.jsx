import { profile } from "../../data/profile";
import Tag from "../ui/Tag";

function SkillsSection() {
  return (
    <section>
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Knowledge and tools
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          Skills
        </h2>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {profile.skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
          >
            <h3 className="text-xl font-bold">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;