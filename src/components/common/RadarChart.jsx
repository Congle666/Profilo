import { motion } from "framer-motion";

/**
 * SVG Radar Chart tự viết — không dùng Recharts.
 * Hiển thị 6 skills chính dưới dạng polygon trên lưới radar.
 */
export function RadarChart({ data, size = 300 }) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.38;
  const levels = 3; // 3 vòng lưới: 33%, 66%, 100%
  const angleStep = (2 * Math.PI) / data.length;

  // Tính tọa độ 1 điểm trên radar
  const getPoint = (index, value) => {
    const angle = angleStep * index - Math.PI / 2; // Bắt đầu từ 12h
    const r = (value / 100) * radius;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // Tạo polygon path từ mảng points
  const makePolygon = (getValue) =>
    data
      .map((_, i) => {
        const p = getPoint(i, getValue(i));
        return `${p.x},${p.y}`;
      })
      .join(" ");

  // Data polygon
  const dataPolygon = makePolygon((i) => data[i].value);

  return (
    <div className="flex items-center justify-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[300px]"
        aria-label="Radar chart showing skill levels"
        role="img"
      >
        {/* Grid levels */}
        {Array.from({ length: levels }, (_, l) => {
          const levelValue = ((l + 1) / levels) * 100;
          const points = makePolygon(() => levelValue);
          return (
            <polygon
              key={l}
              points={points}
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="1"
              opacity={0.5}
            />
          );
        })}

        {/* Axis lines */}
        {data.map((_, i) => {
          const p = getPoint(i, 100);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="var(--color-border)"
              strokeWidth="1"
              opacity={0.3}
            />
          );
        })}

        {/* Data polygon — animated */}
        <motion.polygon
          points={makePolygon(() => 0)}
          animate={{ points: dataPolygon }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          fill="var(--color-accent)"
          fillOpacity={0.15}
          stroke="var(--color-accent)"
          strokeWidth="2"
        />

        {/* Data dots */}
        {data.map((item, i) => {
          const p = getPoint(i, item.value);
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              animate={{ cx: p.x, cy: p.y }}
              transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
              r="4"
              fill="var(--color-accent)"
            />
          );
        })}

        {/* Labels */}
        {data.map((item, i) => {
          const p = getPoint(i, 120); // Đẩy label ra ngoài
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-muted)"
              fontSize="11"
              fontFamily="var(--font-body)"
            >
              {item.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
