"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import { OfficeIcon, PhoneIcon } from "@/assets/icons/icons";
import { gsap } from "gsap";
import Input from "@/components/formComponents/Input";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import ContactForm from "./ContactForm";
import Map from "./Map";
import { FAQData } from "@/data";
import Faq from "./Faq";

const StyledHeading = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

const ContactPage = () => {
  // const pathname = usePathname();
  // useEffect(() => {
  //   // Set elements to hidden state first
  //   gsap.set(".heading", { opacity: 0, x: -300 });
  //   gsap.set(".bold-right-text, .normal-right-text", { opacity: 0, x: -300 });
  //   gsap.set(".bold-left-text, .normal-left-text, .info-cont", {
  //     opacity: 0,
  //     x: 300,
  //   });

  //   // Then run the animation
  //   const tl = gsap.timeline();
  //   tl.to(".heading", {
  //     x: 0,
  //     opacity: 1,
  //     duration: 0.9,
  //     stagger: 0.2,
  //   });
  //   tl.to(
  //     ".bold-right-text, .normal-right-text",
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 0.9,
  //       stagger: 0.2,
  //     },
  //     0
  //   );
  //   tl.to(
  //     ".bold-left-text, .normal-left-text, .info-cont",
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 0.9,
  //       stagger: 0.2,
  //     },
  //     0
  //   );

  //   return () => {
  //     tl.kill();
  //   };
  // }, [pathname]);

  return (
    <>
      <Container>
        <StyledHeading className="heading">Get In Touch</StyledHeading>
        <ContactForm />
        <Map />
        <Faq data={FAQData} />
      </Container>
    </>
  );
};

export default ContactPage;
