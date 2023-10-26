import styled, { css } from "styled-components";

import { devices } from "../../styles/Breakpoints";

const clickedAnimation = css`
  &:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 8px);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -8px);
  }
`;

const unclickedAnimation = css`
  transform: rotate(0) translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
`;

export const BurgerBar = styled.div <{menuType: "clicked" | "unclicked"}>`
  width: 30px;
  height: 3px;
  border-radius: 2rem;
  background-color: #393939;
  margin: 6px 0;
  transition: 0.4s;

  ${(props) =>
    props.menuType === "clicked" ? clickedAnimation : unclickedAnimation}
`;

export const BurgerContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 10;
  display: inline;
  cursor: pointer;

  @media ${devices.mobileL} {
    display: none;
  }
`;
