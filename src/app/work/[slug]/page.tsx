import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { LanguageToggle } from "@/components/LanguageToggle";
import { BackLink } from "@/components/BackLink";
import { CaseStudyContent } from "./CaseStudyContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) notFound();

  return (
    <div className="min-h-screen">
      <header
        className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-white/20 bg-white/60 px-6 py-4 backdrop-blur-xl"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
      >
        <BackLink />
        <LanguageToggle />
      </header>

      <main className="px-6 pt-24 pb-30">
        <CaseStudyContent caseStudy={caseStudy} />
      </main>
    </div>
  );
}
