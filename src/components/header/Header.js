import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <nav className="Nav">
        <ul className="ul-nav">
          <li className="li-nav">
            <Link className="nav-link" to="/">
              <h1>Wadush</h1>
            </Link>
          </li>
          <li className="li-nav">
            <Link className="nav-link" to="/works">
              Works
            </Link>
          </li>
          <li className="li-nav">
            <Link className="nav-link" to="/about">
              About
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
