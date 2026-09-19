import { Link } from "react-router";

import profileImage from "../../assets/hero.png";

function HeroSection() {
    return (
        <section className="relative mx-auto grid min-h-[70vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
            <div className="relative z-10">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Bioinformatics · Research · Programming
                </p>

                <h1 className="max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
                    My Bioinformatics Journey
                </h1>

                <p className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
                    Tam Dan Pham
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
                    I am a Master’s student in Bioinformatics interested in using
                    computational methods to understand biological data. This website
                    documents my research, programming projects, and development as a
                    bioinformatician.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                    <Link
                        to="/about"
                        className="rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-accent-dark)]"
                    >
                        More about me
                    </Link>

                    <Link
                        to="/blog"
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 font-semibold text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                        Read my blog
                    </Link>
                </div>
            </div>

            <div className="relative z-10 mx-auto">
                <div className="absolute -inset-5 rounded-full border border-[var(--color-border)]" />

                <div className="absolute -inset-10 -z-10 rounded-full bg-[var(--color-surface-muted)] opacity-70 blur-2xl" />

                <img
                    src={profileImage}
                    alt="Portrait of Tam Dan Pham"
                    className="relative size-72 rounded-full border-8 border-[var(--color-surface)] object-cover shadow-xl sm:size-80"
                />
            </div>
        </section>
    );
}

export default HeroSection;