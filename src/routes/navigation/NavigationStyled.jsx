import styled, { css } from "styled-components";

import { devices } from "../../styles/Breakpoints";

const makeBackgroundOpaque = css`
  background-color: rgba(255, 255, 255, 1);
  border-bottom: none;
  color: #1c1c11;
`;

export const NavbarContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid #fff;
  box-shadow: 5px 5px 8px #ffffff11;
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
