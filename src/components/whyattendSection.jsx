import React from "react";
import "../styles/whyAttend.css";

const WhyattendSection = () => {

  return (
    <section className="whyAttendSection">
      
      <h2 className="sectionHeader">Why Attend ClimaFix Summit</h2>

      {/* Themes */}
      <div className="themeSection">
        <h3 className="subSectionHeader">Summit Themes</h3>
        <div className="themeGrid">
          <div className="themeCard reveal-fade">
            <img src="/whyat/renew.png"/>
            <div className="themeCardHeader">Renewable Energy</div>
            <button className="themeCardLearnMoreBtn" type="button">Learn More</button>
          </div>
          <div className="themeCard reveal-fade" style={{ animationDelay: "0.08s" }}>
            <img src="/whyat/aiml.png"/>
            <div className="themeCardHeader">Digital Innovation using AI/ML</div>
            <button className="themeCardLearnMoreBtn" type="button">Learn More</button>
          </div>
          <div className="themeCard reveal-fade" style={{ animationDelay: "0.16s" }}>
            <img src="/whyat/bioeco.png"/>
            <div className="themeCardHeader">Climate + AI</div>
            <button className="themeCardLearnMoreBtn" type="button">Learn More</button>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="keyStatsSection">
        
        <div className="statsGrid">
          <div className="statCard reveal-up">
            <div className="statNumber">400+</div>
            <div className="statLabel">Startups and Incubations</div>
          </div>
          <div className="statCard reveal-up" style={{ animationDelay: "0.08s" }}>
            <div className="statNumber">150+</div>
            <div className="statLabel">Investors and VCs</div>
          </div>
          <div className="statCard reveal-up" style={{ animationDelay: "0.16s" }}>
            <div className="statNumber">20+</div>
            <div className="statLabel">Industries served across sectors</div>
          </div>
        </div>
      </div>

    </section>

  );
};

export default WhyattendSection;
