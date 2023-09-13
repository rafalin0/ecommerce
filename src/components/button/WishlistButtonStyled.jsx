import styled from "styled-components";

export const Base = styled.button`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  width: auto;
  font-size: 0.8rem;
  border: none;
  border-radius: 0.25rem;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Primary = styled(Base)`
  background-color: #393939;

  &:hover {
    background-color: #1f1f1f;
  }
`;

export const Secondary = styled(Base)`
  padding: 0 1rem;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

export const Outline = styled(Base)`
  color: #393939;
  border: 2px solid #393939;
  background: linear-gradient(
    to right,
    rgba(255, 129, 129, 0.2) 50%,
    white 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    background-position: left bottom;
    background-color: white;
  }
`;
