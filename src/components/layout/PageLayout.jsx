import { Outlet } from "react-router";

import Footer from "./Footer";
import Navbar from "./Navbar";

function PageLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-text)]">
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default PageLayout;