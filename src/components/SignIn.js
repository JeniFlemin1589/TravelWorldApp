import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Avatar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const SignIn = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [formData, setFormData] = useState({
    email: '',
    password: '', // Ensure password field is included
  });
  const [agreement, setAgreement] = useState({
    communications: false,
    dataProcessing: false,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAgreement({ ...agreement, [name]: checked });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve credentials from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Basic validation for email and password
    if (formData.email !== storedEmail || formData.password !== storedPassword) {
      setErrorMessage('Invalid email or password.');
      setSuccessMessage('');
      return;
    }

    // If valid, proceed with form submission logic (optional)
    const templateParams = {
      company_email: formData.email,
      password: formData.password,
    };

    // Send email with EmailJS (or other business logic)
    emailjs
      .send('service_j8etyhp', 'template_bi1ncrc', templateParams, 'FSopHUtEMq6xHKp5f')
      .then((response) => {
        setSuccessMessage('Thank you for connecting with us!');
        setErrorMessage('');
        setFormData({ email: '', password: '' });
        setAgreement({ communications: false, dataProcessing: false });

        // Redirect to home page after successful login
        navigate('/home'); // Assuming '/home' is the home route
      })
      .catch((error) => {
        setErrorMessage('An error occurred. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #4b6cb7, #182848)',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://getwallpapers.com/wallpaper/full/a/8/2/1263112-vertical-world-most-beautiful-places-wallpapers-2560x1600-for-tablet.jpg')`,
        height: '100vh',
        padding: 4,
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        {/* Left Side - Welcome Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center', color: '#fff', padding: 3 }}>
          <Avatar
            sx={{ width: 80, height: 80, margin: '0 auto', boxShadow: 3 }}
            alt="User"
            src="https://as2.ftcdn.net/v2/jpg/05/76/65/21/1000_F_576652189_WK1JiTOwjKCFIJDJJLI1Q6RtwSfpgspu.jpg"
          />
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginTop: 2, fontFamily: 'Poppins' }}>
            Welcome Travel Enthusiast!
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, fontSize: '1.1rem', fontFamily: 'Poppins' }}>
            "Embark on unforgettable journeys with our travel agency, where your dream adventure awaits at every corner!"
          </Typography>
        </Grid>

        {/* Right Side - Contact Form Section */}
        <Grid item xs={12} md={4} sx={{ maxWidth: '900px', borderRadius: 3, boxShadow: 8, overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', marginTop:'90px' }}>
          <Box sx={{ padding: 4, borderRadius: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4b6cb7', textAlign: 'center', mb: 3 }}>
              Sign In
            </Typography>

            {successMessage && <Alert severity="success">{successMessage}</Alert>}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              />
              <Typography variant="body2" sx={{ margin: '16px 0', color: '#777' }}>
                Feel free to share your message; we read them all!
              </Typography>

              {/* Agreement Section */}
              <Typography variant="body2" sx={{ marginBottom: 1, color: '#555' }}>
                Brand Embassy is committed to protecting and respecting your privacy.
              </Typography>
              <FormControlLabel
                control={<Checkbox checked={agreement.communications} onChange={handleCheckboxChange} name="communications" sx={{ color: '#4b6cb7' }} />}
                label="I agree to receive communications from Brand Embassy."
              />
              <FormControlLabel
                control={<Checkbox checked={agreement.dataProcessing} onChange={handleCheckboxChange} name="dataProcessing" sx={{ color: '#4b6cb7' }} />}
                label="I agree to allow Brand Embassy to store and process my personal data."
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                sx={{ marginTop: 2, fontWeight: 'bold', fontSize: '1rem', padding: '10px 20px', backgroundColor: '#4b6cb7', '&:hover': { backgroundColor: '#3b5998' } }}
                fullWidth
              >
                Send
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
