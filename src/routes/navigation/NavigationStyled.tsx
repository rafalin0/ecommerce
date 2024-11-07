import styled, { css } from "styled-components";

import { devices } from "../../styles/Breakpoints";

const makeBackgroundOpaque = css`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 5px 5px 8px #ffffff11;
  border-bottom: none;
  color: #1c1c11;
`;

export const NavbarContainer = styled.div<{scrolled: boolean}>`
  height: 2.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  position: fixed;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.5s ease-in-out;

  ${(props) => props.scrolled && makeBackgroundOpaque};

  &:hover {
    ${makeBackgroundOpaque};
  }
  @media ${devices.mobileL} {
    height: 3.5rem;
  }

  @media ${devices.laptop} {
    height: 4rem;
  }
`;
