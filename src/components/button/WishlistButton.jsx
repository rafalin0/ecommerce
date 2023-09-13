import { Primary, Secondary, Outline } from "./WishlistButtonStyled.jsx";

export const BUTTON_CLASSES = {
  primary: "primary",
  secondary: "secondary",
  outline: "outline",
};

const getButton = (buttonType = BUTTON_CLASSES.primary) =>
  ({
    [BUTTON_CLASSES.primary]: Primary,
    [BUTTON_CLASSES.secondary]: Secondary,
    [BUTTON_CLASSES.outline]: Outline,
  }[buttonType]);

const WishlistButton = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default WishlistButton;
