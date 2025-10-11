import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import { SidebarProps } from './sidebar.props'

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', md: '30%' },
        }}
      >
        <Box
          position={'sticky'}
          top={'100px'}
          sx={{ transition: 'all 0.3s ease' }}
        >
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
              {categories.map(item => (
                <Box key={item.slug}>
                  <Button
                    fullWidth
                    sx={{
                      padding: '10px',
                      justifyContent: 'flex-start',
                      paddingLeft: '20px'
                    }}
                  >
                    <Typography variant='body2'>{item.label}</Typography>
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
              {latestBlogs.map(blog => (
                <Box key={blog.id}>
                  <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Image
                      src={blog.image.url}
                      alt={blog.title}
                      width={100}
                      height={100}
                      style={{ borderRadius: '50%', marginRight: '10px', objectFit: 'contain' }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px'
                      }}
                    >
                      <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                        {blog.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          opacity: 0.8
                        }}
                      >
                        <Avatar
                          sx={{ width: '40px', height: '40px' }}
                          src={blog.author.avatar.url}
                          alt={blog.author.name}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant='body2'>{blog.author.name}</Typography>
                          <Typography variant='caption'>
                            {format(blog.createdAt, 'dd, MMM, yyy')}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ marginTop: '20px' }} />
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
