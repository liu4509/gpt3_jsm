import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The posibilities arebeyond your imagination
        </h1>
        <p>
          Yet bed any for trarelling assistance indulgence unpleasing.
          Notthoughts all exercise blessing. indulgence way everything joyus the
          attachment, Partywe years to orderalteration boistere
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
