import { Box, Typography, ButtonGroup, Button } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'space-between' },
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#1976d2',
        color: '#fff',
      }}
    >
      <Typography sx={{ textAlign: { xs: 'center', sm: 'start' } }}>
        © {new Date().getFullYear()} NextBlog. All rights reserved.
      </Typography>
      <ButtonGroup variant='text' color='inherit'>
        <Button>
          <TelegramIcon/>
        </Button>
        <Button>
          <InstagramIcon />
        </Button>
        <Button>
          <XIcon />
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default Footer
