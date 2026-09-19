function ProjectsPage() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-20">
            <header>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d96c2c]">
                    Experiments and tools
                </p>

                <h1 className="mt-4 text-5xl font-bold">Little projects</h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#74665b]">
                    A collection of small programming exercises, visualizations, and
                    interactive bioinformatics tools.
                </p>
            </header>

            <hr className="my-10 border-[#cdbda9]" />

            <p className="text-lg text-[#74665b]">
                The project cards will appear here.
            </p>
        </div>
    );
}

export default ProjectsPage;