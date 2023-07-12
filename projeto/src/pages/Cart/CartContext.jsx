import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item._id === product._id);
    if (existingProduct) {
      // If the product is already in the cart, update the amount
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with amount 1
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
    // window.location.href = '../cart';
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCartItems);
  };

  const increaseAmount = (productId, newAmount) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        // Check if the new amount exceeds the product's amount
        const amount = item.amount + 1;
        return { ...item, amount };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseAmount = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        const newamount = Math.max(item.amount - 1, 0);
        return { ...item, amount: newamount };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotalValue = () => {
    return cartItems.reduce((total, item) => total + item.price * item.amount, 0);
  };

  const finalizeShopping = async () => {
    if (cartItems.length > 0) {
      try {
        // Prepare the data for the request
        const user = "41224d776a326fb40f000001" //getSessionUserId(); // Replace with your logic to get the user ID from session
        const products = cartItems.map((item) => ({
          id: item._id,
          amount: item.amount,
        }));

        const body = JSON.stringify({
          client: user,
          products: products,
        });

        console.log(body);

        // Make the POST request
        const response = await fetch('http://localhost:3000/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        });

        if (response.ok) {
          alert('Compra finalizada com sucesso!');
          setCartItems([]);
        } else {
          alert('Ocorreu um erro ao finalizar a compra. Por favor, tente novamente.');
        }
      } catch (error) {
        console.error('Error finalizing shopping:', error);
        alert('Ocorreu um erro ao finalizar a compra. Por favor, tente novamente.');
      }
    }
  };

  // ...

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