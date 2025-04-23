import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Layout.css'
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
                backgroundColor: '#444',
                color: '#00ffff', // Hover color
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
          <Typography variant="h4" className="blink-shadow" sx={{ fontWeight: 700 }}>
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
          backgroundColor: 'black'
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
          p: 2,
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
