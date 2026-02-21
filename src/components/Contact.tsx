"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "./Section";

export function Contact() {
  const { locale } = useLanguage();
  const t = content[locale].contact;

  return (
    <Section id="contact" className="border-t border-white/20 px-6 py-30 md:py-42">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-medium text-ink sm:text-3xl md:text-4xl">
          {t.headline}
        </h2>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <a
            href="mailto:hello@example.com"
            className="text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {t.email}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {t.linkedin}
          </a>
        </div>
      </div>
    </Section>
  );
}
