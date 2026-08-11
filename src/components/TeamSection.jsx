import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const team = [
  { name: 'Patrik Cortez', role: 'Doctor', department: 'Cardiology', image: '/assets/team1.png', fallback: 'https://i.ibb.co/2kXDtSV/doctor-1.png', w: 204, h: 208 },
  { name: 'Patrik Cortez', role: 'Doctor', department: 'Neurology', image: '/assets/team2.png', fallback: 'https://i.ibb.co/5TzT1Yz/doctor-2.png', w: 201, h: 215 },
  { name: 'Patrik Cortez', role: 'Doctor', department: 'Orthopedics', image: '/assets/team3.png', fallback: 'https://i.ibb.co/2c6T3vB/doctor-3.png', w: 214, h: 215 },
  { name: 'Patrik Cortez', role: 'Doctor', department: 'Pediatrics', image: '/assets/team4.png', fallback: 'https://i.ibb.co/YcnrWGs/doctor-4.png', w: 156, h: 209 },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <Container id="team" maxWidth="lg" sx={{ mt: 8, mb: 10 }}>
      <Typography variant="h4" fontWeight={600} align="center" sx={{ mb: 2 }}>
        Our Expert Team
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 640, mx: 'auto' }}>
        Our team of dedicated medical professionals is here to provide you with the best healthcare experience possible.
      </Typography>

      <Grid container spacing={3}>
        {team.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={`${member.name}-${index}`}>
            <Paper
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                p: 5,
                borderRadius: 0,
                textAlign: 'center',
                boxShadow: 'none',
                bgcolor: 'transparent',
                overflow: 'visible',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box sx={{
                  width: { xs: 180, sm: 228 },
                  height: { xs: 216, sm: 272 },
                  bgcolor: '#C7F2FF',
                  borderRadius: 0,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'visible',
                }}>
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    onError={(e) => { e.currentTarget.src = member.fallback; }}
                    sx={{
                      width: member.w,
                      height: member.h,
                      objectFit: 'cover',
                      bgcolor: 'transparent',
                      boxShadow: 'none',
                      transition: 'transform 300ms ease',
                      transform: hoveredIndex === index ? 'translateY(-16px)' : 'translateY(0)',
                    }}
                  />
                </Box>
              </Box>

              <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                {member.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                {member.role}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', color: '#2DC2A8', fontWeight: 600, mb: 2 }}>
                {member.department}
              </Typography>

              <Stack direction="row" justifyContent="center" spacing={1}>
                <Button size="small" sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: 0, bgcolor: 'transparent', boxShadow: 'none', color: '#000' }}>
                  <FacebookIcon fontSize="small" />
                </Button>
                <Button size="small" sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: 0, bgcolor: 'transparent', boxShadow: 'none', color: '#000' }}>
                  <TwitterIcon fontSize="small" />
                </Button>
                <Button size="small" sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: 0, bgcolor: 'transparent', boxShadow: 'none', color: '#000' }}>
                  <LinkedInIcon fontSize="small" />
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
