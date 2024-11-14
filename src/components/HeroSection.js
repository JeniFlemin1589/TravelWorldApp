import React from 'react';  
import { Box, Button, Typography, Grid, Container } from '@mui/material';  
import FeaturedProducts from './FeaturedProducts';
import { Link } from 'react-router-dom';

const HeroSection = ({ products }) => {  
  return (  
    <Container sx={{ py: 8, marginTop: '150px' }}>  
      <Grid container spacing={4} alignItems="center">  
        <Grid item xs={12} md={6}>  
          <Typography   
            variant="h3"   
            gutterBottom   
            sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}  
          >  
            We are changing the way people travel  
          </Typography>  
          <Typography variant="body1" color="textSecondary" paragraph>  
            Lorem ipsum dolor sit amet consectetur adipisicing elit.   
            Tempore repellat explicabo enim soluta temporibus asperiores aut   
            obcaecati perferendis porro nobis.  
          </Typography>  
          <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>  
            <Button 
              variant="contained" 
              color="primary"
              component={Link} // Use Link as the component for navigation
              to="/Products" // Specify the route
            >  
              Our Venues  
            </Button>  
          </Box>  
        </Grid>  

        {/* Image Scroll Section */}  
        <Grid item xs={12} md={6}>  
          <Box  
            sx={{  
              overflowX: 'auto',  
              display: 'flex',  
              gap: 2,  
              width: '100%',  
              maxWidth: 600, 
              maxHeight: 300, 
              padding: 1,  
              borderRadius: 2,  
              border: '2px solid #1a202c',  
              backgroundColor: '#1a202c',  
              '&::-webkit-scrollbar': { display: 'none' },  
              '-ms-overflow-style': 'none',  
              'scrollbar-width': 'none',  
            }}  
          >  
            <Box  
              component="img"  
              src="https://www.course-api.com/images/tours/tour-1.jpeg"  
              alt="Product 1"  
              sx={{  
                minWidth: 300,  
                height: 'auto',  
                borderRadius: 2,  
                backgroundColor: '#1a202c',  
              }}  
            />  
            <Box  
              component="img"  
              src="https://www.course-api.com/images/tours/tour-2.jpeg"  
              alt="Product 2"  
              sx={{  
                minWidth: 300,  
                height: 'auto',  
                borderRadius: 2,  
                backgroundColor: '#1a202c',  
              }}  
            />  
            <Box  
              component="img"  
              src="https://www.course-api.com/images/tours/tour-3.jpeg"  
              alt="Product 3"  
              sx={{  
                minWidth: 300,  
                height: 'auto',  
                borderRadius: 2,  
                backgroundColor: '#1a202c',  
              }}  
            />  
            <Box  
              component="img"  
              src="https://www.course-api.com/images/tours/tour-4.jpeg"  
              alt="Product 4"  
              sx={{  
                minWidth: 300,  
                height: 'auto',  
                borderRadius: 2,  
                backgroundColor: '#1a202c',  
              }}  
            />  
          </Box>  
        </Grid>  
      </Grid>  
      <FeaturedProducts products={products}/>
    </Container>  
  );  
};  

export default HeroSection;
