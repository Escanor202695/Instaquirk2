import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeAbout from "../Home/HomeAbout/HomeAbout";
import HomeBrands from "../Home/HomeBrands/HomeBrands";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoAchievement from "../HomeTwo/HomeTwoAchievement/HomeTwoAchievement";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import HomeTwoFaq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import AboutMore from "../../components/AboutMore/AboutMore";

const About = () => {
  const Faq = [
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
  //  const aboutSubTitle = `As an unemployment service provider, we assist clients in finding employment. Develop a business or assist in its development. Additionally,
  //   we offer courses in Web Development, Graphics Design, Full Stack SEO, and Social Media Management & Marketing `
  return (
    <>
      <HomeTwoHeader />
      <CommonPageHeader title="About Us" subtitle="" />
      <HomeAbout />
      <AboutMore />
      <HomeTwoFaq arrayFaq={Faq} />
      <HomeTwoAchievement />
      {/* <HomeBrands /> */}
      <CommonCtaArea />
      <HomeTwoFooter />
    </>
  );
};

export default About;
