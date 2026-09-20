import ProjectGrid from "../components/projects/ProjectGrid";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Experiments and tools
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Little projects
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
          A collection of small programming exercises, visualizations, and
          interactive bioinformatics tools created while learning and
          experimenting.
        </p>
      </header>

      <hr className="my-10 border-[var(--color-border)]" />

      <ProjectGrid projects={projects} />
    </div>
  );
}

export default ProjectsPage;