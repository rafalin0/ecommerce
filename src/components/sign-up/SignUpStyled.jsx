import styled from "styled-components";

import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from "../button/ButtonStyled";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30%;

  h2 {
    margin: 10px 0;
  }

  ${BaseButton}, ${GoogleButton}, ${InvertedButton} {
    min-width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 1028px) {
    & {
      div.buttons-container {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        ${BaseButton}, ${GoogleButton}, ${InvertedButton} {
          min-width: 100%;
        }
      }
    }
  }
`;
