import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import the hamburger icon
import './Navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`navbar ${showMenu ? 'show' : ''}`}>
      <div className="navbar-title">Yatrik</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="services">Services</a></li>
        <li><a href='signUp'>SignUp</a></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </div>
  );
};

export default Navbar;
