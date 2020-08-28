import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <h1>Wadush</h1>
      <nav className="Nav">
        <ul className="ul-nav">
          <li className="li-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="li-nav">
            <Link className="nav-link" to="/works">
              Works
            </Link>
          </li>
          <li className="li-nav">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
