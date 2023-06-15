import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    // window.location.href = '../cart';
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const increaseAmount = (productId, newAmount) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        // Check if the new amount exceeds the product's quantity
        const quantity = item.quantity + 1;
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseAmount = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        const newQuantity = Math.max(item.quantity - 1, 0);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotalValue = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const finalizeShopping = () => {
    // Logic for finalizing the shopping (e.g., clearing the cart, processing payment, etc.)
    if(cartItems.length > 0) {
      alert("Compra finalizada com sucesso!");
    }
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        calculateTotalValue,
        finalizeShopping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
