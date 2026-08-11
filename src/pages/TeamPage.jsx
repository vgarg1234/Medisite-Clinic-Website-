import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

export default function TeamPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <TeamSection />
      <Footer />
    </Box>
  );
}
