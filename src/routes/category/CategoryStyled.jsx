import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const CategoryItemsContainer = styled.div`
  padding: 3% 5%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.2rem;
  margin: 0;

  @media ${devices.mobileM} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  @media ${devices.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
