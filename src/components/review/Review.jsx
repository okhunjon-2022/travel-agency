import React from "react";
import "./Review.css";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import v from "../../assets/v.png";

const Review = () => {
  return (
    <div className="container">
      <div className="review">
        <div className="popular-info ">
          <h2>Review & Testimonials</h2>
          <h1>top reviews for etour</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="review-desc">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the
            1960s.....
          </p>
          <img src={v} alt="" />
        </div>
        <div className="review-tourists">
          <img src={man} alt="" />
          <img src={woman} alt="" />
          <img src={man} alt="" />
          <img src={woman} alt="" />
          <img src={man} alt="" />
          <img src={woman} alt="" />
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
