import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/woodworking">
        YUNYI ZHU
      </Link>
    </div>
    <div className="selections">
      <Link to="/woodworking">
        Portfolio
      </Link>
      <Link to="/woodworking/about">
        About
      </Link>
    </div>
  </nav>
)

export default Navbar;