"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import myImg from "@/assets/images/image.png";
import beautyImg from "@/assets/images/beauty.jpg";
import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
} from "@/utils/services/api";
import Link from "next/link";
import { categoryImages } from "@/utils/constants";

const ContentWrapper = styled.div`
  /* background-color: green; */
  display: flex;
  gap: 50px;
  align-items: flex-start;
`;

const GridContainer = styled.div`
  display: grid;
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
  }
`;
const Title = styled.h4`
  text-decoration: none;
  color: black;
  font-size: 18px;
  text-align: center;
  padding: 20px;
`;
const Card = styled(Link)`
  /* border: 1px solid black; */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;
`;

const Category = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  gap: 20px;

  img {
    border-radius: 50px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  position: sticky;
  top: 10px;
  /* background-color: red; */

  div {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
  }
`;
const StyledButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: capitalize;
  background: ${({ isSelected }) => (isSelected ? "#517fc4" : "#f0f0f0")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  box-shadow: ${({ isSelected }) =>
    isSelected ? "0 2px 6px rgba(0, 0, 0, 0.2)" : "none"};

  div {
    display: flex;
    align-items: center;
  }
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
`;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchValidCategories = async () => {
      const response = await getAllCategories();
      const allCategories = response.data || [];

      const validCategories = [];

      for (const cat of allCategories) {
        const products = await getProductsByCategory(cat.name);

        if (Array.isArray(products) && products.length > 0) {
          validCategories.push(cat);
        }

        if (validCategories.length === 5) break;
      }

      setCategories(validCategories);
    };

    fetchValidCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchProducts = async () => {
        const productList = await getProductsByCategory(selectedCategory);
        setProducts(productList);
      };

      fetchProducts();
    }
  }, [selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      const productList = await getAllProducts();
      setProducts(productList);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <Link href="/products">products</Link> */}
      <div>
        <Container>
          <ContentWrapper>
            <StyledDiv>
              <h2>Categories</h2>
              {Array.isArray(categories) &&
                categories.map((cat) => (
                  <>
                    <StyledButton
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.name)}
                      isSelected={selectedCategory === cat.name}
                    >
                      <div>
                        <Image
                          src={categoryImages[cat.name] || myImg}
                          alt="beauty-products"
                          height={80}
                          width={80}
                        />
                        {cat.name}
                      </div>
                    </StyledButton>
                  </>
                ))}
            </StyledDiv>

            {/* {selectedCategory && (
              <h4>{selectedCategory.toUpperCase()} Products</h4>
            )} */}

            <GridContainer>
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
            </GridContainer>
          </ContentWrapper>
        </Container>
      </div>
    </>
  );
};

export default ProductPage;
