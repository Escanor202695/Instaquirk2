import React from "react";
import "./graphic_details.css";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Service from "./gservices/service";
import GalleryImage from "./GalleryImage";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";

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
    "/assets/img/graphics/9.png",
  ];

  const services = [
    {
      title: "Business logo",
      icon:  1,
    },
    {
      title: "UX/UI Design",
      icon: 1,
    },
    {
      title: "Business Card",
      icon: 1,
    },
    {
      title: "Social Media Post",
      icon: 1,
    },
    {
      title: "Marketing Post",
      icon: 1,
    },
    {
      title: "Flyer(Portrait)",
      icon: 1,
    },
    {
      title: "Custom Print",
      icon: 1,
    },
    {
      title: "Social Media Cover Photo",
      icon: 1,
    },
    {
      title: "Portfolio",
      icon: 1,
    },
    {
      title: "Poster",
      icon: 1,
    },
  ];
  return (
    <>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Your brand. Your story."
        subtitle="Design anything and everything."
      />
      <div className="service">
        <div className="container">
          <p>
            Need to make a lasting impression? The right combination of colors,
            shapes and words will define your brand. Get the perfect logo and
            ensure your branding hits the spot with these services.
            <br />
            Whether it is a company or oneself to establish unique identity
            visuals matters. Our team across the world uses the power of
            creativity to transform businesses for the better .
          </p>
        </div>
        <div className="header">
          <h1>Our Top Services</h1>
        </div>

        <div className="serviceList">
          {services.map((service) => {
            return (
              <Service
                title={service.title}
                image={service.icon}
              />
            );
          })}
        </div>

        <div className="work_segment">
          <h1>Sample Works</h1>
          <div className="gallery">
            {images.map((image, key) => {
              return <GalleryImage index={key} images={images} image={image} />;
            })}
          </div>
        </div>
      </div>
      <CommonCtaArea />
      <HomeTwoFooter />
    </>
  );
}

export default graphic_details;
