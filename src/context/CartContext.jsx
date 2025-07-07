import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizzaToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pizzaToAdd.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === pizzaToAdd.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizzaToAdd, count: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      ).filter(item => item.count > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.count, 0);
  };

  const contextValue = {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    total: calculateTotal(),
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
