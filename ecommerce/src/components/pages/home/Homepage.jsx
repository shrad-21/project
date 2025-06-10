"use client";
import Button from "@/components/Button";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/utils/services/api";
import Slider from "react-slick";
import { swiperNextButton, swiperPrevButton } from "@/assets/icons/icons";

const ProductWrapper = styled.div``;
const GridContainer = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 552px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  } */
`;
const Card = styled(Link)`
  /* border: 1px solid black; */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex !important;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  min-height: 320px;
  border: 1px solid black;
`;
const Title = styled.h4`
  text-decoration: none;
  color: black;
  font-size: 18px;
  text-align: center;
  padding: 20px;
`;
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;

export const NavigationWrapper = styled.div`
  /* position: absolute; */
  display: flex;
  gap: 10px;
  /* transform: translateY(-50%); */
  width: 70px;
  justify-content: space-between;
  z-index: 4;
`;

export const NavButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 0 10px; /* Adds spacing on both sides of the card */
  }
`;

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const swiperRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const productList = await getAllProducts();
      setProducts(productList.slice(0,5));
    };
    fetchData();
  }, []);

  const setting = {
    // dots: true,
    infinite: true,
    speed: 500,
    spaceBetween: 20,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 552,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <div>
          <ProductWrapper>
            <SliderWrapper>
              <Slider {...setting} ref={swiperRef}>
                {/* <GridContainer> */}
                {products.map((product) => (
                  <Card key={product.id} href={`/products/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      width={200}
                      height={200}
                    ></Image>
                    <Title>{product.title}</Title>
                  </Card>
                ))}
                {/* </GridContainer> */}
              </Slider>
            </SliderWrapper>
            <NavigationContainer>
              <NavigationWrapper>
                <NavButton onClick={() => swiperRef.current?.slickPrev()}>
                  {swiperPrevButton}
                </NavButton>
                <NavButton onClick={() => swiperRef.current?.slickNext()}>
                  {swiperNextButton}
                </NavButton>
              </NavigationWrapper>
            </NavigationContainer>

            <Button text="See More" href="/products" />
          </ProductWrapper>
        </div>
      </Container>
    </>
  );
};

export default Homepage;
