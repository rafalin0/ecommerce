import styled from "styled-components";

import {
  PrimaryButton,
  GoogleButton,
  InvertedButton,
} from "../button/ButtonStyled";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30%;

  h2 {
    margin: 10px 0;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
      min-width: 50%;
    }
  }
  @media (max-width: 1028px) {
    & {
      div.buttons-container {
        flex-direction: column;
      }
    }
  }
`;
