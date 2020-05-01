import React from "react";
import desktop from "../../assets/images/heros/homepage-hero-desktop.png";
import mobile from "../../assets/images/heros/homepage-hero-mobile.png";
import HeroContent from "../homepage/HeroContent";
import BackgroundImage from "../factory/BackgroundImage";

export const Hero: React.FC = () => {
  return (
    <React.Fragment>
      {/* DESKTOP */}
      <div className="row">
        <BackgroundImage isMobile={false} url={desktop}>
          <HeroContent />
        </BackgroundImage>
      </div>

      {/* MOBILE */}
      <div className="row">
        <BackgroundImage isMobile={true} url={mobile}>
          <HeroContent />
        </BackgroundImage>
      </div>
    </React.Fragment>
  );
};
export default Hero;
