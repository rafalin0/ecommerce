import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { selectCurrentUser } from "../../store/user/userSelector.ts";
import { selectIsCartOpen } from "../../store/cart/cartSelector.ts";
import { setIsCartOpen } from "../../store/cart/cartAction.ts";
import { signOutStart } from "../../store/user/userAction.ts";

import { ReactComponent as Logo } from "../../assets/BIO-Logo.svg";
import CartIcon from "../../components/cart-icon/CartIcon";

import {
  LinksContainer,
  NavLink,
  LogoContainer,
  LeftLinks,
  RightLinks,
  AccountIcon,
  WishlistIcon,
} from "./NavLinksStyled";
import DropdownMenu from "../dropdown-menu/DropdownMenu";

const NavLinks = ({ toggleNav }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [showDropdown, setShowDropdown] = useState(false);

  // hide or show shopping cart
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    toggleNav();
  };

  const signOutUser = () => dispatch(signOutStart());

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

      <LogoContainer to="/" onMouseUp={() => setShowDropdown(false)}>
        <Logo className="logo" />
      </LogoContainer>

      <RightLinks onMouseUp={() => setShowDropdown(false)}>
        <NavLink to="/wishlist">
          <WishlistIcon />
        </NavLink>

        <NavLink onClick={toggleIsCartOpen}>
          <CartIcon />
        </NavLink>

        {currentUser ? (
          <NavLink as="span" onClick={signOutUser} linkType={"text"}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to="/account">
            <AccountIcon />
          </NavLink>
        )}
      </RightLinks>
    </LinksContainer>
  );
};

export default NavLinks;
