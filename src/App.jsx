import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import AppointmentSection from './components/AppointmentSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import AppointmentPage from './pages/AppointmentPage';
import NewsPage from './pages/NewsPage';

function HomePage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <AppointmentSection />
      <NewsSection />
      <Footer />
    </Box>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}
