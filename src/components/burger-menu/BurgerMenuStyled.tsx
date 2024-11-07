import styled, { css } from "styled-components";

import { devices } from "../../styles/Breakpoints";

const clickedAnimation = css`
  &:nth-child(1) {
    transform: rotate(-45deg) translate(-3.5px, 4px);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:nth-child(3) {
    transform: rotate(45deg) translate(-4.5px, -5px);
  }
`;

const unclickedAnimation = css`
  transform: rotate(0) translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
`;

export const BurgerBar = styled.div <{menuType: "clicked" | "unclicked"}>`
  width: 20px;
  height: 2px;
  border-radius: 2rem;
  background-color: #393939;
  margin: 4px 0;
  transition: 0.4s;

  ${(props) =>
  props.menuType === "clicked" ? clickedAnimation : unclickedAnimation}
    
   @media ${devices.tablet} {
    width: 30px;
    height: 3px;
    margin: 6px 0;
  }
`;

export const BurgerContainer = styled.div`
  position: fixed;
  top: 0.9em;
  right: 2rem;
  z-index: 10;
  display: inline;
  cursor: pointer;

  @media ${devices.mobileL} {
    display: none;;
  }
  @media ${devices.tablet} {
    top: 1rem;
  }
`;
