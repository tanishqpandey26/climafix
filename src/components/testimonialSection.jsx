import { useEffect } from "react";
import "../styles/testimonialSection.css"

const TestimonialSection = () => {
  let currentTestimonialSlide = 0;
  const totalTestimonials = 5;
  let autoSlideInterval;

  // ==== Helper Functions ====
  function getCardsPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) return 1;
    if (screenWidth <= 1024) return 2;
    return 3;
  }

  function getMaxSlides() {
    const cardsPerView = getCardsPerView();
    return Math.max(1, totalTestimonials - cardsPerView + 1);
  }

  function updateTestimonialCarousel() {
    const carousel = document.getElementById("testimonialCarousel");
    const indicators = document.querySelectorAll(".testimonial-indicator");
    const cardsPerView = getCardsPerView();

    let translateX;
    if (cardsPerView === 1) translateX = currentTestimonialSlide * 100;
    else if (cardsPerView === 2) translateX = currentTestimonialSlide * 100;
    else translateX = currentTestimonialSlide * (100 / 3);

    carousel.style.transform = `translateX(-${translateX}%)`;

    const maxSlides = getMaxSlides();
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle(
        "active-indicator",
        index === Math.min(currentTestimonialSlide, maxSlides - 1)
      );
    });
  }

  function updateIndicators() {
    const indicatorContainer = document.querySelector(".testimonial-indicators");
    if (!indicatorContainer) return;
    const maxSlides = getMaxSlides();

    indicatorContainer.innerHTML = "";

    for (let i = 0; i < Math.min(maxSlides, 3); i++) {
      const indicator = document.createElement("div");
      indicator.className = `testimonial-indicator ${
        i === 0 ? "active-indicator" : ""
      } ${i === 1 ? "ellipse" : ""}`;
      indicator.onclick = () => goToTestimonial(i);
      indicatorContainer.appendChild(indicator);
    }
  }

  function nextTestimonial() {
    const maxSlides = getMaxSlides();
    currentTestimonialSlide = (currentTestimonialSlide + 1) % maxSlides;
    updateTestimonialCarousel();
  }

  function prevTestimonial() {
    const maxSlides = getMaxSlides();
    currentTestimonialSlide = (currentTestimonialSlide - 1 + maxSlides) % maxSlides;
    updateTestimonialCarousel();
  }

  function goToTestimonial(index) {
    const maxSlides = getMaxSlides();
    currentTestimonialSlide = Math.min(index, maxSlides - 1);
    updateTestimonialCarousel();
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => nextTestimonial(), 10000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // ==== useEffect to handle lifecycle ====
  useEffect(() => {
    updateIndicators();
    updateTestimonialCarousel();
    startAutoSlide();

    window.addEventListener("resize", () => {
      currentTestimonialSlide = 0;
      updateIndicators();
      updateTestimonialCarousel();
      stopAutoSlide();
      startAutoSlide();
    });

    const container = document.querySelector(".testimonial-carousel-container");
    if (container) {
      container.addEventListener("mouseenter", stopAutoSlide);
      container.addEventListener("mouseleave", startAutoSlide);
    }

    return () => {
      stopAutoSlide();
      window.removeEventListener("resize", updateTestimonialCarousel);
      if (container) {
        container.removeEventListener("mouseenter", stopAutoSlide);
        container.removeEventListener("mouseleave", startAutoSlide);
      }
    };
  }, []);

  return (
    
    <section className="testimonialSection">
        <h2 className="testimonialHeading">Our Happy Stories!</h2>
        <p className="testimonialSubtext">
            Success stories from students who achieved their dreams of studying abroad.
        </p>

        <div className="testimonial-carousel-container">
            <div className="testimonialCarousel" id="testimonialCarousel">

                <div className="testimonialCard">
                    <div className="topRow">
                       <img src="/testimonial/quote.png" alt="Quote" className="quoteImg" />
                       <img src="/testimonial/fivestar.png" alt="Rating" className="starImg" />
                    </div>
                    <p className="feedback">
                        “Climafix has become a driving force in India’s climate innovation ecosystem. Attending the Climafix Summit connected our startup with investors, policymakers, and industry experts who truly understand sustainability.”
                    </p>
                    <div className="userInfo">
                        <img src="/testimonial/customer.png" alt="Customer" className="customerImg" />
                        <div className="userDetails">
                            <p className="userName">Avirush Kr</p>
                            <p className="userTitle">Founder at ABC</p>
                        </div>
                    </div>
                </div>

                <div className="testimonialCard">
                    <div className="topRow">
                       <img src="/testimonial/quote.png" alt="Quote" className="quoteImg" />
                       <img src="/testimonial/fivestar.png" alt="Rating" className="starImg" />
                    </div>
                    <p className="feedback">
                        “Climafix has become a driving force in India’s climate innovation ecosystem. Attending the Climafix Summit connected our startup with investors, policymakers, and industry experts who truly understand sustainability.”
                    </p>
                    <div className="userInfo">
                        <img src="/testimonial/customer2.png" alt="Customer" className="customerImg" />
                        <div className="userDetails">
                            <p className="userName">Siddhesh C Borhade</p>
                            <p className="userTitle">Founder at ABC</p>
                        </div>
                    </div>
                </div>

                <div className="testimonialCard">
                    <div className="topRow">
                       <img src="/testimonial/quote.png" alt="Quote" className="quoteImg" />
                       <img src="/testimonial/fivestar.png" alt="Rating" className="starImg" />
                    </div>
                    <p className="feedback">
                        “Climafix has become a driving force in India’s climate innovation ecosystem. Attending the Climafix Summit connected our startup with investors, policymakers, and industry experts who truly understand sustainability.”
                    </p>
                    <div className="userInfo">
                        <img src="/testimonial/customer3.png" alt="Customer" className="customerImg" />
                        <div className="userDetails">
                            <p className="userName">Tirth Shah</p>
                            <p className="userTitle">Founder at ABC</p>
                        </div>
                    </div>
                </div>

                <div className="testimonialCard">
                    <div className="topRow">
                       <img src="/testimonial/quote.png" alt="Quote" className="quoteImg" />
                       <img src="/testimonial/fivestar.png" alt="Rating" className="starImg" />
                    </div>
                    <p className="feedback">
                        “Climafix has become a driving force in India’s climate innovation ecosystem. Attending the Climafix Summit connected our startup with investors, policymakers, and industry experts who truly understand sustainability.”
                    </p>
                    <div className="userInfo">
                        <img src="/testimonial/customer4.png" alt="Customer" className="customerImg" />
                        <div className="userDetails">
                            <p className="userName">Karan Singh</p>
                            <p className="userTitle">Founder at ABC</p>
                        </div>
                    </div>
                </div>

                <div className="testimonialCard">
                    <div className="topRow">
                       <img src="/testimonial/quote.png" alt="Quote" className="quoteImg" />
                       <img src="/testimonial/fivestar.png" alt="Rating" className="starImg" />
                    </div>
                    <p className="feedback">
                        “Climafix has become a driving force in India’s climate innovation ecosystem. Attending the Climafix Summit connected our startup with investors, policymakers, and industry experts who truly understand sustainability.”
                    </p>
                    <div className="userInfo">
                        <img src="/testimonial/customer5.png" alt="Customer" className="customerImg" />
                        <div className="userDetails">
                            <p className="userName">Ananya Patel</p>
                            <p className="userTitle">Founder at ABC</p>
                        </div>
                    </div>
                </div>

                <div className="testimonialCard">
                    <div className="topRow">
                       <img src="/testimonial/quote.png" alt="Quote" className="quoteImg" />
                       <img src="/testimonial/fivestar.png" alt="Rating" className="starImg" />
                    </div>
                    <p className="feedback">
                        “Climafix has become a driving force in India’s climate innovation ecosystem. Attending the Climafix Summit connected our startup with investors, policymakers, and industry experts who truly understand sustainability.”
                    </p>
                    <div className="userInfo">
                        <img src="/testimonial/customer6.png" alt="Customer" className="customerImg" />
                        <div className="userDetails">
                            <p className="userName">Avirush Kr</p>
                            <p className="userTitle">Founder at ABC</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="testimonial-indicators">
            <div className="testimonial-indicator active-indicator" onclick="goToTestimonial(0)"></div>
            <div className="testimonial-indicator ellipse" onclick="goToTestimonial(1)"></div>
            <div className="testimonial-indicator" onclick="goToTestimonial(2)"></div>
        </div>

    </section>

    
  );
};

export default TestimonialSection;
