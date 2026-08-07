import React, { useState } from 'react';
import { AppBar, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'Appointment', path: '/appointment' },
  { label: 'News', path: '/news' },
];

export default function Navbar({ transparent = false }) {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        bgcolor: transparent ? 'transparent' : '#34C9B6',
        boxShadow: transparent ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Typography variant="h5" fontWeight={700} sx={{ color: '#C7F2FF', letterSpacing: 1 }}>
              Medi
            </Typography>
            <Typography variant="h5" fontWeight={700} sx={{ color: '#fff', letterSpacing: 1 }}>
              site
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navigationItems.map((item) => (
              <Typography
                key={item.path}
                role="button"
                tabIndex={0}
                onClick={() => navigate(item.path)}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(item.path); }}
                sx={{
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'opacity 200ms',
                  '&:hover': { opacity: 0.8 },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220, pt: 2 }}>
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton onClick={() => { navigate(item.path); setDrawerOpen(false); }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
