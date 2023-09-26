import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const CheckoutItems = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #bebdbc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Main = styled.div`
  background-color: #fff;
  padding: 10% 5%;
  @media ${devices.mobileL} {
    padding: 10vh 5vw 10vh 15vw;
    width: max(60%, 800px);
  }
`;

export const OrderSummary = styled.div`
  padding: 10% 5%;
  height: 100%;
  order: -1;
  background-color: #f6f6f6;
  border-left: 1px solid #dedede;

  @media ${devices.mobileL} {
    padding: 10vh 15vw 10vh 2vw;
    order: 0;
    width: max(45%, 800px);
  }
`;

export const CheckoutContainer = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  width: 100%;
  min-height: 100vh;
  height: auto;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #393939;

  @media ${devices.mobileL} {
    flex-direction: row;
  }
`;
