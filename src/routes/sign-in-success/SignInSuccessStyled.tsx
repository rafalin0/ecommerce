import styled, { css } from "styled-components";

import {
  IoBagCheck as Checkout,
  IoBagAdd as ShopMore,
  IoBag as OpenBag,
} from "react-icons/io5";
import { PiHeartStraightFill as Wishlist } from "react-icons/pi";

import { Container } from "../../styles/Global";
import { devices } from "../../styles/Breakpoints";

// Shared icon styles
const baseIconStyles = css`
  padding: 1px;
`;

export const CheckoutIcon = styled(Checkout)`${baseIconStyles}`;
export const OpenCartIcon = styled(OpenBag)`${baseIconStyles}`;
export const ShopMoreIcon = styled(ShopMore)`${baseIconStyles}`;
export const GoToWishlist = styled(Wishlist)`${baseIconStyles}`;


export const CountContainer = styled.div`
  flex: 1;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f1f4;
  width: 100%;
  height: 100%;
  max-height: 265px;
  padding: 1rem 0;
  border-radius: 1.5rem;

  p {
    color: gray;
    font-size: 0.8rem;

    span {
      color: #ff8181;
      display: block;
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
  }

  @media ${devices.tablet} {
    gap: 1rem;
  }
`;

// Container for action buttons in a column layout
export const ActionContainer = styled.div`
  flex: 1;
  padding: 2px;
  width: 80%;
  display: flex;
  flex-direction: column; 
  gap: 0.5rem;
  
  & Button {
      max-width: 490px;
      min-width: min(240px, 100%);
    }
 
  @media ${devices.tablet} {
    align-items: center;
    justify-content: center;

    & Button {
      max-width: 490px;
      min-width: 240px;
    }
  }
  
`;

// Card container with responsive layout
export const CardContainer = styled.div`
  max-width: 490px;
  min-width: min-content(490px, calc(100vw - 2rem));
  width: calc(100vw - 2rem);
  height: 13em;
  
  padding: 10px;
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow: 0 4px 4px 4px rgba(99, 76, 99, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  overflow: hidden;

  @media ${devices.tablet} {
    width: min-content(600px, 50%);
    min-width: 290px;
    height: 50vh;
    max-height: 490px;
    flex-direction: column;
    align-items: center;
  }
`;

// Custom container for the sign-in success layout
export const SignInSuccessContainer = styled(Container)`
  width: 100%;
  padding: 15% 5% 3% 5%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${devices.mobileL} {
    flex-flow: row nowrap;
    padding: 3% 5%;
    col-gap: 4rem;
  }
  
`;
