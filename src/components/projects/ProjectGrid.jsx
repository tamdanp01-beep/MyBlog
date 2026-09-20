import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
        <h2 className="text-2xl font-bold">No projects yet</h2>

        <p className="mt-3 text-[var(--color-text-muted)]">
          New programming experiments will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;