import styled from "styled-components";

const BaseButton = styled.button`
  min-width: 8rem;
  min-height: 2.5rem;
  cursor: pointer;
  width: auto;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 2rem;

  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #393939;
  color: white;
  &:hover {
    background-color: #1f1f1f;
  }
`;

export const GoogleButton = styled(BaseButton)`
  padding: 0 1rem;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

export const InvertedButton = styled(BaseButton)`
  color: #393939;
  border: 1px solid #393939;
  background: linear-gradient(
    to top,
    rgba(255, 129, 129, 0.3) 50%,
    rgba(255, 129, 129, 0) 50%
  );
  background-size: 100% 200%;
  background-position: right top;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left bottom;
  }
`;
