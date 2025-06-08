"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { productDetail } from "@/utils/services/api";
import Image from "next/image";
import Button from "@/components/Button";
import styled from "@emotion/styled";
import { minusIcon, plusIcon } from "@/assets/icons/icons";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e8e8ec;
  border-radius: 20px;
  width: 25%;
  margin-bottom: 20px;
  button {
    padding: 5px;
    background: transparent;
    border: none;
  }
`;
const Value = styled.p`
  color: red;
  padding: 5px;
  margin-top: 0;
  margin-bottom: 0;
`;
const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext); //jo maine context se liya hai
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      //using async function
      const ids = Object.keys(cart); //cart mai hone wale products ke id
      const promises = ids.map((id) => productDetail(id)); //id ko map karke jitne ids hai utne bar promise return karke api se products ke detail fetch kiye
      const response = await Promise.all(promises); //jitne products hai unka array rahega corresponding to product id
      setProducts(response); //naya response set kiya setproducts se
    };

    if (Object.keys(cart).length > 0) {
      //0 se jyda hai cart mai toh call karko hamara async function to show the products in cart
      fetchCartProducts();
    }
  }, [cart]);

  if (Object.keys(cart).length === 0) {
    // 0 hai toh no products in cart
    return <p style={{ padding: "100px" }}> Your cart is empty.</p>;
  }

  return (
    <div style={{ padding: "100px" }}>
      <h2>Your Cart</h2>
      {products.map((item) => {
        const product = item.data;
        return (
          <div
            key={product.id}
            style={{ marginBottom: "30px", borderBottom: "1px solid #ccc" }}
          >
            <Image
              src={product.images[0]}
              alt={product.title}
              width={100}
              height={100}
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {cart[product.id]}</p>
            <p>Subtotal: ${product.price * cart[product.id]}</p>
            <ButtonContainer>
              <button
                onClick={() =>
                  updateCartQuantity(product.id, cart[product.id] - 1)
                }
                disabled={cart[product.id] <= 1}
              >
                {minusIcon}
              </button>

              <Value>{cart[product.id]}</Value>

              <button
                onClick={() =>
                  updateCartQuantity(product.id, cart[product.id] + 1)
                }
                disabled={cart[product.id] >= 5}
              >
                {plusIcon}
              </button>
            </ButtonContainer>
            { cart[product.id] >= 5 && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "-10px",
                  marginBottom: "15px",
                }}
              >
                Maximum quantity of 5 reached.
              </p>
            )}
            <Button
              text="delete"
              onClick={() => removeFromCart(product.id)}
            ></Button>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
