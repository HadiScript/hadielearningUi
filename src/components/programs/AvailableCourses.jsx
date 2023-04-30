import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../home/mascot.css";
import { courses_data } from "../../data/courses";

const AvailableCourses = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <AiOutlineArrowRight
        id="arrowBtns"
        onClick={onClick}
        className={className}
        size={25}
        color="#0f3f5d"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <AiOutlineArrowLeft
        id="arrowBtns"
        onClick={onClick}
        className={className}
        size={25}
        color="#0f3f5d"
      />
    );
  }

  // slick setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
    ],
  };

  const avaliCourses = courses_data.filter((x) => x.available === true);

  return (
    <div className="container  pt-100 pb-80">
      <div className="row">
        <Fade bottom cascade>
          <div className="col-xl-7">
            <div className="section-title section__title-3 mb-70">
              <h2>Programs Hadi is offering </h2>
              <p>
                We invite you to explore our{" "}
                <Link to="/programs" className="text-primary">
                  courses
                </Link>{" "}
                and discover the many benefits of Hadi E-Learning.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Fade bottom cascade>
        <Slider className="project__slider" {...settings}>
          {avaliCourses.slice(0, 4).map((x, index) => (
            <div className="blog__item-2 mb-50 fix">
              <div className={`blog__thumb-2 w-img fix `}>
                <Link to={`/program/${x.slug}`}>
                  <img src={x.image} alt="" />
                </Link>
              </div>

              <div className="blog__content-2">
                <h3>
                  <Link to={`/program/${x.slug}`}>
                    {x.title.substring(0, 12)}...
                  </Link>
                </h3>
                <p>{x.Overview.substring(0, 60)}...</p>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default AvailableCourses;
