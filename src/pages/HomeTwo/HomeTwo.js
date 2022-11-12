import React from "react";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeTwoAchievement from "./HomeTwoAchievement/HomeTwoAchievement";
import HomeTwoCaseArea from "./HomeTwoCaseArea/HomeTwoCaseArea";
import HomeTwoExpertArea from "./HomeTwoExpertArea/HomeTwoExpertArea";
import HomeTwoFaq from "./HomeTwoFaq/HomeTwoFaq";
import HomeTwoFeatures from "./HomeTwoFeatures/HomeTwoFeatures";
import HomeTwoFooter from "./HomeTwoFooter/HomeTwoFooter";
import HomeTwoHeader from "./HomeTwoHeader/HomeTwoHeader";
import HomeTwoHeroSlider from "./HomeTwoHeroSlider/HomeTwoHeroSlider";

const HomeTwo = () => {
  const Faq = [
    {
      question: " Can you help my business grow?",
      solution:
        "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind",
    },
  ];
  return (
    <>
      <PageHelmet pageTitle="Instaquirk" />
      <HomeTwoHeader />
      <HomeTwoHeroSlider />
      <HomeTwoFeatures />
      <HomeTwoFaq arrayFaq={Faq} />
      <HomeTwoAchievement />
      <HomeTwoExpertArea />
      {/*<HomeTwoCounter/>
      <HomeTwoTestimonial />*/}
      <HomeTwoCaseArea />
      {/*<HomeTwoBlogs/>*/}
      <CommonCtaArea />
      <HomeTwoFooter />
    </>
  );
};

export default HomeTwo;
