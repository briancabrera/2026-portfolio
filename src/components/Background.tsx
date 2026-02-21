"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "./Section";

export function Background() {
  const { locale } = useLanguage();
  const t = content[locale].background;

  return (
    <Section id="background" className="border-t border-white/20 px-6 py-30 md:py-42">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-medium text-muted sm:text-3xl">
          {t.title}
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-ink">
          {t.paragraph}
        </p>
      </div>
    </Section>
  );
}
