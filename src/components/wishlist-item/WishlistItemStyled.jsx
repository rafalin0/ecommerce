import styled from "styled-components";
import { LuHeartOff } from "react-icons/lu";
import { LiaShoppingBagSolid } from "react-icons/lia";

export const MoveToBag = styled(LiaShoppingBagSolid)``;

export const RemoveFromWishlist = styled(LuHeartOff)``;

export const Base = styled.button`
  cursor: pointer;
  min-height: 2rem;
  min-width: 2rem;
  width: 100%;
  border: 2px solid #a6a6a6;
  font-size: 1.3rem;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
`;

export const BagButton = styled(Base)`
  background-color: #a6a6a6;
  border-right: none;
  /* border-top-left-radius: 0.25rem; */
  border-bottom-left-radius: 0.25rem;
  &:hover {
    background-color: #ff8181;
  }
`;

export const RemoveButton = styled(Base)`
  color: #a6a6a6;
  /* border-top-right-radius: 0.25rem; */
  border-bottom-right-radius: 0.25rem;
  background: linear-gradient(
    to right,
    rgba(255, 129, 129, 0.2) 50%,
    white 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    background-position: left bottom;
    background-color: white;
    color: #393939;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemDescription = styled.div`
  border: 1px solid rgb(231, 224, 231);
  height: 100%;
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  font-size: 0.8rem;
  h2 {
    font-size: 0.8rem;
    margin: 0;
  }
`;
export const ItemPhoto = styled.div`
  background: no-repeat center/cover;
  height: 25rem;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-color: transparent;
`;

export const WishlistItemContainer = styled.div`
  height: 17rem;
  width: 10.25rem;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-content: center;
`;
