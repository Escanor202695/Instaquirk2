import React from "react";
import { Link } from "react-router-dom";

const HomeTwoSingleSlide = ({
  slider_class,
  content_class,
  attr_1,
  attr_2,
<<<<<<< HEAD
  attr_3 = `We merge imagination and technology to help brands grow in an age of digital transformation.`,
=======
  attr_3 = `Our agency will cover everything you need to become a professional business in Web developer or Graphics design or
   Full Stack Seo and Full Stack 
  Social Media Management & Marketing from scratch`,
>>>>>>> 81edcad407292a8fe1258754347ec2d5e2b1c707
  btn_text,
}) => {
  return (
    <>
      <div className="single-slider single-slider-2 slider__height slider__height-2 d-flex align-items-center">
        <div className="container">
          <img
            src="assets/img/slider/02/slider-3.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              objectFit: "cover",
            }}
          />
          <div className="row">
            <div className={`${slider_class}`}>
              <div
                className={`slider__content slider__content-2 ${
                  content_class && content_class
                }`}
              >
                {attr_1}
                {attr_2}
                <div className="about-ours">
                  <p>{attr_3}</p>
                </div>

                <div className="slider__btn">
                  <Link to="/contact" className="z-btn z-btn-transparent">
                    {`${btn_text}`}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoSingleSlide;
