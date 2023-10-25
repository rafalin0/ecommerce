import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const ItemTotalPrice = styled.p`
  margin-left: auto;
  min-width: 3.5rem;
  align-self: flex-start;
`;

export const ItemName = styled.p`
  font-weight: 400;
  flex-wrap: wrap;
  align-self: flex-start;
  margin-right: 1.5rem;
`;

export const CheckoutItemContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  height: auto;
  display: grid;
  grid-template-columns: 3.5rem 1fr 3.5rem;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media ${devices.tablet} {
    grid-template-columns: 5rem 1fr 3.5rem;
  }

  @media ${devices.laptop} {
    font-size: 1rem;
  }
`;
