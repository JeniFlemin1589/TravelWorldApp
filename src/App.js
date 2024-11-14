import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import data from './data';
import HeroSection from './components/HeroSection';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CoverPage from './components/CoverPage';

function App() {
  const [products, setProducts] = useState(data);
  const [showCoverPage, setShowCoverPage] = useState(true); // State to control cover page visibility

  // Function to hide the cover page and navigate to the home page
  const handleGetStarted = () => {
    setShowCoverPage(false);
  };

  return (
    <Router>
      {showCoverPage ? (
        // Show the CoverPage if showCoverPage is true
        <CoverPage onGetStarted={handleGetStarted} />
      ) : (
        // Show the main site (Navbar, CartProvider, Routes) if showCoverPage is false
        <>
          <CartProvider>
          <Navbar />
            <Routes>
              <Route path="/home" element={<HeroSection products={products} />} />
              <Route path="/Products" element={<AllProducts products={products} />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/About" element={<AboutUs />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </CartProvider>
        </>
      )}
    </Router>
  );
}

export default App;
