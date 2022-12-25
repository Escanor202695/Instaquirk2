import { useState } from "react";
import {
<<<<<<< HEAD
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
=======
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import useGlobalContext from "../../../hooks/useGlobalContext";

const HomeOneHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();
  return (
    <>
      <header>
        <div className="header__area p-relative header__transparent">
          <div className="header__top d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-5 col-md-4">
                  <div className="header__social">
                    <ul>
<<<<<<< HEAD
                      {/*<li>
=======
                      <li>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                        <a href="#">
                          <i>
                            <FaFacebookF />
                          </i>{" "}
                        </a>
<<<<<<< HEAD
  </li>*/}
=======
                      </li>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                      <li>
                        <a href="#">
                          <i>
                            <FaLinkedinIn />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaInstagram />
                          </i>
                        </a>
                      </li>
<<<<<<< HEAD
=======
                     
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-8">
                  <div className="header__info f-right">
                    <ul>
                      <li>
                        <a href="tel:(+468)-254-762-443">
                          <i>
                            {" "}
                            <FaPhoneAlt />{" "}
                          </i>
                          (+468) 254 762 443
                        </a>
                      </li>
                      <li>
<<<<<<< HEAD
                        <a href="www.gmailƒ.com">
=======
                        <a href="mailto:info@consulting.com">
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                          <i>
                            {" "}
                            <FaEnvelope />{" "}
                          </i>
<<<<<<< HEAD
                          support@instaquirk.agency
=======
                          contact@instaquirk.com
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="header__sticky"
            className={stickyMenu ? "sticky header__bottom" : "header__bottom"}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
<<<<<<< HEAD
                  <div
                    className="logo"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src="assets/img/logo/logo-gradient.png" alt="logo" />
                    <div
                      className="brandName"
                      style={{
                        fontSize: "25px",
                        color: "white",
                        marginLeft: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Instaquirk
                    </div>
=======
                  <div className="logo">
                    <NavLink to="/">
                      <img src="assets/img/logo/logo-gradient.png" alt="logo" />
                    </NavLink>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                  </div>
                  <div className="logo-gradient">
                    <NavLink to="/">
                      <img src="assets/img/logo/logo-gradient.png" alt="logo" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center">
                    <div className="main-menu menu_wrapper_one">
                      <nav id="mobile-menu">
<<<<<<< HEAD
                        <ul className="drop-down-menu">
=======
                        <ul>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li>
                            <NavLink to="/about">About Us </NavLink>
                          </li>
                          <li>
<<<<<<< HEAD
                            <a className="services-item">Services</a>
                            <ul>
                              <li>
                                <NavLink
                                  to="/web_development"
                                  className="dropdown-item"
                                >
                                  Web Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/graphic_details"
                                  className="dropdown-item"
                                >
                                  Graphic Design
                                </NavLink>
                              </li>{" "}
                              <li>
                                <NavLink
                                  to="/social_media_management"
                                  className="dropdown-item social-item"
                                >
                                  Social Media Marketing <br/> & Management
                                </NavLink>
                              </li>{" "}
                              <li>
                                <NavLink to="/seo" className="dropdown-item">
                                  SEO
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                 
=======
                            <NavLink to="/services">Services</NavLink>
                          </li>
                          <li>
                            <NavLink to="/portfolio">Insights</NavLink>
                          </li>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                          <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
<<<<<<< HEAD
                    <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                      <Link
                        to="/contact"
                        className="z-btn z-btn-white z-btn-white-2"
                      >
=======
                    <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                      <Link to="/contact" className="z-btn z-btn-white">
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
                        Get a Quote
                      </Link>
                    </div>
                    <div
                      onClick={handleShow}
                      className="sidebar__menu d-lg-none"
                    >
                      <div className="sidebar-toggle-btn" id="sidebar-toggle">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="header__search-wrapper">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                           <form action="#">
                              <input type="text" placeholder="Your Keywords" />
                              <button type="button"><i > <FaSearch/> </i></button>
                           </form>
                        </div>
                     </div>
                  </div>
         </div>*/}
          <div className="body-overlay-2"></div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeOneHeader;
