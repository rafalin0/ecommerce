import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { devices } from "../../styles/Breakpoints";

const parentDirectory = css`
  font-weight: bold;
`;

const lastChild = css`
  border-bottom: 1px solid #898989;
  width: 80%;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
`;

export const ExtendedNavLink = styled(Link)`
  padding: 0.5rem;
  font-family: "Barlow Condensed", sans-serif;
  margin: 0 10%;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: #393939;
  display: inline-block;

  ${(props) => props.role === "parent" && parentDirectory}
  ${(props) => props.role === "lastChild" && lastChild}
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
  align-items: flex-start;
  justify-content: center;

  & > * {
    cursor: pointer;

    &::before {
      content: " ";
      position: absolute;
      width: 75%;
      margin-top: 1.1rem;
      transform: scaleX(0);
      height: 15px;
      background-color: #ff808134;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media ${devices.mobileL} {
    display: none;
  }
`;
