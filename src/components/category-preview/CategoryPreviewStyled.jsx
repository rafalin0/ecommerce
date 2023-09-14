import styled from "styled-components";
import { Link } from "react-router-dom";

import { ProductCardContainer } from "../product-card/ProductCardStyled";

export const CategoryName = styled(Link)`
  font-family: "Dancing Script", cursive;
  text-transform: capitalize;
  color: rgba(117, 150, 184, 1);
  font-weight: bold;
  text-align: start;
  font-size: 3rem;
  line-height: 1rem;
`;

export const ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-right: 1rem;
  margin-top: 1rem;
`;

export const PreviewContent = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 6.5rem;
  align-items: center;
`;

export const CategoryPreviewContainer = styled.div`
  background-color: rgba(255, 238, 238, 0.5);
  padding: 2rem;
  padding-right: 2rem;
  border-radius: 10px;

  &:hover {
    ${CategoryName} {
      color: #393939;
    }
  }

  // Media Queries
  @media only screen and (min-width: 1200px) {
    ${ProductCardContainer} {
      height: 300px;
    }
  }
  @media (max-width: 992px) {
    ${PreviewContent} {
      grid-template: 1fr 5rem / 1fr;

      ${ProductCardsContainer} {
        margin-right: 0;
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        gap: 10px;
      }

      ${ProductCardsContainer} ~ div {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
