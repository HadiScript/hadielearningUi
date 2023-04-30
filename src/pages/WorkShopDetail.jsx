import React from "react";
import PagesNavbar from "../components/UI/PagesNavbar";
import Breadcrumb from "../components/UI/Breadcrumb";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { workshop_data } from "../data/workshop_data";

const WorkShopDetail = () => {
  const { slug } = useParams();
  const selected = workshop_data.find((x) => x.slug === slug);
  return (
    <>
      <PagesNavbar />
      <Breadcrumb
        title={selected.breadcrumb}
        subtitle={selected.title}
        image={"/assets/images/bread.jpg"}
      />

      {/* {JSON.stringify(selected)} */}
      {/* area */}
      <section className="services__details pt-115 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 order-last order-lg-first">
              <div className="services__sidebar mr-50">
                <div className="sidebar__widget  mb-30 ">
                  <div className="sidebar__widget-title mb-50">
                    <h4>Popular Tags</h4>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="tags">
                      {selected.tags.map((x, index) => (
                        <Link key={index} to="#">
                          {x}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sidebar__widget  mb-30 ">
                  <div className="sidebar__widget-title mb-20">
                    <h4>Date & Timing</h4>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="tags">{selected.dateAndTime}</div>
                  </div>
                </div>

                <div className="services__widget mb-0">
                  <div className="services__widget-content">
                    <div className="services__form">
                      <Link
                        to={"/enroll/workshop"}
                        className="z-btn z-btn-3 w-100"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="services__text">
                <h2>{selected.title}</h2>
                <br />
                <h3>{selected.heading1}</h3>
                <p>{selected.content1}</p>
              </div>
              <div className="services__img mb-45 w-img">
                <img
                  src={`/assets/images/workshop/${selected.image}.jpg`}
                  alt=""
                />
              </div>

              <div className="services__list mb-40">
                <div className="service-text">
                  <h3>Outlines</h3>
                  <p style={{ fontSize: "18px" }}>
                    Welcome to the content writing workshop! In this workshop,
                    we'll cover some essential aspects of content writing that
                    will help you create engaging and effective content.
                  </p>
                </div>
                <ul>
                  {selected.outline.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="services__text">
                <h4>Conclusion</h4>
                <p>{selected.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkShopDetail;
