<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const HomeTwoSingleSlide = ({
  slider_class,
  content_class,
  attr_1,
  attr_2,
  attr_3 = `We merge imagination and technology to help brands grow in an age of digital transformation.`,
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
=======
import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoSingleSlide = ({ slider_class,content_class, attr_1, attr_2, attr_3 = "Work with a Konsul advisor to plan for your future.",btn_text}) => {
   return (
      <>
         <div className="single-slider single-slider-2 slider__height slider__height-2 d-flex align-items-center">
            <div className="container">
               <img src="assets/img/4.jpeg" alt="" style={{width:'100%',height:"100%",position:"absolute",top:'0',left:'0',objectFit:"cover"}} />
               <div className="row">
                  <div className={`${slider_class}`}>
                     <div className={`slider__content slider__content-2 ${content_class && content_class}`}>
                         {attr_1}
                         {attr_2}
                        <p >{attr_3}</p>
                        <div className="slider__btn">
                           <Link to="/contact" className="z-btn z-btn-transparent">{btn_text}</Link>
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
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
