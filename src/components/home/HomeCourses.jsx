import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./mascot.css";
import { courses_data } from "../../data/courses";

const HomeCourses = () => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const avaliCourses = courses_data.filter((x) => x.available === true);

  return (
    <>
      <section className="project__area pt-100 pb-120">
        <div className="container">
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
          <div className="row">
            <div className="col-xl-12">
              <Fade bottom cascade>
                <Slider className="project__slider" {...settings}>
                  {avaliCourses.slice(0, 4).map((x, index) => (
                    <div className="project__item grey-bg-19">
                      <div className="project__content">
                        <div className="project__no">
                          <h5>{++index}</h5>
                        </div>

                        <h3>
                          <Link to={`/program/${x.slug}`}>{x.title}</Link>
                        </h3>
                      </div>
                      <div className="project__thumb m-img">
                        <img src={x.image} alt="" style={{ height: "auto" }} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCourses;
