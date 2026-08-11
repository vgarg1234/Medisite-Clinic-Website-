import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 2 }}>
        <Typography variant="h4" fontWeight={700} align="center" sx={{ mb: 1 }}>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}>
          We provide a wide range of medical services to ensure the best care for you and your family.
        </Typography>
      </Container>
      <ServicesSection />
      <Footer />
    </Box>
  );
}
