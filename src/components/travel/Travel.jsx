import React from "react";
import "./Travel.css";
import advanture from "../../assets/advanture.png";
import camping from "../../assets/camping.png";
import expiring from "../../assets/expiring.png";
import fire from "../../assets/fire.png";
import road from "../../assets/road.png";
import trekking from "../../assets/trekking.png";

const travelList = [
  {
    image: advanture,
    title: "Adventure",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    image: camping,
    title: "Camping",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    image: trekking,
    title: "Trekking",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    image: road,
    title: "Off Road",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    image: fire,
    title: "Camp Fire",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    image: expiring,
    title: "Expiring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
const Travel = () => {
  return (
    <div className="container">
      <div className="travel">
        <div className="destination-info travel-title">
          <h2>Travel by</h2>
          <h1>ACTIVITY</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="travel-info">
          {travelList?.map((item, inx) => (
            <div className="travel-item">
              <img src={item?.image} alt="" />
              <h3>{item?.title}</h3>
              <p>{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travel;
