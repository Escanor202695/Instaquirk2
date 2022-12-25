import React from "react";
import "./graphic_details.css";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Service from "./gservices/service";
import GalleryImage from "./GalleryImage";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import Carousel from "react-material-ui-carousel";

function graphic_details() {
  const images = [
    "/assets/img/graphics/1.png",
    "/assets/img/graphics/2.png",
    "/assets/img/graphics/38.png",
    "/assets/img/graphics/4.png",
    "/assets/img/graphics/5.png",
    "/assets/img/graphics/6.png",
    "/assets/img/graphics/33.png",
    "/assets/img/graphics/8.png",
    "/assets/img/graphics/15.png",
    "/assets/img/graphics/11.png",
    "/assets/img/graphics/19.png",
    "/assets/img/graphics/13.png",
    "/assets/img/graphics/14.png",
    "/assets/img/graphics/10.png",
    "/assets/img/graphics/16.png",
    "/assets/img/graphics/17.png",
    "/assets/img/graphics/18.png",
    "/assets/img/graphics/30.png",
    "/assets/img/graphics/12.png",
    "/assets/img/graphics/20.png",
    "/assets/img/graphics/37.png",
    "/assets/img/graphics/3.png",
    "/assets/img/graphics/39.png",
    "/assets/img/graphics/7.png",
  ];

  const services = [
    {
      title: "Business logo",
      src: "assets/tech/business.png",
    },
    {
      title: "UX/UI Design",
      src: "assets/tech/uiux.png",
    },
    {
      title: "Business Card",
      src: "assets/tech/card.png",
    },
    {
      title: "Social Media Post",
      src: "assets/tech/social.png",
    },
    {
      title: "Marketing Post",
      src: "assets/tech/social12.png",
    },
    {
      title: "Flyer(Portrait)",
      src: "assets/tech/fly.png",
    },
    {
      title: "Custom Print",
      src: "assets/tech/custom.png",
    },
    {
      title: "Social Media Cover Photo",
      src: "assets/tech/sodd.png",
    },
    {
      title: "Portfolio",
      src: "assets/tech/port.png",
    },
    {
      title: "Poster",
      src: "assets/tech/poster1.png",
    },
  ];
  return (
    <>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Your brand. Your story."
        subtitle="Design anything and everything."
      />
      <>
        {/* <div className="container">
          <p className="text-[20px] p-t-[20px] linear-[1.2] text-color bg-red-200">
            Need to make a lasting impression? The right combination of colors,
            shapes and words will define your brand. Get the perfect logo and
            ensure your branding hits the spot with these services.
            <br />
            Whether it is a company or oneself to establish unique identity
            visuals matters. Our team across the world uses the power of
            creativity to transform businesses for the better .
          </p>   
        </div> */}

        <div className="customize">
          <div className="pt-100 web-dev">
            <div className="parent">
              <div className="graphics-management">
                <div className="web-development-details">
                  <h1>
                    Our Graphic Solution
                  </h1>
                  <p>
                    Need to make a lasting impression? The right combination of
                    colors, shapes and words will define your brand. Get the
                    perfect logo and ensure your branding hits the spot with
                    these services.Whether it is a company or oneself to establish unique
                    identity visuals matters. Our team across the world uses the
                    power of creativity to transform businesses for the better .
                  </p>
                </div>
              </div>
              <div className="web-development text-center mb-100 graphics_design">
                <img
                  src="/assets/img/graphics.jpg"
                  alt="vector"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="technologies pb-100">
            <h1>Services We Provide</h1>
            <div className="visible-item">
              <div className="tech_items">
                {services.map((techItem) => {
                  const { src, title } = techItem;
                  return (
                    <div className="tech_item">
                      <img src={src} alt="" />
                      <h4>{title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="tech_items invisible-item">
              <Carousel>
                {services.map((techItem) => {
                  const { src, title } = techItem;
                  return (
                    <div className="tech_item">
                      <img src={src} alt="" />
                      <h4>{title}</h4>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          {/* <div className="flex align-center justify-center ">
          <h1>Our Top Services</h1>
        </div> */}

          {/* <div className=" p-[50px] flex justify-start"> 
          {services.map((service) => {
            return (
              <Service
                title={service.title}
                image={service.icon}
              />
            );
          })}
        </div> */}
        </div>
        <div className="graphics__work pb-200 mb-40">
          <h1>Sample Works</h1>
          <div className="work_segment">
            {images.map((image, key) => {
              return <GalleryImage index={key} images={images} image={image} />;
            })}
          </div>
        </div>
      </>
      <CommonCtaArea />
      <HomeTwoFooter />
    </>
  );
}

export default graphic_details;
