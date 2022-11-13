import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import "./webdevelopment.css";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import { FaConnectdevelop } from "react-icons/fa";
function webDevelopment(props) {
  const arrayFaq = [
    {
      question: " Can you help my business grow?",
      solution:
        "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off  blower burke james bond cheeky.",
    },
    {
      question: " Can you help my business grow?",
      solution:
        "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off  blower burke james bond cheeky.",
    },
    {
      question: " Can you help my business grow?",
      solution:
        "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off  blower burke james bond cheeky.",
    },
  ];
  const tech = [
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
    {
      src: "https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png",
      title: "mySQL",
    },
  ];
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Clean, Optimised & Future-Ready."
        subtitle="web development"
      />
      <div className="p-[1rem] flex flex-col justify-center items-center md:mt-[4vw]">
        <h1 className="text-[2rem] md:text-[4vw] font-bold text-center">
          Our Development Solution
        </h1>
        <p className="my-[1rem] md:text-[1.5vw] md:leading-[1.75vw] md:px-[4vw]">
          Straightforward solutions to complex business challenges
          High-performing, intuitive and secure web solutions that support
          business processes and serve users globally. Your technology partner
          for innovative and impactful digital solutions. We deliver custom web
          development platforms that help our clients in employing capabilities
          such as micro-personalization, marketing automation, seamless
          integrations and the ability to become the best brand representative
          that drive your customers to your end goals.
          <br />
          <br />
          Increasing the quality of our services and products is a never-ending
          process. We always c are for our clients and thank every single one of
          them who chose us for collaboration. We create outstanding projects
          that change the world, boost progress, and bring economic and social
          benefits. Powercode evolves, and every new project makes us stronger
          and better for you! Your trust is genuinely our biggest value.
        </p>
      </div>
      <div className="w-full h-auto md:px-[10vw]">
        <img
          src="/assets/img/vector2.jpg"
          alt="vector"
          className="w-full h-auto"
        />
      </div>
      <div className=" flex flex-col align-center px-[1rem] my-[2rem]">
        <h1 className="text-[2rem] md:text-[4vw] font-bold text-center">
          Technologies we work with
        </h1>
        <div className="flex flex-wrap justify-center my-[1rem] md:my-[3vw]">
          {tech.map((t) => {
            return (
              <div className="w-1/3 md:w-[12rem] h-auto mb-[1rem]">
                <img src={t.src} alt={t.title} className="w-full h-auto" />
                <h5 className="text-[1rem] md:text-[1.5rem] text-center">
                  {t.title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col align-center">
        <h1 className="text-[2rem] md:text-[4vw] font-bold text-center">
          Development lifecycle
        </h1>
        <div className="w-full min-h-[500px] bg-red-500">
          <img
            src="/assets/img/xxxxx.jpg"
            alt="whyhireus"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="my-[2rem] px-[1rem] flex flex-col flex-col-reverse md:flex-row">
        <div className="w-full md:w-[50vw]">
          <img
            src="/assets/img/whyhireus.jpg"
            alt="whyhireus"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-[2rem] md:text-[4vw] font-bold w-full flex justify-center md:justify-start">
            Why Hire Us?
          </h1>
          <p className="my-[1rem]">
            BECAUSE WE CARE AND TRY TO PROVIDE BEST SERVICE
          </p>
        </div>
      </div>
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default webDevelopment;
