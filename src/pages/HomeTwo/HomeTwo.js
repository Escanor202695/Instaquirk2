import React from "react";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeTwoAchievement from "./HomeTwoAchievement/HomeTwoAchievement";
<<<<<<< HEAD
=======
import HomeTwoCaseArea from "./HomeTwoCaseArea/HomeTwoCaseArea";
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
import HomeTwoExpertArea from "./HomeTwoExpertArea/HomeTwoExpertArea";
import HomeTwoFaq from "./HomeTwoFaq/HomeTwoFaq";
import HomeTwoFeatures from "./HomeTwoFeatures/HomeTwoFeatures";
import HomeTwoFooter from "./HomeTwoFooter/HomeTwoFooter";
import HomeTwoHeader from "./HomeTwoHeader/HomeTwoHeader";
import HomeTwoHeroSlider from "./HomeTwoHeroSlider/HomeTwoHeroSlider";

const HomeTwo = () => {
  const Faq = [
    {
<<<<<<< HEAD
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
  const opacity = 1;
=======
      question: " Can you help my business grow?",
      solution:
        "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind",
    },
  ];
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
  return (
    <>
      <PageHelmet pageTitle="Instaquirk" />
      <HomeTwoHeader />
<<<<<<< HEAD
       <HomeTwoHeroSlider /> 
      <HomeTwoFeatures />
      <HomeTwoFaq arrayFaq={Faq} />
      <HomeTwoAchievement opacity={opacity} />
      <HomeTwoExpertArea />
      {/*<HomeTwoCounter/>
      <HomeTwoTestimonial />*/}
      {/* <HomeTwoCaseArea /> */}
=======
      <HomeTwoHeroSlider />
      <HomeTwoFeatures />
      <HomeTwoFaq arrayFaq={Faq} />
      <HomeTwoAchievement />
      <HomeTwoExpertArea />
      {/*<HomeTwoCounter/>
      <HomeTwoTestimonial />*/}
      <HomeTwoCaseArea />
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
      {/*<HomeTwoBlogs/>*/}
      <CommonCtaArea />
      <HomeTwoFooter />
    </>
  );
};

export default HomeTwo;
