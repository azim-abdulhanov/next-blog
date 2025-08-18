import { navItems } from '@/src/config/constants'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  window?: () => Window
}

const Navbar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: '20px',
          paddingY: '10px'
        }}
      >
        <Link href='/' style={{ textDecoration: 'none', color: 'inherit', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1rem' }}>
          NextBlog
        </Link>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box component='header' sx={{ display: 'flex', alignItems: 'center', height: '60px' }}>
      <AppBar component='nav' sx={{ height: '60px', backgroundColor: '#141414' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px'
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            sx={{ display: { sm: 'none' } }}
            edge='start'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              py: 2,
              alignItems: 'center',
              gap: '5px',
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' }
            }}
          >
            <Link href='/' style={{ textDecoration: 'none', color: 'inherit', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.3rem' }}>
              NextBlog
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%'
          }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Navbar
