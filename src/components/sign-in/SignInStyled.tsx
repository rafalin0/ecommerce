import styled from "styled-components";

import { devices } from "../../styles/Breakpoints.jsx";

import {
  PrimaryButton,
  GoogleButton,
  InvertedButton,
} from "../button/ButtonStyled.tsx";

export const SignInContainer = styled.div`
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

  .buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-top: 1px solid white;
    padding-top: 1rem;
    gap: 10px;

    ${PrimaryButton}, ${GoogleButton}, ${InvertedButton} {
      min-width: 50%;
    }
    @media ${devices.tablet} {
      flex-direction: row;
    }
  }
  }
`;
