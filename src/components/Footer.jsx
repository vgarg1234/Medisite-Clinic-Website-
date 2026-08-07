import React from 'react';
import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const links = [
    { text: 'Service Areas', path: '/services' },
    { text: 'Blogs', path: '/news' },
    { text: 'About', path: '/about' },
    { text: 'Contacts', path: '/appointment' },
    { text: 'Solutions', path: '/services' },
  ];

  return (
    <Box sx={{ position: 'relative', bgcolor: '#2DC2A8', color: '#fff', pt: { xs: 6, md: 10 }, pb: 6, overflow: 'hidden' }}>
      {/* Diagonal top clip */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 100,
          bgcolor: '#F6FBFF',
          clipPath: 'polygon( 0% 0%, 100% 0, 100% 0, 0 100%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>

          {/* Logo + description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, mb: 2, mt: { xs: 2, md: 6 } }}>
              <Typography variant="h4" fontWeight={600} sx={{ letterSpacing: 1, color: '#C7F2FF' }}>
                Medi
              </Typography>
              <Typography variant="h4" fontWeight={600} sx={{ letterSpacing: 1, color: '#fff' }}>
                site
              </Typography>
            </Box>
                        
            <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 260, lineHeight: 1.8 }}>
              When Stan Britten established BritKare in 1995, he did so with a true desire to asist the medical community with the quality care of their desire
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: { xs: 2, md: 6 } }}>
              Links
            </Typography>
            <Stack spacing={1}>
              {links.map((link) => (
                <Box
                  key={link.text}
                  onClick={() => navigate(link.path)}
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
                >
                  <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>›</Typography>
                  <Typography variant="body2" fontWeight={600} sx={{ color: '#fff' }}>{link.text}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: { xs: 2, md: 6 } }}>
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: 16, mt: 0.3, opacity: 0.8 }} />
                <Typography variant="body2" fontWeight={600}>123 Street Saadi Town, near Malir cantt</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                <Typography variant="body2" fontWeight={600}>+92 9876543210</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                <Typography variant="body2" fontWeight={600}>+92 9876543201</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                <Typography variant="body2" fontWeight={600}>xyz01@gmail.com</Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Follow us on */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: { xs: 2, md: 6 } }}>
              Follow us on
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ bgcolor: '#fff', width: 40, height: 40, '&:hover': { bgcolor: '#f0f0f0' } }}>
                <GoogleIcon sx={{ color: '#EA4335', fontSize: 20 }} />
              </IconButton>
              <IconButton sx={{ bgcolor: '#fff', width: 40, height: 40, '&:hover': { bgcolor: '#f0f0f0' } }}>
                <FacebookIcon sx={{ color: '#1877F2', fontSize: 20 }} />
              </IconButton>
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
