import { Briefcase } from "lucide-react";
import { AnimatedSection } from "../common/AnimatedSection";
import { experienceData } from "../../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Experience
            </span>
          </div>
          <h2 className="heading mb-4 text-3xl font-bold md:text-4xl">
            Where I&apos;ve{" "}
            <span className="heading-italic text-accent">Worked</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {experienceData.map((job, i) => (
            <AnimatedSection key={job.company} delay={i * 0.1}>
              <article className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30 md:p-8">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="heading text-lg font-bold">{job.company}</h3>
                      <p className="text-sm font-medium text-accent">{job.role}</p>
                    </div>
                  </div>
                  <span className="self-start rounded-lg bg-accent/10 px-3 py-1.5 font-mono text-xs font-semibold text-accent">
                    {job.period}
                  </span>
                </div>

                <ul className="mb-5 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
