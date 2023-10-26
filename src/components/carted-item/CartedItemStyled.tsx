import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";

export const CartItemContainer = styled.div`
  height: 112px;
  border: 1px solid rgb(231, 224, 231);
  border-radius: 5px;
  padding: 10px;
  display: grid;
  grid-template-columns: 90px auto 60px;
  grid-template-rows: 50% 50%;
  color: #1f1f1f;

  img {
    height: 90px;
    width: 90px;
    border-radius: 5px;
    grid-area: 1 / 1 / span 2 / 2;
  }

  h4 {
    grid-area: 2 / 3 / span 1 / span 1;
    justify-self: flex-end;
    align-self: flex-end;
    margin: 0;
  }
`;

export const RemoveIcon = styled(RiDeleteBin5Line)`
  cursor: pointer;
  grid-area: 1 / 3 / span 1 / span 1;
  justify-self: flex-end;
  align-self: flex-start;
  color: #393939;
`;

export const CartItemDesc = styled.div`
  grid-area: 1 / 2 / span 1 / span 1;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  p {
    color: #ff8181;
    font-weight: bold;
    font-size: 0.8rem;
  }

  > * {
    margin: 0;
  }
`;

export const QuantitySelector = styled.div`
  grid-area: 2 / 2 / span 1 / span 1;
  align-self: end;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  padding: 0 0.5rem;

  button {
    box-shadow: none;
    line-height: 1.5rem;
    padding: 0 0.5rem;
    background-color: transparent;
    border: 1px solid #fce2ee;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &.decrement-quantity {
      border-right: none;
      right: 2;
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    &.increment-quantity {
      border-left: none;
      left: 2;
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }

    &:disabled,
    &[disabled] {
      color: #e6d6dd;
      border-right: none;
    }
  }

  input {
    width: 2rem;
    border: 1px solid #fce2ee;
    border-left: none;
    border-right: none;
    text-align: center;
  }
`;
