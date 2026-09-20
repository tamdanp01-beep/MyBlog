import { ArrowLeft, CodeXml, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router";

import { projects } from "../data/projects";
import Tag from "../components/ui/Tag";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Project not found
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          This project does not exist
        </h1>

        <Link
          to="/projects"
          className="mt-8 rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-accent-dark)]"
        >
          Return to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-10 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[var(--color-surface-muted)] px-4 py-2 text-sm font-semibold text-[var(--color-text-muted)]">
            {project.status}
          </span>

          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>

        <h1 className="mt-7 text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
          {project.longDescription}
        </p>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-accent-dark)]"
              >
                Open project
                <ExternalLink size={17} aria-hidden="true" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                View code
                <CodeXml size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </header>

      <hr className="my-12 border-[var(--color-border)]" />

      <section className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Planned functionality
          </p>

          <h2 className="mt-3 text-3xl font-bold">Features</h2>
        </div>

        <ul className="space-y-4">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 font-medium"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Interactive application
        </p>

        <h2 className="mt-3 text-3xl font-bold">Project workspace</h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--color-text-muted)]">
          The interactive interface for this project will be displayed in this
          area when it is implemented.
        </p>
      </section>
    </div>
  );
}

export default ProjectPage;