import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactInfoArea from './ContactInfoArea/ContactInfoArea';

const Contact = () => {
   return (
      <>
         <HomeOneHeader/>
         <CommonPageHeader title="Contact Us" subtitle="Contact" />
         <ContactInfoArea/>
         <ContactArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default Contact;