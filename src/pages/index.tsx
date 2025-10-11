import { Content, Hero, Sidebar } from '@/src/components'
import Layout from '@/src/layout/layout'
import { Box } from '@mui/material'
import { BlogsService } from '@/src/services/blog.service'
import { GetServerSideProps } from 'next'
import { BlogsType } from '@/src/types/blogs'
import { CategoriesType } from '@/src/types/categories'

interface HomePageProps {
  blogs: BlogsType[]
  latestBlogs: BlogsType[]
  categories: CategoriesType[]
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs()
  const latestBlogs = await BlogsService.getLatestBlog()
  const categories = await BlogsService.getCategories()

  return {
    props: {
      blogs,
      latestBlogs,
      categories
    }
  }
}

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <Layout>
      <Hero blogs={blogs.slice(0, 2)} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '20px',
          padding: '20px'
        }}
      >
        <Sidebar latestBlogs={latestBlogs} categories={categories} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  )
}

export default IndexPage
