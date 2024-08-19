import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving enddistrustsinstantly",
    text: "From they fine john he give of rich he. They age and drawmrs like.lmproving end distrusts may instantly washousehold applauded.",
  },
  {
    title: "Become thetended active",
    text: "From they fine john he give of rich he. They age and drawmrs like. lmproving end distrusts may instantly washousehold applauded.",
  },
  {
    title: "Messageor amnothing",
    text: "From they fine john he give of rich he. They age and drawmrs like. lmproving end distrusts may instantly washousehold applauded.",
  },
  {
    title: "Reallyboylawcounty",
    text: "From they fine john he give of rich he. They age and drawmrs like. lmproving end distrusts mayinstantly washousehold applauded.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now andYou Just Need To RealizeIt. Step into Future
          Today8 Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => {
          return (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
