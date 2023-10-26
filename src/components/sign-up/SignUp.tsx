import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import { signUpStart } from "../../store/user/userAction.ts";

import FormInput from "../form-input/FormInput.tsx";
import Button from "../button/Button.tsx";

import { SignUpContainer } from "./SignUpStyled.tsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      }
      if ((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD) {
        alert("Password should be at least 6 characters");
      } else {
        console.log("User creation encountered an error.", error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <div>
        <h2>I do not have an account</h2>
        <p>Sign up with your email and password</p>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <div className="buttons-container">
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
