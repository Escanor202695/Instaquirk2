<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const SingleExpartContent = ({ image, position }) => {
  return (
    <>
      <div className="expart__tab-content white-bg">
        <div
          className="expart__thumb"
          style={{
            background: `url(assets/img/expart/expart-${image}.jpg)`,
            backgroundPosition: `${position}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 offset-lg-6">
            <div className="expart__content">
              <h3>
                We will guide you with
                <br /> our expertise
              </h3>
              <p>
                We have lots of expert teams who can help you with their highest
                effort. Our team is always ready to provide immediate solutions
                if anyone has any concerns.
              </p>
              <Link to="/about" className="z-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleExpartContent;
=======
import React from 'react';
import { Link } from 'react-router-dom';

const SingleExpartContent = ({image}) => {
    return (
        <>
            <div className="expart__tab-content white-bg">
                <div className="expart__thumb" style={{ background: `url(assets/img/expart/expart-${image}.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-6">
                        <div className="expart__content">
                            <h3>Our experts will <br /> guide you</h3>
                            <p>Tosser me old mucker lurgy cheeky bugger young delinquent squiffy at public school lost the plot fanny around, haggle daft my lady faff about old pear.</p>
                            <Link to="/about" className="z-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleExpartContent;
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
