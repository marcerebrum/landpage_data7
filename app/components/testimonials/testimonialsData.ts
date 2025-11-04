export interface TestimonialData {
  id: string
  name: string
  role: string
  initials: string
  gradientFrom: string
  gradientTo: string
  rating: number
  testimonial: string
  customerSince: string
}

export const testimonialsData: TestimonialData[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    role: 'Desenvolvedor Full Stack',
    initials: 'CS',
    gradientFrom: 'blue-500',
    gradientTo: 'blue-600',
    rating: 5,
    testimonial: 'Consegui criar meu primeiro SaaS em apenas 2 meses! A metodologia com IA tornou o processo muito mais simples e eficiente do que eu imaginava.',
    customerSince: '6 meses'
  },
  {
    id: '2',
    name: 'Maria Rodrigues',
    role: 'Empreendedora Digital',
    initials: 'MR',
    gradientFrom: 'green-500',
    gradientTo: 'green-600',
    rating: 5,
    testimonial: 'Finalmente consegui transformar minha ideia em realidade! Agora tenho meu próprio sistema de gestão funcionando e gerando renda.',
    customerSince: '4 meses'
  },
  {
    id: '3',
    name: 'João Lima',
    role: 'Desenvolvedor Júnior',
    initials: 'JL',
    gradientFrom: 'purple-500',
    gradientTo: 'purple-600',
    rating: 5,
    testimonial: 'Mesmo sendo iniciante, consegui acompanhar facilmente. A IA ajuda muito quando fica difícil e os exemplos são muito práticos.',
    customerSince: '8 meses'
  },
  {
    id: '4',
    name: 'Ana Costa',
    role: 'Product Designer',
    initials: 'AC',
    gradientFrom: 'pink-500',
    gradientTo: 'pink-600',
    rating: 5,
    testimonial: 'Como designer, achei incrível poder implementar minhas próprias ideias. Agora entendo melhor como funcionam as aplicações que eu projeto.',
    customerSince: '3 meses'
  },
  {
    id: '5',
    name: 'Ricardo Pereira',
    role: 'Consultor Empresarial',
    initials: 'RP',
    gradientFrom: 'orange-500',
    gradientTo: 'orange-600',
    rating: 5,
    testimonial: 'Criei uma plataforma para meus clientes e agora consigo entregar soluções completas. O investimento se pagou em menos de 1 mês.',
    customerSince: '5 meses'
  },
  {
    id: '6',
    name: 'Fernanda Santos',
    role: 'Marketing Digital',
    initials: 'FS',
    gradientFrom: 'teal-500',
    gradientTo: 'teal-600',
    rating: 5,
    testimonial: 'Nunca pensei que conseguiria desenvolver algo sozinha. Agora tenho meu próprio dashboard de analytics personalizado para minha agência.',
    customerSince: '2 meses'
  }
]