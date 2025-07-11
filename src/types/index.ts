export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  featuredImage?: string
  readTime: number
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  isAdult?: boolean
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  image?: string
  url?: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
  subject?: string
} 