import { useState, useMemo } from "react";
import { motion } from "framer-motion";

/**
 * GPA Mountain Chart — SVG line chart hiển thị GPA qua từng học kỳ.
 * Đường area gradient tím, dots ở mỗi semester, hover hiện tooltip.
 * Không dùng chart library — SVG thuần + Framer Motion.
 */
export function GPAChart({ semesters }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // Kích thước chart
  const width = 700;
  const height = 280;
  const paddingTop = 40;
  const paddingBottom = 60;
  const paddingX = 50;

  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingTop - paddingBottom;

  // Min/max GPA cho scale (luôn bắt đầu từ 0, max 4.0)
  const minGpa = 0;
  const maxGpa = 4.0;

  // Tính toạ độ cho mỗi điểm data
  const points = useMemo(() => {
    return semesters.map((sem, i) => {
      const x = paddingX + (i / (semesters.length - 1)) * chartWidth;
      const yRatio = (sem.gpa - minGpa) / (maxGpa - minGpa);
      const y = paddingTop + chartHeight - yRatio * chartHeight;
      return { x, y, ...sem };
    });
  }, [semesters, chartWidth, chartHeight]);

  // SVG path cho đường line
  const linePath = useMemo(() => {
    if (points.length === 0) return "";
    // Smooth curve dùng cardinal spline
    return points
      .map((p, i) => {
        if (i === 0) return `M ${p.x} ${p.y}`;
        // Bezier curve cho smooth
        const prev = points[i - 1];
        const cpx = (prev.x + p.x) / 2;
        return `C ${cpx} ${prev.y}, ${cpx} ${p.y}, ${p.x} ${p.y}`;
      })
      .join(" ");
  }, [points]);

  // SVG path cho area (fill gradient dưới đường)
  const areaPath = useMemo(() => {
    if (points.length === 0) return "";
    const bottomY = paddingTop + chartHeight;
    const first = points[0];
    const last = points[points.length - 1];
    return `${linePath} L ${last.x} ${bottomY} L ${first.x} ${bottomY} Z`;
  }, [linePath, points, chartHeight]);

  // Grid lines ngang (GPA 1.0, 2.0, 3.0, 4.0)
  const gridLines = [1.0, 2.0, 3.0, 4.0];

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label="GPA progression chart across semesters"
      >
        <defs>
          {/* Gradient fill cho area dưới đường */}
          <linearGradient id="gpaAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.02" />
          </linearGradient>
          {/* Glow filter cho dots */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines ngang */}
        {gridLines.map((gpa) => {
          const yRatio = (gpa - minGpa) / (maxGpa - minGpa);
          const y = paddingTop + chartHeight - yRatio * chartHeight;
          return (
            <g key={gpa}>
              <line
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="var(--color-border)"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <text
                x={paddingX - 10}
                y={y + 4}
                textAnchor="end"
                fill="var(--color-muted)"
                fontSize="11"
                fontFamily="var(--font-body)"
              >
                {gpa.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Area fill gradient */}
        <motion.path
          d={areaPath}
          fill="url(#gpaAreaGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Line chính — animate vẽ dần */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Dots + Labels ở mỗi semester */}
        {points.map((p, i) => (
          <g key={i}>
            {/* Vertical guide line khi hover */}
            {activeIndex === i && (
              <line
                x1={p.x}
                y1={paddingTop}
                x2={p.x}
                y2={paddingTop + chartHeight}
                stroke="var(--color-accent)"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.3"
              />
            )}

            {/* Dot */}
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={activeIndex === i ? 7 : 5}
              fill={i === semesters.length - 1 ? "var(--color-accent)" : "var(--color-background)"}
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              filter={activeIndex === i ? "url(#glow)" : undefined}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.15 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onTouchStart={() => setActiveIndex(activeIndex === i ? null : i)}
              style={{ cursor: "pointer", pointerEvents: "all" }}
            />

            {/* GPA number trên dot */}
            <motion.text
              x={p.x}
              y={p.y - 14}
              textAnchor="middle"
              fill={activeIndex === i ? "var(--color-accent)" : "var(--color-foreground)"}
              fontSize={activeIndex === i ? "13" : "11"}
              fontWeight="700"
              fontFamily="var(--font-heading)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.15 }}
            >
              {p.gpa.toFixed(2)}
            </motion.text>

            {/* Label semester bên dưới */}
            <text
              x={p.x}
              y={paddingTop + chartHeight + 20}
              textAnchor="middle"
              fill="var(--color-muted)"
              fontSize="10"
              fontFamily="var(--font-body)"
            >
              {p.label}
            </text>
            <text
              x={p.x}
              y={paddingTop + chartHeight + 34}
              textAnchor="middle"
              fill="var(--color-muted)"
              fontSize="9"
              fontFamily="var(--font-body)"
              opacity="0.6"
            >
              {p.period}
            </text>
          </g>
        ))}
      </svg>

      {/* Tooltip card — hiện khi hover dot */}
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-sm rounded-xl border border-accent/20 bg-card/90 p-4 backdrop-blur-sm"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold">
              {semesters[activeIndex].label} — {semesters[activeIndex].period}
            </span>
            <span className="heading text-lg font-bold text-accent">
              {semesters[activeIndex].gpa.toFixed(2)}
            </span>
          </div>
          <div className="mb-2 flex items-center gap-3 text-xs text-muted">
            <span>Tích lũy: <span className="text-foreground font-medium">{semesters[activeIndex].cumulativeGpa.toFixed(2)}</span></span>
            <span>Tín chỉ: <span className="text-foreground font-medium">{semesters[activeIndex].credits}</span></span>
          </div>
          {/* Môn nổi bật */}
          <div className="flex flex-wrap gap-1.5">
            {semesters[activeIndex].highlights.map((h, j) => (
              <span
                key={j}
                className="rounded-md bg-accent/10 px-2 py-0.5 text-[11px] text-accent"
              >
                {h.name}: <span className="font-semibold">{h.score}</span> ({h.grade})
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
