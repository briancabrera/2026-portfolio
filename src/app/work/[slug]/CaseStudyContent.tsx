"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  caseStudy: CaseStudy;
};

const sectionLabels = {
  en: {
    problem: "Problem",
    constraints: "Constraints",
    role: "My Role",
    decisions: "Key Decisions",
    outcome: "Outcome",
  },
  es: {
    problem: "Problema",
    constraints: "Restricciones",
    role: "Mi Rol",
    decisions: "Decisiones Clave",
    outcome: "Resultado",
  },
};

export function CaseStudyContent({ caseStudy }: Props) {
  const { locale } = useLanguage();
  const labels = sectionLabels[locale];

  return (
    <motion.article
      className="mx-auto max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        {caseStudy.name[locale]}
      </h1>

      <div className="mt-16 flex flex-col gap-16">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            {labels.problem}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">
            {caseStudy.problem[locale]}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            {labels.constraints}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">
            {caseStudy.constraints[locale]}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            {labels.role}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">
            {caseStudy.role[locale]}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            {labels.decisions}
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-lg leading-relaxed text-ink">
            {caseStudy.decisions[locale].map((decision, i) => (
              <li key={i}>{decision}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            {labels.outcome}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">
            {caseStudy.outcome[locale]}
          </p>
        </section>
      </div>
    </motion.article>
  );
}
