import { useContext } from "react";
import { LiaShoppingBagSolid as ShoppingIcon } from "react-icons/lia";

import { CartContext } from "../../contexts/CartContext";

import "./cart-icon.scss";

function CartIcon() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
