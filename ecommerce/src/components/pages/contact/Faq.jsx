"use client";

import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import AccordionComponent from "./Accordion";

const FaqSection = styled.div`
  padding: 0 0 100px 0;
  /* margin-top: 50px; */

  @media (min-width: 768px) {
    /* margin-top: 100px; */
  }
`;

const FAQAccordianWrapper = styled.div`
  width: 100%;
  margin-top: 42px;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

const FaqContainer = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const FaqTitle = styled.h3`
  color: #1d1d1d;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
  text-align: center;

  @media (min-width: 768px) {
    width: 25%;
    text-align: start;
    margin-top: 25px;
    font-size: 48px;
    line-height: 58px;
  }
`;

const Faq = ({ data = [] }) => {
  return (
    <FaqSection>
      <FaqContainer>
        <FaqTitle>FAQ’s</FaqTitle>
        <FAQAccordianWrapper>
          <AccordionComponent data={data} />
        </FAQAccordianWrapper>
      </FaqContainer>
    </FaqSection>
  );
};

export default Faq;
