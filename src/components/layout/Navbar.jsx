import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

import { navigationItems } from "../../data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function getLinkClasses(isActive) {
    return [
      "border-b-2 py-2 text-sm font-medium transition-colors",
      isActive
        ? "border-[var(--color-accent)] text-[var(--color-accent)]"
        : "border-transparent text-[var(--color-text)] hover:text-[var(--color-accent)]",
    ].join(" ");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-navbar)]/95 backdrop-blur">
      <nav
        className="mx-auto max-w-6xl px-6"
        aria-label="Main navigation"
      >
        <div className="flex min-h-20 items-center justify-between">
          <NavLink
            to="/"
            className="font-bold tracking-tight text-[var(--color-text)]"
          >
            <span className="text-xl sm:hidden">TDP</span>

            <span className="hidden text-xl sm:inline">
              My Bioinformatics Journey
            </span>
          </NavLink>

          <div className="hidden items-center gap-6 md:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => getLinkClasses(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className="flex size-11 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[var(--color-border)] py-4 md:hidden"
          >
            <div className="flex flex-col">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-4 py-3 font-medium transition-colors",
                      isActive
                        ? "bg-[var(--color-accent)] text-white"
                        : "text-[var(--color-text)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)]",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;