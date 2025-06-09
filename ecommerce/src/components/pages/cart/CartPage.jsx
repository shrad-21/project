// pages/cart.js
"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { productDetail } from "@/utils/services/api";
import CartItem from "./CartItem";
import styled from "@emotion/styled";

const StyledRow = styled.tr`
  background-color: red;
`;
const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const ids = Object.keys(cart);
      const promises = ids.map((id) => productDetail(id));
      const response = await Promise.all(promises);
      setProducts(response);
    };

    if (Object.keys(cart).length > 0) {
      fetchCartProducts();
    }
  }, [cart]);

  if (Object.keys(cart).length === 0) {
    return <p style={{ padding: "100px" }}>Your cart is empty.</p>;
  }

  return (
    <div style={{ padding: "100px" }}>
      <h2>Your Cart</h2>
      <table
        style={{
          width: "70%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Product
            </th>
            <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Price
            </th>
            <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Quantity
            </th>
            <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Subtotal
            </th>
            <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            const product = item.data;
            const quantity = cart[product.id];

            return (
              <CartItem
                key={product.id}
                product={product}
                quantity={quantity}
                onIncrease={() => updateCartQuantity(product.id, quantity + 1)}
                onDecrease={() => updateCartQuantity(product.id, quantity - 1)}
                onRemove={() => removeFromCart(product.id)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
