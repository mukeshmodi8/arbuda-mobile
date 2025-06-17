import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // localStorage से cart load करना
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("my-cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // localStorage में cart save करना
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("my-cart", JSON.stringify(cart));
    } else {
      // Empty cart, remove from localStorage
      localStorage.removeItem("my-cart");
    }
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      alert(`${product.name} is already in the cart!`);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
