import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import FormInput from "../form-input/FormInput";

import { SignInContainer } from "./SignInStyled.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFormFields();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
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

  const logGoogleUser = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.error(err);
    }
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
            onClick={logGoogleUser}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
