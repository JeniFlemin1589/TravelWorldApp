import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCost: () => 0
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    // Ensure quantity is a positive number
    if (quantity <= 0) return;

    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
      // If product exists, update quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new product to the cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace(/,/g, '')) * parseInt(item.quantity, 10), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalCost }}>
      {children}
    </CartContext.Provider>
  );
};
