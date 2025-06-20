import React from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import Input from "@/components/formComponents/Input";
import { PhoneIcon } from "@/assets/icons/icons";
import Button from "@/components/Button";

const StyledPara = styled.p`
  &.bold-text {
    font-weight: 500;
    font-size: 20px;
  }
`;
const ContentWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const FormContainer = styled.div`
  /* background-color: green; */
`;
const InfoContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 40px;

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
  /* background-color: red; */
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const ContactForm = () => {
  return (
    <Container>
      <ContentWrapper>
        <FormContainer>
          <StyledPara className="bold-right-text" id="boldText">
            Send us a message
          </StyledPara>
          <StyledPara className="normal-right-text" id="normalText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            nobis illo aliquam inventore ducimus,
          </StyledPara>

          <FormInput className="form">
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
          <ButtonContainer>
            <Button text="submit"></Button>
          </ButtonContainer>
        </FormContainer>
        <InfoContainer>
          <div>
            <StyledPara className="bold-left-text">Call US</StyledPara>
            <StyledPara className="normal-left-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              nobis illo aliquam inventore ducimus,
            </StyledPara>
            <CallOn className="info-cont">{PhoneIcon} +91 1234567890</CallOn>
          </div>
          <div>
            <StyledPara className="bold-left-text">Call US</StyledPara>
            <StyledPara className="normal-left-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              nobis illo aliquam inventore ducimus,
            </StyledPara>
            <CallOn className="info-cont">{PhoneIcon} +91 1234567890</CallOn>
          </div>
          <div>
            <StyledPara className="bold-left-text">Call US</StyledPara>
            <StyledPara className="normal-left-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              nobis illo aliquam inventore ducimus,
            </StyledPara>
            <CallOn className="info-cont">{PhoneIcon} +91 1234567890</CallOn>
          </div>
        </InfoContainer>
      </ContentWrapper>
    </Container>
  );
};

export default ContactForm;
