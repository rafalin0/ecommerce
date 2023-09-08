import styled from "styled-components";

export const ItemImage = styled.img``;

export const CheckoutItemDesc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  img {
    height: 70px;
    width: 70px;
    border: 1px solid #bebdbc;
    filter: grayscale(30%);
  }
  span {
    position: relative;
    right: 0.8rem;
    bottom: 2rem;
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
    background-color: #71706f;
    color: #fff;
    overflow: hidden;
  }
  p {
    position: relative;
    justify-self: flex-start;
    right: 1rem;
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    flex-wrap: wrap;
    max-width: 20rem;
  }
`;

export const CheckoutItemContainer = styled.div`
  height: auto;
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: auto;
    min-width: 45px;
  }
`;
