import React from "react";
import "./Popular.css";
import pakistan from "../../assets/pakistan.png";
import singapur from "../../assets/singapur.png";
import rome from "../../assets/rome.png";

const packagesList = [
  {
    title: "Rome Italy",
    desc: "10 days trip",
    image: rome,
    price: "5.24",
  },
  {
    title: "Lahore, pakistan",
    desc: "6 days trip",
    image: pakistan,
    price: "5.24",
  },
  {
    title: "singapore",
    desc: "10 days trip",
    image: singapur,
    price: "5.24",
  },
];

const Popular = () => {
  return (
    <div className="container">
      <div className="popular">
        <div className="popular-info ">
          <h2>Travel by</h2>
          <h1>tour packages</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="popular-packages">
          {packagesList?.map((item, inx) => (
            <div key={inx} className="package">
              <img src={item?.image} alt="" />
              <div className="package-info">
                <div className="package-title">
                  <h3>{item?.title}</h3>
                  <p>{item?.desc}</p>
                </div>
                <div className="package-price">${item?.price}K</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
