import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

export default function AboutSection() {
  return (
    <Container id="about" maxWidth="lg" sx={{ pb: 10 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} component="div" sx={{ mb: 2 }}>
            Medicare Supplement<br />Advocate
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: 540,
            }}
          >
            At Medisite, we are committed to delivering compassionate, high-quality healthcare to every patient.
            Our experienced team of specialists works around the clock to provide personalized treatment
            and ensure your well-being at every step of your medical journey.
          </Typography>

          <Button
            variant="contained"
            size="large"
            disableElevation
            sx={{
              borderRadius: 0,
              color: '#fff',
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              '&:focus': { boxShadow: 'none' },
            }}
          >
            See More
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Desktop: absolute-positioned collage */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                minHeight: 500,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Box component="img" src="/assets/Rectangle 10.png" alt="Eye examination"
                sx={{ position: 'absolute', right: -20, width: 550, height: 510, borderRadius: 0, zIndex: 0, boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
              />
              <Paper elevation={15}
                sx={{ width: 320, height: 380, borderRadius: 4, overflow: 'visible', position: 'relative', zIndex: 1, bgcolor: 'transparent', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}
              >
                <Box component="img" src="/assets/Rectangle 11.png" alt="Eye examination"
                  sx={{ position: 'absolute', left: -230, top: -20, width: 362, height: 410, borderRadius: 2, zIndex: 2, boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
                />
              </Paper>
              <Box component="img" src="/assets/Rectangle 12.png" alt="Medical background"
                sx={{ position: 'absolute', left: -20, top: 50, width: 368, height: 387, borderRadius: 2, zIndex: 3, boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
              />
              <Box component="img" src="/assets/Polygon 1.png" alt="Polygon decoration"
                sx={{ position: 'absolute', left: 160, top: 250, width: 36, height: 36, zIndex: 4 }}
              />
              <Box component="img" src="/assets/Ellipse5.png" alt="Ellipse decoration"
                sx={{ position: 'absolute', left: 130, bottom: 190, width: 89, height: 89, zIndex: 5 }}
              />
            </Box>
          </Box>
          {/* Mobile: single stacked image */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 4 }}>
            <Box component="img" src="/assets/Rectangle 10.png" alt="Eye examination"
              sx={{ width: '100%', borderRadius: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}