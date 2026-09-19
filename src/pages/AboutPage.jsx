function AboutPage() {
    return (
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[320px_1fr]">
            <div className="aspect-square rounded-full border border-[#cdbda9] bg-[#ede3d3]" />

            <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d96c2c]">
                    About me
                </p>

                <h1 className="mt-4 text-5xl font-bold">Tam Dan Pham</h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#74665b]">
                    I am a Master’s student in Bioinformatics interested in using
                    computational methods to understand biological data and discover
                    meaningful patterns.
                </p>

                <button
                    type="button"
                    className="mt-8 rounded-full bg-[#d96c2c] px-6 py-3 font-semibold text-white hover:bg-[#a94718]"
                >
                    View my CV
                </button>
            </section>
        </div>
    );
}

export default AboutPage;