import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../common/AnimatedSection";
import { RadarChart } from "../common/RadarChart";
import { ProgressBar } from "../ui/ProgressBar";
import { skillsData } from "../../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              My Skills
            </span>
          </div>
          <h2 className="heading mb-4 text-3xl font-bold md:text-4xl">
            Technical{" "}
            <span className="heading-italic text-accent">Expertise</span>
          </h2>
          <p className="max-w-lg text-muted">
            The stack I use to build, integrate and ship backend systems.
          </p>
        </AnimatedSection>

        {/* 2 cột: Radar + Progress bars */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* Radar Chart */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl border border-border bg-card/50 p-8">
              <h3 className="heading mb-6 text-center text-lg font-semibold">
                Core Skills Overview
              </h3>
              <RadarChart data={skillsData.radarSkills} />
            </div>
          </AnimatedSection>

          {/* Progress Bars */}
          <AnimatedSection direction="right">
            <div className="space-y-8">
              {/* Go backend group */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  {skillsData.primaryLabel}
                </h3>
                {skillsData.primary.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    label={skill.name}
                    percentage={skill.percentage}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>

              {/* Data, cloud & integration group */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  {skillsData.secondaryLabel}
                </h3>
                {skillsData.secondary.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    label={skill.name}
                    percentage={skill.percentage}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ============================================
           TOOLS — Grid cards với icons
           ============================================ */}
        <AnimatedSection className="mb-12">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">
            Tools & Technologies
          </h3>
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skillsData.tools.map((tool, i) => (
              <StaggerItem key={typeof tool === "string" ? tool : tool.name}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "var(--color-accent)" }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 transition-shadow hover:shadow-lg hover:shadow-accent/5"
                >
                  {typeof tool === "object" && tool.icon ? (
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                      {(typeof tool === "string" ? tool : tool.name).charAt(0)}
                    </div>
                  )}
                  <span className="text-sm font-medium">
                    {typeof tool === "string" ? tool : tool.name}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* ============================================
           SOFT SKILLS — Pills row
           ============================================ */}
        <AnimatedSection>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.softSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-accent/30 bg-accent/[0.03] px-4 py-2 text-sm font-medium text-accent"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
