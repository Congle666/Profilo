import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap, Trophy } from "lucide-react";
import { AnimatedSection } from "../common/AnimatedSection";
import { Modal } from "../ui/Modal";
import { educationData } from "../../data/portfolio";

export function Education() {
  const [selectedCert, setSelectedCert] = useState(null);

  const { university, certifications } = educationData;

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Education
            </span>
          </div>
          <h2 className="heading-italic mb-2 text-3xl font-bold md:text-4xl">
            <span className="text-accent">Overview</span>
          </h2>
          <p className="max-w-lg text-sm text-muted">
            A glimpse into my academic and professional journey
          </p>
        </AnimatedSection>

        {/* ============================================
           BENTO GRID — University + GPA + Highlights
           ============================================ */}
        <div className="mb-12 grid gap-4 md:grid-cols-4">
          {/* University Card (2 cột) */}
          <AnimatedSection className="md:col-span-2" delay={0}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-accent/5 blur-[60px]" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="heading text-lg font-bold">{university.name}</h3>
                    <p className="text-sm text-muted">{university.degree}</p>
                  </div>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-muted/70">
                  {university.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-accent/10 px-3 py-1.5 font-mono text-xs font-semibold text-accent">
                    {university.period}
                  </span>
                  <span className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted">
                    {university.status}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* GPA Card */}
          <AnimatedSection delay={0.1}>
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-accent/10 blur-[40px]" />
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                Final GPA
              </p>
              <div className="relative my-2">
                <span className="heading text-5xl font-bold text-accent">
                  {university.gpa}
                </span>
              </div>
              <p className="text-sm text-muted">
                Max <span className="font-semibold text-foreground">{university.gpaScale}</span>
              </p>
              <div className="mt-3 h-1 w-20 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(parseFloat(university.gpa) / parseFloat(university.gpaScale)) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Highlight — Scholarship */}
          <AnimatedSection delay={0.2}>
            {university.highlights[0] && (
              <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur-sm">
                <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-accent/5 blur-[30px]" />
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"
                >
                  <Trophy size={24} />
                </motion.div>
                <p className="heading text-lg font-bold text-accent">
                  {university.highlights[0].title}
                </p>
                <p className="mt-1 text-xs text-muted">
                  {university.highlights[0].subtitle}
                </p>
              </div>
            )}
          </AnimatedSection>

          {/* Status (2 cột) */}
          <AnimatedSection className="md:col-span-2" delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">Credits</span>
                <span className="font-mono text-sm text-accent">All completed</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-right text-xs text-muted">{university.status}</p>
            </div>
          </AnimatedSection>

          {/* Certificate Card (2 cột) */}
          <AnimatedSection className="md:col-span-2" delay={0.25}>
            {university.highlights[1] && (
              <div className="relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.03] p-5 backdrop-blur-sm">
                <div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-accent/5 blur-[40px]" />
                <div className="relative flex-1">
                  <h4 className="heading text-base font-bold text-accent">
                    {university.highlights[1].title}
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    {university.highlights[1].subtitle}
                  </p>
                </div>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative shrink-0"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Award size={28} />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatedSection>
        </div>

        {/* ============================================
           CERTIFICATIONS
           ============================================ */}
        {certifications.length > 0 && (
          <AnimatedSection>
            <div className="mb-6 flex items-center gap-2">
              <Award size={18} className="text-accent" />
              <h3 className="heading text-xl font-bold">Certifications</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -4, borderColor: "var(--color-accent)" }}
                  onClick={() => setSelectedCert(cert)}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card/50 p-6 text-center transition-shadow hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{cert.name}</p>
                    <p className="text-xs text-muted">
                      {cert.issuer} &middot; {cert.year}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Modal */}
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert?.name || ""}
        >
          {selectedCert && (
            <div className="space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award size={32} />
              </div>
              <p className="text-muted">
                <strong>Issuer:</strong> {selectedCert.issuer}
              </p>
              <p className="text-muted">
                <strong>Year:</strong> {selectedCert.year}
              </p>
              {selectedCert.url && selectedCert.url !== "#" && (
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
