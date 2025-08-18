import { Avatar, Box, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'

const data = [
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

const Content = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: { xs: '100%', md: '70%' }
      }}
    >
      {data.map(item => (
        <Box
          key={item.id}
          sx={{
            backgroundColor: '#000005',
            padding: '20px',
            borderRadius: '8px'
          }}
        >
          <Box position={'relative'} width={'100%'} height={'250px'}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography variant='h4' sx={{ color: '#fff', marginTop: '10px' }}>
            {item.title}
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: '#ccc', marginBottom: '20px' }}
          >
            {item.excerpt}
          </Typography>
          <Divider sx={{ borderColor: '#444', marginBottom: '20px' }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              opacity: 0.8
            }}
          >
            <Avatar
              sx={{ width: '45px', height: '45px' }}
              src={item.author.image}
              alt={item.author.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>{item.author.name}</Typography>
              <Typography variant='caption'>
                {format(new Date(), 'dd, MMM, yyy')}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content
