import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className="logo-image" src="https://drive.google.com/uc?export=view&id=1lZF67-i4P79I_YwaODcUimX42VO1blFu" alt="Logio" />
          <a className="logo-text" href="#">CSFusion.ai</a>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">Home</a>
          <a href="#" className="navbar-link">Articles</a>
          <a href="#" className="navbar-link">About Us</a>
          <a href="#" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
