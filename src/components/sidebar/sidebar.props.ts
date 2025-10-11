import { BlogsType } from '@/src/types/blogs'
import { CategoriesType } from '@/src/types/categories'

export interface SidebarProps {
  latestBlogs: BlogsType[]
  categories: CategoriesType[]
}
