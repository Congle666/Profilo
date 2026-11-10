import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "../ui/SocialIcons";
import { AnimatedSection } from "../common/AnimatedSection";
import { projectsData } from "../../data/portfolio";

export function Projects() {
  const allCategories = ["All", ...projectsData.categories];
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium tracking-wider text-accent uppercase">
              My Work
            </span>
          </div>
          <h2 className="heading mb-4 text-3xl font-bold md:text-4xl">
            Featured{" "}
            <span className="heading-italic text-accent">Projects</span>
          </h2>
          <p className="max-w-lg text-muted">
            Products I&apos;ve built and run in Go, from a live platform with
            paying customers to desktop tooling.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection className="mb-10">
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? "text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeFilter === cat && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-lg bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-card to-border">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Placeholder gradient */
          <div className="flex h-full w-full items-center justify-center">
            <span className="heading text-2xl font-bold text-accent/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Hover overlay với links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.demoUrl && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background transition-transform hover:scale-110"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110"
              aria-label={`View ${project.title} source code`}
            >
              <GitHubIcon size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-1 text-xs font-medium text-muted uppercase">
          {project.category}
        </p>
        <h3 className="heading mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
