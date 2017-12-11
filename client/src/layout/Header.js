import React from 'react';
import PropTypes from 'prop-types'
// import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import { Link } from 'react-router-dom'

const linkStyle = {
  marginRight: 15
}

const LinkGoAbout = () => {
  
}

const Header = (props) => (
  <nav>
    <Link style={linkStyle} to="/">Home</Link>
    <Link style={linkStyle} to="/productos">Productos</Link>
  </nav>
)

Header.defaultProps = {
}

Header.propTypes = {
}

export default Header