import React from 'react';
import SIngleContactInfo from '../../../components/SIngleContactInfo/SIngleContactInfo';

const ContactInfoArea = () => {
<<<<<<< HEAD
   
=======
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
   return (
      <>
         <section className="contact__help p-relative pt-115 pb-150">
            <div className="contact__shape">
               <img className="dot" src="assets/img/icon/contact/dot.png" alt="" />
               <img className="shape" src="assets/img/icon/contact/shape.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 offset-xl-1">
                     <div className="section__title section__title-3 mb-55">
                        <span >Contact</span>
                        <h2 >Help Center</h2>
                     </div>
                  </div>
               </div>
<<<<<<< HEAD
               <div className="row p-relative" >
=======
               <div className="row p-relative">
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115

                  <SIngleContactInfo image="headset" title="Customer Support" btn_text="Visit Support Forum" />
                  <SIngleContactInfo image="msg" title="Any Questions" btn_text="Contact Support" />

               </div>
            </div>
         </section>
      </>
   );
};

export default ContactInfoArea;