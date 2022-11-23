import React from "react";
import { BiLock } from "react-icons/bi";
import { CgArrowLongRight } from "react-icons/cg";
import { GiDigitalTrace } from "react-icons/gi";
import { BsMicrosoft } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { DiCodeBadge } from "react-icons/di";

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
                    Better than other <br /> Course Providers!
                  </h2>
                </div>
                <p>
                  We are delivering the Best SEO, Web Development and Full Stack
                  Digital Marketing Course at an Affordable Pricing! Check our
                  Courses and One time Exclusive Discounts!
                </p>
                <Link to="/about" className="z-btn">
                  See More
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
                      desc="In our web development courses, you'll learn everything you need to know"
                    />
                    <HomeTwoSingleFeature
                      icon={<SiAntdesign />}
                      title="UI/UX Designer"
                      desc="Learn everything you need to know about UI/UX Design in our courses"
                    />
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <HomeTwoSingleFeature
                      icon={<GiDigitalTrace />}
                      title="Digital Marketing"
                      desc="Our courses will teach you everything you need to know about Digital Marketing"
                    />
                    <HomeTwoSingleFeature
                      icon={<DiCodeBadge />}
                      title="Ethical Hacking"
                      desc="The Ethical Hacking courses we offer will teach you everything you need to know"
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
