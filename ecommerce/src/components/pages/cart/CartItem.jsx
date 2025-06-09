// components/CartItem.js
import Image from "next/image";
import styled from "@emotion/styled";
import { minusIcon, plusIcon } from "@/assets/icons/icons";
import Button from "@/components/Button";

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
  background-color: red;
  padding-bottom: 30px;
`;
const CartItem = ({ product, quantity, onIncrease, onDecrease, onRemove }) => {
  return (
    <>
      <StyledRow>
        <td>
          <ImageWrapper>
            <Image
              src={product.images[0]}
              alt={product.title}
              width={80}
              height={80}
            />
            <span>{product.title}</span>
          </ImageWrapper>
        </td>
        <td>${product.price}</td>
        <td>
          <ButtonContainer>
            <button onClick={onDecrease} disabled={quantity <= 1}>
              {minusIcon}
            </button>
            <Value>{quantity}</Value>
            <button onClick={onIncrease} disabled={quantity >= 5}>
              {plusIcon}
            </button>
          </ButtonContainer>
          {quantity >= 5 && <LimitMsg>Max quantity reached</LimitMsg>}
        </td>
        <td>${(product.price * quantity).toFixed(2)}</td>
        <td>
          <Button text="Delete" onClick={onRemove} />
        </td>
      </StyledRow>
    </>
  );
};

export default CartItem;
