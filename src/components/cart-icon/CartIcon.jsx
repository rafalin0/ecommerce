import { useContext } from "react";
import { LiaShoppingBagSolid as ShoppingIcon } from "react-icons/lia";

import { CartContext } from "../../contexts/CartContext";

import { CartIconContainer, CartCount } from "./CartIconStyled.jsx";

function CartIcon() {
  const { cartCount } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
}

export default CartIcon;
