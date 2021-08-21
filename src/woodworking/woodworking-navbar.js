import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      YUNYI ZHU
    </div>
    <div className="selections">
      <Link to="/woodworking">
        Portfolio
      </Link>
      {/*<Link to="/woodworking">*/}
      {/*  Plans*/}
      {/*</Link>*/}
      <Link to="/woodworking/about">
        About
      </Link>
    </div>
  </nav>
)

export default Navbar;