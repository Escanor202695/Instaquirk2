<<<<<<< HEAD
import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import Process from "./Our_process/Process";
import Cooperation from "./Cooperation/Cooperation";
import Why_seo from "./Why_SEO/Why_seo";
function seo() {
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
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Outrank your competitors, Now!"
        subtitle="Make every click count"
      />
      <div className="customize">
        <Why_seo />
      </div>

      <Cooperation />
      <Process />
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default seo;
=======
import React from 'react';

function seo(props) {
    return (
        <div>
                SEO page
        </div>
    );
}

export default seo;
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
