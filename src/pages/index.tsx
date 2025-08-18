import { Content, Hero, Sidebar } from '@/src/components'
import Layout from '@/src/layout/layout'
import { Box } from '@mui/material'

const IndexPage = () => {
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
