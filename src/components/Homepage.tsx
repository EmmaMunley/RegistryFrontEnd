import React from 'react';

const HomePage: React.FC = () => {
  return (
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
        <div className="flex left-indent right-indent">
          <a
            className="btn btn-primary btn-lg btn-block "
            href="#"
            role="button"
          >
            Find a Couple
          </a>
        </div>

        <div className=" flex left-indent right-indent">
          <a
            className="btn btn-secondary btn-lg btn-block"
            href="#"
            role="button"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
