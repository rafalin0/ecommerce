import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  margin: 0 auto;
  padding-top: 20vh;

  @media (max-width: 600px) {
    & {
      flex-direction: column;
      row-gap: 10vh;
    }
  }
`;
