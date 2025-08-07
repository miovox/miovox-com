export type ServiceType = 'product' | 'events' | 'home' | 'about'

export interface ServiceConfig {
  id: ServiceType
  label: string
  tagline: string
  brandStatement: string
  href: string
  icon: 'products' | 'events' | 'home-tech' | 'about'
  bgColor: string
  hoverColor: string
  backgroundMedia?: {
    type: 'image' | 'texture' | 'video'
    src: string
    overlay: 'gradient' | 'solid'
  }
}

export const services: ServiceConfig[] = [
  {
    id: 'product',
    label: 'Products',
    tagline: 'Crafting Tools',
    brandStatement: 'Miovox Products',
    href: '/product',
    icon: 'products',
    bgColor: 'miovox-blue-50',
    hoverColor: 'miovox-blue-100',
    backgroundMedia: {
      type: 'image',
      src: '/backgrounds/products-bg.jpg',
      overlay: 'gradient'
    }
  },
  {
    id: 'events',
    label: 'Events',
    tagline: 'Crafting Memories',
    brandStatement: 'Miovox Events',
    href: '/events',
    icon: 'events',
    bgColor: 'miovox-blue-100',
    hoverColor: 'miovox-blue-200',
    backgroundMedia: {
      type: 'image',
      src: '/backgrounds/events-bg.jpg',
      overlay: 'gradient'
    }
  },
  {
    id: 'home',
    label: 'Home Tech',
    tagline: 'Crafting Lifestyles',
    brandStatement: 'Miovox Home Tech',
    href: '/home',
    icon: 'home-tech',
    bgColor: 'miovox-blue-200',
    hoverColor: 'miovox-blue-300',
    backgroundMedia: {
      type: 'image',
      src: '/backgrounds/home-tech-bg.jpg',
      overlay: 'gradient'
    }
  },
  {
    id: 'about',
    label: 'About',
    tagline: 'Philip Jones',
    brandStatement: 'About Philip',
    href: '/', // Temporarily link to home until /about route exists
    icon: 'about',
    bgColor: 'miovox-blue-300',
    hoverColor: 'miovox-blue-400',
    backgroundMedia: {
      type: 'image',
      src: '/backgrounds/about-bg.jpg',
      overlay: 'gradient'
    }
  }
]