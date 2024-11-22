import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    // <div className="container">
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-title">
            <h1>Listee Travel</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="footer-icons">
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
            </div>
          </div>
          <div className="footer-about">
            <h3>About</h3>
            <ul className="footer-items">
              <li>Menu</li>
              <li>Features</li>
              <li>News & Blogs</li>
              <li>Help & Supports</li>
            </ul>
          </div>
          <div className="footer-about">
            <h3>Company</h3>
            <ul className="footer-items">
              <li>How we work</li>
              <li>Terms of service</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul className="footer-items">
              <li>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </li>
              <li>+1 202-918-2132</li>
              <li>listeetravel@mail.com</li>
              <li>www.listeetravel.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
