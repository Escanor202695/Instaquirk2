import React from "react";
import {
<<<<<<< HEAD
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import {} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
=======
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiMap } from 'react-icons/bi';
import {} from "react-icons/fa";
import { Link } from "react-router-dom";
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115

const HomeTwoFooter = () => {
  return (
    <>
      <footer>
        <div className="footer__area grey-bg pt-100">
          <div className="footer__top pb-45">
            <div className="container">
<<<<<<< HEAD
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
=======
              <div className="row" style={{display:'flex',justifyContent:"space-between"}}>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title mb-30">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src="assets/img/logo/logo-gradient.png"
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <p className="mb-30">
<<<<<<< HEAD
                        Copyright © 2022 All Rights Reserved by Instaquirk
=======
                        Copyright © 2022 All Rights Reserved passion by
                        Theme_Pure
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                      </p>
                      <div className="footer__social theme-social mb-30">
                        <ul>
                          <li>
                            <a href="#">
                              <i>
<<<<<<< HEAD
                                <FaLinkedinIn />
                              </i>
                              <i>
                                <FaLinkedinIn />
=======
                                <FaFacebookF />
                              </i>
                              <i>
                                <FaFacebookF />
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i>
                                <FaTwitter />{" "}
                              </i>
                              <i>
                                <FaTwitter />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i>
<<<<<<< HEAD
                                <FaInstagram />{" "}
                              </i>
                              <i>
                                <FaInstagram />{" "}
=======
                                <FaVimeoV />{" "}
                              </i>
                              <i>
                                <FaVimeoV />{" "}
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
                      <h4>Company</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          <li>
<<<<<<< HEAD
                            <NavLink to="/about">About</NavLink>
=======
                            <a href="#">About Us</a>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                          </li>
                          <li>
                            <a href="#">Testimonials</a>
                          </li>
                          <li>
                            <a href="#">Consulting</a>
                          </li>
                          <li>
                            <a href="#">Partners</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
<<<<<<< HEAD
                      <h4>Services</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>       
                          <li>
                          <NavLink to="/seo">SEO</NavLink>
                          </li>
                          <li>
                          <NavLink to="/web_development">Web Development</NavLink>
                          </li>
                          <li>
                          <NavLink to="/graphic_details">Graphics Design</NavLink>
                          </li>
                          <li>
                          <NavLink to="/social_media_management">Social Media Management</NavLink>
=======
                      <h4>Resources</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          <li>
                            <a href="#">Customers</a>
                          </li>
                          <li>
                            <a href="#">Pricing</a>
                          </li>
                          <li>
                            <a href="#">News</a>
                          </li>
                          <li>
                            <a href="#">Learning Center</a>
                          </li>
                          <li>
                            <a href="#">Help desk</a>
                          </li>
                          <li>
                            <a href="#">Support</a>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Newsletter</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__subscribe">
                                    <p className="mb-30">Subscribe to out newsletter today to receive updates on the latest news</p>
                                    <div className="footer__subscribe-form p-relative">
                                       <form action="#">
                                          <input type="email" placeholder="Email Address"/>
                                             <button type="submit">Subscribe</button>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                  </div>*/}
                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget mb-45">
                    <div className="footer__widget-title">
                      <h4>Contact Us</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <ul>
                          <li>
                            <div className="icon">
                              <i>
                                {" "}
                                <BiMap />{" "}
                              </i>
                            </div>
                            <div className="text">
                              <span>
                                Ave 14th Street, Mirpur 210, San Franciso, USA
                                3296.
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="icon theme-color ">
                              <i>
                                {" "}
                                <FaEnvelope />{" "}
                              </i>
                            </div>
                            <div className="text theme-color ">
                              <span>
                                <a href="mailto:support@zibber.com">
                                  support@zibber.com
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="icon theme-color">
                              <i>
                                <FaPhoneAlt />{" "}
                              </i>
                            </div>
                            <div className="text theme-color">
                              <span>
                                <a href="tel:(+642)-394-396-432">
                                  (+642) 394 396 432
                                </a>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeTwoFooter;
