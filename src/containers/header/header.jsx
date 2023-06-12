import React from "react";
import "./header.css";
import Navbar from "../../components/navbar";
import BigTitle from "../../components/big_title";
import BigParagraph from "../../components/bigParagraph";
import Button from "../../components/button";
import main from "./main.png";
function Header() {
  return (
    <div className="header">
      <Navbar></Navbar>
      <div className="header_content">
        <div className="header_text">
          <BigTitle>Learn Any Foreign Language</BigTitle>
          <BigParagraph>
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </BigParagraph>
          <Button className="btn" padding="p-32-118">Get started</Button>
        </div>
        <div className="header_img">
          <img src={main} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
