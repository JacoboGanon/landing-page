interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

const articles: ArticleWithSlug[] = [
  {
    slug: 'Vinos',
    author: 'Jacobo Ganon',
    date: '2025-08',
    title: 'Vinos: Restaurant Wine Management Platform',
    description:
      'Vinos is a wine management platform for restaurants and wine providers. It tracks inventory at the individual bottle level, comes with a tablet point-of-sale app for floor staff, supports multiple restaurant locations with role-based access, and handles purchase orders, supplier management, and sales analytics.',
  },
  {
    slug: 'Evotion',
    author: 'Jacobo Ganon',
    date: '2025-01',
    title: 'Evotion: AI Platform Full Stack Development',
    description:
      'Evotion is an AI chat platform that brings together 30+ of the best language models in one place. Built with a pay-per-use and subscription model, it lets users access ChatGPT, Claude, Gemini, Grok, and many more through a single unified interface with an innovative fusion mode that automatically selects and combines models for optimal results.',
  },
  {
    slug: 'Caliza',
    author: 'Jacobo Ganon',
    date: '2023-08',
    title: 'Caliza Gym Full Stack Web Development',
    description:
      'Caliza is a multi-tenant SaaS platform for gym and fitness center management. What started as custom software for a single gymnastics and bouldering gym in Mexico has grown into a franchise-ready system that handles class scheduling, memberships, employee payroll, financial analytics, and QR-based attendance across multiple gym locations.',
  },
  {
    slug: 'HDO',
    author: 'Jacobo Ganon',
    date: '2022-08',
    title: 'Hacienda Del Oro Software Engineer',
    description:
      'HDO (Hacienda del Oro) is a country club in Mexico that focuses on equitation. The owner has multiple companies and needed a way to facilitate the communication and manage HDO. I worked with the owner to help him solve the problems',
  },
  {
    slug: 'Moga',
    author: 'Jacobo Ganon',
    date: '2022-01',
    title: 'App Development for Moga',
    description:
      'Moga is a gymnastics gym where I first found the need for a gym management software in Mexico. However, the owners where only looking for a management software for classes and product inventory and this is the problem I solved with this application.',
  },
]

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
