import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const navigationItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Team', id: 'team' },
  { label: 'Appointment', id: 'appointment' },
  { label: 'News', id: 'news' },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    navigate(`/${id}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        bgcolor: '#fff',
        color: '#fff',
        overflow: 'hidden',

      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: '#2DC2A8',
          width: '100%',  
          clipPath: 'polygon(0 0, 100% 0, 100% 78%, 0 100%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 4 }}>
        <AppBar elevation={0} position="static" sx={{ color: '#ffff', boxShadow: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <Typography variant="h4" fontWeight={600} sx={{ letterSpacing: 1, color: '#C7F2FF' }}>
                Medi
              </Typography>
              <Typography variant="h4" fontWeight={600} sx={{ letterSpacing: 1, color: '#fff' }}>
                site
              </Typography>
            </Box>
            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, fontWeight: 500, fontSize: 14 }}>
              {navigationItems.map((item) => (
                <Typography
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleScroll(item.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleScroll(item.id); }}
                  sx={{ cursor: 'pointer', transition: 'all 200ms ease', '&:hover': { opacity: 0.85, transform: 'translateY(-2px)' } }}
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
          </Box>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 220, pt: 2 }}>
            <List>
              {navigationItems.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton onClick={() => { handleScroll(item.id); setDrawerOpen(false); }}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Grid container alignItems="flex-start" spacing={4} sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 0 } }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" fontWeight={600} sx={{ lineHeight: 1.1, mb: 2, fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' } }}>
              A Wealth of Experience To Heal And Help You.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 485, mb: 4, opacity: 0.88 }}>
              Your health is our priority. We offer expert medical care with a team of dedicated professionals available to guide and support you every step of the way.
            </Typography>
            <Box sx={{ mt: 5, position: 'relative', zIndex: 2 , boxShadow: 0}}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" size="large" disableElevation sx={{ minWidth: 153, backgroundColor: '#C7F2FF', color: '#000', borderRadius: 0, boxShadow: 'none' }}>
                  See More
                </Button>
                <Button variant="contained" size="large" disableElevation sx={{ minWidth: 153, backgroundColor: '#ffff', color: '#000', borderRadius: 0, boxShadow: 'none' }}>
                  Make an Appointment
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Box sx={{ position: 'relative', width: 320, maxWidth: '100%' }}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Box
                      component="img"
                      src="/assets/Doctor illustration1.png"
                      alt="Doctor Illustration"
                      sx={{
                        width: { xs: 232, sm: 270 },
                        position: 'absolute',
                        top: 70,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: 'auto',
                        borderRadius: 2,
                        zIndex: 3,
                      }}
                    />
                    <Box
                      component="img"
                      src="/assets/Subtract.png"
                      sx={{
                        bgcolor: '#ffffff',
                        width: { xs: 150, sm: 300 },
                        height: { xs: 250, sm: 500 },
                        borderRadius: { xs: 4, sm: 6 },
                        boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
                        position: 'relative',
                        border: '6px solid #FFFFFF',
                        overflow: 'hidden',
                      }}
                    />
                    <Box sx={{ position: 'absolute', top: { xs: 200, sm: 240 }, left: 0, right: 0, textAlign: 'center', px: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{ color: '#ffffff', fontWeight: 600, letterSpacing: 2, fontSize: { xs: 50, sm: 60 }, lineHeight: 1.05 }}
                      >
                        MEDI<br />SITE
                      </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 70, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
                      <Button variant="contained" size="small" disableElevation sx={{ bgcolor: '#2DC2A8', color: '#fff', borderRadius: 10, px: 6, py: 2, boxShadow: 'none' }}>
                        Register Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    
    </Box>
  );
}
