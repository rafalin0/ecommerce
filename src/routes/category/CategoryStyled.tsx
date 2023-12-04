import styled from "styled-components";

export const CategoryItemsContainer = styled.div`
  padding: 3% 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 0;

  & > * {
    flex: 1 1 25%;
  }
`;
