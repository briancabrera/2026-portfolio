"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/content";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-1 text-sm text-muted">
      <button
        onClick={() => setLocale("en")}
        className={`transition-colors hover:text-ink ${
          locale === "en" ? "font-medium text-ink" : ""
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => setLocale("es")}
        className={`transition-colors hover:text-ink ${
          locale === "es" ? "font-medium text-ink" : ""
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
    </div>
  );
}
