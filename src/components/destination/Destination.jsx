import React from "react";
import "./Destination.css";
import dubai from "../../assets/dubai.png";
import greece from "../../assets/greece.png";
import malaysia from "../../assets/malaysiya.png";
import singapure from "../../assets/singapure.png";

const Destination = () => {
  return (
    <div className="container">
      <div className="destinations">
        <div className="destination">
          <div className="destination-info">
            <h2>Choose your</h2>
            <h1>DESTINATION</h1>
          </div>
        </div>
        <div className="destination-images">
          <div
            className="destination-image image-1"
            style={{
              backgroundImage: `url(${malaysia})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>Malaysia</h2>
            <button>16Tours</button>
          </div>
          <div
            className="destination-image image-2"
            style={{
              backgroundImage: `url(${dubai})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>Malaysia</h2>
            <button>16Tours</button>
          </div>
          <div
            className="destination-image image-3"
            style={{
              backgroundImage: `url(${greece})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>Malaysia</h2>
            <button>16Tours</button>
          </div>
          <div
            className="destination-image image-4"
            style={{
              backgroundImage: `url(${singapure})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>Malaysia</h2>
            <button>16Tours</button>
          </div>
        </div>
        <div className="destination-view">
          <button>view more</button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
