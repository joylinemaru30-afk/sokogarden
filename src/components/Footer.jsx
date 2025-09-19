import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./stylings/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Brand Section */}
        <div className="brand">
          <h3>sokogarden</h3>
          <p>We sell products of good quality</p>
        </div>

        {/* Social Links */}
        <div className="social-list">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} sokogarden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
