import { Code, Palette, MessageSquare, Server, Database, TestTube2 } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../common/AnimatedSection";
import { CountUp } from "../ui/CountUp";
import { aboutData, personalInfo } from "../../data/portfolio";

// Map icon name từ data → Lucide component
const iconMap = {
  Code,
  Palette,
  MessageSquare,
  Server,
  Database,
  TestTube2,
};

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* 2 cột: ảnh + text */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Ảnh chân dung với creative frame */}
          <AnimatedSection direction="left">
            <div className="relative mx-auto max-w-sm">
              {/* Frame offset tạo depth */}
              <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border-2 border-accent/40 transition-all duration-300 group-hover:translate-0" />
              <div className="relative overflow-hidden rounded-2xl bg-card">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  /* Placeholder khi chưa có ảnh */
                  <div className="flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-card to-border">
                    <span className="heading text-6xl font-bold text-accent/30">
                      {personalInfo.firstName.charAt(0)}
                      {personalInfo.lastName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection direction="right">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium tracking-wider text-accent uppercase">
                About Me
              </span>
            </div>
            <h2 className="heading mb-6 text-3xl font-bold md:text-4xl">
              Passionate about creating{" "}
              <span className="heading-italic text-accent">
                digital experiences
              </span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              {aboutData.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats cards */}
        <StaggerContainer className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {aboutData.stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl border border-border bg-card/50 p-6 text-center transition-colors hover:border-accent/50">
                <div className="heading mb-1 text-3xl font-bold text-accent md:text-4xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* What I Do */}
        <AnimatedSection>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium tracking-wider text-accent uppercase">
              What I Do
            </span>
          </div>
          <h3 className="heading mb-10 text-2xl font-bold md:text-3xl">
            Services I Offer
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {aboutData.services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <StaggerItem key={i}>
                <div className="group rounded-xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="heading mb-2 text-lg font-semibold">
                    {service.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
