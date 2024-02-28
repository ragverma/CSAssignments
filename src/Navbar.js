// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-left">
          <span>Navbar</span>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
        <div className="nav-right">
        <div>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
        </div>
      </nav>
    );
  };
export default Navbar;
