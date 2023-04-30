import React from "react";
import { Link } from "react-router-dom";

const HomeWorkshop = () => {
  return (
    <>
      <section className="faq__area p-relative pt-135 pb-100 mb-60 grey-bg-12">
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
                  <h2>Hands-On Workshops for Beginners</h2>
                  <h5></h5>
                </div>

                <p>
                  Mastering digital skills is essential in today's fast-paced
                  world where technology is rapidly advancing. Whether you are a
                  student, a job seeker, or an entrepreneur, having a strong
                  digital skill set can make a big difference in your success.
                  That's why we are excited to offer a hands-on workshop for
                  beginners looking to master digital skills.
                </p>
                <Link to={"/workshops"} className="z-btn mt-5">
                  See All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWorkshop;
