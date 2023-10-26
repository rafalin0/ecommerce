import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/userSelector.ts";
import { selectIsCartOpen } from "../../store/cart/cartSelector.ts";
import { setIsCartOpen } from "../../store/cart/cartAction.ts";
import { signOutStart } from "../../store/user/userAction.ts";

import { ExtendedNavContainer, ExtendedNavLink } from "./ExtendedNavStyled.tsx";

function ExtendedNav({ toggleNav }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
    { label: "wishlist", path: "/wishlist", role: "parent" },
  ];

  // hide or show shopping cart
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    toggleNav();
  };

  const signOutUser = () => dispatch(signOutStart());

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

      <ExtendedNavLink onClick={toggleIsCartOpen} role="parent">
        cart
      </ExtendedNavLink>

      {currentUser ? (
        <ExtendedNavLink as="span" onClick={signOutUser} role="parent">
          SIGN OUT
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
