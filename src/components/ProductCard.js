import React from 'react';  
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';  
import { useNavigate } from 'react-router-dom';  

const ProductCard = ({ image, name, price, info, id }) => {  
  const navigate = useNavigate();  

  const handleCardClick = () => {  
    // Navigate to the product detail page, passing product data as state  
    navigate(`/product/${id}`, { state: { id, name, price, info, image } });  
  };  

  return (  
    <Card onClick={handleCardClick}  
      sx={{  
        maxWidth: 250,  
        cursor: 'pointer',  
        boxShadow: 3,   
        borderRadius: 2,  
        transition: '0.3s',  
        height: '300px', // Increased height to accommodate content  
        backgroundColor: '#f9f9f9',  
        '&:hover': {  
          boxShadow: 6,  
          transform: 'scale(1.05)',  
          backgroundColor: '#f1f1f1',  
        }  
      }}>  
      <CardMedia  
        component="img"  
        height="200" // Adjusted height for better image display  
        image={image}  
        alt={name}  
        sx={{  
          borderTopLeftRadius: 2,  
          borderTopRightRadius: 2,  
          objectFit: 'cover', // Ensures the image fits well  
        }}  
      />  
      <CardContent  
        sx={{  
          display: 'flex',  
          flexDirection: 'column', // Make the content stack vertically  
          justifyContent: 'space-between', // Space between the name and price  
          height: '50px', // Ensure enough height for text content  
          backgroundColor: '#f9f9f9',  
          borderRadius: '0 0 8px 8px',  // Only round bottom corners  
          padding: '10px',  
        }}  
      >  
        <Typography  
          gutterBottom  
          variant="h6"  
          component="div"  
          sx={{  
            fontFamily: 'Poppins',   
            fontWeight: '600',  
            color: '#333',  
            fontSize: '1rem',  
            textAlign: 'center'  
          }}  
        >  
          {name}  
        </Typography>  

        <Typography  
          variant="body2"  
          color="text.secondary"  
          sx={{  
            fontFamily: 'Poppins',   
            fontSize: '1rem',  
            color: 'black',  
            fontWeight: '500',  
            textAlign: 'center',  
          }}  
        >  
          ${price}  
        </Typography>  
      </CardContent>  
    </Card>  
  );  
};  

export default ProductCard;