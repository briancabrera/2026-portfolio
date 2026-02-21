"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { locale } = useLanguage();
  const t = content[locale].footer;

  return (
    <footer className="border-t border-white/20 px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-muted">{t.copyright}</p>
      </div>
    </footer>
  );
}
