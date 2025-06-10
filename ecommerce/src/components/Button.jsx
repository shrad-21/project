"use client";
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledButton = styled.button`
padding: 15px;
border-radius: 10px;
/* border:1px solid red; */
width: fit-content;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
background-color: #9930ca;
color: white;
text-decoration: none;
`;

const Button = ({ text, href, onClick }) => {
  return href ? (
    <StyledButton onClick={onClick} as={Link} href={href}>
      {text}
    </StyledButton>
  ) : (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};

export default Button;
