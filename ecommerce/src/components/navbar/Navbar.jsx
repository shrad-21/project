"use client";
import React, { useContext, useEffect, useState } from "react";
import { cartIcon, heartIcon } from "@/assets/icons/icons";
import { CartContext } from "@/contexts/CartContext";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";

const StyledNavbar = styled.nav`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &.logo {
    font-size: 30px;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    background: white;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px;
    display: ${(props) => (props.open ? "flex" : "none")};
    z-index: 99;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
const MenuToggle = styled.div`
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
const Navbar = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".logo, .nav-link, .cart-icon", {
      y: -300,
      duration: 1,
      opacity: 0,
      delay: 1,
      stagger:0.2
    });
  }, []);

  const { cart } = useContext(CartContext);
  const totalQuantity = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <StyledNavbar>
        {/* <Link href="/">
          <h1>ECOMM</h1>
        </Link> */}
        <StyledLink className="logo" href="/">
          ECOMM
        </StyledLink>

        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuToggle>

        <LinksContainer open={menuOpen}>
          <StyledLink
            className="nav-link"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </StyledLink>
          <StyledLink
            className="nav-link"
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </StyledLink>
          <StyledLink
            className="nav-link"
            href="/products"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </StyledLink>
          <StyledLink
            className="nav-link"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </StyledLink>
        </LinksContainer>

        <IconHolder>
          <CartContainer>
            <Link className="cart-icon" href="/cart">
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
