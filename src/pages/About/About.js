import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeAbout from "../Home/HomeAbout/HomeAbout";
import HomeBrands from "../Home/HomeBrands/HomeBrands";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoAchievement from "../HomeTwo/HomeTwoAchievement/HomeTwoAchievement";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import HomeTwoFaq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";

const About = () => {
  const Faq = [
    {
      question: " Can you help my business grow?",
      solution:
        "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind",
    },
    {
      question: " Can you help in me in web development?",
      solution:
        "Our agency team always ready to help  your web development and also fixing the bug. You can get our service easily when you have to need.",
    },
    {
      question: "Can i get help for SEO or digital marketing?",
      solution:
        "Our agency team always ready to help  your Digital marketing and SEO. You can get our service easily when you have to need.",
    },
    {
      question: "Can I get UI/UX course from here ?",
      solution:
        "We are trying to bring out this course as soon as possible. Please Stay Tuned to Us?",
    },
    {
      question: "After course finishing, can I get a job ?",
      solution:
        "Yes, this course is designed for jobs. After finishing our course we drop your resume in my others companies.",
    },
    {
      question: "Can I do freelancing after completing this course?",
      solution:
        "After completing this course, our agency team will show you how to do freelancing.",
    },
  ];
  return (
    <>
      <HomeTwoHeader />
      <CommonPageHeader title="About Us" subtitle="About" />
      <HomeAbout />
      <HomeTwoFaq arrayFaq={Faq} />
      <HomeTwoAchievement />
      <HomeBrands />
      <HomeTwoFooter />
    </>
  );
};

export default About;
