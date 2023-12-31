import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.tsx";
import FormInput from "../form-input/FormInput.tsx";

import { SignInContainer } from "./SignInStyled.tsx";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/userAction.ts";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignIn() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFormFields();

    try {
      dispatch(emailSignInStart(email, password));
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("Account not found");
      }
      if (err.code === "auth/wrong-password") {
        alert("Email and password do not match");
      } else {
        console.log("User sign in encountered an error.", err);
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
