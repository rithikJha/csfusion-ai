import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social">
          <a href="https://www.instagram.com/CSFusion.ai/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} CS Fusion | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
