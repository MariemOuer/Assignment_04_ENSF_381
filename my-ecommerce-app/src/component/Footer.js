import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="site-footer">  
      <div className="footer-content">  
        <p className="footer-text">  
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
        <p className="footer-extra-info">
        </p>
      </div>
    </footer>
  );
}

export default Footer;
