// CourseLists
import React from "react";
import { Link } from "react-router-dom";
import { courses_data } from "../../data/courses";
import CTA from "../home/CTA";
// import Price from "../UI/Price";

const CourseLists = () => {
  return (
    <>
      <section className="project__area pt-100 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="section-title section__title-3 mb-20">
                {/* <h2>Programs</h2> */}
                <p>
                  With the help of industry experts, we have crafted an online
                  learning platform that offers various specially designed
                  courses that can transform your career. We are sure that these
                  programs can open doors to new prospects for you.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="section-title section__title-3 mt-50 mb-70">
              <h2>Available Programs</h2>
            </div>
            {courses_data.map((x, index) => (
              <React.Fragment key={index}>
                {x.available && (
                  <div className="col-12 col-md-4">
                    <div className="project__item grey-bg-19">
                      <div className="project__content">
                        <div className="project__no">
                          <h5>{++index}</h5>
                        </div>
                        <h3>
                          <Link to={`/program/${x.slug}`}>{x.title}</Link>
                        </h3>
                      </div>
                      <div className="project__thumb m-img text-center">
                        <img src={x.image} alt="" style={{ height: "auto" }} />
                      </div>
                    </div>
                    <br />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* <Price /> */}
        </div>
      </section>

          <CTA />
      <section className="project__area pt-0 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="section-title section__title-3 mb-70">
                <h2>All Programs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {courses_data.map((x, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="project__item grey-bg-19">
                  <div className="project__content">
                    <div className="project__no">
                      <h5>{++index}</h5>
                    </div>
                    {x.available ? (
                      <h3>
                        <Link to={`/program/${x.slug}`}>{x.title}</Link>
                      </h3>
                    ) : (
                      <h3>{x.title}</h3>
                    )}
                  </div>
                  <div className="project__thumb m-img text-center">
                    <img src={x.image} alt="" style={{ height: "auto" }} />
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <CTA /> */}
    </>
  );
};

export default CourseLists;
