import styled from "styled-components";

export const Banner = styled.div`
  padding: 0 5%;
  height: 30dvh;
  min-height: 193px;
  max-height: 288px;
  background-color: #f8f1f4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23ff8181' fill-opacity='0.14'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const CategoryName = styled.h1`
  color: #3d2f3d;
  font-family: "Dancing Script", cursive;
  text-transform: capitalize;
  font-size: 5rem;
  line-height: 1rem;
`;

export const CategoryItemsContainer = styled.div`
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  & > .product-card-container {
    border: 1px solid #393939;
    box-shadow: 0 4px 4px 4px rgba(61, 47, 61, 0.1);
  }
`;

export const CategoryPageContainer = styled.div`
  margin: 0 auto;

  // Media Queries
  @media only screen and (min-width: 1200px) {
    ${CategoryItemsContainer} {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media only screen and (max-width: 992px) {
    ${Banner} {
      height: 20vh;
      ${CategoryName} {
        font-size: 3rem;
      }
    }
    ${CategoryItemsContainer} {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 700px) {
    ${CategoryItemsContainer} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
