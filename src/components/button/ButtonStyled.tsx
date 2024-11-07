import styled from "styled-components";
import { SpinnerContainer } from "../spinner/SpinnerStyled.tsx";
import { devices } from "../../styles/Breakpoints.jsx";

// Base button styling for reuse
export const BaseButton = styled.button`
  min-width: 8rem;
  min-height: 2.5rem;
  width: auto;
  cursor: pointer;
  font-size: 0.8em;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Primary Button with dark theme
export const PrimaryButton = styled(BaseButton)`
  background-color: #393939;
  color: white;

  &:hover {
    background-color: #1f1f1f;
  }
`;

// Google Button with blue theme
export const GoogleButton = styled(BaseButton)`
  padding: 0 1rem;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

// Accent Button with custom styling and responsive adjustments
export const AccentButton = styled(BaseButton)`
  height: 1rem;
  padding: 0 1rem;
  background-color: rgba(117, 150, 184, 1);
  border: 1px solid lightgray;
  box-shadow: 0 2px 2px rgba(99, 76, 99, 0.058);
  color: #fff;
  font-size: 0.7rem;
  justify-content: flex-start;
  text-align: left;
  gap: 10px;

   & > *:first-child {
    width: 20%;
    font-size: 1.5rem;
  }

  & > *:last-child {
    width: 80%
  }

  &:hover {
    background-color:#ff8181;
  }

  @media ${devices.tablet} {
    gap: 0.5rem;
  }
`;

export const InvertedAccentButton = styled(AccentButton)`
  border: 1px solid rgb(117, 150, 184);
  background: transparent;
  color: gray;
   &:hover {
    border: 1px solid lightgray;
    color: #fff;
  }
`

// Inverted Button with gradient background effect on hover
export const InvertedButton = styled(BaseButton)`
  color: #393939;
  border: 1px solid #393939;
  background: linear-gradient(
    to top,
    rgba(255, 129, 129, 0.3) 50%,
    rgba(255, 129, 129, 0) 50%
  );
  background-size: 100% 200%;
  background-position: right top;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left bottom;
  }
`;

// Styled spinner for loading states within buttons
export const ButtonSpinner = styled(SpinnerContainer)`
  height: 25px;
  width: 25px;
`;
