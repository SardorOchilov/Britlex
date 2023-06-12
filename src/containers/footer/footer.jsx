import React from "react";
import img from "./Britlex.png";
import "./footer.css";
import BigParagraph from "../../components/bigParagraph";

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={img} alt="Logo" />
      <BigParagraph>
        Terms and Conditions • Privacy Policy • Cookie Policy
      </BigParagraph>
    </div>
  );
}

export default Footer;
