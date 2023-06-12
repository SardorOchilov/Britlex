import React from "react";
import PricingCard from "../../components/pricingCard";
import "./pricing.css";
import price from "./pricing_1.png";
import price2 from "./pricing_2.png";
import price3 from "./pricing_3.png";
import MediumTitle from '../../components/medium_title';
function Pricing() {
  return (
    <div className="pricing-section">
      <MediumTitle className="pricing-title">Pricing</MediumTitle>
      <div className="pricing-content">
        <PricingCard className="price-card"
          img={price}
          title="Self-study online course"
          paragraph="Start learning English online in live classes
with qualified EC teachers and students 
from all over the world."
          price="£5.99"
        ></PricingCard>
        <PricingCard className="price-card"
          img={price2}
          title="Live online classes"
          paragraph="Interactive group classes with expert
          teachers. Free 7-day trial"
          price="£5.99"
        ></PricingCard>
        <PricingCard className="price-card"
          img={price3}
          title="Personal Tuition"
          paragraph="Online one-to-one English tutoring – enjoy
          our first session for only $1"
          price="£5.99"
        ></PricingCard>
      </div>
    </div>
  );
}

export default Pricing;
