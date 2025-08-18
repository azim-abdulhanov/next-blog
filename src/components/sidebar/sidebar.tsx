import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import Image from 'next/image'

const data = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
]

const blogs = [
  {
    id: 1,
    image:
      'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp',
    title: 'Essence Mascara Lash Princess',
    excerpt:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    author: {
      name: 'John Doe',
      image:
        'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp'
    }
  },
  {
    id: 2,
    image:
      'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp',
    title: 'Powder Canister',
    excerpt:
      'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
    author: {
      name: 'Jane Doe',
      image:
        'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp'
    }
  },
  {
    id: 3,
    image:
      'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp',
    title: 'Red Nail Polish',
    excerpt:
      'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
    author: {
      name: 'Jane Doe',
      image:
        'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp'
    }
  }
]

const Sidebar = () => {
  return (
    <>
      <Box
        width={'30%'}
        // sx={{
        //   display: { xs: 'none', md: 'block' },
        //   padding: '20px',
        //   height: '100vh',
        //   overflowY: 'auto',
        //   position: 'sticky',
        //   top: 0
        // }}
      >
        <Box position={'sticky'} top={'100px'} sx={{ transition: 'all 0.3s ease' }}>
          <Box
            sx={{
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              marginBottom: '20px'
            }}
          >
            <Typography variant='h6'>Category</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px'
              }}
            >
              {data.map(item => (
                <Box key={item.id}>
                  <Button
                    fullWidth
                    sx={{
                      padding: '10px',
                      justifyContent: 'flex-start',
                      paddingLeft: '20px'
                    }}
                  >
                    <Typography variant='body1'>{item.name}</Typography>
                  </Button>
                  <Divider />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          >
            <Typography variant='h6'>Latest blog</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px'
              }}
            >
              {blogs.map(blog => (
                <Box key={blog.id}>
                  <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={100}
                      height={100}
                      style={{ borderRadius: '50%', marginRight: '10px' }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '10px',
                        marginTop: '20px'
                      }}
                    >
                      <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                        {blog.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', opacity: 0.8 }}>
                        <Avatar sx={{ width: '45px', height: '45px' }} src={blog.author.image} alt={blog.author.name} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography>{blog.author.name}</Typography>
                          <Typography variant='caption'>
                            {(new Date()).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ marginTop: '10px' }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
