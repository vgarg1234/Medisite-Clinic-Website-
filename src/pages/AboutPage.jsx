import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 2 }}>
        <Typography variant="h4" fontWeight={700} align="center" sx={{ mb: 1 }}>
          About Us
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}>
          Learn more about our mission, values, and the team behind Medisite.
        </Typography>
      </Container>
      <AboutSection />
      <Footer />
    </Box>
  );
}
