import { useState } from "react";
import styled from "styled-components";
// import AddIcon from "../icons/AddIcon";
// import RemoveIcon from "../icons/RemoveIcon"

const CardContainer = styled.div`
  /* width: 0%; */
  max-width: 487px;
  /* max-height: 135px; */
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0.1, 0.3);

  @media screen and(min-width: 620px) {
    width: 30%;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProductImage = styled.img`
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  max-height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  border-left: 1px solid #e4e9f5;
  min-width: 60%;
  /* padding: 0.5em;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  padding: 0.5em;
  font-size: 17px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddOrSubstractItemContainer = styled.div`
  /* border: 1px solid red; */
  /* min-height: 50px; */
  max-height: 50%;
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  background-color: transparent;
  width: 34px;
  height: 34px;
  cursor: pointer;
  border: 2px solid green;
  border-radius: 5px;
  background-color: #54d2c8;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 16px;

  &:hover {
    background-color: #3aa99c;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: 1px solid #ff5656;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff5656;
  font-weight: bold;
  border-radius: 5px;
  width: 34px;
  cursor: pointer;
  height: 34px;
  background-color: #ff5656;
  /* margin-right: 15px; */
  /* margin-top: 8px; */

  &:hover {
    background-color: #ff2256;
    color: white;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const AdditionalInfo = styled.p`
  font-size: 14px;
  width: 85px;
  background-color: #3aa99c;
  text-align: center;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
`;

const NameAndCountContainer = styled.div`
  display: flex;
`;

const Count = styled.div`
  padding: 0.1rem 0.4rem;
  /* margin: 0 0.1rem; */
  color: green;
  font-size: 16px;
  font-weight: 900;
`;

const Card = ({ product, handleAddToCart, handleRemoveFromCart, cart }) => {
  const { name, price, modelo, image } = product;

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <CardContainer>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
      </ImageContainer>
      <ProductInfo>
        <NameAndCountContainer>
          <h4>{name}</h4>
        </NameAndCountContainer>
        <AdditionalInfo>{modelo}</AdditionalInfo>
        {/* <span>x kg</span> */}
        <Price>US$ {price}</Price>
        <AddOrSubstractItemContainer>
          <RemoveButton
            onClick={() => {
              handleRemoveFromCart();
              decreaseCount();
            }}
          >
            ➖
          </RemoveButton>
          <Count>{count > 0 ? count : null}</Count>
          <AddButton
            onClick={() => {
              handleAddToCart();
              addCount();
            }}
          >
            ➕
          </AddButton>
        </AddOrSubstractItemContainer>
      </ProductInfo>
    </CardContainer>
  );
};

export default Card;
