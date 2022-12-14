<<<<<<< HEAD
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactArea = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c12ofag",
        "template_issq6yr",
        form.current,
        "ujqGp-gYbQpWbuRmI"
      )
      .then(
        (result) => {
          if (result) {
            alert("thanks for your message");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <section className="contact__area">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="contact__map">
                <iframe
                  title="contact"
                  src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <div
                  className="contact__wrapper d-md-flex justify-content-between wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="contact__info mr-100">
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <h4>Address</h4>
                        <p>
                          24 Parking Plaza, Suite 506 <br /> Ardmore, SA 19004
                        </p>
                      </li>
                      <li>
                        <h4>call us</h4>
                        <p>
                          <a href="tel:(404)-888-123-456">(404) 888 123 456</a>
                        </p>
                        <p>
                          <a href="tel:(204)-888-234-674">(204) 888 234 674</a>
                        </p>
                      </li>
                      <li>
                        <h4>Email Address</h4>
                        <p>
                          <a href="mailto:Info@example.com">Info@example.com</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="contact__form">
                    <form onSubmit={sendEmail} ref={form}>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                      />
                      <textarea
                        required
                        placeholder="Your Message"
                        name="message"
                      ></textarea>
                      <button type="submit" className="z-btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
=======
import React from 'react';

const ContactArea = () => {
   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                        <iframe title='contact' src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
                        <div className="contact__wrapper d-md-flex justify-content-between wow fadeInUp" data-wow-delay=".3s">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>
                                 <li>
                                    <h4>Address</h4>
                                    <p>24 Parking Plaza, Suite 506 <br /> Ardmore, SA 19004</p>
                                 </li>
                                 <li>
                                    <h4>call us</h4>
                                    <p><a href="tel:(404)-888-123-456">(404) 888 123 456</a></p>
                                    <p><a href="tel:(204)-888-234-674">(204) 888 234 674</a></p>
                                 </li>
                                 <li>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:Info@example.com">Info@example.com</a></p>
                                 </li>
                              </ul>
                           </div>
                           <div className="contact__form">
                              <form >
                                 <input type="text" required placeholder="Your Name" />
                                 <input type="email" required placeholder="Your Email" />
                                 <textarea required placeholder="Your Message"></textarea>
                                 <button type="submit" className="z-btn">Send Message</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
