import { motion } from "framer-motion";

/**
 * Animated floating particles/orbs nền.
 * Tạo hiệu ứng depth và sống động cho background.
 */
export function FloatingParticles() {
  // Tạo các particles với vị trí + kích thước random
  const particles = [
    { x: "10%", y: "20%", size: 6, duration: 8, delay: 0 },
    { x: "80%", y: "15%", size: 4, duration: 10, delay: 1 },
    { x: "25%", y: "60%", size: 8, duration: 12, delay: 2 },
    { x: "70%", y: "70%", size: 5, duration: 9, delay: 0.5 },
    { x: "50%", y: "40%", size: 3, duration: 11, delay: 3 },
    { x: "90%", y: "50%", size: 7, duration: 7, delay: 1.5 },
    { x: "15%", y: "85%", size: 4, duration: 13, delay: 2.5 },
    { x: "60%", y: "25%", size: 5, duration: 10, delay: 0.8 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs lớn */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[20%] h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] bottom-[20%] h-[350px] w-[350px] rounded-full bg-accent/[0.02] blur-[100px]"
      />

      {/* Small floating dots */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-accent"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Grid pattern nhẹ cho background — tạo cảm giác tech.
 */
export function GridPattern() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(var(--color-accent) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
