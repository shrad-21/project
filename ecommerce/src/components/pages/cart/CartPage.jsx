// pages/cart.js
"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { productDetail } from "@/utils/services/api";
import CartItem from "./CartItem";
import styled from "@emotion/styled";
import Button from "@/components/Button";
import { Container } from "react-bootstrap";

const StyledRow = styled.tr`
  background-color: red;
`;

const StyledDiv = styled.div`
  /* border: 1px solid black; */
  padding: 50px 0 50px 0;
`;
const CartSummary = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background: #e4e1e1;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 30%;
    height: 200px;
  }
`;
const CartContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    /* flex-direction: row; */
    /* background-color: red; */
    width: 100%;
  }
`;
const Subtotal = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  p {
  }
`;
const Total = styled.div`
  /* background-color: red; */

  display: flex;
  justify-content: space-between;
`;
const CartHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
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

  const totalPrice = products.reduce((acc, item) => {
    const product = item.data;
    const quantity = cart[product.id] || 0;
    return acc + product.price * quantity;
  }, 0);

  if (Object.keys(cart).length === 0) {
    return <p style={{ padding: "100px" }}>Your cart is empty.</p>;
  }

  return (
    <>
      <Button href="/products" text="products"></Button>
      <StyledDiv>
        <Container>
          <h2>Your Cart</h2>
          <CartHolder>
            <CartContainer>
              {/* <CartSummary>
              <p>Order Summary</p>
              <hr />
              <Subtotal>Total: ${totalPrice.toFixed(2)}</Subtotal>
            </CartSummary> */}
              {products.map((item) => {
                const product = item.data;
                const quantity = cart[product.id];

                return (
                  <CartItem
                    key={product.id}
                    product={product}
                    quantity={quantity}
                    onIncrease={() =>
                      updateCartQuantity(product.id, quantity + 1)
                    }
                    onDecrease={() =>
                      updateCartQuantity(product.id, quantity - 1)
                    }
                    onRemove={() => removeFromCart(product.id)}
                  />
                );
              })}
            </CartContainer>
            <CartSummary>
              <p>Order Summary</p>
              <hr />
              <Subtotal>
                <p>SubTotal:</p> <p>${totalPrice.toFixed(2)}</p>
              </Subtotal>
              <hr />
              <Total>
                <p>Total:</p>
                <p>
                  <b>${totalPrice.toFixed(2)}</b>
                </p>
              </Total>
            </CartSummary>
          </CartHolder>
        </Container>
      </StyledDiv>
    </>
  );
};

export default CartPage;
