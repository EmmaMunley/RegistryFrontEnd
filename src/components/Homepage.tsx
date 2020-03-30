import React from 'react';
import amazon from '../assets/images/partners/amazon.png';
import target from '../assets/images/partners/target.png';
import bedbath from '../assets/images/partners/bed-bath.png';
import crate from '../assets/images/partners/crate.png';
import wayfair from '../assets/images/partners/wayfair.png';
import macys from '../assets/images/partners/macys.png';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      // hero
      <div
        className="jumbotron"
        style={{
          backgroundImage: `url(${require('../../src/assets/images/heros/homepage-hero-desktop.png')})`,
        }}
      >
        <h1 className="display-4 white text-shadow left-indent">
          Make Your Wedding Registry
          <br /> Dreams Come True
        </h1>

        <div className="row left-indent">
          <div className="flex left-indent right-indent column">
            <a
              className="btn btn-primary btn-lg btn-block "
              href="#"
              role="button"
            >
              Find a Couple
            </a>
            <p className="text-center">For wedding guests!</p>
          </div>

          <div className=" flex left-indent right-indent column">
            <a
              className="btn btn-secondary btn-lg btn-block"
              href="#"
              role="button"
            >
              Sign Up
            </a>
            <p className="text-center">Already a member? Log In</p>
          </div>
        </div>
      </div>
      {/* logos */}
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
          <div className="col">
            <img src={amazon} className="partnerLogo" alt="Amazon" />
          </div>
          <div className="col">
            {' '}
            <img src={target} className="partnerLogo" alt="Target" />
          </div>
          <div className="col">
            {' '}
            <img src={crate} className="partnerLogo" alt="Crate" />
          </div>
          <div className="col">
            {' '}
            <img src={bedbath} className="partnerLogo" alt="Bed Bath" />
          </div>
          <div className="col">
            {' '}
            <img src={wayfair} className="partnerLogo" alt="Wayfair" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HomePage;
