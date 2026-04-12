import { motion } from "framer-motion";

/**
 * Animated progress bar — width chạy từ 0% đến target khi scroll vào view.
 * Hỗ trợ icon (URL ảnh hoặc null).
 */
export function ProgressBar({ label, percentage, level, icon }) {
  const levelColors = {
    Expert: "bg-accent text-background",
    Advanced: "bg-accent/70 text-background",
    Intermediate: "bg-accent/50 text-background",
    Beginner: "bg-muted text-background",
  };

  return (
    <div className="mb-4">
      {/* Label row */}
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <img
              src={icon}
              alt={label}
              className="h-4 w-4 object-contain"
              loading="lazy"
            />
          )}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">{percentage}%</span>
          <span
            className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
              levelColors[level] || levelColors.Beginner
            }`}
          >
            {level}
          </span>
        </div>
      </div>

      {/* Bar */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
