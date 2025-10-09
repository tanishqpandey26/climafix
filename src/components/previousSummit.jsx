import React, { useEffect, useRef } from "react";
import "../styles/previousSummit.css";


const PreviousSummit = () => {

  return (

<section className="process-section">
  <div className="process-heading">
    <h2>Previous Summits</h2>
    <p>Some highlights into our Previous Summits</p>
  </div>

  {/* Step 1 */}
  <div className="process-step">
    <div className="process-text">
      <div className="process-title">
        <span className="step-number">1</span>
        <hr />
        <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 16 16"><path fill="none" stroke="#287781"  d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"/></svg>
      </div>
      <h3>Summit 2025</h3>
      <p>
        The CLIMAFIX Summit 2025 was held on September 11–12, 2025, at the IIT Madras Research Park in Chennai, India, focusing on industrial decarbonization and fostering collaboration between startups, investors, and industry. The event featured sessions on bioeconomy, energy efficiency, design for sustainability, and academia-industry collaboration, alongside expert talks, panel discussions, and startup pitches to accelerate climate innovation. 
      </p>
      <a href="#" className="learn-more">
        Learn more →
      </a>
    </div>
    <div className="process-image">
      <img
        src="/summit/2025.png"
        alt="Initial Consultation"
      />
    </div>
  </div>

  {/* Step 2 */}
  <div className="process-step">
    <div className="process-text">
      <div className="process-title">
        <span className="step-number">2</span>
        <hr />
        <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 16 16"><path fill="none" stroke="#287781" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"/></svg>
      </div>
      <h3>Summit 2024</h3>
      <p>
        The 2024 CLIMAFIX Summit took place on September 20-21 at IIT Madras Research Park in Chennai, organized by the Energy Consortium - IIT Madras and Energy Alternatives India (EAI). The event, focused on "innovation for impact," brought together over 400 climate tech startups, 150+ investors, and industry leaders to foster decarbonization through sessions on themes like renewable energy, energy efficiency, and climate + AI. 
      </p>
      <a href="#" className="learn-more">
        Learn more →
      </a>
    </div>
    <div className="process-image">
      <img
        src="/summit/2024.png"
        alt="Profile Assessment"
      />
    </div>
  </div>

  {/* Step 3 */}
  <div className="process-step">
    <div className="process-text">
      <div className="process-title">
        <span className="step-number">3</span>
        <hr />
        <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 16 16"><path fill="none" stroke="#287781" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"/></svg>
      </div>
      <h3>Summit 2023</h3>
      <p>
        The CLIMAFIX Summit 2023, the second edition of the event, took place on September 22nd and 23rd, 2023, at the IIT Madras Research Park in Chennai. Organized by Energy Alternatives India (EAI) and the Energy Consortium - IIT Madras, the summit focused on climate innovation in India, bringing together over 1,000 delegates, including 500+ startups and 150+ investors. The event featured "Star Startup Sessions" and "WHY Sessions" to discuss climate solutions across themes like renewable energy.
      </p>
      <a href="#" className="learn-more">
        Learn more →
      </a>
    </div>
    <div className="process-image">
      <img
        src="/summit/2023.png"
        alt="University Selection"
      />
    </div>
  </div>

  {/* Step 4 */}
  <div className="process-step">
    <div className="process-text">
      <div className="process-title">
        <span className="step-number">4</span>
        <hr />
        <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 16 16"><path fill="none" stroke="#287781" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"/></svg>
      </div>
      <h3>Summit 2022</h3>
      <p>
        The CLIMAFIX Summit 2022 was India's largest climate tech startup conference, held on November 25-26, 2022, at the IIT Madras Research Park, Chennai. Organized by EAI and the Energy Consortium - IIT Madras, the event focused on energy storage and featured presentations, panel discussions, and networking sessions with top Indian climate tech startups, investors, and entrepreneurs.
      </p>
      <a href="#" className="learn-more">
        Learn more →
      </a>
    </div>
    <div className="process-image">
      <img
        src="/summit/2022.png"
        alt="Application Support"
      />
    </div>
  </div>


</section>



  );
};

export default PreviousSummit;

