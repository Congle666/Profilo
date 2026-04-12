import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, personalInfo } from "../../data/portfolio";

export function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Navbar ẩn khi scroll xuống, hiện khi scroll lên
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Chỉ ẩn sau khi scroll qua 100px
      if (currentY > 100) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    let ticking = false;
    const throttled = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttled, { passive: true });
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  // Lock body scroll khi mobile menu mở
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop + Mobile Top Bar */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            className="flex items-center gap-2 text-lg font-bold"
            aria-label="Go to home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-background">
              {personalInfo.lastName.charAt(0)}
            </span>
            <span className="heading hidden sm:inline">
              {personalInfo.lastName}
              <span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="relative px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Resume button — desktop only */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98] sm:flex"
            >
              <Download size={14} />
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card hover:text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col bg-background"
          >
            {/* Close button */}
            <div className="flex h-16 items-center justify-end px-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card hover:text-foreground"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu links */}
            <div className="flex flex-1 flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className={`heading text-3xl font-semibold transition-colors ${
                    activeSection === link.id
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Bottom actions */}
            <div className="flex items-center justify-center gap-4 pb-8">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
