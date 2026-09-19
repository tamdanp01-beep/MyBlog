import HeroSection from "../components/home/HeroSection";
import RecentPostsSection from "../components/home/RecentPostsSection";
import ScienceDecorations from "../components/home/ScienceDecorations";

function HomePage() {
    return (
        <div className="relative">
            <ScienceDecorations />

            <div className="relative z-10">
                <HeroSection />

                <div className="mx-auto max-w-6xl px-6">
                    <hr className="border-[var(--color-border)]" />

                    <RecentPostsSection />
                </div>
            </div>
        </div>
    );
}

export default HomePage;