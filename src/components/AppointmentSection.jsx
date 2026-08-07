import React, { useState } from 'react';
import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  department: '',
  info: '',
  dateTime: '',
};

const initialErrors = {
  fullName: '',
  email: '',
  phone: '',
  department: '',
  info: '',
  dateTime: '',
};

export default function AppointmentSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);

  const validate = () => {
    const newErrors = { ...initialErrors };
    let valid = true;

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\+?[0-9\s\-]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number';
      valid = false;
    }

    if (!form.department.trim()) {
      newErrors.department = 'Department is required';
      valid = false;
    }

    if (!form.info.trim()) {
      newErrors.info = 'Additional information is required';
      valid = false;
    }

    if (!form.dateTime.trim()) {
      newErrors.dateTime = 'Date and time is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;                                     
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = () => {
    if (validate()) {
      alert('Appointment confirmed!');
      setForm(initialForm);
    }
  };

  return (
    <Box id="appointment" sx={{ pb: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Box sx={{ bgcolor: '#C7F2FF', py: 2, px: { xs: 3, sm: 6, md: 10 }, borderRadius: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h5" fontWeight={700} sx={{ color: '#000', textTransform: 'none' }}>
            Make An Appointment
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              variant="outlined"
              size="small"
              value={form.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              size="small"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              variant="outlined"
              size="small"
              value={form.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Department"
              name="department"
              variant="outlined"
              size="small"
              value={form.department}
              onChange={handleChange}
              error={!!errors.department}
              helperText={errors.department}
            >
              <MenuItem value="Cardiology">Cardiology</MenuItem>
              <MenuItem value="Neurology">Neurology</MenuItem>
              <MenuItem value="Orthopedics">Orthopedics</MenuItem>
              <MenuItem value="Pediatrics">Pediatrics</MenuItem>
              <MenuItem value="Dermatology">Dermatology</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Additional Information"
              name="info"
              variant="outlined"
              size="small"
              value={form.info}
              onChange={handleChange}
              error={!!errors.info}
              helperText={errors.info}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateTimePicker
              label="Date and Time"
              value={form.dateTime ? dayjs(form.dateTime) : null}
              onChange={(val) => {
                setForm((prev) => ({ ...prev, dateTime: val ? val.toISOString() : '' }));
                setErrors((prev) => ({ ...prev, dateTime: '' }));
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: 'small',
                  variant: 'outlined',
                  error: !!errors.dateTime,
                  helperText: errors.dateTime,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
              sx={{ px: 6, mt: 8, borderRadius: 0, color: '#fff', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
