"use client";

import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      {...fadeIn}
    >
      {children}
    </motion.section>
  );
}
