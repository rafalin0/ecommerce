import styled from "styled-components";

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartCount = styled.span`
  position: absolute;
  left: 0.6rem;
  top: 0.7rem;
  border: none;
  outline: none;
  font-size: 0.85rem;
  white-space: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background-color: #fe9f9f;
  overflow: hidden;
`;
