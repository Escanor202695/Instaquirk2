import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import MarketingSolution from "../../components/MarketingSolution/MarketingSolution";
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
        title="Clean, Optimised & Future-Ready."
        subtitle="Social Media Management"
      />
      <MarketingSolution />
      <Faq arrayFaq={arrayFaq} />
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default seo;
