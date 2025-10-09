import React from "react";
import "../styles/sponsorSection.css";

const sponsors = [
  { name: "IIT Madras RP", logo: "/sponsor/iitm.png" },
  { name: "EAI", logo: "/sponsor/eai.png" },
  { name: "GreenInfra", logo: "/sponsor/greeninfra.png" },
  { name: "EcoBank", logo: "/sponsor/ecobank.jfif" }
];

const SponsorSection = () => {
  return (
    <section className="sponsorSection">
      <h2 className="sectionHeader">Summit Sponsors</h2>
      <p className="sectionSubheader">Thank you to our partners powering climate innovation</p>

      <div className="sponsorGrid">
        {sponsors.map((s, i) => (
          <div className="sponsorCard reveal-fade" style={{ animationDelay: `${i * 0.06}s` }} key={s.name}>
            <div className="sponsorLogoWrap">
              <img src={s.logo} alt={`${s.name} logo`} className="sponsorLogo" />
            </div>
            <div className="sponsorName">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
