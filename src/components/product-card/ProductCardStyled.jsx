import styled from "styled-components";
import { PiHeartStraight } from "react-icons/pi";

import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from "../button/ButtonStyled";

export const WishlistIcon = styled(PiHeartStraight)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  font-weight: bold;
  font-size: 2rem;
  justify-content: flex-end;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 85%;
  background: no-repeat center/cover;
  border-radius: 4px 4px 0 0;
  position: absolute;
  top: 0;
`;

export const Body = styled.div`
  background-color: #ffffff;
  color: #3d2f3d;
  width: 100%;
  min-height: 20%;
  height: auto;
  font-size: 18px;
  padding: 1rem;
  position: absolute;
  z-index: 10;
  bottom: 0;
  border-radius: 0 0 5px 5px;
  display: grid;
  grid-area: 1 / 1 / 3 / 3;

  span:first-child {
    grid-column: span 2;
    width: 75%;
    font-weight: bold;
  }

  & > span:last-of-type {
    grid-row: 2/3;
    grid-column: 1/2;
    display: none;
  }

  ${BaseButton}, ${GoogleButton}, ${InvertedButton} {
    width: 100%;
    display: none;
    border: 2px solid #3d2f3d;
    padding: 0;
    grid-row: 2/3;
    grid-column: 2/3;
  }
`;

export const ProductCardContainer = styled.div`
  max-width: 390px;
  min-width: 193px;
  max-height: 390px;
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  border: 2px solid #393939;
  box-shadow: 0 4px 4px 4px rgba(99, 76, 99, 0.058);
  cursor: pointer;

  &:hover {
    ${ProductImage} {
      opacity: 0.8;
    }

    ${Body} {
      height: auto;

      & > span:last-of-type {
        margin-top: 1rem;
        display: grid;
        align-self: center;
      }
    }

    ${BaseButton}, ${GoogleButton}, ${InvertedButton} {
      opacity: 1;
      display: grid;
      margin-top: 1rem;
    }
  }

  @media (max-width: 600) {
    ${Body} {
      grid-area: 1 / 1 / 4 / 4;
      & > span:last-of-type {
        grid-row: 2/3;
        grid-column: 1/3;
        width: 100%;
      }
    }
  }
`;
