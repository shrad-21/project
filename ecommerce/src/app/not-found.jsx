"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
// import ErrorWeb from "@/assets/images/home/404Image.png";
// import ErrorWeb from "@/assets/images/home/404image.png";
// import ErrorMob from "@/assets/images/home/errorMob.png";


const StyledSection = styled.section`
  padding: 70px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    padding: 100px 100px 200px 100px;
  }
`;

const StyledText = styled.p`
  color: var(--Heading, #1d1d1d);
  text-align: center;
  /* font-family: "Maxima Nouva"; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  @media (min-width: 768px) {
    color: var(--Heading, #1d1d1d);
    /* font-family: "Maxima Nouva"; */
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 52px; /* 260% */
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  .desktop-image {
    display: none;
  }

  .mobile-image {
    display: block;
  }

  @media (min-width: 768px) {
    .desktop-image {
      display: block;
    }
    .mobile-image {
      display: none;
    }
  }
`;
//for advent
const NotFound = () => {
  return (
    <Container>
      <StyledSection>
        <ImageContainer>
          {/* <Image className="desktop-image" src={ErrorWeb} />
          <Image className="mobile-image" src={ErrorMob} /> */}
        </ImageContainer>
        <StyledText>
          Looks like the page you're searching for doesn't exist—or maybe it got
          lost in the lab
        </StyledText>
        {/* <Button href="/" text="back to home"></Button> */}
      </StyledSection>
    </Container>
  );
};

export default NotFound;
