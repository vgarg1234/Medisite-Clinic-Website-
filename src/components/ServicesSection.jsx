import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const services = [
  {
    title: '24 Hours Service',
    description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/assets/24 Hours service1.png',
    ellipse: '/assets/Ellipse 1.png',
  },
  {
    title: 'Qualified Doctor',
    description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/assets/Qualified Doctor1.png',
    ellipse: '/assets/Ellipse 2.png',
  },
  {
    title: 'Emergency Care',
    description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/assets/Emergency Care1.png',
    ellipse: '/assets/Ellipse 3.png',
  },
  {
    title: 'Operation Theater',
    description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/assets/operating-room1.png',
    ellipse: '/assets/Ellipse 4.png',
  },
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Container id="services" maxWidth="lg" sx={{ mt: 8, mb: 10, position: 'relative', zIndex: 2 }}>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <Paper
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                borderRadius: 0,
                minHeight: 258,
                height: '100%',
                textAlign: 'center',
                cursor: 'default',
                bgcolor: hoveredCard === index ? '#C7F2FF' : '#fff',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.11)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 3,
                  position: 'relative',
                  width: 64,
                  height: 64,
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={service.ellipse}
                  alt="ellipse"
                  sx={{ position: 'absolute', width: 68, height: 68, objectFit: 'contain' }}
                />
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{ position: 'relative', width: 30, height: 30, objectFit: 'contain', zIndex: 1 }}
                />
              </Box>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5, fontSize: '1rem' }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
