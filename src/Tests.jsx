import React from "react";
import { Link } from "react-router-dom";

const Tests = () => {
  return (
    <>
      <section className="faq__area p-relative pt-135 pb-100 mb-40 grey-bg-12">
        <div
          className="faq__thumb"
          style={{
            background: `url(/assets/images/workshop.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-7 offset-md-5">
              <div className="faq__wrapper">
                <div
                  className="section__title section__title-3 mb-25 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h2>Workshop</h2>
                </div>

                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </p>
                <Link to={"/workshop-detail"} className="z-btn mt-5">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tests;
