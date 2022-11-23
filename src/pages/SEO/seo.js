import React from 'react';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import Process from './Our_process/Process'
import Cooperation from './Cooperation/Cooperation';
import Why_seo from './Why_SEO/Why_seo';
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
        title="Outrank your competitors, Now!"
        subtitle="Make every click count"
      />
      <Why_seo/>
      <Cooperation/>            
      <Process/>
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
        </div>
    );
}

export default seo;