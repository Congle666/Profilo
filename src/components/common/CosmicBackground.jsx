import { useMemo } from "react";
import "../../styles/cosmic-background.css";

/**
 * COSMIC BACKGROUND — Hiệu ứng vũ trụ
 *
 * 5 lớp: Starfield → Nebula → Solar System (dưới-phải)
 *       → Solar System 2 (trên-trái) → Shooting Stars
 */
export function CosmicBackground() {
  return (
    <div className="pointer-events-none" aria-hidden="true">
      <Starfield />
      <Nebula />
      <SolarSystem />
      <SolarSystemTop />
      <ShootingStars />
      {/* Overlay giúp đọc content */}
      <div
        className="fixed inset-0"
        style={{
          zIndex: 4,
          background: "radial-gradient(ellipse at center, rgba(5,5,15,0.3) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ============================================
   LỚP 1: STARFIELD
   ============================================ */
function Starfield() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const count = isMobile ? 60 : 120;

  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 0.5 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.6,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 1.5,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0" style={{ zIndex: 1 }}>
      {stars.map((s) => (
        <div
          key={s.id}
          className="cosmic-star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ============================================
   LỚP 2: NEBULA
   ============================================ */
function Nebula() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 2 }}
    >
      <div className="cosmic-nebula-1" />
      <div className="cosmic-nebula-2" />
      <div className="cosmic-nebula-3" />
    </div>
  );
}

/* ============================================
   LỚP 3A: SOLAR SYSTEM — góc phải dưới (chính)
   ============================================ */
function SolarSystem() {
  return (
    <div
      className="pointer-events-none fixed"
      style={{ zIndex: 3, right: -80, bottom: -80, width: 340, height: 340 }}
    >
      <div className="relative h-full w-full scale-100 max-[768px]:scale-[0.45]">
        <div className="cosmic-sun" />
        <div className="cosmic-orbit cosmic-orbit-1">
          <div className="cosmic-planet cosmic-planet-1" />
        </div>
        <div className="cosmic-orbit cosmic-orbit-2">
          <div className="cosmic-planet cosmic-planet-2" />
        </div>
        <div className="cosmic-orbit cosmic-orbit-3">
          <div className="cosmic-planet cosmic-planet-3" />
        </div>
      </div>
    </div>
  );
}

/* ============================================
   LỚP 3B: SOLAR SYSTEM 2 — góc trái trên (nhỏ hơn)
   ============================================ */
function SolarSystemTop() {
  return (
    <div
      className="pointer-events-none fixed"
      style={{ zIndex: 3, left: -50, top: -50, width: 220, height: 220 }}
    >
      <div className="relative h-full w-full scale-100 max-[768px]:scale-[0.4]">
        <div className="cosmic-sun-top" />
        <div className="cosmic-orbit cosmic-orbit-top-1">
          <div className="cosmic-planet cosmic-planet-top-1" />
        </div>
        <div className="cosmic-orbit cosmic-orbit-top-2">
          <div className="cosmic-planet cosmic-planet-top-2" />
        </div>
      </div>
    </div>
  );
}

/* ============================================
   LỚP 4: SHOOTING STARS — sao băng cải tiến
   Dày hơn, sáng hơn, có trail glow, bay 2 chiều
   ============================================ */
function ShootingStars() {
  const streaks = useMemo(
    () => [
      // Bay trái → phải
      { width: 180, top: "12%", delay: 0.5, duration: 2.5, reverse: false },
      { width: 140, top: "35%", delay: 4, duration: 3, reverse: false },
      { width: 200, top: "65%", delay: 8, duration: 2.8, reverse: false },
      // Bay phải → trái
      { width: 160, top: "22%", delay: 6, duration: 3.2, reverse: true },
      { width: 120, top: "78%", delay: 11, duration: 2.6, reverse: true },
      // Thêm 1 cái dài, chậm
      { width: 250, top: "50%", delay: 15, duration: 3.5, reverse: false },
    ],
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 3 }}
    >
      {streaks.map((s, i) => (
        <div
          key={i}
          className="cosmic-shooting-star"
          style={{
            width: s.width,
            top: s.top,
            left: s.reverse ? "auto" : "-200px",
            right: s.reverse ? "-200px" : "auto",
            animationName: s.reverse ? "shooting-star-reverse" : "shooting-star",
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
      ))}
    </div>
  );
}
