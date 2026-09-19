import { NavLink } from "react-router";

import { navigationItems } from "../../data/navigation";

function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-navbar)]/95 backdrop-blur">
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
                aria-label="Main navigation"
            >
                <NavLink
                    to="/"
                    className="text-xl font-bold tracking-tight text-[var(--color-text)]"
                >
                    My Bioinformatics Journey
                </NavLink>

                <div className="hidden items-center gap-6 md:flex">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                [
                                    "border-b-2 py-1 text-sm font-medium transition-colors",
                                    isActive
                                        ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                                        : "border-transparent text-[var(--color-text)] hover:text-[var(--color-accent)]",
                                ].join(" ")
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                <button
                    type="button"
                    className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium md:hidden"
                    aria-label="Open navigation menu"
                >
                    Menu
                </button>
            </nav>
        </header>
    );
}

export default Navbar;