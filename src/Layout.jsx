import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, CssBaseline, Button, Dialog } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginForm from './Pages/LoginForm/LoginForm'; // Import the LoginForm

const drawerWidth = 180;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);  // For opening the login form

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLoginClick = () => {
    setOpenLogin(true);  // Open login form on button click
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);  // Close login form
  };

  const drawer = (
    <Box sx={{ backgroundColor: '#222', height: '100%', pt: 6 }}>
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
          
          {/* Login Button */}
          <Button color="inherit" onClick={handleLoginClick}>Login</Button> {/* Open login form */}
          
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 6,
          backgroundColor: 'black',
          minHeight: 'calc(100vh - 160px)',
          overflow: 'auto',
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

      {/* Dialog for Login Form */}
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <LoginForm onClose={handleCloseLogin} />
      </Dialog>
    </Box>
  );
};

export default Layout;
