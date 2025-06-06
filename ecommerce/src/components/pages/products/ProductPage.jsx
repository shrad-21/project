"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import myImg from "@/assets/images/image.png";
import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
} from "@/utils/services/api";
import Link from "next/link";

const ContentWrapper = styled.div`
  /* background-color: red; */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Title = styled.h4``;
const Card = styled(Link)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
`;

const Category = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  gap: 20px;

  img {
    border-radius: 50px;
  }
`;
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories();
      setCategories(response.data || []);
    };

    fetchCategories();
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
            <h2>Categories</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {Array.isArray(categories) &&
                categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{
                      padding: "8px 12px",
                      background:
                        selectedCategory === cat ? "#517fc4" : "#f0f0f0",
                      color: selectedCategory === cat ? "#fff" : "#000",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      textTransform: "capitalize",
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
            </div>

            {selectedCategory && (
              <h4>{selectedCategory.toUpperCase()} Products</h4>
            )}

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
