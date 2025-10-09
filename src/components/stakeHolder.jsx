import React from "react";
import "../styles/stakeHolder.css";


const StakeholderSection = () => {

  return (
   
<section className="stakeHolderSection">
  <h2 className="stakeHolderHeading">Our Key Stakeholders</h2>

  {/* <div className="stakeHolderImg">
    <img src="/stakeh/stakeholders.png" alt="Stakeholders" />
  </div> */}

  <div className="stakeHolderCardContainer">
    
    <div className="stakeHolderCard">
      <img
        src="/stakeh/startup.png"
        alt="Startups"
        className="stakeHolderCardImg"
      />
      <h3 className="stakeHolderCardHeader">Startups & Innovators</h3>
    </div>

    <div className="stakeHolderCard">
      <img
        src="/stakeh/investor.png"
        alt="Corporates"
        className="stakeHolderCardImg"
      />
      <h3 className="stakeHolderCardHeader">Investors & VCs</h3>
    </div>

    <div className="stakeHolderCard">
      <img
        src="/stakeh/industry.png"
        alt="Corporates"
        className="stakeHolderCardImg"
      />
      <h3 className="stakeHolderCardHeader">Industry</h3>
    </div>

    <div className="stakeHolderCard">
      <img
        src="/stakeh/govt.png"
        alt="Corporates"
        className="stakeHolderCardImg"
      />
      <h3 className="stakeHolderCardHeader">Government</h3>
    </div>

    <div className="stakeHolderCard">
      <img
        src="/stakeh/researcher.png"
        alt="Corporates"
        className="stakeHolderCardImg"
      />
      <h3 className="stakeHolderCardHeader">Researchers</h3>
    </div>

    <div className="stakeHolderCard">
      <img
        src="/stakeh/ngo.png"
        alt="Startups"
        className="stakeHolderCardImg"
      />
      <h3 className="stakeHolderCardHeader">NGOs</h3>
    </div>


  </div>
</section>

  );
};

export default StakeholderSection;
