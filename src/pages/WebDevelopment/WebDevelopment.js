import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import "./webdevelopment.css";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";

function webDevelopment(props) {
  const arrayFaq = [
    {
      question: "Why should i choose your agency?",
      solution:
        "There is no work that we neglect at our company.The only thing we can do to help others is to provide them with services whenever possible.",
    },
    {
      question: "Can you help my business grow?",
      solution: "Our team always ready to help your business.",
    },
    {
      question:
        "I need a complete some talent team for my business. Who will I be working with?",
      solution:
        "Our agency team always ready to help  your business and also fixing the problem. You can get our service easily when you have to need.",
    },
  ];
  const tech = [
    {
      src: "assets/tech/angular.png",
      title: "Angular JS",
    },
    {
      src: "assets/tech/react.png",
      title: "React JS",
    },
    {
      src: "assets/tech/next.png",
      title: "Next Js",
    },

    {
      src: "assets/tech/vue.png",
      title: "Vue JS",
    },
    {
      src: "assets/tech/node.png",
      title: "Node JS",
    },
    {
      src: "assets/tech/mongo.png",
      title: "mongoDB Database",
    },
    {
      src: "assets/tech/laravel.png",
      title: "Laravel",
    },

    {
      src: "assets/tech/mysql.png",
      title: "mySQL",
    },
    {
      src: "assets/tech/word.png",
      title: "Wordpress",
    },
    {
      src: "assets/tech/shopify.png",
      title: "Shopify",
    },
  ];
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Clean, Optimised & Future-Ready."
        subtitle="web development"
      />
      <div className="pt-100 pb-100 web-dev">
        <div className="parent">
          <div className="web-development-details">
            <h1>
              Our Development <br /> Solution
            </h1>
            <p>
              Straightforward solutions to complex business challenges
              High-performing, intuitive and secure web solutions that support
              business processes and serve users globally. Your technology
              partner for innovative and impactful digital solutions. We deliver
              custom web development platforms that help our clients in
              employing capabilities such as micro-personalization, marketing
              automation, seamless integrations and the ability to become the
              best brand representative that drive your customers to your end
              goals.
              <br />
              Increasing the quality of our services and products is a
              never-ending process. We always c are for our clients and thank
              every single one of them who chose us for collaboration. We create
              outstanding projects that change the world, boost progress, and
              bring economic and social benefits. Powercode evolves, and every
              new project makes us stronger and better for you! Your trust is
              genuinely our biggest value.
            </p>
          </div>
          <div className="web-development text-center mb-100">
            <img
              src="/assets/img/gif.gif"
              alt="vector"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="technologies pb-100">
        <h1>Technologies we work with</h1>
        <div className="tech_items">
          {tech.map((techItem) => {
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
      {/* <div className=" flex flex-col align-center px-[1rem] my-[2rem] md:my-[4vw]">
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
      </div> */}

      <div className="web-development-life-cycle">
        <h1>Development lifecycle</h1>
        <div className="development-image">
          <img
            src="/assets/img/dev.png"
            alt="whyhireus"
            className="w-full h-auto hidden md:flex"
          />
          {/* <img
            src="/assets/img/devMobile.png"
            alt="whyhireus"
            className="w-[80vw] h-auto md:hidden mx-auto"
          /> */}
        </div>
      </div>

      {/* <div className="my-[2rem] px-[1rem] flex flex-col-reverse md:flex-row md:my-[4vw]">
        <div className="w-full md:w-[50vw] md:px-[5rem]">
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
      </div> */}
      <div className=" pb-80 web-dev">
        <div className="parent">
          <div className="web-development text-center mb-50">
            <img
              src="/assets/img/whyhireus.jpg"
              alt="vector"
              className="w-full h-auto"
            />
          </div>
          <div className="web-development-details pt-80">
            <h1>Why Hire Us?</h1>
            <p>
              Straightforward solutions to complex business challenges
              High-performing, intuitive and secure web solutions that support
              business processes and serve users globally. Your technology
              partner for innovative and impactful digital solutions. We deliver
              custom web development platforms that help our clients in
              employing capabilities such as micro-personalization, marketing
              automation, seamless integrations and the ability to become the
              best brand representative that drive your customers to your end
              goals.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-100 pb-150">
        <Faq arrayFaq={arrayFaq} />
      </div>
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default webDevelopment;
