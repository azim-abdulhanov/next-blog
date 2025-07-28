import { Button } from '@mui/material'
import Head from 'next/head'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>IndexPage</title>
        <meta name="description" content="IndexPage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="contained">Click</Button>
    </>
  )
}

export default IndexPage
