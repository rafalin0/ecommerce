import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem 4rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
`;

export const FooterLinksContainer = styled.div`
  display: none;
  @media ${devices.mobileL} {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterIconLinkContainer = styled.div`
 text-align: left;
 display: flex;
 flex-direction: column;
 gap: 1rem;
`

export const FooterIconLink = styled(Link)`
  display: flex;
  gap: 1rem;

`

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem; /* Space between icons */
  align-items: center;
`;


export const SocialIconLink = styled.a`
  font-size: 1 rem;
  transition: color 0.3s;
  background-color: lightgray;
  padding: 5px;
  border-radius: 5px;
  m-auto;
  cursor: pointer;

  &:hover {
    background-color: rgb(254, 159, 159);
  }
`;


export const FooterTextLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  width: 30%;
  text-align: left;

  span {
    font-weight: bold;
    line-height: 1;
  }
`;

export const FooterTextLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: rgb(254, 159, 159);
    font-weight: bold;
  }
`;

export const CopyrightContainer = styled.div`
  height: 3rem;
  font-size: 10px;
  border-top: 1px solid #fff;
  padding-top: 0.5rem;

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;
