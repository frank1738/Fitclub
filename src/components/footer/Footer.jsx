import React from 'react';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Logo from '../../assets/logo.png';
import Linkedin from '../../assets/linkedin.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
          <img src={Linkedin} alt="linkedin" />
        </div>
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="blurr footer-blurr-1"></div>
      <div className="blurr footer-blurr-2"></div>
    </footer>
  );
};

export default Footer;
