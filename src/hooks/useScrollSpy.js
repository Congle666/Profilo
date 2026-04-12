import { useState, useEffect } from "react";

/**
 * Hook theo dõi section nào đang hiển thị trên viewport.
 * Dùng IntersectionObserver với threshold 0.3.
 * @param {string[]} sectionIds - Mảng id của các section cần track
 * @returns {string} activeSection - id của section đang active
 */
export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
