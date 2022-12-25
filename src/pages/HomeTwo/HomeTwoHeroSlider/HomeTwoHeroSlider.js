<<<<<<< HEAD
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
              As the digital era grows,<br/> word of mouth is no longer enough
              </h1>
            }
            btn_text="Enroll Now"
          />

          <HomeTwoSingleSlide
            slider_class="col-xl-6"
            content_class="slider__content-4"
            attr_1={<span className="Instaquirk">Welcome To Instaquirk</span>}
            attr_2={
              <h1>
                Learn Effectively
                <br />
                that will take you towards your goal
              </h1>
            }
            attr_3="We merge imagination and technology to help brands grow in an age of digital transformation."
            btn_text="Enroll Now"
          />
        </Slider>
      </section>
    </>
  );
};

export default HomeTwoHeroSlider;
=======
import React from "react";
import HomeTwoSingleSlide from "../../../components/HomeTwoSingleSlide/HomeTwoSingleSlide";
import Slider from "react-slick";

const HomeTwoHeroSlider = () => {
  // slider setting
  const settings = {
    autoplay: true,
    autoplaySpeed:2000,
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
            attr_1={<span>Welcome To Instaquirk.</span>}
            attr_2={
              <h1>
                We will help<br/> your business grow <br/> faster
              </h1>
            }
            btn_text="Let Us Hear Your Vision"
          />

          <HomeTwoSingleSlide
            slider_class="col-xl-6"
            content_class="slider__content-4"
            attr_1={<span>Welcome To Instaquirk</span>}
            attr_2={<h1>Get more Impact Fasted</h1>}
            attr_3="Tinkety tonk old fruit baking cakes cobblers happy days argy-bargy up the duff excuse my french fanny around."
            btn_text="Get an Estimated Quote"
          />
        </Slider>
      </section>
    </>
  );
};

export default HomeTwoHeroSlider;
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
