import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 180;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ backgroundColor: '#222', height: '100%', pt: 2 }}>
      <List>
        {['Home', 'About', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((text) => (
          <ListItem
            button
            key={text}
            onClick={() => setMobileOpen(false)}
            component={Link}
            to={`/${text === 'Home' ? '' : text}`}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#555',
                color: '#00ffff',
              },
              textAlign: 'center',
            }}
          >
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Header */}
      <AppBar position="fixed" sx={{ backgroundColor: '#222', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              animation: 'blinkZoom 1s infinite', // Blink aur zoom-in/out effect
              '@keyframes blinkZoom': {
                '0%': {
                  transform: 'scale(1)',
                  textShadow: '0 0 10px rgba(245, 248, 248, 0.8)',
                },
                '50%': {
                  transform: 'scale(1.2)', // Zoom-in effect
                  textShadow: '0 0 20px rgba(245, 250, 250, 0.8)',
                },
                '100%': {
                  transform: 'scale(1)', // Zoom-out effect
                  textShadow: '0 0 10px rgba(245, 252, 252, 0.8)',
                },
              },
            }}
          >
            Portfolio
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth, backgroundColor: '#222' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: '#222',
              pt: 8,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3, // Padding ko adjust kiya gaya
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    mt: 8, // Header ke neeche space chhoda gaya
    backgroundColor: 'black',
    minHeight: 'calc(100vh - 160px)', // Total screen height se header aur footer ka height minus kiya gaya
    overflow: 'auto', // Agar content bohot lamba ho toh scroll bar show hoga
  }}
>
  <Outlet />
</Box>


      {/* Footer */}
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          p: 4,
          zIndex: 10,
        }}
      >
        <Typography variant="body2">
          &copy; 2025 Sidra Tufail. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
