import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-between header">
      <div className="flex flex-gap-1 logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="flex flex-gap-2">
        <div className="flex flex-between menu">
          <Link className="link" to="">
            Home
          </Link>
          <Link className="link" to="/profiles">
            Profiles
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
        </div>

        <div className="flex flex-gap-1 btns">
          <button className="header-btn" type="button">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
