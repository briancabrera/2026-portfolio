"use client";

import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import { Section } from "./Section";

export function StrategyStatement() {
  const { locale } = useLanguage();
  const t = content[locale].strategy;

  return (
    <Section id="strategy" className="px-6 py-30 md:py-42">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          {t.title}
        </h2>
        <p className="mt-6 text-2xl font-light leading-relaxed text-ink sm:text-3xl">
          {t.statement}
        </p>
      </div>
    </Section>
  );
}
