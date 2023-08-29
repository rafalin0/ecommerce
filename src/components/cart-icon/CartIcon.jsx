import { LiaShoppingBagSolid as ShoppingIcon } from "react-icons/lia";

import "./cart-icon.scss";

function CartIcon() {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">12</span>
    </div>
  );
}

export default CartIcon;
