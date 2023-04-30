import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { BsCaretDown } from "react-icons/bs";

const MobHero = () => {
 
  // slick setting
  const settings = {
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 500,
    infinite: true,
    dots: true,
    fade: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <VideoPopup videoId="yJg-Y5byMMw" /> */}

      <section className="slider__area">
        <Slider className="testimonial__slider" {...settings}>
          <div className={`single-slider `}>
            <div style={{ height: "62px" }} />
            <div
              className={`d-flex align-items-center home_slider_2`}
              style={{ height: "100%" }}
            >
              <div className="slider__shape">
                <img
                  className="shape triangle"
                  src="assets/img/icon/slider/triangle.png"
                  alt="triangle"
                />
                <img
                  className="shape dotted-square"
                  src="assets/img/icon/slider/dotted-square.png"
                  alt="dotted-square"
                />
                <img
                  className="shape solid-square"
                  src="assets/img/icon/slider/solid-square.png"
                  alt="solid-square"
                />
              </div>
              <div className="container h1_slider_wrapper">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                    <div className="slider__content">
                      <span>Welcome to</span>
                      <h1>
                        Hadi <br /> E-learning
                      </h1>
                      <p className="text-light">
                        Hadi E-Learning: Quality IT training in Pakistan.
                        Subsidized courses for accessibility.
                      </p>
                      <a href="#sectionArea" className="z-btn">
                        Explore <BsCaretDown size={25} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`single-slider `}>
            <div style={{ height: "62px" }} />
            <div
              className={`d-flex align-items-center home_slider_2`}
              style={{ height: "100%" }}
            >
              <div className="slider__shape">
                <img
                  className="shape triangle"
                  src="assets/img/icon/slider/triangle.png"
                  alt="triangle"
                />
                <img
                  className="shape dotted-square"
                  src="assets/img/icon/slider/dotted-square.png"
                  alt="dotted-square"
                />
                <img
                  className="shape solid-square"
                  src="assets/img/icon/slider/solid-square.png"
                  alt="solid-square"
                />
              </div>
              <div className="container h1_slider_wrapper">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                    <div className="slider__content">
                      <span>Welcome to</span>
                      <h1>
                        Hadi <br /> E-learning
                      </h1>
                      <p className="text-light">
                        Hadi E-Learning: Quality IT training in Pakistan.
                        Subsidized courses for accessibility.
                      </p>
                      <a href="#sectionArea" className="z-btn">
                        About us
                      </a>

                      <Link to="/programs" className="z-btn z-btn-white mx-2 ">
                        Programs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default MobHero;
