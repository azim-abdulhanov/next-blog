export interface BlogsType {
  id: string
  excerpt: string
  slug: string
  title: string
  createdAt: string
  image: {
    url: string
  }
  author: {
    name: string
    avatar: {
      url: string
    }
  }
  category: {
    label: string
    slug: string
  }
  description: {
    text: string
  }
}
