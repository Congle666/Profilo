import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown, ArrowRight } from "lucide-react";
import { GitHubIcon, FacebookIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolio";

/**
 * Hero section — 2 cột: text trái + ảnh profile phải.
 * Tên lớn nổi bật, typing effect cho roles, ảnh tròn glow.
 */
export function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* === CỘT TRÁI — Text content (3 col) === */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            {/* Greeting nhỏ */}
            <motion.p
              variants={fadeUp}
              className="mb-3 text-sm font-medium tracking-widest text-muted uppercase"
            >
              Hello World_
            </motion.p>

            {/* Tên lớn */}
            <motion.h1
              variants={fadeUp}
              className="heading mb-2"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
            >
              I&apos;m{" "}
              <span className="text-foreground">{personalInfo.firstName}</span>{" "}
              <span className="heading-italic text-accent">
                {personalInfo.lastName}
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-1">
              <TypingRole roles={personalInfo.roles || [personalInfo.role]} />
            </motion.div>

            {/* Mô tả */}
            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-lg text-sm leading-relaxed text-muted md:text-base"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mb-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.97]"
              >
                View Projects
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent active:scale-[0.97]"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <GitHubIcon size={17} />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </motion.div>
          </motion.div>

          {/* === CỘT PHẢI — Ảnh profile (2 col) === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:col-span-2"
          >
            <div className="relative">
              {/* Glow ring phía sau */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--color-accent), transparent 40%, var(--color-accent) 60%, transparent)",
                  opacity: 0.4,
                  filter: "blur(8px)",
                }}
              />

              {/* Border ring tĩnh */}
              <div className="absolute -inset-1 rounded-full border-2 border-accent/30" />

              {/* Ảnh */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-accent/50 md:h-80 md:w-80 lg:h-96 lg:w-96">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-border">
                    <span className="heading text-5xl font-bold text-accent/40">
                      {personalInfo.lastName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Badge dưới ảnh */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/90 px-4 py-1.5 backdrop-blur-sm"
              >
                <span className="text-xs font-medium text-muted">
                  Code for{" "}
                  <span className="font-semibold text-accent">Community</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollTo("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted/50"
          aria-label="Scroll to About section"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}

/**
 * Typing effect — xoay vòng qua các roles với cursor nhấp nháy.
 */
function TypingRole({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      // Đã gõ xong — chờ 2s rồi xoá
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      // Đã xoá xong — chuyển role tiếp
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Đang gõ hoặc đang xoá
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <span
      className="heading text-2xl font-bold md:text-4xl"
      style={{
        background: "linear-gradient(135deg, #A78BFA 0%, #C084FC 40%, #E879F9 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {text}
      <span
        className="ml-1 inline-block w-[3px] animate-pulse"
        style={{ height: "1em", background: "#C084FC", WebkitTextFillColor: "initial" }}
      />
    </span>
  );
}
