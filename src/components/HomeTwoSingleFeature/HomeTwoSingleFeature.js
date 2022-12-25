<<<<<<< HEAD
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const HomeTwoSingleFeature = ({ icon, title, desc }) => {
  return (
    <>
      <div className="features__item features__item-2 white-bg fix mb-30">
        <div
          className="features__thumb-2"
          style={{
            background: `url(assets/img/features/02/ftrs.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="features__content-2">
          <div className="features__icon features__icon-2">
            <i> {icon} </i>
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="features__btn-2">
            <Link to="/about" className="link-btn">
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoSingleFeature;
=======
import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTwoSingleFeature = ({icon,title}) => {
   return (
      <>
         <div className="features__item features__item-2 white-bg fix mb-30">
            <div className="features__thumb-2" style={{ background: `url(assets/img/features/02/features-1.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
            <div className="features__content-2">
               <div className="features__icon features__icon-2">
                  <i > {icon} </i>
               </div>
               <h3>{title}</h3>
               <p>He nicked it Jeffrey zonked cheeky bugger.</p>
               <div className="features__btn-2">
                  <Link to="/about" className="link-btn">
                     <i > <CgArrowLongRight /> </i>
                     <i > <CgArrowLongRight /> </i>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleFeature;
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
