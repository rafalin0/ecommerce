import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/userSelector.ts";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cartSelector.ts";
import { selectWishlistItems } from "../../store/wishlist/wishlistSelector.ts";
import { setIsCartOpen } from "../../store/cart/cartAction.ts";

import { ExtendedNavContainer, ExtendedNavLink } from "./ExtendedNavStyled.tsx";

function ExtendedNav({ toggleNav }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const wishlistItems = useSelector(selectWishlistItems);

  const navigationItems = [
    { label: "catalogue", path: "/catalogue", role: "parent" },
    {
      label: "jewelry sets",
      path: "/catalogue/jewelry sets",
    },
    { label: "necklaces", path: "/catalogue/necklaces" },
    { label: "earrings", path: "/catalogue/earrings" },
    { label: "rings", path: "/catalogue/rings" },
    { label: "bracelets", path: "/catalogue/bracelets", role: "lastChild" },
  ];

  // hide or show shopping cart
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    toggleNav();
  };

  return (
    <ExtendedNavContainer>
      {navigationItems.map((item, index) => (
        <ExtendedNavLink
          key={index}
          onClick={toggleNav}
          to={item.path}
          role={item.role}
        >
          {item.label}
        </ExtendedNavLink>
      ))}

      <ExtendedNavLink to="/wishlist" onClick={toggleNav} role="parent">
        <span>wishlist</span>
        <span>{wishlistItems.length}</span>
      </ExtendedNavLink>

      <ExtendedNavLink onClick={toggleIsCartOpen} as="p" role="parent">
        <span>cart</span>
        <span>{cartCount}</span>
      </ExtendedNavLink>

      {currentUser ? (
        <ExtendedNavLink to="/account" onClick={toggleNav} role="parent">
          ACCOUNT
        </ExtendedNavLink>
      ) : (
        <ExtendedNavLink to="/account" onClick={toggleNav} role="parent">
          SIGN IN
        </ExtendedNavLink>
      )}
    </ExtendedNavContainer>
  );
}

export default ExtendedNav;
