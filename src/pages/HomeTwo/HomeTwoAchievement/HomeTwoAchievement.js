import React from "react";
import { Link } from "react-router-dom";

const HomeTwoAchievement = () => {
<<<<<<< HEAD
  return (
    <>
      <section className="achievement__area pt-135 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="achievement__content">
                <div className="section__title section__title-3 mb-20">
                  <span>Among the achievement</span>
                  <h2>
                    You are our main priority, and we are committed to your
                    success
                  </h2>
                </div>
                <p>
                  The development of a successful product requires a balanced
                  approach. We blend personalized, in-depth technical guidance
                  with our global scale.
                </p>
                <div
                  className="achievement__wrapper d-flex d-md-block d-lg-flex justify-content-between mb-35 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="achievement__item mb-30">
                    <img
                      src="assets/img/icon/achievement/affordable.png"
                      alt="achievement"
                    />
                    <h3>Affordability consulting for acquisitions</h3>
                  </div>
                  <div className="achievement__item mb-30">
                    <img
                      src="assets/img/icon/achievement/idea.png"
                      alt="achievement"
                    />
                    <h3>Consultancy for private placements</h3>
=======
   return (
      <>
         <section className="achievement__area pt-135 pb-40 ">
            <div className="container ">
               <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                     <div className="achievement__content">
                        <div className="section__title section__title-3 mb-20">
                           <span>Achievement</span>
                           <h2>We are certified financial experts</h2>
                        </div>
                        <p>He nicked it fantastic well on your bike mate have it a I bum bag I twit easy peasy that, chimney pot amongst are you taking the piss daft show off show off pick.</p>
                        <div className="achievement__wrapper d-flex d-md-block d-lg-flex justify-content-between mb-35 wow fadeInUp" data-wow-delay=".8s">
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-1.png" alt="achievement"/>
                                 <h3>Acquisitions Finance Consulting</h3>
                           </div>
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-2.png" alt="achievement"/>
                                 <h3>Private Placement Consulting</h3>
                           </div>
                        </div>
                        <Link to="/about" className="z-btn">Learn More</Link>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-6">
                     <div className="row">
                        <div className="col-xl-7 col-sm-6">
                           <div className="achievement__thumb m-img pl-30 text-right ">
                              <img src="assets/instaquirkbg/24.jpg"  alt="achievement-1"/>
                           </div>
                        </div>
                        <div className="col-xl-5 col-sm-6 d-md-none d-lg-none d-xl-block">
                           <div className="achievement__thumb w-img h-[20px] border-red-700" >
                              <img src="assets/instaquirkbg/26.jpg" alt=""/>
                           </div>
                        </div>
                     </div>
>>>>>>> d83f3b90e5d1511ac4b02159e56b9d578f1303ad
                  </div>
                </div>
                <Link to="/about" className="z-btn">
                  Explore More
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="row">
                <div className="col-xl-7 col-sm-6">
                  <div className="achievement__thumb m-img pl-30 text-right">
                    <img
                      src="assets/img/achievement/success.jpg"
                      alt="achievement-1"
                    />
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 d-md-none d-lg-none d-xl-block">
                  <div className="achievement__thumb w-img">
                    <img src="assets/img/achievement/44-2.jpg" alt="" />
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

export default HomeTwoAchievement;
