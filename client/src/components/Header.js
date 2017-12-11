import React from 'react';
// import { BrowserRouter as Router, Route, Link} from "react-router-dom"

const linkStyle = {
  marginRight: 15
}

const LinkGoAbout = () => {

}

const Header = () => (
    <div>
        {/* <Link href="/"> */}
          <a href="/admin.html" style={linkStyle}>Home</a>
        {/* </Link> */}
        {/* <Link href="/about"> */}
        <button onClick={LinkGoAbout} style={linkStyle}>About</button>
        {/* </Link> */}
        {/* <Link href="/productos"> */}
          <a href="/productos" style={linkStyle}>Productos</a>
        {/* </Link> */}
    </div>
)

export default Header