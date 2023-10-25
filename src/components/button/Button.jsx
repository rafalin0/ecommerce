import {
  PrimaryButton,
  GoogleButton,
  InvertedButton,
  ButtonSpinner,
} from "./ButtonStyled.jsx";

export const BUTTON_TYPE_CLASSES = {
  primary: "primary",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.primary) =>
  ({
    [BUTTON_TYPE_CLASSES.primary]: PrimaryButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  })[buttonType];

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
