import React, { useState } from 'react';
import { Typography, Grid, Container, TextField, InputAdornment, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from './ProductCard';

const AllProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleRefresh = () => {
    setSearchTerm('');
    setFilteredProducts(products);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Light, translucent background color
        backdropFilter: 'blur(15px)',  // Stronger blur effect
      }}
    >
      <Container
        sx={{
          p: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 3,
          maxWidth: 'lg',
          position: 'relative',
          color: 'white',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            textUnderlineOffset: '4px',
            textDecorationColor: 'white',
            textDecorationThickness: '2px',
            mb: 4,
            mt: 2,
            fontFamily: 'Poppins',
            '@media (max-width:600px)': {
              fontSize: '1.5rem',
            }
          }}
        >
          All Places
        </Typography>

        <TextField
          variant="outlined"
          label="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSearch(); 
          }}
          sx={{
            mb: 2,
            width: '100%',
            maxWidth: 500,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            borderRadius: 1,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch} edge="end">
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          onClick={handleRefresh}
          sx={{
            mt: 2,
            mb: 4,
            backgroundColor: 'black',
            color: 'white',
            maxWidth: 150,
          }}
        >
          Refresh
        </Button>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ProductCard {...product} />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
              No products found.
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProducts;
