import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";

import { PiHeartStraight as WishlistIcon } from "react-icons/pi";
import { BsPerson as AccountIcon } from "react-icons/bs";
// import { LuSearch as SearchIcon } from "react-icons/lu";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";

import { ReactComponent as Logo } from "../../assets/BIO-Logo.svg";
import CartIcon from "../../components/cart-icon/CartIcon";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";

import {
  NavbarContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  BurgerMenu,
  BurgerBar,
  ExtendedNavContainer,
  ExtendedNavLink,
} from "./NavigationStyled.jsx";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  // changing the navbar background on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY <= 80) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  window.addEventListener("scroll", changeColor);

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("unclicked");

  // hide or show extended navigation
  const [isNavExtended, setIsNavExtended] = useState(false);

  // update
  const toggleNav = () => {
    if (!isNavExtended) {
      setBurgerClass("clicked");
    } else {
      setBurgerClass("unclicked");
    }
    setIsNavExtended((currentValue) => !currentValue);
  };

  // hide or show shopping cart
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    toggleNav();
  };

  return (
    <>
      <NavbarContainer scrolled={color}>
        <NavLinks>
          <NavLink to="/catalogue">catalogue</NavLink>

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
        <BurgerMenu onClick={toggleNav}>
          <BurgerBar menuType={burger_class} />
          <BurgerBar menuType={burger_class} />
          <BurgerBar menuType={burger_class} />
        </BurgerMenu>

        {isCartOpen && <ShoppingCart />}
      </NavbarContainer>

      {isNavExtended && (
        <ExtendedNavContainer>
          <ExtendedNavLink onClick={toggleNav} to="/catalogue/jewelry sets">
            jewelry sets
          </ExtendedNavLink>
          <ExtendedNavLink onClick={toggleNav} to="/catalogue/necklaces">
            necklaces
          </ExtendedNavLink>
          <ExtendedNavLink onClick={toggleNav} to="/catalogue/earrings">
            earrings
          </ExtendedNavLink>
          <ExtendedNavLink onClick={toggleNav} to="/catalogue/rings">
            rings
          </ExtendedNavLink>
          <ExtendedNavLink onClick={toggleNav} to="/catalogue/bracelets">
            bracelets
          </ExtendedNavLink>
          <ExtendedNavLink onClick={toggleNav} to="/wishlist">
            wishlist
          </ExtendedNavLink>
          <ExtendedNavLink onClick={toggleIsCartOpen}>cart</ExtendedNavLink>
          {currentUser ? (
            <ExtendedNavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </ExtendedNavLink>
          ) : (
            <ExtendedNavLink onClick={toggleNav} to="/account">
              SIGN IN
            </ExtendedNavLink>
          )}
        </ExtendedNavContainer>
      )}
      <Outlet />
    </>
  );
}

export default Navigation;
