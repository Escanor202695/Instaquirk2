<<<<<<< HEAD
import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import ContactArea from "./ContactArea/ContactArea";
import ContactInfoArea from "./ContactInfoArea/ContactInfoArea";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HomeOneHeader />
      <CommonPageHeader title="Contact Us" subtitle="Get in touch" />
      <div onClick={handleClick}>
        <ContactInfoArea />
      </div>
      <div ref={ref}>
        <ContactArea />
      </div>

      <HomeTwoFooter />
    </>
  );
};

export default Contact;
=======
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
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
