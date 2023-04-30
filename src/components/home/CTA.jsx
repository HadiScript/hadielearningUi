import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <section className="cta__area pt-80 pb-100">
        <div className="container p-relative">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <Fade bottom cascade>
                <div
                  className="cta__content text-center  "
                  // style={{ color: "black" }}
                >
                  <h1 >Level up. Enroll. Empower now!</h1>
                  <div className="cta__btn">
                    <Link to="/enroll/program" className="z-btn mb-30">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
