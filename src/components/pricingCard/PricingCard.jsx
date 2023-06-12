import React from "react";
import "./pricing.css";
import SmallTitle from "../small_title";
import SmallParagraph from "../smallParagraph";

function PricingCard(props) {
  return (
    <div className="pricing-card">
      <div className="price-con">
        <div className="price-img">
          <img src={props.img} alt="" />
        </div>
        <SmallTitle>{props.title}</SmallTitle>
        <SmallParagraph>{props.paragraph}</SmallParagraph>
      </div>
      <p className="price">
        <span className="Amount">{props.price}</span> per month
      </p>
    </div>
  );
}

export default PricingCard;
