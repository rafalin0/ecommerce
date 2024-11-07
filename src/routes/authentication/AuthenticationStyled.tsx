import styled from "styled-components";
import { PageContainer } from "../../styles/Global";

export const AuthenticationContainer = styled(PageContainer)`
  display: flex;
  width: 90%;
  justify-content: center;
  column-gap: 5vw;
  margin: 0 auto;
  padding-top: 20vh;
  font-family: "Barlow Condensed", sans-serif;

  @media (max-width: 600px) {
    & {
      flex-direction: column;
      row-gap: 10vh;
    }
  }
`;
