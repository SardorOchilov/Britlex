import React from "react";
import "./about_us.css";
import MediumTitle from "../../components/medium_title";
import SmallParagraph from "../../components/smallParagraph";
import business from "./busines.png";

function AboutUs() {
  return (
    <div className="about_content">
      <div className="about_text">
        <MediumTitle>About Us</MediumTitle>
        <SmallParagraph>
          The model offers a framework for discussing problems related to the
          user's experience, as well as possible ways and means of solving them.
          Application development begins at the top level (strategy), where the
          future software product is described quite abstractly from the point
          of view of the expectations of both users and the customer.
        </SmallParagraph>
        <div className="services-boxes">
          <div className="service-box">
            <MediumTitle>800</MediumTitle>
            <SmallParagraph>Pupils</SmallParagraph>
          </div>
          <div className="service-box">
            <MediumTitle>18</MediumTitle>
            <SmallParagraph>Teachers</SmallParagraph>
          </div>
          <div className="service-box">
            <MediumTitle>6</MediumTitle>
            <SmallParagraph>Foreign languages</SmallParagraph>
          </div>
        </div>
      </div>
      <div className="about_img">
        <img src={business} alt="" />
      </div>
    </div>
  );
}

export default AboutUs;
