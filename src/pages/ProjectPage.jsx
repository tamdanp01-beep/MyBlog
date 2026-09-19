import { Link, useParams } from "react-router";

function ProjectPage() {
    const { slug } = useParams();

    return (
        <div className="mx-auto max-w-5xl px-6 py-20">
            <Link
                to="/projects"
                className="font-medium text-[#d96c2c] hover:text-[#a94718]"
            >
                ← All projects
            </Link>

            <h1 className="mt-10 text-5xl font-bold">Project</h1>

            <p className="mt-6 text-lg text-[#74665b]">
                Selected project: {slug}
            </p>
        </div>
    );
}

export default ProjectPage;