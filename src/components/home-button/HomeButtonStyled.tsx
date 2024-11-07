import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/crown.svg"
import { devices } from "../../styles/Breakpoints";
import { Link } from "react-router-dom";

export const Crown = styled(Icon)`
  width: auto;
  height: 2.3em;
  rotate: 0deg;
  z-index: 10;
  margin-top: 1rem;

  rotate: -20deg;
  position: absolute;
  bottom: 40%;
  right: 83%
`;

export const ButtonText = styled.span`
position: relative;
font-family: "Barlow Condensed", sans-serif;
color: #393939;
text-transform: uppercase;
font-weight: 700;
font-size: 1.5em;
display: block;
`

export const HomeButtonContainer = styled(Link)`
  position: relative;
  cursor: pointer;
  min-width:max(100px, 100%);

  display: flex;
  justify-content: start;
  align-items: center;
  align-content-center;

  & > ${Crown} {
  transition: transform 0.5s ease-in-out;
  }

   & > ${ButtonText} {
    transition-duration: 0.3s;
  }

  &:hover {
    & > ${Crown} {
      transform: translate(270%, 95%) rotate(40deg);
    } 
  }
  }
`;

export const HeaderHomeButton = styled(HomeButtonContainer)`
  @media ${devices.mobileL} {
    &:hover {
      & > ${Crown} {
        transform: translate(80%, 70%) rotate(20deg);
        height: 4em;
      } 
      & > ${ButtonText} {
        color: #fff;
      }
  }

`;
