import { Link } from "react-router";

function NotFoundPage() {
    return (
        <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d96c2c]">
                Error 404
            </p>

            <h1 className="mt-4 text-5xl font-bold">Page not found</h1>

            <p className="mt-6 text-lg text-[#74665b]">
                The page you requested does not exist.
            </p>

            <Link
                to="/"
                className="mt-8 rounded-full bg-[#d96c2c] px-6 py-3 font-semibold text-white hover:bg-[#a94718]"
            >
                Return home
            </Link>
        </div>
    );
}

export default NotFoundPage;