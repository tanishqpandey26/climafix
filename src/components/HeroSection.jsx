import React, { useEffect, useState } from "react";
import "../styles/heroStyles.css";

const HeroSection = () => {
  
  const [timeLeft, setTimeLeft] = useState({ days: 50, hours: 22, minutes: 40, seconds: 18 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section className="heroSection">
      <div className="heroContainer">
        {/* Left Column */}
        <div className="heroLeftColumn">
          <img src="/hero/heroImg.png" alt="Climafix Summit" className="heroImg" />
        </div>

        {/* Right Column */}
        <div className="heroRightColumn">
          
          <h1 className="heroHeading">Welcome To ClimaFix</h1>
          <div className="heroBadge">Climate Innovation • 2025</div>
          <p className="heroDesc">       
            Climafix is a leader in providing intelligence about high impact innovations for climate actions.
            CLIMAFIX is a division of EAI (Energy Alternatives India) focussed on climate innovations and climate tech startups.
            As India’s leading climate innovation intelligence provider, we proudly serve as a catalyst, empowering the nation’s vibrant startup and innovator communities to fast track their innovations and connect with the market.
          </p>

          {/* <div className="heroAlert">
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24"><path fill="#287781" d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A1 1 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-.293-.707zM19 17H5v-.586l1.707-1.707A1 1 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22"/></svg>
            JOIN US AT CLIMAFIX SUMMIT 2025</div> */}

            

          <div className="heroBtns">
            <a href="#summit" className="btn btn-primary">
              ClimaFix Summit 2025
            </a>
            <a href="#register" className="btn btn-secondary">
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="heroCountDown">
        <h3>Countdown to Summit 2025</h3>
        <div className="countdown-timer">
          <div className="time-box">
            <span>{String(timeLeft.days).padStart(2, "0")}</span>
            <p>Days</p>
          </div>
          <div className="time-box">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
            <p>Hours</p>
          </div>
          <div className="time-box">
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <p>Minutes</p>
          </div>
          <div className="time-box">
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
