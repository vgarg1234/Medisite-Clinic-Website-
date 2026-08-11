import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';

export default function AppointmentPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 2 }}>
        <Typography variant="h4" fontWeight={700} align="center" sx={{ mb: 1 }}>
          Book an Appointment
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}>
          Fill in the form below and our team will confirm your appointment shortly.
        </Typography>
      </Container>
      <AppointmentSection />
      <Footer />
    </Box>
  );
}
