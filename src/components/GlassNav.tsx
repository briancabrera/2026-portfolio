"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

const navLinks = [
  { href: "#what-i-do", en: "What I Do", es: "Qué Hago" },
  { href: "#selected-work", en: "Work", es: "Trabajo" },
  { href: "#background", en: "Background", es: "Trayectoria" },
  { href: "#contact", en: "Contact", es: "Contacto" },
];

export function GlassNav() {
  const { locale } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div
        className="flex items-center gap-4 overflow-x-auto rounded-full border border-white/20 bg-white/60 px-4 py-2.5 backdrop-blur-xl md:gap-8 md:px-6 md:py-3"
        style={{
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 text-xs font-medium text-ink/80 transition-colors hover:text-ink md:text-sm"
          >
            {locale === "es" ? link.es : link.en}
          </Link>
        ))}
        <div className="h-4 w-px shrink-0 bg-ink/10" />
        <LanguageToggle />
      </div>
    </motion.nav>
  );
}
