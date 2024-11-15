import React, { useState } from 'react';
import { Box, Typography, Container, Divider, Button, Paper, TextField } from '@mui/material';
import { useCart } from './CartContext';
import emailjs from 'emailjs-com';

const Cart = () => {
  const { cart, removeFromCart, getTotalCost } = useCart();
  const [email, setEmail] = useState("");
  const shipping = 5.00;
  const subtotal = getTotalCost() || 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (!email) {
      alert('Please enter an email address.');
      return;
    }

    // Prepare data for EmailJS
    const templateParams = {
      to_email: email,
      subtotal: subtotal,
      shipping: shipping,
      tax: tax,
      total: total,
      items: cart.map(item => `${item.name} - $${item.price} x ${item.quantity}`).join(', ')
    };

    emailjs.send(
      'service_j8etyhp',        // Replace with your EmailJS service ID
      'template_hxajnmy',       // Replace with your EmailJS template ID
      templateParams,
      'FSopHUtEMq6xHKp5f'       // Replace with your EmailJS user ID
    )
    .then((response) => {
      alert('Email sent successfully!');
    }, (error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email.');
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://getwallpapers.com/wallpaper/full/9/c/1/1263091-download-world-most-beautiful-places-wallpapers-1920x1200-for-windows-7.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        py: 6
      }}
    >
      <Container
        sx={{
          borderRadius: 3,
          p: 4,
          maxWidth: '100%', // Full width on smaller screens
          marginTop: '90px',
          boxShadow: 8,
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light transparent background
          backdropFilter: 'blur(10px)', // Blurred effect
          [theme => theme.breakpoints.up('sm')]: {
            maxWidth: '800px', // Default size for larger screens
          }
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
          Shopping Cart
        </Typography>

        {cart.map((item, index) => {
          const itemPrice = parseFloat(item.price.replace(/,/g, '')) || 0;
          const itemQuantity = parseInt(item.quantity, 10) || 1;
          const itemTotal = itemPrice * itemQuantity;

          return (
            <Paper
              elevation={5}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack on mobile
                alignItems: 'center',
                mb: 3,
                p: 2,
                borderRadius: 2,
                backgroundColor: '#f9f9f9',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                [theme => theme.breakpoints.up('sm')]: {
                  flexDirection: 'row', // Row layout on larger screens
                }
              }}
            >
              <Box component="img" src={item.image} alt={item.name} sx={{ width: 100, height: 100, borderRadius: 2, mb: 2, [theme => theme.breakpoints.up('sm')]: { mb: 0, mr: 2 } }} />
              <Box sx={{ flex: 1, ml: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555' }}>{item.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>{item.info.slice(0, 200)}</Typography>
                <Typography variant="body2" sx={{ color: '#777' }}>Color: {item.color}</Typography>
              </Box>
              <Box sx={{ textAlign: 'center', mx: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>Amount: {itemQuantity}</Typography>
                <Typography variant="body1" sx={{ color: '#333' }}>Price: ${itemPrice.toFixed(2)}</Typography>

                <Button onClick={() => removeFromCart(item.id)} sx={{ mt: 1, color: 'error.main', fontSize: '0.875rem' }}>
                  Remove
                </Button>
              </Box>
              <Box sx={{ textAlign: 'right', ml: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>${itemTotal.toFixed(2)}</Typography>
              </Box>
            </Paper>
          );
        })}

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: 'right', mb: 4, p: 3, borderRadius: 2, minWidth: '300px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '1rem', color: '#333' }}>Subtotal: ${subtotal.toFixed(2)}</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '1rem', color: '#333' }}>Shipping: ${shipping.toFixed(2)}</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '1rem', color: '#333' }}>Tax: ${tax.toFixed(2)}</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, color: '#333' }}>Order Total: ${total.toFixed(2)}</Typography>
        </Box>

        <TextField
          label="Enter your email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            width: '100%',
            padding: '12px 0',
            fontWeight: 'bold',
            fontSize: '1rem',
            backgroundColor: '#007BFF',
            '&:hover': { backgroundColor: '#0056b3' }
          }}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </Container>
    </Box>
  );
};

export default Cart;
