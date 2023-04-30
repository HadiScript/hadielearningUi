import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

import "../home/mascot.css";

const AboutPlatform = () => {
  return (
    <section
      id="about"
      className="pt-80 pb-100 p-relative"
      // style={{
      //   background: `url(assets/img/bg/wave-bg-2.png)`,
      //   backgroundPosition: "bottom",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="container">
        <div className="about__area-2 pt-0">
          <div className="row pt-120">
            <div className="col-xl-7 col-lg-6">
              {/* <Fade left> */}
              <div className="about__thumb-2 p-relative m-img  text-center ">
                <img
                  id="about_page_mascot"
                  src="assets/images/abouthadi.png"
                  alt=""
                />
              </div>
              {/* </Fade> */}
            </div>
            <div className="col-xl-5 col-lg-6">
              {/* <Fade right> */}
              <div className="about__content">
                <div className="section__title section__title-3 mb-25">
                  <h2>
                    How Hadi has <br /> evolved
                  </h2>
                </div>
                <p>
                  Introducing Hadi E-Learning, empowering Pakistani youth with
                  technical knowledge. Our mascot, Hadi, symbolizes leadership,
                  mentorship, and friendship, guiding youth towards success.
                  With subsidized access, we provide opportunities for all. Let
                  Hadi be your career consultant and leader, unlocking doors to
                  a prosperous future. Join us on this journey to positively
                  impact the lives of Pakistani youth with one of the best
                  online learning platforms. Together, we can empower our youth
                  and bridge the gap to global opportunities.
                </p>
                <a href="#mission" className="z-btn">
                  Hadi's Mission
                </a>
              </div>
              {/* </Fade> */}
            </div>
          </div>

          <div className="row pt-120" id="mission">
            <div className="col">
              {/* <Fade right> */}
              <div className="about__content">
                <div className="section__title section__title-3 mb-25">
                  <h2>Mission Statement</h2>
                </div>
                <p>
                  The mission of Hadi E-Learning is to empower the youth with
                  the treasure of technical knowledge. We want our talented
                  youth to excel in this digital age and set higher benchmarks
                  for themselves. We aim and strive to create opportunities for
                  them so they don't have to stop on their road to success due
                  to hurdles like fewer or no opportunities.
                </p>
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
