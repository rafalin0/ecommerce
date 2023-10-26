import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const ItemIconContainer = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;

  @media ${devices.laptop} {
    height: 100px;
    width: 100px;
  }
`;

export const ThumbnailPhoto = styled.img`
  height: 55px;
  width: 55px;
  border: 1px solid #bebdbc;
  filter: grayscale(30%);

  @media ${devices.laptop} {
    height: 70px;
    width: 70px;
  }
`;

export const Quantity = styled.span`
  position: relative;
  right: 0.7rem;
  bottom: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  background-color: #71706f;
  border-radius: 12px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 0.6rem;
  white-space: normal;
  overflow: hidden;

  @media ${devices.laptop} {
    right: 0.781rem;
    bottom: 2rem;
  }
`;
