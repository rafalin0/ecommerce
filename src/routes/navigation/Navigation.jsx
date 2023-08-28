import React, { Fragment, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { PiHeartStraight } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { LiaShoppingBagSolid } from "react-icons/lia";

import { UserContext } from "../../contexts/UserContext";
import { ReactComponent as Logo } from "../../assets/BIO-Logo.svg";

import { signOutUser } from "../../utils/firebase/firebase";

import "./navigation.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);

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

  return (
    <div>
      <Fragment>
        <div className={color ? "navigation scrolled" : "navigation"}>
          <div className="nav-links-container left">
            <Link to="/catalogue" className="nav-link">
              catalogue
            </Link>
            <Link to="/" className="nav-link">
              <LuSearch />
            </Link>
          </div>
          <div className="nav-links-container">
            <Link className="logo-container" to="/">
              <Logo className="logo" />
            </Link>
          </div>

          <div className="nav-links-container right">
            <Link className="nav-link" to="/wishlist">
              <PiHeartStraight />
            </Link>
            <Link className="nav-link">
              <LiaShoppingBagSolid />
            </Link>
            {currentUser ? (
              <span onClick={signOutUser} className="nav-link">
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/account">
                <BsPerson />
              </Link>
            )}
          </div>
        </div>
        <Outlet />
      </Fragment>
    </div>
  );
}

export default Navigation;
