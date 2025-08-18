import Layout from '@/src/layout/layout'
import { Content, Hero, Sidebar } from '@/src/components'
import { Box } from '@mui/material'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default IndexPage
