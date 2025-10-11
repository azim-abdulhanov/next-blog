import { Avatar, Box, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeroProps } from './hero.props'

const Hero = ({ blogs }: HeroProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {blogs.map(item => (
        <SwiperSlide key={item.id}>
          <Box
            sx={{
              position: 'relative',
              height: '80vh',
              paddingY: { xs: '40px', md: '20px' }
            }}
          >
            <Image
              src={item.image.url}
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
                  fontSize: { xs: '30px', sm: '40px', md: '50px' },
                  lineHeight: '1.2',
                  whiteSpace: { xs: 'nowrap', md: 'normal' },
                  lineClamp: { xs: '1', sm: '2', md: '3' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginBottom: '15px'
                }}
                component='h1'
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  whiteSpace: { xs: 'nowrap', md: 'normal' },
                  lineClamp: { xs: '1', md: '2' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: '#ccc',
                  marginBottom: '20px'
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
                  gap: '10px',
                  marginTop: '20px'
                }}
              >
                <Avatar src={item.author.avatar.url} alt={item.author.name} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography>{item.author.name}</Typography>
                  <Typography variant='caption'>
                    {format(item.createdAt, 'dd, MMM, yyy')}
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
