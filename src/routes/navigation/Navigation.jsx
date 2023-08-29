import React, { Fragment, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { PiHeartStraight as WishlistIcon } from "react-icons/pi";
import { BsPerson as AccountIcon } from "react-icons/bs";
import { LuSearch as SearchIcon } from "react-icons/lu";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";

import { ReactComponent as Logo } from "../../assets/BIO-Logo.svg";
import CartIcon from "../../components/cart-icon/CartIcon";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";

import "./navigation.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  // changing the navbar background on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Fragment>
        <div className={color ? "navigation scrolled" : "navigation"}>
          <div className="nav-links-container left">
            <Link to="/catalogue" className="nav-link">
              catalogue
            </Link>
            <Link to="/" className="nav-link">
              <SearchIcon />
            </Link>
          </div>
          <div className="nav-links-container">
            <Link className="logo-container" to="/">
              <Logo className="logo" />
            </Link>
          </div>

          <div className="nav-links-container right">
            <Link className="nav-link" to="/wishlist">
              <WishlistIcon />
            </Link>
            <Link className="nav-link" onClick={toggleIsCartOpen}>
              <CartIcon />
            </Link>
            {currentUser ? (
              <span onClick={signOutUser} className="nav-link">
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/account">
                <AccountIcon />
              </Link>
            )}
          </div>
          {isCartOpen && <ShoppingCart />}
        </div>
        <Outlet />
      </Fragment>
    </div>
  );
}

export default Navigation;
