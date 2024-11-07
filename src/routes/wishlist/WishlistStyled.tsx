import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gray;
  flex: 1;
`

export const WishlistItemsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  gap: 10px;
  padding: 5%;
`;

export const WishlistContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 7rem);
  margin: 0 auto;
  color: #393939;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  @media ${devices.mobileL} {
    min-height: calc(100vh - 11rem);
  }
    @media ${devices.tablet} {
      min-height: calc(100dvh - 12rem);
  }
`;
