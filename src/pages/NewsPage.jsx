import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import NewsSection from '../components/NewsSection';

export default function NewsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 2 }}>
       
     
      </Container>
      <NewsSection />
    </Box>
  );
}
