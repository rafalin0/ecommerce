import styled from "styled-components";

import { devices } from "../../styles/Breakpoints";

export const AnnouncementContainer = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 50%;
  padding: 7% 5%;
  background-color: rgba(248, 241, 244, 0.4);
  box-shadow: 0 0 5px 8px rgba(255, 255, 255, 0.33);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  &:first-child {
    color: #744d56;
    font-weight: bold;
    font-size: 0.7rem;

    span {
      position: inherit;
      font-size: 1.3em;
      bottom: 90%;
      font-family: "Dancing Script", cursive;
      text-transform: capitalize;
    }

    h1 {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 2.5em;
      text-align: left;
      margin-top: 0;
      text-transform: uppercase;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.1em;
    color: #3d2f3d;
    font-weight: normal;
    margin-block: 0.6em;
  }

  & > button {
    margin-top: 2em;
    font-size: 1rem;
  }

  @media ${devices.mobileL} {
    &:first-child {
      font-size: 1em;
    }
    & > button {
      font-size: 1rem;
    }
  }

  @media ${devices.laptopL} {
    &:first-child {
      font-size: 1.7em;
    }
    & > button {
      font-size: 1.7rem;
      min-width: 16rem;
      min-height: 5rem;
      border-radius: 5rem;
    }
  }
`;

export const HeroSectionContainer = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2050&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.95;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media ${devices.tablet} {
    background-size: 120%;
    ${AnnouncementContainer} {
      z-index: 10;
      position: absolute;
      align-items: flex-start;
      justify-items: flex-start;
      bottom: 13%;
      background-color: transparent;
      height: auto;
      padding: 0;
      margin-left: 5%;
      max-width: 30%;
      text-align: left;
      box-shadow: 0 0 #0000;

      &:first-child {
        color: #ff8181;
      }
    }
  }
`;
