import React, { useEffect, useRef } from "react";
import "../styles/SummitSection.css";

import img1 from "/summit/2022.png";
import img2 from "/summit/2023.png";
import img3 from "/summit/2024.png";
import img4 from "/summit/2025.png";
import img5 from "/summit/2022.png";

const SummitSection = () => {

  return (
    
    <section className="summitSection">
  <div className="summitContainer">
    {/* Left Column */}
    <div className="summitLeftColumn">
      <h2 className="summitHeader">Join the CLIMAFIX Summit 2025</h2>
      <p className="summitDesc">
        Be part of India’s largest climate innovation event — uniting startups,
        investors, corporates, and policymakers to accelerate sustainable
        solutions for a greener future.
      </p>

      <div className="summitMailRegister">
        <input
          type="email"
          placeholder="Enter your email"
          className="summit-input-mail"
        />
        <button className="summit-Register-NowBtn">Register Now</button>
      </div>
    </div>

    {/* Simple Horizontal Scrollbar */}
    <div className="summitImgScrollbar">
      <div className="scrollTrack">
        <img src="/summit/2025.png" alt="Summit" />
        <img src="/summit/2024.png" alt="Summit" />
        <img src="/summit/2021.png" alt="Summit" />
        <img src="/summit/2023.png" alt="Summit" />
        <img src="/summit/2022.png" alt="Summit" />
      </div>
    </div>
  </div>
</section>


  );
};

export default SummitSection;
