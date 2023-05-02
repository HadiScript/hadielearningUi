import React from "react";
import Item from "./Item";
import LeftSideBar from "./LeftSideBar";
import { workshop_data } from "../../data/workshop_data";

const WorkshopArea = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="blog__wrapper mr-50">
                <h2>Available Workshops</h2>
                <p>
                  Join our hands-on workshops and master the essential digital
                  skills that will help you grow your career or business.
                </p>
                <br />
                <br />
                {workshop_data.map((x, index) => (
                  <Item
                    key={index}
                    image={x.image}
                    title={x.title}
                    heading={x.heading1}
                    content={x.content1}
                    outlines={x.outline}
                    slug={x.slug}
                    user_image="1"
                    name={x.userName}
                    userExp={x.userExp}
                    outlineLine={x.outlineLine}
                    dateAndTime={x.dateAndTime}
                    conclusion={x.conclusion}
                    breadcrumb={x.breadcrumb}
                  />
                ))}
              </div>
            </div>

            <LeftSideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkshopArea;
