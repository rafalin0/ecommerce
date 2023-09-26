import styled from "styled-components";
import { Link } from "react-router-dom";

import { devices } from "../../styles/Breakpoints";

export const CategoryName = styled(Link)`
  font-family: "Dancing Script", cursive;
  text-transform: capitalize;
  color: #393939;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 1rem;
  align-self: center;

  ~ a {
    justify-self: flex-end;
  }

  @media ${devices.tablet} {
    font-size: 3rem;
  }
`;

export const ProductCardsContainer = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;

  @media ${devices.tablet} {
    grid-gap: 10px;
  }
`;

export const CategoryPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7rem;
  justify-content: flex-end;
  margin-top: 2rem;

  &:hover {
    ${CategoryName} {
      color: #393939;
    }
  }

  // Media Queries
  @media ${devices.tablet} {
    margin-top: 2rem;
    ${CategoryName} {
      ~ a {
        justify-self: flex-end;
      }
    }
    ${ProductCardsContainer} {
      overflow-x: visible;
    }
  }
`;
