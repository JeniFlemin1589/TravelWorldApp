import React from 'react';  
import { Box, Typography, Button, Grid, Paper } from '@mui/material';  
import CheckCircleIcon from '@mui/icons-material/CheckCircle';  
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';  
import LocationOnIcon from '@mui/icons-material/LocationOn';  
import HotelIcon from '@mui/icons-material/Hotel';  
import LocalCafeIcon from '@mui/icons-material/LocalCafe';  

const AboutUs = () => {  
  return (  
    <Box>  
      {/* Hero Section with Overlay */}  
      <Box  
        sx={{  
          height: '70vh',  
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.wayfairertravel.com/hs-fs/hubfs/Hilltop_Village_Muong_Hoa_Valley_CCBule%20Sky%20Studio.jpg?width=1200&length=1200&name=Hilltop_Village_Muong_Hoa_Valley_CCBule%20Sky%20Studio.jpg')`,  
          backgroundSize: 'cover',  
          backgroundPosition: 'center',  
          display: 'flex',  
          alignItems: 'center',  
          justifyContent: 'center',  
          color: 'white',  
          textAlign: 'center',  
          flexDirection: 'column',  
          padding: 3,
          marginTop:'130px',  
        }}  
      >  
        <Typography variant="h2" component="h1" sx={{ fontFamily: "Poppins", fontWeight: 'bold' }}>  
          Travel Your World As You Wish!  
        </Typography>  
        <Typography variant="h6" sx={{ maxWidth: 600, marginTop: 2, fontFamily: "Poppins" }}>  
          Discover unforgettable experiences with our unique travel solutions, designed for comfort and adventure.  
        </Typography>  
        <Button variant="contained" color="secondary" sx={{ marginTop: 3, fontWeight: 'bold' }}>  
          Explore More  
        </Button>  
      </Box>  

      {/* About Us Content Section */}  
      <Box sx={{ padding: 6, backgroundColor: '#f4f6f8' }}>  
        <Typography variant="h4" gutterBottom sx={{ fontFamily: "Poppins", fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>  
          About Our Services  
        </Typography>  

        {/* Services Section with Icons */}  
        <Grid container spacing={4}>  
          {[
            { name: 'Vehicle Solution', icon: <DirectionsCarIcon color="primary" sx={{ fontSize: 40 }} /> },
            { name: 'Travel Location Solutions', icon: <LocationOnIcon color="primary" sx={{ fontSize: 40 }} /> },
            { name: 'Accommodation Solution', icon: <HotelIcon color="primary" sx={{ fontSize: 40 }} /> },
            { name: 'Hospitality Management', icon: <LocalCafeIcon color="primary" sx={{ fontSize: 40 }} /> },
          ].map((service, index) => (  
            <Grid item xs={12} sm={6} md={3} key={index}>  
              <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', minHeight: 200 }}>  
                {service.icon}  
                <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>{service.name}</Typography>  
                <Typography variant="body2" sx={{ marginTop: 1, color: '#555' }}>  
                  We provide high-quality, sustainable, and customized solutions to make your journey comfortable and memorable.  
                </Typography>  
              </Paper>  
            </Grid>  
          ))}  
        </Grid>  

        {/* Why Choose Us Section */}  
        <Typography variant="h4" sx={{ marginTop: 6, fontFamily: "Poppins", fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>  
          Why Choose Us  
        </Typography>  
        <Grid container spacing={3} justifyContent="center" >  
          {[  
            'High Quality Locations',  
            'Dedicated 24/7 Support',  
            '30-Day Money-back Guarantee',  
            'Agile and Fast Working Style',  
            'Some services are free based on package',  
            'High Level of Satisfaction',  
          ].map((reason, index) => (  
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', alignItems: 'center' }}>  
              <CheckCircleIcon color="success" sx={{ marginRight: 1 }} />  
              <Typography variant="body1" sx={{ fontFamily: "Poppins", color: '#333' }}>  
                {reason}  
              </Typography>  
            </Grid>  
          ))}  
        </Grid>  
      </Box>  
    </Box>  
  );  
};  

export default AboutUs;
