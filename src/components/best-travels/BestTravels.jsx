import React from "react";
import "./BestTravels.css";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";

const BestTravels = () => {
  return (
    <div className="container">
      <div className="best-travels">
        <div className="popular-info ">
          <h2>Travel by</h2>
          <h1>tour packages</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="best-travel-photos">
          <div className="best-photos">
            <img src={p1} alt="" />
          </div>
          <div className="best-photos">
            <img src={p2} alt="" />
          </div>
          <div className="best-photos">
            <img src={p3} alt="" />
          </div>

          <div className="best-photos">
            <img src={p3} alt="" />
          </div>
          <div className="best-photos">
            <img src={p1} alt="" />
          </div>
          <div className="best-photos">
            <img src={p2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTravels;
