import React from 'react';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
function seo() {
    const arrayFaq = [
        {
          question: " Can you help my business grow?",
          solution:
            "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off  blower burke james bond cheeky.",
        }
    ]
    return (
        <div>
            <HomeTwoHeader/>
            <CommonPageHeader
        title="Clean, Optimised & Future-Ready."
        subtitle="Social Media Management"
      />

      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
        </div>
    );
}

export default seo;