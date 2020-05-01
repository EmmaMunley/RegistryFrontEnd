import React from "react";
import Hero from "./homepage/Hero";
import PartnerLogos from "./homepage/PartnerLogos";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <Hero />
        <PartnerLogos />
      </div>
    </React.Fragment>
  );
};
export default HomePage;
