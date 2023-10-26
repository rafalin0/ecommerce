import { Link } from "react-router-dom";
import styled from "styled-components";

export const Dropdown = styled.div`
  background-color: pink;
  position: absolute;
  top: 70px;
  left: 4vw;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DropdownItem = styled(Link)`
  display: inline;
  margin: 10px;
  width: auto;

  &::before {
    content: "";
    position: absolute;
    margin-top: 0.5rem;
    margin-right: 10px;
    justify-content: flex-end;
    width: 70%;
    transform: scaleX(0);
    height: 10px;
    background-color: #ff808134;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
