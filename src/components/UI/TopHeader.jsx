import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import useGlobalContext from "../../hooks/useGlobalContext";

const TopHeader = ({
  h4class,
  btn_text = "Get a Quote",
  btn_class = "z-btn-3",
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();

  return (
    <>
      <header>
        <div className="header__area p-relative header__transparent">
          {/* <div className="header__shape p-absolute">
            <img src="assets/img/icon/slider/03/icon-5.png" alt="" />
          </div> */}
          <div
            id="header__sticky"
            className={
              stickyMenu
                ? `sticky header__bottom header__bottom-2 ${h4class && h4class}`
                : `header__bottom header__bottom-2 ${h4class && h4class}`
            }
          >
            <div className="container">
              <div className="row align-items-center py-1">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="logo-3">
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
                    <div className="main-menu main-menu-3 menu_three_wrapper">
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
                      <Link to="/enroll/program" className={`z-btn ${btn_class}`}>
                        Enroll
                      </Link>
                    </div>
                    <div
                      onClick={handleShow}
                      className="sidebar__menu d-lg-none"
                    >
                      <div
                        className="sidebar-toggle-btn sidebar-toggle-btn-3"
                        id="sidebar-toggle"
                      >
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

export default TopHeader;
