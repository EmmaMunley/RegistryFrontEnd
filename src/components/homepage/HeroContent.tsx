import React from "react";
import { PrimaryButton, SecondaryButton } from "../factory/Buttons";
import { PrimaryHeader, Paragraph } from "../factory/Typography";

const HeroContent: React.FC = () => {
  return (
    <React.Fragment>
      <PrimaryHeader className="display-4 white text-shadow left-indent">
        Make Your Wedding Registry <br></br> Dreams Come True
      </PrimaryHeader>

      <div className="row left-indent">
        <div className="flex left-indent right-indent column">
          <PrimaryButton url="placeholder"> Find a Couple </PrimaryButton>
          <Paragraph color="white" textAlign="center">
            For wedding guests!
          </Paragraph>
        </div>

        <div className=" flex left-indent right-indent column">
          <SecondaryButton url="placeholder"> Sign Up </SecondaryButton>
          <Paragraph color="white" textAlign="center">
            Already a member? Log In!
          </Paragraph>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HeroContent;
