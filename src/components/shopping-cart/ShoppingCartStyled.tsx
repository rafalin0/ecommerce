import styled from "styled-components";

import { CgClose } from "react-icons/cg";

import {
  PrimaryButton,
  GoogleButton,
  InvertedButton,
} from "../button/ButtonStyled.tsx";

export const ShoppingCartContainer = styled.div`
  position: absolute;
  right: 0;
  width: min(100%, 35rem);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  z-index: 30;
  font-family: "Barlow Condensed", sans-serif;
`;

export const CloseIcon = styled(CgClose)`
  margin-left: auto;
  transform: scale(150%);
  cursor: pointer;

  &:hover {
    color: #ff8181;
  }
`;

export const ShoppingCartHeader = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.7rem;

  > * {
    margin-top: 0;
    margin-bottom: 2.3rem;
  }
`;

export const EmptyMessage = styled.span`
  margin: auto;
  text-align: center;
  justify-self: center;
  color: #898989;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const ShoppingCartFooter = styled.div`
  border-top: 1px solid #3d2f3d;
  position: sticky;
  color: #1f1f1f;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  p,
  ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
    min-width: 100%;
  }
`;

export const ShoppingCartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  row-gap: 0.5rem;
`;
