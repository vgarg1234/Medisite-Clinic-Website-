import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

export default function NewsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ pt: { xs: 4, md: 6 } }}>
        <NewsSection />
      </Box>
      <Footer />
    </Box>
  );
}
