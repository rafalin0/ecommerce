import styled from "styled-components";

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
  width: 60%;
  height: 100%;
  padding: 10vh 5vw 10vh 15vw;
`;

export const OrderSummary = styled.div`
  max-width: 45%;
  min-width: 800px;
  height: 100%;
  padding: 10vh 15vw 10vh 2vw;
  background-color: #f6f6f6;
  border-left: 1px solid #dedede;
`;

export const CheckoutContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #393939;
`;
