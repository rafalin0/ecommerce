import styled from "styled-components";

import { devices } from "../../styles/Breakpoints";

export const Main = styled.div`
  padding: 5%;
  height: 100%;
  @media ${devices.mobileL} {
    padding: 10vh 5vw 10vh 10vw;
    width: max(60%, 1000px);
  }
`;

export const Sidebar = styled.div`
  height: inherit;
  order: -1;
  border-left: 1px solid #dedede;
  overflow-y: scroll;

  @media ${devices.mobileL} {
    background-color: #f6f6f6;
    padding: 10vh 10vw 10vh 2vw;
    order: 0;
    width: max(40%, 800px);
  }
`;

export const CheckoutContainer = styled.div`
  background-color: #fff;
  padding-top: 5vh;
  font-family: "Barlow Condensed", sans-serif;
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #393939;

  @media ${devices.mobileL} {
    padding-top: 0;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    overflow: none;
  }
`;
