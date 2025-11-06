export interface FAQDataItem {
  title: string
  description: string
  topics: string[]
  iconColorStart: string
  iconColorEnd: string
  iconPath: string
}

export const defaultFAQItems: FAQDataItem[] = [
  {
    title: "Preciso ter experiência prévia em programação?",
    description: "Não! Nosso método foi desenvolvido para pessoas sem conhecimento técnico. Você aprenderá desde o básico até técnicas avançadas, usando IA como seu principal aliado no desenvolvimento.",
    topics: [
      'Método Designed para iniciantes',
      'IA assume o papel do programador',
      'Foco na lógica de negócio, não na sintaxe',
      'Suporte completo durante todo o curso'
    ],
    iconColorStart: "blue-500",
    iconColorEnd: "blue-600",
    iconPath: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Quanto tempo leva para criar meu primeiro SaaS?",
    description: "Com nosso método, você pode ter um MVP funcional em 7-14 dias. O tempo varia conforme a complexidade do projeto, mas nossa metodologia é otimizada para resultados rápidos.",
    topics: [
      'MVP em 7-14 dias',
      'Deploy automático na Vercel',
      'Templates prontos para uso',
      'Componentes reutilizáveis'
    ],
    iconColorStart: "green-500",
    iconColorEnd: "green-600",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "As ferramentas de IA são gratuitas?",
    description: "Oferecemos versões gratuitas das principais ferramentas (ChatGPT, Claude, Copilot), mas também ensinamos como otimizar o uso para reduzir custos. Estratégias avançadas de prompt são incluídas.",
    topics: [
      'Versões gratuitas das principais IAs',
      'Estratégias de otimização de custos',
      'Prompt engineering avançado',
      'Alternativas open source'
    ],
    iconColorStart: "purple-500",
    iconColorEnd: "purple-600",
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Vou ter suporte durante o curso?",
    description: "Sim! Você terá acesso a nossa comunidade exclusiva, sessões de Q&A semanais, e suporte direto para resolução de dúvidas técnicas. Nossa equipe estará sempre disponível para ajudar.",
    topics: [
      'Comunidade exclusiva no Discord',
      'Sessões de Q&A semanais',
      'Suporte técnico direto',
      'Feedback personalizado em projetos'
    ],
    iconColorStart: "red-500",
    iconColorEnd: "red-600",
    iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
  },
  {
    title: "O curso inclui templates prontos de SaaS?",
    description: "Sim! Você receberá mais de 15 templates de SaaS prontos, incluindo e-commerce, SaaS B2B, marketplaces, e aplicativos móveis. Todos com código-fonte completo e documentação.",
    topics: [
      'Mais de 15 templates prontos',
      'E-commerce e marketplaces',
      'SaaS B2B e B2C',
      'Aplicativos móveis inclusos'
    ],
    iconColorStart: "yellow-500",
    iconColorEnd: "yellow-600",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    title: "Posso implementar isso em qualquer nicho de mercado?",
    description: "Absolutamente! Nossa metodologia é universal e adaptável a qualquer setor. Você aprenderá a identificar oportunidades, validar ideias e criar soluções específicas para seu mercado.",
    topics: [
      'Metodologia universal',
      'Adaptação a qualquer mercado',
      'Validação de ideias',
      'Estratégias de monetização'
    ],
    iconColorStart: "indigo-500",
    iconColorEnd: "indigo-600",
    iconPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }
]