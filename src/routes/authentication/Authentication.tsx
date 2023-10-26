import React from "react";
import SignIn from "../../components/sign-in/SignIn.tsx";
import SignUp from "../../components/sign-up/SignUp.tsx";
import { AuthenticationContainer } from "./AuthenticationStyled.tsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
