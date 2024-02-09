
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
    if (localStorage.getItem('total')) {
      setTotal(parseFloat(localStorage.getItem('total')));
    }
  }, []);

  const reset=()=>{
    setCart([])
    setTotal(0)
  }

  const updateLocalStorage = (updatedCart) => {
    let totalPrice = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('total', totalPrice.toFixed(2));

 
  };

  const reduceQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );
    const filterCart = updatedCart.filter(item => item.quantity !== 0);

    updateLocalStorage(filterCart);
    setCart(filterCart);
  };

  const addToCart = (id, price) => {
    const existingProductIndex = cart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      updateLocalStorage(updatedCart);
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { id, price, quantity: 1 }];
      updateLocalStorage(updatedCart);
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, total, reduceQuantity,setTotal ,reset}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
