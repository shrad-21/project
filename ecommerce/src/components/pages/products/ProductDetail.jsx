"use client";
import { useContext, useEffect, useState } from "react";
import { productDetail } from "@/utils/services/api";
import Image from "next/image";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import {
  CheckIcon,
  heartIcon,
  minusIcon,
  plusIcon,
  yellowStar,
} from "@/assets/icons/icons";
import { CartContext } from "@/contexts/CartContext";

const ContentWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  justify-content: space-between;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7ede1;
  border-radius: 10px;

  img {
    /* border: 1px solid green; */
    height: 250px;
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 50%;
    img {
      /* border: 1px solid green; */
      height: 400px;
      width: 400px;
    }
  }
`;
const Price = styled.p`
  font-size: 25px;
  color: green;
`;
const Holder = styled.div`
  display: flex;
  /* border: 1px solid red; */
  align-items: center;
  gap: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const NameDate = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
`;
const Name = styled.p``;
const RatingContainer = styled.div`
  /* border: 1px solid red; */
  padding: 100px 0px 100px 0px;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
const RatingCard = styled.div`
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  /* border: 3px solid black; */
  padding: 30px;
  border: 1px solid grey;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: scale(1.03);
  }
`;
const Rate = styled.div`
  display: flex;
  gap: 5px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e8e8ec;
  border-radius: 20px;
  width: 25%;
  margin-bottom: 20px;
  button {
    padding: 5px;
    background: transparent;
    border: none;
  }
`;
const Value = styled.p`
  color: red;
  padding: 5px;
  margin-top: 0;
  margin-bottom: 0;
`;

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const { cart, updateCartQuantity } = useContext(CartContext);
  const cartQuantity = cart[id] || 0;

  useEffect(() => {
    if (!id) return;

    const fetchDetailProduct = async () => {
      const data = await productDetail(id);
      setProduct(data);
    };

    fetchDetailProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    if (cartQuantity < 5) {
      updateCartQuantity(id, cartQuantity + 1);
    }
  };

  const handleRemoveFromCart = () => {
    if (cartQuantity > 1) {
      updateCartQuantity(id, cartQuantity > 0 ? cartQuantity - 1 : 0);
    }
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <ImageContainer>
            <Image
              src={product?.data?.images[0]}
              width={400}
              height={400}
              alt={product?.data?.title}
            />
          </ImageContainer>
          <ContentContainer>
            <h1>{product?.data?.title}</h1>
            <p>
              Rating: {product?.data?.rating} | Brand: {product?.data?.brand}{" "}
            </p>
            <Price>Price: ${product?.data?.price}</Price>
            <hr />
            <p>{product?.data?.description}</p>
            <hr />
            <ButtonContainer>
              <button onClick={handleRemoveFromCart}>{minusIcon}</button>
              <Value>{cartQuantity}</Value>
              <button onClick={handleAddToCart}>{plusIcon}</button>
            </ButtonContainer>

            {cartQuantity >= 5 && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "-10px",
                  marginBottom: "15px",
                }}
              >
                Maximum quantity of 5 reached.
              </p>
            )}

            <InfoContainer>
              {/* <Holder>{heartIcon} Add To Wishlist</Holder> */}
              <Holder>
                {CheckIcon} {product?.data?.returnPolicy}
              </Holder>
            </InfoContainer>
          </ContentContainer>
        </ContentWrapper>

        <RatingContainer>
          <h2>Rating & Reviews</h2>
          <RatingCard>
            {product?.data?.reviews?.map((review, index) => (
              <Card>
                <NameDate key={index}>
                  <Name>{review.reviewerName}</Name>
                  {/* <Date>{review.date}</Date> */}
                  <Rate>
                    {yellowStar}
                    {review?.rating}
                  </Rate>
                </NameDate>
                <p>{review.comment}</p>
                <p>{review.reviewerEmail}</p>
              </Card>
            ))}
          </RatingCard>
        </RatingContainer>
      </Container>
    </>
  );
};

export default ProductDetail;
