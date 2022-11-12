import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';

const About = () => {
   const Faq = [
      {
        question: " Can you help my business grow?",
        solution:
          "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind",
      },
    ];
   return (
      <>
         <HomeTwoHeader/>
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout/>
         <HomeTwoFaq arrayFaq={Faq}/>
         <HomeTwoAchievement/>
         <HomeBrands/>
         <HomeTwoFooter/>
      </>
   );
};

export default About;