import {
  ChartNoAxesColumn,
  CodeXml,
  Dna,
  Microscope,
  Repeat2,
} from "lucide-react";
import { Link } from "react-router";

import Tag from "../ui/Tag";

const projectIcons = {
  Dna,
  Repeat2,
  Microscope,
  ChartNoAxesColumn,
  CodeXml,
};

const statusStyles = {
  Idea: "bg-stone-100 text-stone-700",
  Planned: "bg-amber-100 text-amber-800",
  "In progress": "bg-orange-100 text-orange-800",
  Completed: "bg-emerald-100 text-emerald-800",
};

function ProjectCard({ project }) {
  const Icon = projectIcons[project.icon] ?? CodeXml;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-[var(--color-surface-muted)] text-[var(--color-accent)]">
          <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <span
          className={[
            "rounded-full px-3 py-1 text-xs font-semibold",
            statusStyles[project.status] ??
              "bg-stone-100 text-stone-700",
          ].join(" ")}
        >
          {project.status}
        </span>
      </div>

      <h2 className="mt-7 text-2xl font-bold tracking-tight">
        <Link
          to={`/projects/${project.slug}`}
          className="group-hover:text-[var(--color-accent)]"
        >
          {project.title}
        </Link>
      </h2>

      <p className="mt-4 flex-1 leading-7 text-[var(--color-text-muted)]">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="mt-7 inline-flex font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
      >
        View project
        <span aria-hidden="true" className="ml-2">
          →
        </span>
      </Link>
    </article>
  );
}

export default ProjectCard;