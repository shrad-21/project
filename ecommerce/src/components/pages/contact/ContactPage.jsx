"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import { OfficeIcon, PhoneIcon } from "@/assets/icons/icons";

const StyledHeading = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

const StyledPara = styled.p`
  &.bold-text {
    font-weight: 500;
    font-size: 20px;
  }
`;
const ContentWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  gap:50px;
`;
const FormContainer = styled.div`
  background-color: green;
`;
const InfoContainer = styled.div`
  /* background-color: blue; */
`;
const CallOn=styled.div``
const ContactPage = () => {
  return (
    <>
      <Container>
        <StyledHeading>Get In Touch</StyledHeading>
        <ContentWrapper>
          <FormContainer>
            <StyledPara className="bold-text">Send us a message</StyledPara>
            <StyledPara className="normal-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              nobis illo aliquam inventore ducimus, 
            </StyledPara>
          </FormContainer>
          <InfoContainer>
            <StyledPara className="bold-text">Call US</StyledPara>
            <StyledPara className="normal-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              nobis illo aliquam inventore ducimus, 
            </StyledPara>
            <CallOn>{PhoneIcon} +91 1234567890</CallOn>
            <CallOn>{OfficeIcon} Airoli, Navi Mumbai</CallOn>
          </InfoContainer>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default ContactPage;
