"use client";
import React, { useContext } from "react";
import { cartIcon, heartIcon } from "@/assets/icons/icons";
import { CartContext } from "@/contexts/CartContext";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledNavbar = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`;

const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  return (
    <Container>
      <StyledNavbar>
        <Link href="/">
          <h1>ECOMM</h1>
        </Link>

        <IconHolder>
          {/* <div style={{ position: "relative", display: "inline-block" }}>
            {heartIcon}
            {totalQuantity > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {totalQuantity}
              </span>
            )}
          </div> */}
          <CartContainer>
            <Link href="/cart">
              <div style={{ position: "relative", display: "inline-block" }}>
                {cartIcon}
                {totalQuantity > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                    }}
                  >
                    {totalQuantity}
                  </span>
                )}
              </div>
            </Link>
          </CartContainer>
        </IconHolder>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
