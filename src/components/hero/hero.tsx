import { Avatar, Box, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      // Navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {data.map(item => (
        <SwiperSlide key={item.id}>
          <Box
            sx={{
              position: 'relative',
              height: '80vh',
              paddingY: { xs: '40px', md: '20px' }
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout='fill'
              objectFit='contain'
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
              }}
            />
            <Box
              width={{ xs: '80%', md: '50%' }}
              sx={{
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#fff',
                paddingX: '20px',
                zIndex: '2'
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '30px', md: '60px' },
                  lineHeight: '1.2',
                  whiteSpace: { xs: 'nowrap', md: 'normal' },
                  lineClamp: { xs: '1', md: '2' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
                component='h2'
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  whiteSpace: { xs: 'nowrap', md: 'normal' },
                  lineClamp: { xs: '1', md: '2' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
                variant='body1'
                component='p'
              >
                {item.excerpt}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginTop: '20px'
                }}
              >
                <Avatar src={item.author.image} alt={item.author.name} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography>{item.author.name}</Typography>
                  <Typography variant='caption'>
                    {format(new Date(), 'dd, MMM, yyy')}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero
