import styled from "styled-components";

export const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: #fff;
  background-color: #744d56;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:first-child {
    font-size: 1.8rem;
  }

  &::before {
    position: absolute;
    content: "";
    font-size: 1rem;
  }
`;

export const ExpandingButton = styled.div`
  cursor: pointer;
  border: none;

  &:hover {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 50% / 100%;
    width: 6.5rem;
    height: 3rem;
    background-color: #fff;
    animation: animate 0.5s;

    @keyframes animate {
      from {
        border-radius: 50%;
        width: 3rem;
      }
    }

    ${IconContainer} {
      padding: 0 5px;
      overflow: visible;
      width: 6.5rem;
      color: #393939;
      background-color: transparent;
      transition: all 0.5s ease-in-out;

      justify-content: flex-end;
      transition: justify-content 0.5s ease-in-out;

      &::before {
        animation: slide-right 1s forwards;
        overflow: visible;
        width: 4rem;
        text-align: left;
        margin-bottom: 0.2rem;
        margin-left: 0.2rem;
        transform: translateX(-50%);

        @keyframes slide-right {
          from {
            content: "";
            opacity: 0;
          }
          to {
            transform: translateX(-30%);
            content: "view more";
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    width: 6.5rem;
    height: 3rem;
    border-radius: 50% / 100%;
    background-color: #744d56;
    color: #fff;

    ${IconContainer} {
      padding: 0 5px;
      background-color: transparent;
      width: 100%;
      justify-content: flex-end;

      &::before {
        position: absolute;
        content: "view more";
        width: 4rem;
        margin-bottom: 0.2rem;
        margin-right: 1.2rem;
      }
    }

    &:hover {
      background-color: #65434b;
      animation: none;

      ${IconContainer} {
        color: #fff;
        background-color: transparent;
        &::before {
          color: #fff;
          animation: none;
          transform: none;
        }
      }
    }
  }
`;
