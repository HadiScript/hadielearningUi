import React from "react";
import HomeCourses from "../components/home/HomeCourses";
import HomeAbout from "../components/home/HomeAbout";
import CTA from "../components/home/CTA";
import Brands from "../components/home/Brands";
import Testis from "../components/home/Testis";
import ResponsiveHeros from "../components/home/ResponsiveHeros";
import AvailableCourses from "../components/programs/AvailableCourses";
import Workshop from "../components/home/HomeWorkshop";
// import Tests from "../Tests";
// import Check from "../Check";

const Home = () => {
  return (
    <>
      <ResponsiveHeros />
      <HomeAbout />
      {/* <HomeCourses /> */}
      <AvailableCourses />
      {/* <Tests /> */}
      <Workshop />
      <CTA />
      <Testis />
      <Brands />
    </>
  );
};

export default Home;
