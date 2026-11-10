import { useState, useEffect, useRef } from "react";

/**
 * Component đếm số từ 0 lên target khi scroll vào view.
 * Dùng requestAnimationFrame cho smooth animation.
 * decimals: số chữ số thập phân (vd GPA 3.31 → decimals=2).
 */
export function CountUp({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animateCount = () => {
      const startTime = performance.now();
      const factor = 10 ** decimals;

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // Ease-out: nhanh đầu, chậm cuối
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end * factor) / factor);
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
