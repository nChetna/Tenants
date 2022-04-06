import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/profile" className="nav-link" activeClassName="active">
          Profile
        </NavLink>
      </li>
    </ul>
  );
}
