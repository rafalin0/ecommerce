import styled from "styled-components";

export const ExpandingButton = styled.div`
  cursor: pointer;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  color: #fff;
  background-color: #7596b8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:first-child {
    font-size: 1.5rem;
  }

  &::before {
    position: absolute;
    content: "";
    font-size: 1rem;
  }

  &:hover {
    cursor: pointer;
    position: relative;
    padding: 0 5px;
    overflow: visible;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    transition: justify-content 0.5s ease-in-out;

    color: #393939;
    background-color: #fff;
    border: 2px solid #393939;
    border-radius: 2rem;
    width: 6.5rem;
    height: 2.5rem;
    animation: animate 0.5s;

    @keyframes animate {
      from {
        border-radius: 2rem;
        width: 2.5rem;
      }
    }

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

  @media (max-width: 992px) {
    min-width: 6.5rem;
    border: 2px solid #393939;
    color: #393939;
    background-color: #fff;
    padding: 0 5px;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    line-height: 1;

    &::before {
      position: absolute;
      content: "view more";
      width: 4rem;
      margin-bottom: 0.3rem;
      margin-right: 1.2rem;
      color: #393939;
      transform: none;
    }

    &:hover {
      box-shadow: inset 7rem 0 3.5rem 0 rgba(117, 150, 184, 1);
      transition: box-shadow 0.8s;
      &::before {
        animation: none;
        transform: none;
        margin-bottom: 0.3rem;
        margin-right: 1.2rem;
      }
    }
  }
`;
