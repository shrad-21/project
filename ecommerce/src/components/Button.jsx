"use client";
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledButton = styled.button``;

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
