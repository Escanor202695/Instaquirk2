import React from "react";
import HomeTwoSingleSlide from "../../../components/HomeTwoSingleSlide/HomeTwoSingleSlide";
import Slider from "react-slick";

const HomeTwoHeroSlider = () => {
  // slider setting
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    infinite: true,
    dots: false,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="slider__area slider__area-2">
        <Slider className="slider-active" {...settings}>
          <HomeTwoSingleSlide
            slider_class="col-xl-7 offset-xl-6 col-lg-8 offset-lg-4 col-md-9 offset-md-3 col-sm-10 offset-sm-2"
            content_class=""
            attr_1={<span className="Instaquirk">Welcome To Instaquirk.</span>}
            attr_2={
              <h1>
                Get more
                <br /> Impact Fasted
              </h1>
            }
            btn_text="Let Us Hear Your Vision"
          />

          <HomeTwoSingleSlide
            slider_class="col-xl-6"
            content_class="slider__content-4"
            attr_1={<span className="Instaquirk">Welcome To Instaquirk</span>}
            attr_2={
              <h1>
                We will help <br />
                your business grow faster
              </h1>
            }
            attr_3="Our agency will cover everything you need to become a professional business in Web developer or Graphics design or Full Stack Seo and Full Stack 
            Social Media Management & Marketing from scratch "
            btn_text="Get an Estimated Quote"
          />
        </Slider>
      </section>
    </>
  );
};

export default HomeTwoHeroSlider;
