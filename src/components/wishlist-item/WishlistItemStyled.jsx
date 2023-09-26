import styled from "styled-components";
import { LuHeartOff } from "react-icons/lu";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { devices } from "../../styles/Breakpoints";

export const MoveToBag = styled(LiaShoppingBagSolid)``;

export const RemoveFromWishlist = styled(LuHeartOff)``;

export const Base = styled.button`
  cursor: pointer;
  height: 100%;
  border: none;
  font-size: 1.3rem;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  @media ${devices.mobileS} {
    flex-direction: row;
    height: 2rem;
    min-width: 100%;
  }
`;

export const BagButton = styled(Base)`
  background-color: rgba(117, 150, 184, 1);
  border-right: none;
  border-top-right-radius: 0.25rem;
  &:hover {
    background-color: #ff8181;
  }
  @media ${devices.mobileS} {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0.25rem;
  }
`;

export const RemoveButton = styled(Base)`
  color: #a6a6a6;
  border-bottom-right-radius: 0.25rem;
  background: linear-gradient(to bottom, #a6a6a6 50%, #e6e5e5 50%);
  background-size: 100% 200%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    border: none;
    background-position: left top;
    background-color: #e6e5e5;
    color: #fff;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media ${devices.mobileS} {
    flex-direction: row;
    width: 50%;
  }
`;

export const ItemDescription = styled.div`
  border: 1px solid rgb(231, 224, 231);
  border: none;
  height: 100%;
  width: 50%;
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  font-size: 0.75rem;
  font-family: "Poppins", sans-serif;
  h2 {
    font-size: 0.75rem;
    margin: 0;
  }
  @media ${devices.mobileS} {
    width: 100%;
  }
`;
export const ItemPhoto = styled.div`
  background: no-repeat center/cover;
  width: 10rem;
  border-radius: 5px 0 0 5px;
  border-color: transparent;

  @media ${devices.mobileS} {
    height: 25rem;
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export const WishlistItemContainer = styled.div`
  height: 10rem;
  width: 100%;

  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${devices.mobileS} {
    flex-direction: column;
    height: 17rem;
    width: 10rem;
  }
`;
