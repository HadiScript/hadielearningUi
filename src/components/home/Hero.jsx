import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./mascot.css";
import { CgArrowLongRight } from "react-icons/cg";

const Hero = () => {
  return (
    <>
      <section className="hero__area p-relative">
        <div className="hero__shape">
          <img
            className="one"
            src="assets/img/icon/slider/03/icon-1.png"
            alt=""
          />
          <img
            className="two"
            src="assets/img/icon/slider/03/icon-2.png"
            alt=""
          />
          <img
            className="three"
            src="assets/img/icon/slider/03/icon-3.png"
            alt=""
          />
          <img
            className="four"
            src="assets/img/icon/slider/03/icon-4.png"
            alt=""
          />
          <img
            className="five "
            src="assets/img/icon/slider/03/icon-6.png"
            alt=""
          />
          <img
            className="six "
            src="assets/img/icon/slider/03/icon-7.png"
            alt=""
          />
        </div>
        <div className="hero__item hero__height d-flex ">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-5 col-0 order-last"
                id="imagesBox"
              >
                <Fade bottom cascade>
                  <div className="hero__thumb-wrapper ml-50 scene p-relative  ">
                      <img
                        id="mascot"
                        className="layer"
                        data-depth="0.2"
                        src="/assets/images/about.png"
                        alt=""
                      />
                    {/* <div className="hero__thumb one">
                    </div> */}
                    <div className="hero__thumb two d-none d-md-block d-lg-none d-xl-block">
                      <img
                        className="layer"
                        data-depth="0.3"
                        src="assets/images/bell.png"
                        alt=""
                        style={{ height: "100px", marginLeft: "-200px" }}
                      />
                    </div>
                    {/* <div className="hero__thumb three d-none d-sm-block">
                      <img
                        className="layer"
                        data-depth="0.4"
                        src="assets/images/chart.png"
                        alt=""
                        style={{ height: "100px", marginLeft: "-50px" }}
                      />
                    </div> */}
                    <div className="hero__thumb four d-none d-md-block d-lg-none d-xl-block">
                      <img
                        className="layer"
                        data-depth="0.5"
                        src="assets/images/circle.png"
                        alt=""
                        style={{ height: "100px", marginLeft: "150px" }}
                      />
                    </div>
                  </div>
                </Fade>
              </div>
              <div
                className="col-xl-6 col-lg-7 d-flex align-items-center"
                style={{ marginTop: "250px" }}
              >
                <Fade bottom cascade>
                  <div className="about__content">
                    <h1>Hadi E-learning</h1>
                    <p className="text-justify">
                      Hadi E-Learning is committed to providing quality IT
                      training to the youth of Pakistan through an online
                      learning platform. Our goal is to empower students with
                      the knowledge and skills necessary to succeed in the
                      fast-paced world of technology. Each of our course is
                      carefully crafted to ensure that students receive a
                      comprehensive education that prepares them for the
                      challenges of the global digital.
                    </p>
                    <Link to="/about" className="z-btn z-btn-border">
                      About us
                    </Link>

                    <Link to="/programs" className="z-btn mx-2 ">
                      Programs
                      <i>
                        <CgArrowLongRight />
                      </i>
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
