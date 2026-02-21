export type Locale = "en" | "es";

export const content = {
  en: {
    hero: {
      headline: "I connect business decisions\nwith technical execution.",
      subheadline:
        "Product & Engineering Bridge\nfor early-stage SaaS platforms.",
      ctaWork: "View Work",
      ctaConnect: "Connect",
    },
    whatIDo: {
      title: "What I Do",
      blocks: [
        {
          title: "Define",
          description:
            "Clarify problems, scope MVPs, prioritize what matters.",
        },
        {
          title: "Translate",
          description:
            "Turn business requirements into scalable technical architecture.",
        },
        {
          title: "Validate",
          description:
            "Align implementation with measurable business outcomes.",
        },
      ],
    },
    selectedWork: {
      title: "Selected Work",
      viewCaseStudy: "View Case Study",
      projects: [
        {
          slug: "platform-launch",
          name: "Platform Launch",
          description: "Zero-to-one product strategy for a B2B SaaS platform.",
        },
        {
          slug: "architecture-overhaul",
          name: "Architecture Overhaul",
          description: "Technical foundation for scaling from 10K to 100K users.",
        },
        {
          slug: "product-pivot",
          name: "Product Pivot",
          description: "Repositioning strategy based on market validation.",
        },
      ],
    },
    background: {
      title: "Background",
      paragraph:
        "Started in engineering. Expanded into commercial roles. Now operating where product strategy meets technical reality.",
    },
    contact: {
      headline: "Let's build something meaningful.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "All rights reserved.",
    },
    nav: {
      back: "Back",
    },
    strategy: {
      title: "Strategy",
      statement:
        "Where business intent meets technical reality. I operate in the space between—translating vision into architecture, constraints into decisions, and ambiguity into clarity.",
    },
  },
  es: {
    hero: {
      headline: "Conecto decisiones de negocio\ncon ejecución técnica.",
      subheadline:
        "Puente entre Producto e Ingeniería\npara plataformas SaaS en etapa temprana.",
      ctaWork: "Ver Trabajo",
      ctaConnect: "Conectar",
    },
    whatIDo: {
      title: "Qué Hago",
      blocks: [
        {
          title: "Definir",
          description:
            "Clarifico problemas, defino MVPs y priorizo lo que importa.",
        },
        {
          title: "Traducir",
          description:
            "Convierto requisitos de negocio en arquitectura técnica escalable.",
        },
        {
          title: "Validar",
          description:
            "Alineo la implementación con resultados de negocio medibles.",
        },
      ],
    },
    selectedWork: {
      title: "Trabajo Seleccionado",
      viewCaseStudy: "Ver Caso de Estudio",
      projects: [
        {
          slug: "platform-launch",
          name: "Lanzamiento de Plataforma",
          description: "Estrategia de producto de cero a uno para una plataforma B2B SaaS.",
        },
        {
          slug: "architecture-overhaul",
          name: "Reestructuración de Arquitectura",
          description: "Base técnica para escalar de 10K a 100K usuarios.",
        },
        {
          slug: "product-pivot",
          name: "Pivote de Producto",
          description: "Estrategia de reposicionamiento basada en validación de mercado.",
        },
      ],
    },
    background: {
      title: "Trayectoria",
      paragraph:
        "Comencé en ingeniería. Me expandí a roles comerciales. Ahora opero donde la estrategia de producto se encuentra con la realidad técnica.",
    },
    contact: {
      headline: "Construyamos algo con propósito.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "Todos los derechos reservados.",
    },
    nav: {
      back: "Volver",
    },
    strategy: {
      title: "Estrategia",
      statement:
        "Donde la intención de negocio se encuentra con la realidad técnica. Opero en ese espacio intermedio—traduciendo visión en arquitectura, restricciones en decisiones y ambigüedad en claridad.",
    },
  },
} as const;

export type Content = (typeof content)["en"];
