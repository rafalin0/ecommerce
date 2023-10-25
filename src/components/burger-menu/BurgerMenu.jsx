import { BurgerContainer, BurgerBar } from "./BurgerMenuStyled";

const BurgerMenu = ({ toggleNav, burgerClass }) => {
  const toggleClassName = () => {
    toggleNav();
  };

  return (
    <BurgerContainer onClick={toggleClassName}>
      <BurgerBar menuType={burgerClass} />
      <BurgerBar menuType={burgerClass} />
      <BurgerBar menuType={burgerClass} />
    </BurgerContainer>
  );
};

export default BurgerMenu;
