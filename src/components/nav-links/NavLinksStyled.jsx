import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { BsPerson as PersonIcon } from "react-icons/bs";
import { BsSuitHeart as HeartIcon } from "react-icons/bs";

import { devices } from "../../styles/Breakpoints";

const navLinkText = css`
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

const navLinkIcon = css`
  height: 30px;
  width: 30px;
  border-radius: 2rem;

  &:hover {
    background-color: #ff808134;
  }
`;

export const WishlistIcon = styled(HeartIcon)`
  font-size: 1rem;
`;

export const AccountIcon = styled(PersonIcon)`
  font-size: 1.3em;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70%;
  padding: 0.5rem 0.5rem 1.3rem 0;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media ${devices.mobileL} {
    margin: auto;
    width: auto;
    justify-content: center;
    padding: 0.5rem 0.5rem 1.3rem;

    & > * {
      position: relative;
      right: 0.4rem;
    }
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  position: relative;
  display: none;
  color: #1c1c11;

  & > * {
    font-size: 1.3em;
  }

  ${(props) => (props.linkType === "text" ? navLinkText : navLinkIcon)}

  @media ${devices.mobileL} {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.scrolled ? "#1c1c11" : "#1c1c11")};
  }
`;

export const LeftLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RightLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const LinksContainer = styled.div`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  column-gap: 1rem;

  @media ${devices.mobileL} {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
