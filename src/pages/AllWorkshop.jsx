import React from "react";
import PagesNavbar from "../components/UI/PagesNavbar";
import Breadcrumb from "../components/UI/Breadcrumb";
import WorkshopArea from "../components/workshop/WorkshopArea";

const AllWorkshop = () => {
  return (
    <>
      <PagesNavbar />
      <Breadcrumb
        title={"Workshops"}
        subtitle={"All Workshops"}
        image={"/assets/images/bread.jpg"}
      />
      <WorkshopArea />
    </>
  );
};

export default AllWorkshop;
