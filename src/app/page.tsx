import { Hero } from "@/components/Hero";
import { StrategyStatement } from "@/components/StrategyStatement";
import { WhatIDo } from "@/components/WhatIDo";
import { SelectedWork } from "@/components/SelectedWork";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <StrategyStatement />
      <WhatIDo />
      <SelectedWork />
      <Background />
      <Contact />
      <Footer />
    </main>
  );
}
