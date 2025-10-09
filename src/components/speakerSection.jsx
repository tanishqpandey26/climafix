import React from "react";
import "../styles/speakerSection.css";

const speakers = [
  { img: "/summit/2025.png", name: "Dr. A. Raman", title: "Head, Energy Consortium", org: "IIT Madras" },
  { img: "/summit/2024.png", name: "Priya N.", title: "Partner", org: "GreenVentures VC" },
  { img: "/summit/2023.png", name: "Arun K.", title: "Founder & CEO", org: "CarbonX Labs" },
  { img: "/summit/2022.png", name: "Meera S.", title: "Director Sustainability", org: "IndusSteel" },
  { img: "/summit/2021.png", name: "Rahul D.", title: "CTO", org: "SunGrid" },
  { img: "/summit/2024.png", name: "Latha R.", title: "Program Lead", org: "EAI" }
];

const SpeakerSection = () => {
  return (
    <section className="speakerSection">
      <h2 className="sectionHeader">Featured Speakers</h2>
      <p className="sectionSubheader">Leaders shaping climate innovation in India</p>
      <div className="speakerGrid">
        {speakers.map((sp, i) => (
          <div className="speakerCard reveal-up" style={{ animationDelay: `${i * 0.05}s` }} key={sp.name}>
            <div className="speakerImgWrap">
              <img src={sp.img} alt={`${sp.name}`} className="speakerImg" />
            </div>
            <div className="speakerName">{sp.name}</div>
            <div className="speakerTitle">{sp.title}</div>
            <div className="speakerOrg">{sp.org}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakerSection;
