function HomePage() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-20">
            <section className="min-h-[55vh]">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d96c2c]">
                    Bioinformatics · Research · Programming
                </p>

                <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
                    My Bioinformatics Journey
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#74665b]">
                    A place where I document my progress in bioinformatics,
                    computational biology, programming, and scientific research.
                </p>
            </section>

            <hr className="border-[#cdbda9]" />

            <section className="py-16">
                <h2 className="text-3xl font-bold">Recent blog entries</h2>

                <p className="mt-4 text-[#74665b]">
                    The latest blog entries will appear here.
                </p>
            </section>
        </div>
    );
}

export default HomePage;