"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "./Section";

export function SelectedWork() {
  const { locale } = useLanguage();
  const t = content[locale].selectedWork;

  return (
    <Section id="selected-work" className="border-t border-white/20 px-6 py-30 md:py-42">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-medium text-muted sm:text-3xl">
          {t.title}
        </h2>
        <div className="mt-16 flex flex-col gap-16">
          {t.projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col gap-4 border-b border-white/20 pb-16 last:border-0 last:pb-0"
            >
              <h3 className="text-2xl font-medium text-ink sm:text-3xl">
                {project.name}
              </h3>
              <p className="text-muted">{project.description}</p>
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex w-fit items-center text-sm font-medium text-ink underline-offset-4 transition-colors hover:underline"
              >
                {t.viewCaseStudy}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
