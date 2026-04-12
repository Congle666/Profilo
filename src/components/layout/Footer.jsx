import { useState, useEffect } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GitHubIcon, FacebookIcon } from "../ui/SocialIcons";
import { personalInfo, navLinks } from "../../data/portfolio";

export function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-[var(--color-footer,#0A0A0A)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
              className="heading inline-block text-xl font-bold"
            >
              {personalInfo.lastName}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
            React &amp; ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Floating back-to-top button — hiện khi scroll > 500px
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
