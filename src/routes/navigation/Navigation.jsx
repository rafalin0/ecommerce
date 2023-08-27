import React, { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Logo2 } from "../../assets/Logo-3.svg";
import "./navigation.scss";

function Navigation() {
  // changing the logo on mouseover and mouseout
  const [isMouseOver, setIsMouseOver] = useState(false);

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
        <div
          onMouseOver={() => {
            setIsMouseOver(true);
          }}
          onMouseOut={() => {
            setIsMouseOver(false);
          }}
          className={color ? "navigation scrolled" : "navigation"}
        >
          <div className="nav-links-container left">
            <Link to="/" className="nav-link">
              catalogue
            </Link>
            <Link to="/" className="nav-link">
              Search
            </Link>
          </div>
          <div className="nav-links-container">
            <Link className="logo-container" to="/">
              {isMouseOver || color ? (
                <Logo className="logo" />
              ) : (
                <Logo2 className="logo" />
              )}
            </Link>
          </div>

          <div className="nav-links-container right">
            <Link className="nav-link" to="/wishlist">
              Wishlist
            </Link>
            <Link className="nav-link" to="/account">
              Account
            </Link>
            <Link className="nav-link">Cart</Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    </div>
  );
}

export default Navigation;
