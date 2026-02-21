"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "./Section";
import { GlassCard } from "./GlassCard";

const icons = {
  define: (
    <svg
      className="h-6 w-6 text-ink"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  ),
  translate: (
    <svg
      className="h-6 w-6 text-ink"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </svg>
  ),
  validate: (
    <svg
      className="h-6 w-6 text-ink"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

export function WhatIDo() {
  const { locale } = useLanguage();
  const t = content[locale].whatIDo;

  return (
    <Section id="what-i-do" className="px-6 py-30 md:py-42">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-medium text-muted sm:text-3xl">
          {t.title}
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          {t.blocks.map((block, i) => {
            const iconKey = block.title.toLowerCase() as keyof typeof icons;
            return (
              <GlassCard key={block.title} delay={i * 0.1}>
                <div className="mb-4">{icons[iconKey] ?? icons.define}</div>
                <h3 className="text-xl font-medium text-ink sm:text-2xl">
                  {block.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {block.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
