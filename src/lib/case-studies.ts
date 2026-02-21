import type { Locale } from "./content";

export type CaseStudy = {
  slug: string;
  name: Record<Locale, string>;
  problem: Record<Locale, string>;
  constraints: Record<Locale, string>;
  role: Record<Locale, string>;
  decisions: Record<Locale, string[]>;
  outcome: Record<Locale, string>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "platform-launch",
    name: {
      en: "Platform Launch",
      es: "Lanzamiento de Plataforma",
    },
    problem: {
      en: "A B2B SaaS company needed to enter a new market segment but lacked a clear product strategy. The engineering team was building features without a coherent roadmap, and stakeholders had conflicting priorities.",
      es: "Una empresa B2B SaaS necesitaba entrar en un nuevo segmento de mercado pero carecía de una estrategia de producto clara. El equipo de ingeniería construía funcionalidades sin un roadmap coherente y los stakeholders tenían prioridades contradictorias.",
    },
    constraints: {
      en: "6-month timeline, limited engineering resources, and no existing playbook for the target market.",
      es: "Plazo de 6 meses, recursos de ingeniería limitados y sin referencias previas para el mercado objetivo.",
    },
    role: {
      en: "Led product strategy, requirements definition, and technical architecture. Acted as the primary liaison between commercial and engineering teams.",
      es: "Lideré la estrategia de producto, definición de requisitos y arquitectura técnica. Actué como enlace principal entre equipos comerciales e ingeniería.",
    },
    decisions: {
      en: [
        "Prioritized a narrow MVP focused on three core workflows instead of broad feature coverage.",
        "Proposed a phased architecture that allowed parallel development of frontend and backend.",
        "Established a lightweight governance process for scope changes.",
      ],
      es: [
        "Prioricé un MVP acotado enfocado en tres flujos de trabajo clave en lugar de cobertura amplia.",
        "Propuse una arquitectura por fases que permitió desarrollo paralelo de frontend y backend.",
        "Establecí un proceso de gobernanza ligero para cambios de alcance.",
      ],
    },
    outcome: {
      en: "Launched on schedule with 12 pilot customers. Achieved 85% adoption of core workflows within first quarter.",
      es: "Lanzamiento a tiempo con 12 clientes piloto. Se logró 85% de adopción de flujos clave en el primer trimestre.",
    },
  },
  {
    slug: "architecture-overhaul",
    name: {
      en: "Architecture Overhaul",
      es: "Reestructuración de Arquitectura",
    },
    problem: {
      en: "A growing SaaS platform was approaching scalability limits. Database queries were slowing, deployments were risky, and the monolith was becoming a bottleneck for team velocity.",
      es: "Una plataforma SaaS en crecimiento se acercaba a límites de escalabilidad. Las consultas a base de datos se ralentizaban, los despliegues eran riesgosos y el monolito se convertía en un cuello de botella para la velocidad del equipo.",
    },
    constraints: {
      en: "Zero downtime requirement, existing customer commitments, and a team unfamiliar with distributed systems.",
      es: "Requisito de cero tiempo de inactividad, compromisos con clientes existentes y un equipo sin experiencia en sistemas distribuidos.",
    },
    role: {
      en: "Defined the migration strategy, translated business continuity requirements into technical constraints, and coordinated phased rollout.",
      es: "Definí la estrategia de migración, traduje requisitos de continuidad de negocio en restricciones técnicas y coordiné el despliegue por fases.",
    },
    decisions: {
      en: [
        "Chose a strangler fig pattern over big-bang rewrite to minimize risk.",
        "Introduced read replicas before full database split to validate performance gains.",
        "Created a feature flag system for gradual rollout and rollback capability.",
      ],
      es: [
        "Elegí un patrón de estrangulamiento sobre reescritura total para minimizar riesgo.",
        "Introduje réplicas de lectura antes de la división completa de la base de datos.",
        "Creé un sistema de feature flags para despliegue gradual y capacidad de rollback.",
      ],
    },
    outcome: {
      en: "Completed migration over 8 months with no customer-facing incidents. Query latency reduced by 60%, deployment frequency increased 3x.",
      es: "Migración completada en 8 meses sin incidentes visibles para clientes. Latencia de consultas reducida 60%, frecuencia de despliegue triplicada.",
    },
  },
  {
    slug: "product-pivot",
    name: {
      en: "Product Pivot",
      es: "Pivote de Producto",
    },
    problem: {
      en: "A product built for a broad market was struggling to gain traction. Users were signing up but adoption was low. Retention metrics indicated a misalignment between product and market.",
      es: "Un producto construido para un mercado amplio tenía dificultades para ganar tracción. Los usuarios se registraban pero la adopción era baja. Las métricas de retención indicaban desalineación entre producto y mercado.",
    },
    constraints: {
      en: "Limited runway, existing codebase, and need to preserve core technology while repositioning.",
      es: "Runway limitado, base de código existente y necesidad de preservar la tecnología central mientras se reposiciona.",
    },
    role: {
      en: "Led market validation and discovery. Synthesized findings into a repositioning strategy with clear technical implications.",
      es: "Lideré la validación y descubrimiento de mercado. Sinteticé hallazgos en una estrategia de reposicionamiento con implicaciones técnicas claras.",
    },
    decisions: {
      en: [
        "Narrowed focus to a specific vertical based on usage patterns and willingness to pay.",
        "Reprioritized roadmap to emphasize workflows that drove retention in target segment.",
        "Deprecated non-core features to reduce maintenance surface and clarify positioning.",
      ],
      es: [
        "Enfocamos en un vertical específico basado en patrones de uso y disposición a pagar.",
        "Reprioritizamos el roadmap para enfatizar flujos que impulsaban retención en el segmento objetivo.",
        "Deprecamos funcionalidades no core para reducir superficie de mantenimiento y clarificar posicionamiento.",
      ],
    },
    outcome: {
      en: "Repositioned within 4 months. New user activation increased 2.5x. Secured Series A funding based on validated positioning.",
      es: "Reposicionamiento en 4 meses. Activación de nuevos usuarios aumentó 2.5x. Obtención de Serie A basada en posicionamiento validado.",
    },
  },
];
