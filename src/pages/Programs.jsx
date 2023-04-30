import React from "react";
import CourseLists from "../components/programs/CourseLists";
import PagesNavbar from "../components/UI/PagesNavbar";
import Breadcrumb from "../components/UI/Breadcrumb";
// import AvailableCourses from "../components/programs/AvailableCourses";

const Programs = () => {
  return (
    <>
      <Breadcrumb title="Programs" subtitle="Courses" image={"/assets/images/bread-program.jpg"} />
      <PagesNavbar />
      <CourseLists />
      {/* <AvailableCourses /> */}
      {/* <Price /> */}
    </>
  );
};

export default Programs;
