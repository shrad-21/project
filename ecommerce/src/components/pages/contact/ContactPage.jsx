"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import { OfficeIcon, PhoneIcon } from "@/assets/icons/icons";
import { gsap } from "gsap";
import Input from "@/components/formComponents/Input";
import { usePathname } from "next/navigation";

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
  gap: 50px;
`;
const FormContainer = styled.div`
  /* background-color: green; */
`;
const InfoContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;
const CallOn = styled.div`
  display: flex !important;
`;
const customInputStyles = `
  background-color:red;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContactPage = () => {
  const pathname = usePathname();
  useEffect(() => {
  // Set elements to hidden state first
  gsap.set(".heading", { opacity: 0, x: -300 });
  gsap.set(".bold-right-text, .normal-right-text", { opacity: 0, x: -300 });
  gsap.set(".bold-left-text, .normal-left-text, .info-cont", { opacity: 0, x: 300 });

  // Then run the animation
  const tl = gsap.timeline();
  tl.to(".heading", {
    x: 0,
    opacity: 1,
    duration: 0.9,
    stagger: 0.2,
  });
  tl.to(
    ".bold-right-text, .normal-right-text",
    {
      x: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.2,
    },
    0
  );
  tl.to(
    ".bold-left-text, .normal-left-text, .info-cont",
    {
      x: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.2,
    },
    0
  );

  return () => {
    tl.kill();
  };
}, [pathname]);

  return (
    <>
      <Container>
        <StyledHeading className="heading">Get In Touch</StyledHeading>
        <ContentWrapper>
          <FormContainer>
            <StyledPara className="bold-right-text" id="boldText">
              Send us a message
            </StyledPara>
            <StyledPara className="normal-right-text" id="normalText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              nobis illo aliquam inventore ducimus,
            </StyledPara>

            <FormInput className="form0">
              <InputContainer>
                <Input
                  label="First Name"
                  placeholder="enter your first name"
                  customInputStyles={customInputStyles}
                  // required
                />
                <Input
                  label="Last Name"
                  placeholder="enter your last name"
                  customInputStyles={customInputStyles}
                  // required
                />
              </InputContainer>
              <InputContainer>
                <Input
                  label="Email"
                  placeholder="enter your email"
                  customInputStyles={customInputStyles}
                  // required
                />
                <Input
                  label="Phone Number"
                  placeholder="enter your phone number"
                  customInputStyles={customInputStyles}
                  // required
                />
              </InputContainer>
            </FormInput>
          </FormContainer>
          <InfoContainer>
            <div>
              <StyledPara className="bold-left-text">Call US</StyledPara>
              <StyledPara className="normal-left-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum nobis illo aliquam inventore ducimus,
              </StyledPara>
              <CallOn className="info-cont">{PhoneIcon} +91 1234567890</CallOn>
            </div>
            <div>
              <StyledPara className="bold-left-text">Call US</StyledPara>
              <StyledPara className="normal-left-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum nobis illo aliquam inventore ducimus,
              </StyledPara>
              <CallOn className="info-cont">{PhoneIcon} +91 1234567890</CallOn>
            </div>
            <div>
              <StyledPara className="bold-left-text">Call US</StyledPara>
              <StyledPara className="normal-left-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum nobis illo aliquam inventore ducimus,
              </StyledPara>
              <CallOn className="info-cont">{PhoneIcon} +91 1234567890</CallOn>
            </div>
          </InfoContainer>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default ContactPage;
