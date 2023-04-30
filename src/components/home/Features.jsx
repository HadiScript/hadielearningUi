import React from "react";
import { SiKnowledgebase } from "react-icons/si";
import { BsTools, BsHeart, BsBag } from "react-icons/bs";
import FeatureSections from "./FeatureSections";
import Fade from "react-reveal/Fade";

const Features = ({ page = "homePage" }) => {
  const content = {
    "self-placed-learning": {
      content:
        "Hadi e-learning collaborates with international organizations such as Agreenium, Future Food Institute, and UNESCAP to organize and deliver technical webinars. These webinars provide valuable insights into various fields and are designed to enhance your knowledge and skills on a global scale.",
      heading1: "Flexible Learning Experience",
      heading2: "Personalized Learning",
    },
    webinars: {
      content:
        "Hadi e-learning collaborates with international organizations such as Agreenium, Future Food Institute, and UNESCAP to organize and deliver technical webinars. These webinars provide valuable insights into various fields and are designed to enhance your knowledge and skills on a global scale.",
      heading1: " Enhance Your Skills",
      heading2: "International Collaborations",
    },

    online: {
      content:
        "Hadi e-learning offers online tutored courses designed for specific audiences. Our modular, interactive courses are instructor-led and based on practical activities, with hands-on tasks designed around real-life scenarios to enhance your learning experience.",
      heading1: "Targeted Courses",
      heading2: "Realistic Scenarios",
    },

    mobile: {
      content:
        "Hadi e-learning offers online tutored courses designed for specific audiences. Our modular, interactive courses are instructor-led and based on practical activities, with hands-on tasks designed around real-life scenarios to enhance your learning experience.",
      heading1: "Targeted Courses",
      heading2: "Realistic Scenarios",
    },
  };

  return (
    <section
      id="what-we-do"
      className={`services__area-3 ${page === "homePage" && "pt-115"} ${
        page === "aboutPage" && "pt-30"
      } pb-160`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            {/* <Fade bottom cascade> */}
            <div className="section-title section__title-3 mb-70">
              <h2>What we do?</h2>
              <p>
                We help you weather today's uncertainty through our best team.
              </p>
            </div>
            {/* </Fade> */}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
              {/* <Fade bottom cascade> */}
              <ul className="nav nav-pills " id="services-tab" role="tablist">
                <li className="nav-item mb-45">
                  <a
                    className="nav-link active"
                    id="share-tab"
                    data-bs-toggle="pill"
                    href="#share"
                    role="tab"
                    aria-controls="share"
                    aria-selected="true"
                  >
                    <i>
                      {" "}
                      <SiKnowledgebase />{" "}
                    </i>
                    Self-paced courses
                  </a>
                </li>
                <li className="nav-item mb-30">
                  <a
                    className="nav-link"
                    id="customer-tab"
                    data-bs-toggle="pill"
                    href="#customer"
                    role="tab"
                    aria-controls="customer"
                    aria-selected="true"
                  >
                    <i>
                      <BsTools />
                    </i>{" "}
                    technical webinars
                  </a>
                </li>
                <li className="nav-item mb-30">
                  <a
                    className="nav-link"
                    id="social-tab"
                    data-bs-toggle="pill"
                    href="#social"
                    role="tab"
                    aria-controls="social"
                    aria-selected="true"
                  >
                    <i>
                      <BsHeart />
                    </i>{" "}
                    Online tutored courses
                  </a>
                </li>
                <li className="nav-item mb-30">
                  <a
                    className="nav-link"
                    id="financial-tab"
                    data-bs-toggle="pill"
                    href="#financial"
                    role="tab"
                    aria-controls="financial"
                    aria-selected="true"
                  >
                    <i>
                      <BsBag />
                    </i>{" "}
                    Mobile learning
                  </a>
                </li>
              </ul>
              {/* </Fade> */}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="services__tab grey-bg-18">
              {/* <Fade bottom cascade> */}
              <div className="tab-content" id="services-content">
                <div
                  className="tab-pane fade show active"
                  id="share"
                  role="tabpanel"
                  aria-labelledby="share-tab"
                >
                  <FeatureSections
                    title="Self-paced courses"
                    content={content["self-placed-learning"].content}
                    heading1={content["self-placed-learning"].heading1}
                    heading2={content["self-placed-learning"].heading2}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="customer"
                  role="tabpanel"
                  aria-labelledby="customer-tab"
                >
                  <FeatureSections
                    title="Technical webinars"
                    content={content["webinars"].content}
                    heading1={content["webinars"].heading1}
                    heading2={content["webinars"].heading2}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="social"
                  role="tabpanel"
                  aria-labelledby="social-tab"
                >
                  <FeatureSections
                    title="Online tutored courses"
                    content={content["online"].content}
                    heading1={content["online"].heading1}
                    heading2={content["online"].heading2}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="financial"
                  role="tabpanel"
                  aria-labelledby="financial-tab"
                >
                  <FeatureSections
                    title="Mobile learning"
                    content={content["mobile"].content}
                    heading1={content["mobile"].heading1}
                    heading2={content["mobile"].heading2}
                  />
                </div>
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
