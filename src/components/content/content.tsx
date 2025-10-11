import { Avatar, Box, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import { ContentProps } from './content.props'

const Content = ({ blogs }: ContentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: { xs: '100%', md: '70%' }
      }}
    >
      {blogs.map(item => (
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
              src={item.image.url}
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
              src={item.author.avatar.url}
              alt={item.author.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>{item.author.name}</Typography>
              <Typography variant='caption'>
                {format(item.createdAt, 'dd, MMM, yyy')}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content
