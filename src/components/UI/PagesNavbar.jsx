import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import useGlobalContext from "../../hooks/useGlobalContext";

const PagesNavbar = ({ page = "notFromContact" }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();
  return (
    <>
      <header>
        <div
          className={`header__area p-relative ${
            page === "notFromContact" && "header__transparent"
          }`}
          style={{
            backgroundImage: `${
              page === "contactPage" &&
              " linear-gradient( 329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)"
            }`,
          }}
        >
          {/* <div className="header__top d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-5 col-md-4">
                  <div className="header__social">
                    <ul>
                      <li>
                        <a href="#">
                          <i>
                            <FaFacebookF />
                          </i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaTwitter />{" "}
                          </i>
                        </a>{" "}
                      </li>
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
                            {" "}
                            <FaPinterestP />{" "}
                          </i>
                        </a>
                      </li>
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
                        <a href="mailto:info@consulting.com">
                          <i>
                            {" "}
                            <FaEnvelope />{" "}
                          </i>
                          info@consulting.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div
            id="header__sticky"
            className={stickyMenu ? "sticky header__bottom" : "header__bottom"}
          >
            <div className="container">
              <div className="row align-items-center py-1">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="logo">
                    <NavLink to="/">
                      <img
                        src="/assets/images/secondary.svg"
                        alt="logo"
                        style={{ height: "60px" }}
                      />
                      {/* <h3 className="text-light">Hadi Elearning</h3> */}
                    </NavLink>
                  </div>
                  <div className="logo-gradient">
                    <NavLink to="/">
                      <img
                        src="/assets/images/primary.svg"
                        alt="logo"
                        style={{ height: "60px" }}
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center">
                    <div className="main-menu menu_wrapper_one">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <NavLink to="/" style={{ fontSize: "17px" }}>
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/about" style={{ fontSize: "17px" }}>
                              About us{" "}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/programs"
                              style={{ fontSize: "17px" }}
                            >
                              Programs
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/how-it-works"
                              style={{ fontSize: "17px" }}
                            >
                              How it works?
                            </NavLink>
                          </li>

                          {/* <li>
                            <NavLink to="/contact" style={{ fontSize: "17px" }}>
                              Contact Us
                            </NavLink>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                    <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                      <Link to="/enroll/program" className="z-btn z-btn-3">
                        Enroll
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
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default PagesNavbar;
