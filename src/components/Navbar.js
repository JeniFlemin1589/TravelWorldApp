import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const { cart } = useCart();
  const location = useLocation();

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const isSignupPage = location.pathname === '/signup';
  const isSigninPage = location.pathname === '/signin';
  const isAuthPage = isSignupPage || isSigninPage;

  return (
    <AppBar position="fixed" sx={{ background: darkMode ? '#333' : '#2d3748' }}>
      {/* Top Section with Site Name and Dark Mode Toggle */}
      <Box sx={{ py: 0.2, backgroundColor: darkMode ? '#444' : '#2d3748' }}>
        <Toolbar sx={{ minHeight: '48px', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
              letterSpacing: 1,
              fontSize: '1.125rem',
              ml: 1,
            }}
          >
            Travel World
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              color={activeButton === 'signin' ? 'white' : 'inherit'}
              component={Link}
              to="/signin"
              sx={{
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: activeButton === 'signin' ? 'bold' : 'normal',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                boxShadow: activeButton === 'signin' ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'color 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  color: activeButton === 'signin' ? 'white' : 'black',
                  backgroundColor: activeButton === 'signin' ? 'black' : 'transparent',
                },
                mr: 2,
              }}
              onClick={() => handleButtonClick('signin')}
            >
              Sign in
            </Button>

            <Button
              color={activeButton === 'signup' ? 'white' : 'inherit'}
              component={Link}
              to="/signup"
              sx={{
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: activeButton === 'signup' ? 'bold' : 'normal',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                boxShadow: activeButton === 'signup' ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'color 0.9s ease, background-color 0.9s ease',
                '&:hover': {
                  color: activeButton === 'signup' ? 'white' : 'black',
                  backgroundColor: activeButton === 'signup' ? 'black' : 'transparent',
                },
                mr: 2,
              }}
              onClick={() => handleButtonClick('signup')}
            >
              Sign up
            </Button>
            <IconButton color="inherit" onClick={handleToggle} sx={{ ml: 1 }}>
              {darkMode ? <WbSunnyIcon fontSize="small" /> : <NightsStayIcon fontSize="small" />}
            </IconButton>
          </Box>
        </Toolbar>
      </Box>

      {/* Bottom Section with Navigation Links */}
      <Box
        sx={{
          backgroundColor: darkMode ? '#555' : 'white',
          py: 0.2, 
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.15)',
          filter: isAuthPage ? 'blur(20px)' : 'none', // Apply blur if on auth page
        //   pointerEvents: isAuthPage ? 'none' : 'auto', // Disable interaction if on auth page
        }}
      >
        <Toolbar sx={{ minHeight: '48px', justifyContent: 'space-between', px: 2 }}>
          <Stack direction="row" spacing={1}>
            {['home', 'About', 'Products', 'Cart'].map((item) => (
              <Button
                key={item}
                component={Link}
                to={`/${item === 'home' ? 'home' : item}`}
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  color: activeButton === item ? 'white' : 'black',
                  backgroundColor: activeButton === item ? 'black' : 'transparent',
                  borderRadius: 2,
                  boxShadow: activeButton === item ? 1 : 'none',
                  '&:hover': {
                    backgroundColor: activeButton === item ? 'black' : '#e0e0e0',
                  },
                  px: 2,
                  py: 0.5,
                }}
                onClick={() => handleButtonClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {item === 'cart' && (
                  <ShoppingCartIcon sx={{ ml: 0.5, color: activeButton === item ? 'Black' : 'blue' }} fontSize="small" />
                )}
              </Button>
            ))}
          </Stack>
          <Typography variant="subtitle2" color="textSecondary">
            <ShoppingCartIcon sx={{ ml: 0.5, color: 'Black' }} fontSize="small" />
            ({cart.length})
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
