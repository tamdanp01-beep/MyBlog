import { Link } from "react-router";

import { navigationItems } from "../../data/navigation";
import { profile } from "../../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      label: "GitHub",
      href: profile.links.github,
    },
    {
      label: "LinkedIn",
      href: profile.links.linkedin,
    },
    {
      label: "Email",
      href: profile.links.email
        ? `mailto:${profile.links.email}`
        : "",
    },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-navbar)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <Link
            to="/"
            className="text-xl font-bold text-[var(--color-text)]"
          >
            {profile.name}
          </Link>

          <p className="mt-4 max-w-md leading-7 text-[var(--color-text-muted)]">
            Documenting my progress in bioinformatics, computational biology,
            programming, and scientific research.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-[var(--color-text)]">
            Navigation
          </h2>

          <ul className="mt-4 space-y-3">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-[var(--color-text)]">
            Connect
          </h2>

          {contactLinks.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {contactLinks.map((link) => {
                const isEmail = link.href.startsWith("mailto:");

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noreferrer"}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Contact links coming soon.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {profile.name}
          </p>

          <p>Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;