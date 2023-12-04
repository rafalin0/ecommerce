import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

import { selectIsCartOpen } from "../../store/cart/cartSelector.ts";
import { setIsCartOpen } from "../../store/cart/cartAction.ts";

import { ReactComponent as Logo } from "../../assets/BIO-Logo.svg";
import CartIcon from "../../components/cart-icon/CartIcon.tsx";
import WishlistIcon from "../wishlist-icon/WishlistIcon.tsx";

import {
  LinksContainer,
  NavLink,
  LogoContainer,
  LeftLinks,
  RightLinks,
  AccountIcon,
} from "./NavLinksStyled.tsx";
import DropdownMenu from "../dropdown-menu/DropdownMenu.tsx";

const NavLinks:React.FC<{ setIsNavExtended: Function; setBurgerClass: Function }> = ({ setIsNavExtended, setBurgerClass }) => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  // navbar dropdown menu - categories
  const [showDropdown, setShowDropdown] = useState(false);

  // hide or show shopping cart
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    closeNav();
  };

  const closeNav = () => {
    setBurgerClass("unclicked");
    setIsNavExtended(false);
  };



  return (
    <LinksContainer>
      <LeftLinks onMouseUp={() => setShowDropdown(false)}>
        <NavLink
          to="/catalogue"
          linkType={"text"}
          onMouseOver={() => setShowDropdown(true)}
        >
          catalogue
        </NavLink>
      </LeftLinks>
      {showDropdown && <DropdownMenu toggle={setShowDropdown} />}

      <LogoContainer
        to="/"
        onMouseUp={() => setShowDropdown(false)}
        onClick={closeNav}
      >
        <Logo className="logo" />
      </LogoContainer>

      <RightLinks onMouseUp={() => setShowDropdown(false)}>
        <NavLink to="/wishlist"  linkType="icon">
          <WishlistIcon />
        </NavLink>

        <NavLink as="span" onClick={toggleIsCartOpen} linkType="icon">
          <CartIcon />
        </NavLink>

        <NavLink to="/account"  linkType="icon">
          <AccountIcon />
        </NavLink>
        
      </RightLinks>
    </LinksContainer>
  );
};

export default NavLinks;
