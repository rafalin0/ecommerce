import React, { Fragment, useState, useContext } from "react";
import { Outlet } from "react-router-dom";

import { PiHeartStraight as WishlistIcon } from "react-icons/pi";
import { BsPerson as AccountIcon } from "react-icons/bs";
import { LuSearch as SearchIcon } from "react-icons/lu";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";

import { ReactComponent as Logo } from "../../assets/BIO-Logo.svg";
import CartIcon from "../../components/cart-icon/CartIcon";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./NavigationStyled.jsx";

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
        <NavigationContainer scrolled={color}>
          <NavLinks>
            <NavLink to="/catalogue">catalogue</NavLink>
            <NavLink to="/">
              <SearchIcon />
            </NavLink>

            <LogoContainer to="/">
              <Logo className="logo" />
            </LogoContainer>

            <NavLink to="/wishlist">
              <WishlistIcon />
            </NavLink>
            <NavLink onClick={toggleIsCartOpen}>
              <CartIcon />
            </NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/account">
                <AccountIcon />
              </NavLink>
            )}
          </NavLinks>
          {isCartOpen && <ShoppingCart />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    </div>
  );
}

export default Navigation;
