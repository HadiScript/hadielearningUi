import React from "react";
import CatsSections from "./CatsSections";

const Cats = () => {
  return (
    <>
      <section className="services__area pt-30 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div
                className="section__title section__title-3 text-center mb-90 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span>Our Services</span>
                <h2>Provide awesome customer service with our tools.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <CatsSections icon="1" title="Expense reporting" />
            <CatsSections icon="2" title="Tax Advisory" />
            <CatsSections icon="3" title="Consulting" />
            <CatsSections icon="4" title="Audit & Assurance" />
            <CatsSections icon="5" title="Finance Analytics" />
            <CatsSections icon="6" title="Cord Processing" />
            <CatsSections icon="7" title="Development" />
            <CatsSections icon="8" title="Financial audit" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cats;
