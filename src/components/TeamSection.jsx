import React, { useState } from 'react';
import { Box, Button, Container, Dialog, DialogContent, Divider, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';

const team = [
  {
    name: 'Dr. James Carter',
    role: 'Senior Cardiologist',
    department: 'Cardiology',
    image: '/assets/team1.png',
    fallback: 'https://i.ibb.co/2kXDtSV/doctor-1.png',
    w: 204, h: 208,
    experience: '15 Years',
    education: 'MBBS, MD – Cardiology, Harvard Medical School',
    bio: 'Dr. James Carter is a highly experienced cardiologist specializing in interventional cardiology and heart failure management. He has performed over 2,000 cardiac procedures and is dedicated to providing compassionate, evidence-based care to every patient.',
  },
  {
    name: 'Dr. Robert Hayes',
    role: 'Neurologist',
    department: 'Neurology',
    image: '/assets/team2.png',
    fallback: 'https://i.ibb.co/5TzT1Yz/doctor-2.png',
    w: 201, h: 215,
    experience: '12 Years',
    education: 'MBBS, MD – Neurology, Johns Hopkins University',
    bio: 'Dr. Sarah Mitchell is a board-certified neurologist with expertise in stroke management, epilepsy, and neurodegenerative disorders. She is committed to advancing neurological care through research and patient-centered treatment.',
  },
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    image: '/assets/team3.png',
    fallback: 'https://i.ibb.co/2c6T3vB/doctor-3.png',
    w: 214, h: 215,
    experience: '18 Years',
    education: 'MBBS, MS – Orthopedic Surgery, Stanford University',
    bio: 'Dr. Robert Hayes is a leading orthopedic surgeon specializing in joint replacement, sports injuries, and spinal disorders. His minimally invasive surgical techniques have helped thousands of patients regain mobility and quality of life.',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Pediatrician',
    department: 'Pediatrics',
    image: '/assets/team4.png',
    fallback: 'https://i.ibb.co/YcnrWGs/doctor-4.png',
    w: 156, h: 209,
    experience: '10 Years',
    education: 'MBBS, MD – Pediatrics, Yale School of Medicine',
    bio: 'Dr. Emily Chen is a compassionate pediatrician dedicated to the health and well-being of children from newborns to adolescents. She specializes in developmental pediatrics and preventive care, ensuring every child gets the best start in life.',
  },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

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
              onClick={() => setSelectedMember(member)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                p: 5,
                borderRadius: 0,
                textAlign: 'center',
                boxShadow: 'none',
                bgcolor: 'transparent',
                overflow: 'visible',
                cursor: 'pointer',
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
                <Button size="small" onClick={(e) => e.stopPropagation()} sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: 0, bgcolor: 'transparent', boxShadow: 'none', color: '#000' }}>
                  <FacebookIcon fontSize="small" />
                </Button>
                <Button size="small" onClick={(e) => e.stopPropagation()} sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: 0, bgcolor: 'transparent', boxShadow: 'none', color: '#000' }}>
                  <TwitterIcon fontSize="small" />
                </Button>
                <Button size="small" onClick={(e) => e.stopPropagation()} sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: 0, bgcolor: 'transparent', boxShadow: 'none', color: '#000' }}>
                  <LinkedInIcon fontSize="small" />
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Doctor Detail Modal */}
      <Dialog
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 0 } }}
      >
        {selectedMember && (
          <DialogContent sx={{ p: 0 }}>
            {/* Teal header */}
            <Box sx={{ bgcolor: '#2DC2A8', px: 4, pt: 4, pb: 3, position: 'relative' }}>
              <IconButton
                onClick={() => setSelectedMember(null)}
                sx={{ position: 'absolute', top: 12, right: 12, color: '#fff' }}
              >
                <CloseIcon />
              </IconButton>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
                <Box
                  component="img"
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  onError={(e) => { e.currentTarget.src = selectedMember.fallback; }}
                  sx={{ width: 100, height: 110, objectFit: 'cover', bgcolor: '#C7F2FF', flexShrink: 0 }}
                />
                <Box>
                  <Typography variant="h6" fontWeight={700} sx={{ color: '#fff' }}>
                    {selectedMember.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#C7F2FF', mb: 0.5 }}>
                    {selectedMember.role}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#fff', fontWeight: 600, bgcolor: 'rgba(255,255,255,0.2)', px: 1.5, py: 0.4, borderRadius: 10 }}>
                    {selectedMember.department}
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Details body */}
            <Box sx={{ px: 4, py: 3 }}>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="caption" color="text.secondary" fontWeight={600} textTransform="uppercase">Experience</Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>{selectedMember.experience}</Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant="caption" color="text.secondary" fontWeight={600} textTransform="uppercase">Education</Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>{selectedMember.education}</Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant="caption" color="text.secondary" fontWeight={600} textTransform="uppercase">About</Typography>
                  <Typography variant="body2" sx={{ mt: 0.5, lineHeight: 1.8 }}>{selectedMember.bio}</Typography>
                </Box>
                <Divider />
                <Stack direction="row" spacing={1}>
                  <Button size="small" variant="outlined" sx={{ borderRadius: 0, color: '#2DC2A8', borderColor: '#2DC2A8', minWidth: 36, width: 36, height: 36, p: 0 }}>
                    <FacebookIcon fontSize="small" />
                  </Button>
                  <Button size="small" variant="outlined" sx={{ borderRadius: 0, color: '#2DC2A8', borderColor: '#2DC2A8', minWidth: 36, width: 36, height: 36, p: 0 }}>
                    <TwitterIcon fontSize="small" />
                  </Button>
                  <Button size="small" variant="outlined" sx={{ borderRadius: 0, color: '#2DC2A8', borderColor: '#2DC2A8', minWidth: 36, width: 36, height: 36, p: 0 }}>
                    <LinkedInIcon fontSize="small" />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Container>
  );
}
