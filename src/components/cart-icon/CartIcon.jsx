import { useSelector } from "react-redux";
import { LiaShoppingBagSolid as ShoppingIcon } from "react-icons/lia";

import { selectCartCount } from "../../store/cart/cartSelector.js";

import { CartIconContainer, CartCount } from "./CartIconStyled.jsx";

function CartIcon() {
  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
}

export default CartIcon;
