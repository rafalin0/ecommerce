import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const ExpandingButton = styled.div`
  cursor: pointer;
  position: relative;

  width: 6rem;
  height: 2rem;

  color: #393939;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2%;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #FE9F9F;
  }

  @media ${devices.mobileL} {
    border-radius: 2rem;
    border: 1px solid #393939;
    justify-content: center;
  }
`;
