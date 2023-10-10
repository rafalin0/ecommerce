import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../styles/Breakpoints";

const makeBackgroundOpaque = css`
  background-color: rgba(255, 255, 255, 1);
`;

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

export const NavLinks = styled.div`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
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
  display: none;
  color: #1c1c11;

  & > * {
    font-size: 1.3em;
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

  @media ${devices.mobileL} {
    display: inline-block;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 0.5rem 0.5rem 1.3rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media ${devices.mobileL} {
    padding: 0.5rem 0.5rem 1.3rem 3rem;
    justify-content: center;
  }
`;

export const BurgerBar = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 2rem;
  background-color: #393939;
  margin: 6px 0;
  transition: 0.4s;

  ${(props) =>
    props.menuType === "clicked" ? clickedAnimation : unclickedAnimation}
`;

export const BurgerMenu = styled.div`
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

export const ExtendedNavLink = styled(Link)`
  border-bottom: 1px solid #ff8181;
  padding: 1rem;
  font-family: "Barlow Condensed", sans-serif;
`;

export const ExtendedNavContainer = styled.div`
  position: fixed;
  z-index: 10;
  background-color: #fff;
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  font-size: 1.8rem;

  @media ${devices.mobileL} {
    display: none;
  }
`;

export const NavbarContainer = styled.div`
  height: 4rem;
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
