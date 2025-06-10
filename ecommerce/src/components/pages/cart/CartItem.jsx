// components/CartItem.js
import Image from "next/image";
import styled from "@emotion/styled";
import { minusIcon, plusIcon } from "@/assets/icons/icons";
import Button from "@/components/Button";
import { Container } from "react-bootstrap";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    background-color: #f0f0f0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #e8e8ec;
  border-radius: 20px;
  padding: 5px 10px;
  gap: 10px;
  width: fit-content;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Value = styled.span`
  font-weight: 600;
`;

const LimitMsg = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 0 0;
`;

const StyledRow = styled.tr`
  /* background-color: red; */
  /* padding-bottom: 30px; */
  /* margin-top: 30px; */
`;
const CartWrapper = styled.div`
  display: flex;
  /* width: 30%; */
  /* gap: 30px; */
  /* background-color: green; */
  width: 100%;
`;

const CartSummary = styled.div`
  width: 30%;
  /* border: 1px solid black; */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;
const Subtotal = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  /* border: 1px solid black; */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 15px;

  @media (min-width: 768px) {
    /* width: 70%; */
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 120px;
    width: 120px;
  }

  @media (min-width: 768px) {
    img {
      height: 200px;
      width: 200px;
    }
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;
const PriceTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RemoveBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CartItem = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <>
      {/* <Container> */}
        <CartWrapper>
          <ContentWrapper>
            <ImageContainer>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={80}
                height={80}
              />
            </ImageContainer>
            <ProductInfo>
              <span>{product.title}</span>
              <ButtonContainer>
                <button onClick={onDecrease} disabled={quantity <= 1}>
                  {minusIcon}
                </button>
                <Value>{quantity}</Value>
                <button onClick={onIncrease} disabled={quantity >= 5}>
                  {plusIcon}
                </button>
              </ButtonContainer>
              <PriceTag className="d-lg-none d-block">
                ${(product.price * quantity).toFixed(2)}
              </PriceTag>

              <Button text="Delete" onClick={onRemove} />
              {quantity >= 5 && <LimitMsg>Max quantity reached</LimitMsg>}
            </ProductInfo>
            <PriceTag className="d-none d-lg-flex justify-content-center ">
              ${(product.price * quantity).toFixed(2)}
            </PriceTag>
            {/* <RemoveBtn>
          <Button text="Delete" onClick={onRemove} />
        </RemoveBtn> */}
          </ContentWrapper>

          {/* <CartSummary>
            <p>Order Summary</p>
            <hr />
            <Subtotal>Total: ${total.toFixed(2)}</Subtotal>
          </CartSummary> */}
        </CartWrapper>
      {/* </Container> */}
    </>
  );
};

export default CartItem;
