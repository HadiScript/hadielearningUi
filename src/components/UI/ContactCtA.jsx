import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <>
      <section
        className="cta__contact_area pt-80 pb-155"
        style={{
          background: `url(assets/img/cta/cta-bg.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container p-relative">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="cta__content text-center dark-text">
                <h2>Do you gave any question? Feel free to contect us</h2>
                <div className="cta__btn">
                  <Link to="/contact" className="z-btn  mb-30">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCTA;
