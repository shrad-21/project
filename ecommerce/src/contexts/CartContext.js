"use client";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(); //context create kiya hai jo use hoga baki jagah

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  //load cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {}; //loads data from localstorage
    setCart(storedCart);
  }, []);

  //update cart
  useEffect(() => {
    //set item se data set hoga means it will save current data in localstorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCartQuantity = (productId, quantity) => {
    //id and quantity receive karega
    setCart((prevCart) => {
      //jo pehlacart rahega usko set karega
      const newCart = { ...prevCart }; //newcart madhe prevcart save kela
      if (quantity > 0) {
        ////jab quantity>0 rahega tab id ke saath calculate hoga
        newCart[productId] = quantity; // Means product ID 2 is added with quantity 3
      } else {
        delete newCart[productId]; //valoue 0 ho gyi toh yahan hum us product ID ko cart se completely hata dete hain.
      }
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    const newCart = { ...cart };
    delete newCart[productId];
    setCart(newCart);
  };

  //total quantity calculate
  //let cart is an object , gives value in array
  //reduce : array method jo final output combine karta hai
  //acc : current running total  --> 0 is initial acc
  //qty : qty in cart
  //for eg : acc:0 and qty: 3 then 0+3=3
  const totalQuantity = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

  return (
    <CartContext.Provider value={{ cart, updateCartQuantity, totalQuantity,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
