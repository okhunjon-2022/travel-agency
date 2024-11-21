import React from "react";
import "./Banner.css";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import "./BannerMedia.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <h2 className="banner-title">Explorer and Travel</h2>
        <h1 className="banner-subTitle">Let’s Go Now</h1>
        <p className="banner-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <div className="banner-inputs">
          <div className="banner-location">
            <div className="location-icon">
              <CiLocationOn />
            </div>
            <div className="location-info">
              <p>Location</p>
              <h5>Thailand</h5>
            </div>
          </div>
          <div className="banner-date">
            <div className="date-icon">
              <CiCalendarDate />
            </div>
            <div className="date-info">
              <p>Date</p>
              <h5>13 May,2024</h5>
            </div>
          </div>
          <div className="banner-btn">
            <button>
              <IoMdSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
