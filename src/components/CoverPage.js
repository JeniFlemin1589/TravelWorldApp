// CoverPage.js
import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CoverPage = ({ onGetStarted }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onGetStarted();
    navigate('/sign');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://getwallpapers.com/wallpaper/full/a/4/3/1263141-download-free-world-most-beautiful-places-wallpapers-2048x1536-for-ipad.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      />
      
      {/* Main Content */}
      <Box sx={{ textAlign: 'center', zIndex: 2, px: 2, maxWidth: '80%' }}>
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 2, 
            fontWeight: 'bold', 
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', 
            fontFamily: 'Poppins',
          }}
        >
          Discover Beautiful Places
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 4, 
            maxWidth: '800px', 
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            fontFamily: 'Poppins',
          }}
        >
          Join us on an adventure to explore the most stunning locations around the world. Begin your journey right away!
        </Typography>
        
        {/* Centered "Get Started" Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleButtonClick}
          sx={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'transparent',
              color: 'white',
              border: '#fff',
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default CoverPage;
