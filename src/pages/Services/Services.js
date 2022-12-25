import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeCapabilities from '../Home/HomeCapabilities/HomeCapabilities';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import HomeServices from '../Home/HomeServices/HomeServices';
import HomeThreeSecondServices from '../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices';

const Services = () => {
   return (
      <>
         <HomeTwoHeader/>
         <CommonPageHeader title="Services" subtitle="Services" />
         <HomeServices />
         <HomeCapabilities/>
         <HomeThreeSecondServices />
         <CommonCtaArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default Services;