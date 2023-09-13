import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const makeBackgroundOpaque = css`
  background-color: rgba(255, 255, 255, 1);
`;

export const NavigationContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  ${(props) => props.scrolled && makeBackgroundOpaque};

  &:hover {
    ${makeBackgroundOpaque};
  }
`;

export const NavLinks = styled.div`
  text-transform: uppercase;
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr 1.5rem 1.5rem 1.5rem;
  align-items: center;
  column-gap: 1rem;
`;

export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  color: #1c1c11;

  & > * {
    font-size: 1.5rem;
  }

  &::after {
    content: " ";
    position: absolute;
    min-width: 1.5rem;
    width: 100%;
    transform: scaleX(0);
    height: 10px;
    top: 0.6rem;
    left: 0;
    background-color: #ff808134;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 0.5rem 0.5rem 1.3rem 3rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
