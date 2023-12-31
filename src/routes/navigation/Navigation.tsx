import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cartSelector.ts";

import ShoppingCart from "../../components/shopping-cart/ShoppingCart.tsx";

import { NavbarContainer } from "./NavigationStyled.tsx";
import NavLinks from "../../components/nav-links/NavLinks.tsx";
import ExtendedNav from "../../components/extended-nav/ExtendedNav.tsx";
import BurgerMenu from "../../components/burger-menu/BurgerMenu.tsx";

function Navigation() {
  const isCartOpen = useSelector(selectIsCartOpen);

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

  return (
    <>
      <NavbarContainer scrolled={color}>
        <NavLinks
          setIsNavExtended={setIsNavExtended}
          setBurgerClass={setBurgerClass}
        />
        <BurgerMenu toggleNav={toggleNav} burgerClass={burger_class} />
        {isCartOpen && <ShoppingCart />}
      </NavbarContainer>
      {isNavExtended && <ExtendedNav toggleNav={toggleNav} />}
      <Outlet />
    </>
  );
}

export default Navigation;
