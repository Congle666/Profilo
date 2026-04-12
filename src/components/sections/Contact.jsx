import { motion } from "framer-motion";
import { Mail, MapPin, FileText, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "../common/AnimatedSection";
import { GitHubIcon, FacebookIcon } from "../ui/SocialIcons";
import { personalInfo, contactData } from "../../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header centered */}
        <AnimatedSection className="mb-10 text-center">
          <h2 className="heading-italic mb-4 text-3xl font-bold md:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto max-w-md text-sm text-muted">
            {contactData.subtitle}
          </p>
        </AnimatedSection>

        {/* Email button — CTA chính */}
        <AnimatedSection delay={0.1} className="mb-16 text-center">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent/10 px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
          >
            <Mail size={16} />
            {personalInfo.email}
          </motion.a>
        </AnimatedSection>

        {/* Info card + Social links */}
        <AnimatedSection delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Profile card */}
            <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="h-12 w-12 rounded-full border border-border object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent heading font-bold">
                    {personalInfo.lastName.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="heading text-base font-bold">{personalInfo.name}</h3>
                  <p className="text-xs text-muted">{personalInfo.role}</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted/80">
                {personalInfo.description.split(".").slice(0, 2).join(".")}.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1 rounded-md bg-accent/10 px-2.5 py-1 text-xs text-accent">
                  <MapPin size={12} />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1 rounded-md bg-accent/10 px-2.5 py-1 text-xs text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {contactData.availability}
                </span>
              </div>
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/50 p-5 text-center backdrop-blur-sm transition-colors hover:border-accent"
              >
                <GitHubIcon size={22} className="text-muted group-hover:text-accent transition-colors" />
                <span className="text-xs font-medium text-muted group-hover:text-foreground">GitHub</span>
              </motion.a>

              <motion.a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/50 p-5 text-center backdrop-blur-sm transition-colors hover:border-accent"
              >
                <FacebookIcon size={22} className="text-muted group-hover:text-accent transition-colors" />
                <span className="text-xs font-medium text-muted group-hover:text-foreground">Facebook</span>
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/50 p-5 text-center backdrop-blur-sm transition-colors hover:border-accent"
              >
                <Mail size={22} className="text-muted group-hover:text-accent transition-colors" />
                <span className="text-xs font-medium text-muted group-hover:text-foreground">Email Me</span>
              </motion.a>

              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/50 p-5 text-center backdrop-blur-sm transition-colors hover:border-accent"
              >
                <FileText size={22} className="text-muted group-hover:text-accent transition-colors" />
                <span className="text-xs font-medium text-muted group-hover:text-foreground">View Resume</span>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
