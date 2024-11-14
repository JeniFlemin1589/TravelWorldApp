// import React from 'react';
// import { Box, Typography, Button, Container, Grid, Select, MenuItem, Divider } from '@mui/material';
// import { useLocation } from 'react-router-dom';

// const ProductDetail = () => {
//   const location = useLocation();
//   const product = location.state;

//   if (!product) {
//     return (
//       <Container sx={{ py: 4, textAlign: 'center' }}>
//         <Typography variant="h6">Product not found.</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ py: 6 }}>
//       {/* Breadcrumb */}
//       <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mb: 2 }}>
//         Home &gt; Products &gt; {product.name}
//       </Typography>

//       <Grid container spacing={6}>
//         {/* Product Image */}
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src={product.image || "https://www.course-api.com/images/tours/tour-1.jpeg"}
//             alt={product.name}
//             sx={{
//               width: '100%',
//               height: 'auto',
//               borderRadius: 2,
//               boxShadow: 3,
//               maxHeight: 450,  // Define a max height for the image
//               objectFit: 'cover',  // Cover the image area proportionally
//             }}
//           />
//         </Grid>

//         {/* Product Details */}
//         <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
//           <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{product.name}</Typography>
//           {/* <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>{product.info}</Typography> */}
//           <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>${product.price}</Typography>
//           <Divider sx={{ mb: 3 }} />

//           <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.6 }}>
//             {product.info}
//           </Typography>

//           {/* Colors */}
//           <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>Available Colors</Typography>
//           <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
//             <Box sx={{ width: 32, height: 32, backgroundColor: 'green', borderRadius: '50%', boxShadow: 1 }} />
//             <Box sx={{ width: 32, height: 32, backgroundColor: 'blue', borderRadius: '50%', boxShadow: 1 }} />
//             {/* Add more color options as needed */}
//           </Box>

//           {/* Quantity Selection */}
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>Quantity</Typography>
//           <Select defaultValue={1} sx={{ mb: 3, width: 100 }}>
//             <MenuItem value={1}>1</MenuItem>
//             <MenuItem value={2}>2</MenuItem>
//             <MenuItem value={3}>3</MenuItem>
//             {/* Add more quantities as needed */}
//           </Select>

//           {/* Add to Bag Button */}
//           <Button variant="contained" color="primary" sx={{ width: '100%', padding: '12px 0', fontSize: '1rem', fontWeight: 'bold' }}>
//             Add to Bag
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProductDetail;

// ProductDetail.js
import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Select, MenuItem, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity); // Add product with quantity
  };

  if (!product) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h6">Product not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mb: 2 }}>
        Home &gt; Products &gt; {product.name}
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image || "https://www.course-api.com/images/tours/tour-1.jpeg"}
            alt={product.name}
            sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3, maxHeight: 450, objectFit: 'cover' }}
          />
        </Grid>

        <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{product.name}</Typography>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>${product.price}</Typography>
          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.6 }}>
            {product.info}
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>Available Colors</Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            <Box sx={{ width: 32, height: 32, backgroundColor: 'green', borderRadius: '50%', boxShadow: 1 }} />
            <Box sx={{ width: 32, height: 32, backgroundColor: 'blue', borderRadius: '50%', boxShadow: 1 }} />
          </Box>

          <Typography variant="subtitle1" sx={{ mb: 1 }}>Quantity</Typography>
          <Select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            sx={{ mb: 3, width: 100 }}
          >
            {[1, 2, 3, 4, 5].map(num => (
              <MenuItem key={num} value={num}>{num}</MenuItem>
            ))}
          </Select>

          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', padding: '12px 0', fontSize: '1rem', fontWeight: 'bold' }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;

