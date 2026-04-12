import { useState, useEffect, useRef } from "react";

/**
 * Custom cursor — vòng tròn accent theo chuột + trail particles.
 * Chỉ hiện trên desktop có mouse (pointer: fine).
 * Hover interactive elements → cursor phóng to + blend.
 */
export function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Chỉ hiện trên desktop có mouse thật
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    // Detect hover trên interactive elements
    const handleOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']");
      setHovering(!!target);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseover", handleOver);

    // Smooth follow animation — lerp
    let raf;
    const animate = () => {
      // Cursor chính — follow nhanh (lerp 0.15)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      // Trail — follow chậm hơn (lerp 0.08)
      trailPos.current.x += (mouse.current.x - trailPos.current.x) * 0.08;
      trailPos.current.y += (mouse.current.y - trailPos.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [visible]);

  // Không render trên mobile/touch
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Ẩn cursor mặc định */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      {/* Trail — vòng lớn mờ, follow chậm */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: hovering ? 60 : 36,
          height: hovering ? 60 : 36,
          marginLeft: hovering ? -30 : -18,
          marginTop: hovering ? -30 : -18,
          borderRadius: "50%",
          border: `1.5px solid var(--color-accent)`,
          opacity: visible ? (hovering ? 0.6 : 0.3) : 0,
          transition: "width 0.3s, height 0.3s, margin 0.3s, opacity 0.3s",
          willChange: "transform",
        }}
      />

      {/* Dot chính — nhỏ, follow nhanh */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: hovering ? 8 : 6,
          height: hovering ? 8 : 6,
          marginLeft: hovering ? -4 : -3,
          marginTop: hovering ? -4 : -3,
          borderRadius: "50%",
          backgroundColor: "var(--color-accent)",
          opacity: visible ? 1 : 0,
          boxShadow: hovering
            ? "0 0 12px var(--color-accent), 0 0 24px var(--color-accent)"
            : "0 0 6px var(--color-accent)",
          transition: "width 0.2s, height 0.2s, margin 0.2s, opacity 0.2s, box-shadow 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
