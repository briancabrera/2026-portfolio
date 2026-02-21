"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { Hero3D } from "./Hero3D";
import { GlassNav } from "./GlassNav";

export function Hero() {
  const { locale } = useLanguage();
  const t = content[locale].hero;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <GlassNav />

      <Hero3D />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="text-4xl font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          {t.headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < t.headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mt-8 text-lg text-muted sm:text-xl md:text-2xl">
          {t.subheadline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < t.subheadline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#selected-work"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-ink bg-ink px-6 text-sm font-medium text-white transition-all hover:bg-ink/90 hover:shadow-lg"
          >
            {t.ctaWork}
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-ink/30 px-6 text-sm font-medium text-ink transition-all hover:border-ink hover:bg-ink/5"
          >
            {t.ctaConnect}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
