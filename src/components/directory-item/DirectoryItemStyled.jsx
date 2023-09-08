import styled from "styled-components";

export const BackgroundImage = styled.div`
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
    font-size: 2rem;
    color: #393939;
    text-transform: capitalize;
    font-family: "Dancing Script", cursive;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 15rem;
  max-height: 300px;
  flex: 1 1 auto;
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
`;
