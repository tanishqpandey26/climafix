import React, { useState, useRef } from "react";
import "../styles/widget.css";

const WidgetSection = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([
    "/widget/img.jpg",
    "/hero/lunacal.jfif",
    "/widget/img.jpg",
    "/hero/lunacal.jfif",
    "/widget/img.jpg",

  ]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // file input reference
  const fileInputRef = useRef(null);

  // handle add img btn 
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  // handle file upload
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImgUrl = URL.createObjectURL(file);
    setImages((prev) => [...prev, newImgUrl]);

    // reset input 
    e.target.value = "";
  };

  // handle carousel navigation
  const handleCarousel = (direction) => {
    setCarouselIndex((prev) => {
      if (direction === "left") {
        return prev === 0 ? images.length - 1 : prev - 1;
      } else {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
    });
  };

  // get visible 3 images for desktop view
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(images[(carouselIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <section className="widgetContainer">
      <div className="leftColumn"></div>

      <div className="rightColumn">
        {/* --- widget One --- */}
        <div className="widget widgetOne">

          <div className="widgetHeader">
            <div className="widgetHeaderIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 512 512"
              >
                <defs>
                  <linearGradient
                    id="gradWidgetIcon"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    gradientTransform="rotate(327.89)"
                  >
                    <stop offset="0%" stopColor="#4A4E54" />
                    <stop offset="89%" stopColor="#A3ADBA" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradWidgetIcon)"
                  fillRule="evenodd"
                  d="M334.434 206.171c0 13.516-3.435 25.318-10.288 35.397c-5.65 8.47-15.12 17.649-28.436 27.534c-7.664 5.247-12.711 10.184-15.126 14.823c-3.04 5.648-4.54 14.113-4.54 25.409h-42.666c0-17.137 1.824-29.64 5.454-37.504c4.23-9.483 13.407-19.064 27.521-28.743c6.664-5.045 11.503-10.183 14.529-15.425c3.625-5.852 5.449-12.503 5.449-19.966c0-11.899-3.539-20.766-10.594-26.624c-5.636-4.228-12.502-6.345-20.569-6.345c-13.108 0-22.59 4.339-28.436 13.009c-4.236 6.45-6.36 14.719-6.36 24.8v.304h-45.361c0-26.422 8.36-46.382 25.09-59.898c14.12-11.283 31.574-16.94 52.34-16.94c18.16 0 34.092 3.533 47.798 10.588c22.803 11.703 34.195 31.572 34.195 59.581m134.9 49.83c0 117.82-95.513 213.333-213.334 213.333c-117.82 0-213.333-95.513-213.333-213.334S138.18 42.667 256 42.667S469.334 138.179 469.334 256m-42.667 0c0-94.107-76.561-170.667-170.667-170.667S85.334 161.894 85.334 256S161.894 426.667 256 426.667S426.667 350.106 426.667 256m-170.668 69.333c-14.728 0-26.667 11.938-26.667 26.666s11.94 26.667 26.667 26.667s26.667-11.939 26.667-26.667s-11.94-26.666-26.667-26.666"
                />
              </svg>
            </div>

            <div className="widgetTabbar">
              <button
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </button>
              <button
                className={activeTab === "exp" ? "active" : ""}
                onClick={() => setActiveTab("exp")}
              >
                Experiences
              </button>
              <button
                className={activeTab === "rec" ? "active" : ""}
                onClick={() => setActiveTab("rec")}
              >
                Recommended
              </button>
            </div>
          </div>

        <div className="iconWidgetContainer">

          <div className="fixedWidgetIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="31px" viewBox="0 0 56 56">
                  <path fill="#4A4E54" d="M43.492 26.066h5.297c2.977 0 4.477-1.5 4.477-4.593V10.996c0-3.094-1.5-4.57-4.477-4.57h-5.297c-2.976 0-4.476 1.476-4.476 4.57v10.477c0 3.093 1.5 4.593 4.476 4.593m-36.281 0h5.297c2.976 0 4.476-1.5 4.476-4.593V10.996c0-3.094-1.5-4.57-4.476-4.57H7.21c-2.977 0-4.477 1.476-4.477 4.57v10.477c0 3.093 1.5 4.593 4.477 4.593m18.14 0h5.297c2.977 0 4.477-1.5 4.477-4.593V10.996c0-3.094-1.5-4.57-4.477-4.57h-5.296c-2.977 0-4.477 1.476-4.477 4.57v10.477c0 3.093 1.5 4.593 4.477 4.593M7.212 49.574h5.297c2.976 0 4.476-1.476 4.476-4.57v-10.5c0-3.07-1.5-4.57-4.476-4.57H7.21c-2.977 0-4.477 1.5-4.477 4.57v10.5c0 3.094 1.5 4.57 4.477 4.57m18.14 0h5.297c2.977 0 4.477-1.476 4.477-4.57v-10.5c0-3.07-1.5-4.57-4.477-4.57h-5.296c-2.977 0-4.477 1.5-4.477 4.57v10.5c0 3.094 1.5 4.57 4.477 4.57m18.141 0h5.297c2.977 0 4.477-1.476 4.477-4.57v-10.5c0-3.07-1.5-4.57-4.477-4.57h-5.297c-2.976 0-4.476 1.5-4.476 4.57v10.5c0 3.094 1.5 4.57 4.476 4.57" />
                </svg>
          </div>

          <div className="widgetContent">
            <div className="widgetDesc">
              {activeTab === "about" && (
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                  <br/><br/>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </p>
              )}
              {activeTab === "exp" && (
                <p>
                     Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                     <br/><br/>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </p>
              )}
              {activeTab === "rec" && (
                <p>
                   Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                   <br/><br/>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </p>
              )}
            </div>
          </div>

          <div className="rectangleScrollbar"></div>

        </div>

        </div>

        <div className="widgetDividerLine"></div>


        {/* --- widget two --- */}
        <div className="widget widgetTwo">

          <div className="widgetHeader widgetHeaderGallery">

            <div className="leftHeader">
              
              <div className="widgetHeaderIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 512 512"
                >
                  <defs>
                    <linearGradient
                      id="gradWidgetIcon"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      gradientTransform="rotate(327.89)"
                    >
                      <stop offset="0%" stopColor="#4A4E54" />
                      <stop offset="89%" stopColor="#A3ADBA" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradWidgetIcon)"
                    fillRule="evenodd"
                    d="M334.434 206.171c0 13.516-3.435 25.318-10.288 35.397c-5.65 8.47-15.12 17.649-28.436 27.534c-7.664 5.247-12.711 10.184-15.126 14.823c-3.04 5.648-4.54 14.113-4.54 25.409h-42.666c0-17.137 1.824-29.64 5.454-37.504c4.23-9.483 13.407-19.064 27.521-28.743c6.664-5.045 11.503-10.183 14.529-15.425c3.625-5.852 5.449-12.503 5.449-19.966c0-11.899-3.539-20.766-10.594-26.624c-5.636-4.228-12.502-6.345-20.569-6.345c-13.108 0-22.59 4.339-28.436 13.009c-4.236 6.45-6.36 14.719-6.36 24.8v.304h-45.361c0-26.422 8.36-46.382 25.09-59.898c14.12-11.283 31.574-16.94 52.34-16.94c18.16 0 34.092 3.533 47.798 10.588c22.803 11.703 34.195 31.572 34.195 59.581m134.9 49.83c0 117.82-95.513 213.333-213.334 213.333c-117.82 0-213.333-95.513-213.333-213.334S138.18 42.667 256 42.667S469.334 138.179 469.334 256m-42.667 0c0-94.107-76.561-170.667-170.667-170.667S85.334 161.894 85.334 256S161.894 426.667 256 426.667S426.667 350.106 426.667 256m-170.668 69.333c-14.728 0-26.667 11.938-26.667 26.666s11.94 26.667 26.667 26.667s26.667-11.939 26.667-26.667s-11.94-26.666-26.667-26.666"
                  />
                </svg>
              </div>

              <button className="widgetGalleryBtn">Gallery</button>
            </div>

            <div className="rightHeader">
               <button
                className="widgetAddImgBtn"
                onClick={handleAddImageClick}
              >
                + Add Image
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleAddImage}
              />
              <button
                className="widgetImgToggleBtn"
                onClick={() => handleCarousel("left")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="m13.28 6.78l-8.5 8.5l-.686.72l.687.72l8.5 8.5l1.44-1.44L7.936 17H28v-2H7.937l6.782-6.78z"/></svg>
              </button>
              <button
                className="widgetImgToggleBtn"
                onClick={() => handleCarousel("right")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="m18.72 6.78l-1.44 1.44L24.063 15H4v2h20.063l-6.782 6.78l1.44 1.44l8.5-8.5l.686-.72l-.687-.72z"/></svg>
              </button>
            </div>

          </div>

          <div className="iconWidgetContainer">

            <div className="fixedWidgetIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="31px" viewBox="0 0 56 56">
                  <path fill="#4A4E54" d="M43.492 26.066h5.297c2.977 0 4.477-1.5 4.477-4.593V10.996c0-3.094-1.5-4.57-4.477-4.57h-5.297c-2.976 0-4.476 1.476-4.476 4.57v10.477c0 3.093 1.5 4.593 4.476 4.593m-36.281 0h5.297c2.976 0 4.476-1.5 4.476-4.593V10.996c0-3.094-1.5-4.57-4.476-4.57H7.21c-2.977 0-4.477 1.476-4.477 4.57v10.477c0 3.093 1.5 4.593 4.477 4.593m18.14 0h5.297c2.977 0 4.477-1.5 4.477-4.593V10.996c0-3.094-1.5-4.57-4.477-4.57h-5.296c-2.977 0-4.477 1.476-4.477 4.57v10.477c0 3.093 1.5 4.593 4.477 4.593M7.212 49.574h5.297c2.976 0 4.476-1.476 4.476-4.57v-10.5c0-3.07-1.5-4.57-4.476-4.57H7.21c-2.977 0-4.477 1.5-4.477 4.57v10.5c0 3.094 1.5 4.57 4.477 4.57m18.14 0h5.297c2.977 0 4.477-1.476 4.477-4.57v-10.5c0-3.07-1.5-4.57-4.477-4.57h-5.296c-2.977 0-4.477 1.5-4.477 4.57v10.5c0 3.094 1.5 4.57 4.477 4.57m18.141 0h5.297c2.977 0 4.477-1.476 4.477-4.57v-10.5c0-3.07-1.5-4.57-4.477-4.57h-5.297c-2.976 0-4.476 1.5-4.476 4.57v10.5c0 3.094 1.5 4.57 4.476 4.57" />
                </svg>
            </div>

                        <div className="widgetImgCarousel">
              {getVisibleImages().map((img, index) => (
                <div className="carouselImg" key={index}>
                  <img src={img} alt={`carousel-${index}`} />
                </div>
              ))}
            </div>


          </div>

        </div>

         <div className="widgetDividerLine"></div>

      </div>
    </section>
  );
};

export default WidgetSection;

