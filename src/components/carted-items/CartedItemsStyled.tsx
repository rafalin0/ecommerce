import styled from "styled-components";

export const EmptyMessage = styled.span`
  margin: auto;
  text-align: center;
  justify-self: center;
  color: #898989;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const ShoppingCartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  overflow-y: auto;
  row-gap: 0.5rem;
`;
