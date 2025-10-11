import { Content, Hero, Sidebar } from '@/src/components'
import Layout from '@/src/layout/layout'
import { Box } from '@mui/material'
import { BlogsService } from '../services/blog.service'
import { GetServerSideProps } from 'next'
import { BlogsType } from '../types/blogs'

interface HomePageProps {
  blogs: BlogsType[]
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs()

  return {
    props: {
      blogs
    }
  }
}

const IndexPage = ({blogs}: HomePageProps) => {
  console.log(blogs)

  return (
    <Layout>
      <Hero />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '20px',
          padding: '20px'
        }}
      >
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default IndexPage
