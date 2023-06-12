import React from "react";
import Subscribe from "../../components/subscribeInput";
import Button from "../../components/button";
import img from "./contact.png";
import "./contact.css";
import MediumTitle from "../../components/medium_title";
import SmallParagraph from "../../components/smallParagraph";
function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-img">
        <img src={img} alt="img" />
      </div>
      <div className="subscribe-right">
        <MediumTitle>Contact Us</MediumTitle>
        <SmallParagraph>
          Discover your current English level by taking our free online English
          test.Sign up to our newsletter for learning tips and free resources
        </SmallParagraph>
        <div className="subscribe-input">
          <Subscribe className="subscribeInp"></Subscribe>
          <Button className="btn-sub" padding="p-15-52">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
