import React, { ButtonHTMLAttributes, FC } from "react";

import
{
  BaseButton,
  PrimaryButton,
  GoogleButton,
  InvertedButton,
  AccentButton,
  InvertedAccentButton,
  ButtonSpinner,
} from "./ButtonStyled.tsx";

export enum BUTTON_TYPE_CLASSES {
  primary= "primary",
  google= "google",
  inverted = "inverted",
  accent = "accent",
  invertedAccent = "invertedAccent"
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.primary): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.primary]: PrimaryButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.accent]: AccentButton,
    [BUTTON_TYPE_CLASSES.invertedAccent]: InvertedAccentButton,
  })[buttonType];

export type ButtonProps = {
  children?: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
