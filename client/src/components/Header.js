import React from 'react';
import {
  NavLink
} from "react-router-dom";

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/products" style={linkStyle}>Products</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
    </div>
)

export default Header