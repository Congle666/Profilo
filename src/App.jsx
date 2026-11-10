import { useState, useEffect, useMemo } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer, ScrollToTop } from "./components/layout/Footer";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { ToastProvider } from "./components/ui/Toast";
import { CosmicBackground } from "./components/common/CosmicBackground";
import { CustomCursor } from "./components/common/CustomCursor";
import { navLinks } from "./data/portfolio";

function App() {
  const [loading, setLoading] = useState(true);
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), []);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <span className="heading text-4xl font-bold text-accent">C.</span>
          <div className="h-0.5 w-16 overflow-hidden rounded-full bg-border">
            <div className="h-full w-full animate-pulse rounded-full bg-accent" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ToastProvider>
      <div className="min-h-screen text-foreground">
        {/* Cosmic background — fixed, pointer-events none */}
        <div className="cosmic-bg-wrapper">
          <CosmicBackground />
        </div>

        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        <Navbar activeSection={activeSection} />

        {/* Content nổi trên cosmic background (z >= 10) */}
        <main id="main-content" className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
        <ScrollToTop />
        <CustomCursor />
      </div>
    </ToastProvider>
  );
}

export default App;
