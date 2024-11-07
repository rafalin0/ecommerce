import React from "react";


import { HomeButtonContainer, ButtonText, Crown } from "./HomeButtonStyled.tsx";

const HomeButton = () => {
  return (
    <HomeButtonContainer to="/">
      <Crown />
      <ButtonText>BLING IT ON</ButtonText>
    </HomeButtonContainer>
  )
}

export default HomeButton;
