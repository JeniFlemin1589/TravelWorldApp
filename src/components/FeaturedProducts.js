import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
  return (
    <Container sx={{ py: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
          textUnderlineOffset: '4px',
          textDecorationColor: 'black',
          textDecorationThickness: '2px',
          mb: 4,
          mt: 2,
          fontFamily: 'Poppins',
          maxWidth: '100%',  // Ensure text is responsive
          '@media (max-width:600px)': {
            fontSize: '1.5rem',
          },
        }}
      >
        Featured Venues
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.slice(0, 9).map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
