import React from "react";
import logo from "./Britlex.png";
import menu from "./menu.png";
import "./navbar.scss";
const Navbar = () => {

  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="skills">Skills</a>
        </li>
        <li>
          <a href="about_us">About Us</a>
        </li>
        <li>
          <a href="pricing">Pricing</a>
        </li>
        <li>
          <a href="contacts">Contacts</a>
        </li>
      </ul>
      <button className="p-15-5">Let's Talk</button>
      <img className="menu" src={menu} alt="menu" /> 
    </nav>
  );
};

export default Navbar;
