import React from "react";
import amazon from "../../assets/images/partners/amazon.png";
import target from "../../assets/images/partners/target.png";
import bedbath from "../../assets/images/partners/bed-bath.png";
import crate from "../../assets/images/partners/crate.png";
import wayfair from "../../assets/images/partners/wayfair.png";
import macys from "../../assets/images/partners/macys.png";

export const PartnerLogos: React.FC = () => {
  return (
    <React.Fragment>
      {/* DESKTOP */}
      <div className=" d-none d-sm-none d-md-none d-lg-flex d-xl-flex justify-content-center">
        <div className="row d-flex justify-content-center flex-nowrap">
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={amazon} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={target} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={crate} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={bedbath} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={wayfair} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={macys} alt="Amazon" />
          </div>
        </div>
      </div>

      {/* TABLET */}
      <div className="container d-none d-sm-none d-md-flex d-lg-none d-xl-none flex-column">
        <div className="row d-flex justify-content-center flex-nowrap">
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={amazon} alt="Amazon" />
          </div>

          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={target} alt="Amazon" />
          </div>

          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={crate} alt="Amazon" />
          </div>
        </div>

        <div className="row d-flex justify-content-center flex-nowrap">
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={bedbath} alt="Amazon" />
          </div>

          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={wayfair} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={macys} alt="Amazon" />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="container d-flex d-sm-flex d-md-none d-lg-none d-xl-none flex-column">
        <div className="row d-flex justify-content-center flex-nowrap">
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={amazon} alt="Amazon" />
          </div>

          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={target} alt="Amazon" />
          </div>
        </div>
        <div className="row d-flex justify-content-center flex-nowrap">
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={crate} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={bedbath} alt="Amazon" />
          </div>
        </div>
        <div className="row d-flex justify-content-center flex-nowrap">
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={wayfair} alt="Amazon" />
          </div>
          <div className="col d-flex justify-content-center ">
            <img className="partner-logo" src={macys} alt="Amazon" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PartnerLogos;
