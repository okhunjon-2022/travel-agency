import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;
