import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import "./NavMedia.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="container">
      <nav>
        <div className="nav-logo">Listee Travel</div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Destinations</li>
          <li>Tours</li>
          <li>Shop</li>
          <li>Blogs</li>
        </ul>
        <div className="nav-login">
          <button className="nav-SignIn">Sign in</button>
          <button className="nav-SignUp">SignUp</button>
        </div>
        <button className="nav-hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* Modal */}
      {menuOpen && (
        <div className="modal">
          <div className="modal-content">
            <ul className="modal-nav-items">
              <li>Home</li>
              <li>About Us</li>
              <li>Destinations</li>
              <li>Tours</li>
              <li>Shop</li>
              <li>Blogs</li>
            </ul>
            <div className="nav-model-login">
              <button className="nav-model-SignIn">Sign in</button>
              <button className="nav-model-SignUp">SignUp</button>
            </div>
            <button className="close-modal" onClick={toggleMenu}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
