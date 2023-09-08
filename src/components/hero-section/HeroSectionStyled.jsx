import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 100%;
  min-height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2050&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.95;

  @media (max-width: 1028px) {
    & {
      position: static;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const AnnouncementContainer = styled.div`
  width: 30%;
  text-align: left;
  z-index: 10;
  position: absolute;
  bottom: 15%;
  left: 6%;

  &:first-child {
    color: #ff8181;
    font-weight: bold;

    span {
      position: inherit;
      font-size: 1.3rem;
      bottom: 90%;
      font-family: "Dancing Script", cursive;
      text-transform: capitalize;
    }

    h1 {
      font-size: 2.5rem;
      text-align: left;
      margin-top: 0;
      text-transform: uppercase;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    color: #3d2f3d;
    font-weight: normal;
  }

  @media (max-width: 1028px) {
    & {
      min-width: 100%;
      height: 50%;
      padding: 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      background-color: rgba(248, 241, 244, 0.7);
      left: 0;
      bottom: 0;

      &:first-child {
        color: #744d56;
      }
    }
  }
`;
