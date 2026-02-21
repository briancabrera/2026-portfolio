"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";

export function BackLink() {
  const { locale } = useLanguage();
  const t = content[locale].nav;

  return (
    <Link
      href="/"
      className="text-sm text-muted transition-colors hover:text-ink"
    >
      {t.back}
    </Link>
  );
}
