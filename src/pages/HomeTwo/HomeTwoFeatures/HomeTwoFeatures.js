<<<<<<< HEAD
import React from "react";
import { BiLock } from "react-icons/bi";
import { CgArrowLongRight } from "react-icons/cg";
import { GiDigitalTrace } from "react-icons/gi";
import { BsMicrosoft } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import HomeTwoSingleFeature from "../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature";

const HomeTwoFeatures = () => {
  return (
    <>
      <section className="features__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="features__content-left">
                <div className="section__title section__title-h2 mb-25">
                  <span>What we do ?</span>
                  <h2>
                    Better than other <br /> Agency Providers
                  </h2>
                </div>
                <p>
                  In terms of SEO, Web Development, and Full Stack, we offer the
                  most comprehensive services Social Media Management &
                  Marketing.The client's business can be improved according to
                  his needs by using our services.
                </p>
                <Link to="/about" className="z-btn">
                  Explore More
                  <i>
                    <CgArrowLongRight />
                  </i>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6">
              <div className="features__content-right">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <HomeTwoSingleFeature
                      icon={<BsMicrosoft />}
                      title="Web Development"
                      desc="We will provide you with our excellent services for Web Development"
                    />
                    <HomeTwoSingleFeature
                      icon={<SiAntdesign />}
                      title="Graphic Designer"
                      desc="We will provide you with our excellent services for Graphic Design"
                    />
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <HomeTwoSingleFeature
                      icon={<GiDigitalTrace />}
                      title="Social Media Management & Marketing"
                      desc="We will provide you with our excellent services for Social Media Management & Marketing"
                    />
                    <HomeTwoSingleFeature
                      icon={<AiOutlineSearch />}
                      title="SEO"
                      desc="We will provide you with our excellent services for full stack SEO"
                    />
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

export default HomeTwoFeatures;
=======
import React from 'react';
import { BiLock } from 'react-icons/bi';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import HomeTwoSingleFeature from '../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature';

const HomeTwoFeatures = () => {
   return (
      <>
         <section className="features__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="features__content-left">
                        <div className="section__title section__title-h2 mb-25">
                           <span>Design Accordlogy</span>
                           <h2>Enrich <br/> your design</h2>
                        </div>
                        <p>Do one plastered chinwag only a quid squiffy bugger all mate, the little rotter horse play.</p>
                        <Link to="/about" className="z-btn">What we do<i><CgArrowLongRight/></i></Link>
                     </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6">
                     <div className="features__content-right">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<FaLightbulb />} title="Share Knowledge" />
                              <HomeTwoSingleFeature icon={<IoDocumentTextOutline />} title="Amazing Works" />

                           </div>

                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<FaRibbon />} title="Meet new Friends" />
                              <HomeTwoSingleFeature icon={<BiLock />} title="Portfolio Expert" />

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

export default HomeTwoFeatures;
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
