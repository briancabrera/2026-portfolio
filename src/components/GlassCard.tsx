"use client";

import { motion } from "framer-motion";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`rounded-2xl border border-white/40 bg-white/50 p-8 backdrop-blur-xl ${className}`}
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.5) inset",
      }}
    >
      {children}
    </motion.div>
  );
}
