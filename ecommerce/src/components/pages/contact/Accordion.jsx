import React from "react";
import styled from "@emotion/styled";
import { Accordion } from "react-bootstrap";
import { css } from "@emotion/react";

const backgroundImageStyles = css`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const StyledAccordion = styled(Accordion)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledAccordionItem = styled(Accordion.Item)`
  border: none;
  border-bottom: 1px solid #a5a0a0;
  background-color: transparent;
`;

export const StyledAccordionHeader = styled(Accordion.Header)`
  .accordion-button {
    background-color: transparent;
    --bs-accordion-bg: #e7f1ff; /* Override Bootstrap's background variable */
    gap: 15px;
    padding: 0;
    padding-bottom: 28px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;

    &:focus,
    &:focus-visible {
      box-shadow: none;
    }

    &::after {
      transition: all 0.3s ease;
      width: 20px;
      height: 20px;
      ${backgroundImageStyles}
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none"><path d="M2.99988 13.7578H24.6665" stroke="%231D1D1D" strokeWidth="2.16667" strokeLinecap="round"/><path d="M13.8335 24.5938L13.8335 2.92708" stroke="%231D1D1D" strokeWidth="2.16667" strokeLinecap="round"/></svg>');
    }

    &:not(.collapsed) {
      background-color: transparent;
      --bs-accordion-bg: transparent; /* Ensure active state is also transparent */
      box-shadow: none;

      &::after {
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none"><path d="M2.27795 13.7578H23.9446" stroke="%231D1D1D" strokeWidth="2.16667" strokeLinecap="round"/></svg>');
        ${backgroundImageStyles}
      }
    }

    @media (min-width: 768px) {
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;

      &::after {
        width: 25px;
        height: 25px;
      }

      &:not(.collapsed) {
        &::after {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;

export const StyledAccordionBody = styled(Accordion.Body)`
  padding: 0;
  padding-bottom: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
  }
`;

const AccordionComponent = ({ data }) => {
  return (
    <StyledAccordion defaultActiveKey="0">
      {data?.map((item, index) => {
        return (
          <StyledAccordionItem key={index} eventKey={index}>
            <StyledAccordionHeader>
              {item?.question || "Title"}
            </StyledAccordionHeader>
            <StyledAccordionBody>{item?.answer}</StyledAccordionBody>
          </StyledAccordionItem>
        );
      })}
    </StyledAccordion>
  );
};

export default AccordionComponent;
