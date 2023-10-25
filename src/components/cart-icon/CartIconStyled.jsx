import styled from "styled-components";
import { LiaShoppingBagSolid as ShoppingBag } from "react-icons/lia";

export const ShoppingIcon = styled(ShoppingBag)`
  font-size: 1.3em;
  color: rgb(28, 28, 17);
  padding-bottom: 4px;
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;

export const CartCount = styled.span`
  position: absolute;
  left: 0.7rem;
  bottom: 0.7rem;
  border: none;
  outline: none;
  font-size: 0.85rem;
  color: black;
  white-space: normal;
  text-align: center;
  width: 18px;
  height: 18px;
  border-radius: 12px;
  background-color: rgba(254, 159, 159, 1);
  overflow: hidden;

  &:hover {
    pointer-events: none;
  }
`;
