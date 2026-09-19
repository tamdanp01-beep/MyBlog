import { NavLink } from "react-router";

const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "About me", path: "/about" },
    { label: "Little projects", path: "/projects" },
];

function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#cdbda9] bg-[#e7d8c3]/95 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <NavLink
                    to="/"
                    className="text-xl font-bold tracking-tight text-[#30261f]"
                >
                    My Bioinformatics Journey
                </NavLink>

                <div className="flex items-center gap-6">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                [
                                    "text-sm font-medium transition-colors hover:text-[#d96c2c]",
                                    isActive ? "text-[#d96c2c]" : "text-[#30261f]",
                                ].join(" ")
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;