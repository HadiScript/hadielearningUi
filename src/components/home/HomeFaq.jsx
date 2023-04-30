import React from "react";
import { Link } from "react-router-dom";

const HomeFaq = ({ page = "homePage" }) => {
  return (
    <>
      <section className="faq__area pb-200 pt-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="faq__content">
                {page === "homePage" && (
                  <>
                    <div className="section-title mb-45">
                      <h2>
                        Do you have <br /> Any question
                      </h2>
                      <p>
                        We help you weather today's uncertainty through our best
                        team.
                      </p>
                    </div>

                    <Link to="/about" className="z-btn z-btn-border">
                      About
                    </Link>
                  </>
                )}
                {page === "aboutPage" && (
                  <div className="section-title mb-45">
                    <h2>
                      Frequently <br /> Asked questions
                    </h2>
                    <p>
                      We help you weather today's uncertainty through our best
                      team.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7 offset-xl-2 offset-lg-1">
              <div className="faq__accordion p-relative">
                <div className="accordion" id="accordionExample">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_1">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_1"
                          aria-expanded="true"
                          aria-controls="collapse_1"
                        >
                          What is Hadi eLearning?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_1"
                      className="collapse show"
                      aria-labelledby="acc_1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Hadi eLearning is an online platform that provides a
                          range of courses and educational resources for
                          learners of all ages. Our courses cover a variety of
                          topics, including languages, coding, business, and
                          more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_2">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_2"
                          aria-expanded="true"
                          aria-controls="collapse_2"
                        >
                          How do I join Hadi eLearning?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_2"
                      className="collapse"
                      aria-labelledby="acc_2"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          You can join Hadi eLearning, Simply click on the "join
                          free" button and follow the prompts to create your
                          account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_3">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_3"
                          aria-expanded="true"
                          aria-controls="collapse_3"
                        >
                          How much do the courses cost?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_3"
                      className="collapse"
                      aria-labelledby="acc_3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Couses are free, all you have to pay is registeration
                          fee
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_4">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_4"
                          aria-expanded="true"
                          aria-controls="collapse_4"
                        >
                          Can I access Hadi eLearning on my mobile device?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_4"
                      className="collapse"
                      aria-labelledby="acc_4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes, our platform is optimized for mobile devices and
                          can be accessed on smartphones and tablets. We also
                          offer a mobile app for iOS and Android devices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFaq;
