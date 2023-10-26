import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const BackgroundImage = styled.div<{imageURL: string}>`
  width: 100%;
  height: 100%;
  background-image: ${({ imageURL }) => `url(${imageURL})`};
  background-size: cover;
  background-position: center;
`;

export const DirectoryBody = styled.div`
  max-width: 30%;
  text-align: center;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  h2 {
    font-weight: light;
    font-size: 2em;
    color: #393939;
    text-transform: capitalize;
    font-family: "Dancing Script", cursive;
  }
  @media ${devices.laptopL} {
    font-size: 1.7rem;

    & > Button {
      min-width: 16rem;
      min-height: 5rem;
      border-radius: 5rem;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  /* min-width: max-content(18rem, 100%); */
  max-height: 300px;
  flex: 1 1 33%;
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      filter: blur(1px) brightness(85%);
    }
  }

  @media ${devices.mobileL} {
    flex: 1 1 30%;
  }
`;
