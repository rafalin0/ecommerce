import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  IoBagCheck as Checkout,
  IoBagAdd as ShopMore,
  IoBag as OpenBag,
} from "react-icons/io5";
import { PiHeartStraightFill as Wishlist } from "react-icons/pi";

import { Container } from "../../styles/Global";
import { devices } from "../../styles/Breakpoints";

const baseIconStyles = css`
  font-size: 1.5rem;
  padding: 1px;
  border: 1px solid #ff8181;
`;

export const CheckoutIcon = styled(Checkout)`
  ${baseIconStyles}
`;

export const OpenCartIcon = styled(OpenBag)`
  ${baseIconStyles}
`;

export const ShopMoreIcon = styled(ShopMore)`
  ${baseIconStyles}
`;

export const GoToWishlist = styled(Wishlist)`
  ${baseIconStyles}
`;

export const Count = styled.h2`
  height: 70px;
  width: 70px;
  color: #393939;
  background-color: #f4f1ee;
  padding: 0.5rem;
  font-size: 2.3rem;
  text-align: center;
  background-image: linear-gradient(top, #f4f1ee, #fff);
  border-radius: 50%;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3),
    inset 0px 4px 1px 1px white,
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
  float: left;
  margin: 0 30px 30px 0;
  position: relative;
  width: 70px;
  transition: all 0.1s linear;

  &:after {
    color: #e9e6e4;
    content: "";
    display: block;
    font-size: 30px;
    height: 30px;
    text-decoration: none;
    text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
    position: absolute;
    width: 30px;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  * {
    margin: 0;
  }

  p {
    color: gray;
    font-size: 0.8rem;
  }

  @media ${devices.tablet} {
    gap: 1rem;
  }
`;

export const Action = styled(Link)`
font-family: "Poppins";
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  height: 50px;
  width: 100%;
  padding: 1rem;
  font-size: 0.8rem;
  color: #ff8181;
  border-bottom: 1px solid #ff8181;
  cursor: pointer;

  &:first-child {
    background-color: #ff8181;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    color: #fff;

    & > *:first-child {
      border-color: #fff;
    }
  }

  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    & > *:first-child {
      width: 60px;
      height: 60px;
      padding: 6px;
      font-size: 1rem;
      position: relative;
      border: none;
      line-height: 3rem;
      left: -4rem;
      top: 1rem;
      color: #ff8181;
      background-color: #f4f1ee;
      background-image: linear-gradient(top, #f4f1ee, #fff);
      border-radius: 50%;
      box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3),
        inset 0px 4px 1px 1px white,
        inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
      float: left;
      margin: 0 30px 30px 0;
    }

    & > *:nth-child(2) {
      position: absolute;
    }
  }
`;

export const ActionContainer = styled.div`
  padding: 2px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: last baseline;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  background-color: #ffffff;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 16px;
  padding: 1rem;

  @media ${devices.tablet} {
    width: min-content(600px, 50%);
  }
`;

export const SignInSuccessContainer = styled(Container)`
  width: 100%;
  padding: 3% 5%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  column-gap: 4rem;
  row-gap: 2rem;
`;
