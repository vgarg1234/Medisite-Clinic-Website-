import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import TeamSection from '../components/TeamSection';

export default function TeamPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: { xs: -10, md: -10 }, pb: -10 }}>
       
      </Container>
      <TeamSection />
    </Box>
  );
}
