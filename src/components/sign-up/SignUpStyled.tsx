import styled from "styled-components";

import { devices } from "../../styles/Breakpoints.jsx";

import {
  PrimaryButton,
  GoogleButton,
  InvertedButton,
} from "../button/ButtonStyled.tsx";

export const SignUpContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 30%;

  border: 1px solid white;
  border-radius: 1rem;
  padding: 1.5rem 1rem;

  h2 {
    margin: 5px 0;
  }

  div.buttons-container {
    display: flex;
    flex-direction: column;

    border-top: 1px solid white;
    padding-top: 1rem;
    gap: 10px;
}

  ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
    min-width: 100%;
  }

  @media ${devices.tablet} {
    & {
        ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
          min-width: 50%;
          margin: 0 auto;
      }
  }
`;
