import styled from "styled-components";
import WishlistButton from "../wishlist-button/WishlistButton.tsx";

import { devices } from "../../styles/Breakpoints";

import {
  PrimaryButton,
  GoogleButton,
  InvertedButton,
} from "../button/ButtonStyled.tsx";

export const WishlistIcon = styled(WishlistButton)`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.5rem;
  font-weight: 600;
  justify-content: flex-end;
  padding: 2px;
  background-color: #e6e5e5;
  border-radius: 2rem;

  @media ${devices.tablet} {
    margin: 0.7rem 1rem 1rem;
    font-size: 2rem;
    padding: 0;
    background-color: transparent;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background: no-repeat center/cover;
  border-radius: 2rem 0 0 2rem;
  position: relative;

  @media ${devices.tablet} {
    border-radius: 2rem 2rem 0 0;
    position: absolute;
    top: 0;
    height: 85%;
  }
`;

export const Body = styled.div`
  background-color: #ffffff;
  color: #393939;
  width: 100%;
  height: 100%;
  font-size: 0.75rem;
  padding: 0.5em;

  border-radius: 0 2rem 2rem 0;
  display: grid;
  grid-area: 1 / 1 / 3 / 3;

  & > span:first-child {
    grid-column: span 2;
    width: 70%;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }

  ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
    margin-top: 1em;
    width: 100%;
    height: 1rem;
    background-color: rgba(117, 150, 184, 1);
    border-color: lightgray;
    box-shadow: 0 2px 2px 2px rgba(99, 76, 99, 0.058);
    padding: 0;
    grid-column: span 2;
    justify-content: space-around;
    align-self: flex-end;
    font-weight: 600;
    font-size: 0.7rem;
    color: #fff;
  }

  @media ${devices.tablet} {
    min-height: 25%;
    height: auto;
    padding: 1rem;
    position: absolute;
    z-index: 10;
    bottom: 0;
    border-radius: 0 0 2rem 2rem;
    font-size: 0.85rem;
    & > span:first-child {
      width: 75%;
    }
    ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
      display: none;
      height: 2rem;
      border: 1px solid #3d2f3d;
      background-color: transparent;
      color: #3d2f3d;
      font-size: 0.8rem;
      font-weight: normal;
    }
  }
`;

export const ProductCardContainer = styled.div`
  max-width: 490px;
  min-width: 290px;
  max-height: 390px;
  height: 13em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  position: relative;
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow: 0 4px 4px 4px rgba(99, 76, 99, 0.1);
  cursor: pointer;

  @media ${devices.tablet} {
    height: 50vh;
    flex-direction: column;
    align-items: center;
    &:hover {
      ${ProductImage} {
        opacity: 0.8;
      }

      ${Body} {
        ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
          opacity: 1;
          display: flex;
        }
      }
    }
  }
`;
