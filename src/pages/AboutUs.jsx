import React from "react";
import Breadcrumb from "../components/UI/Breadcrumb";
import AboutPlatform from "../components/about/AboutPlatform";
import HomeFaq from "../components/home/HomeFaq";
import Cats from "../components/home/Cats";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import PagesNavbar from "../components/UI/PagesNavbar";
import Testis from "../components/home/Testis";
import Background from "../components/about/Background";

const AboutUs = () => {
  return (
    <>
      <PagesNavbar />
      <Breadcrumb
        title="About Us"
        subtitle="Get to know Hadi"
        image={"/assets/images/bread.jpg"}
      />
      <Background />
      {/* <HowEvolved /> */}
      <AboutPlatform />
      <section className="pb-100">
        <Testis />
      </section>
    </>
  );
};

export default AboutUs;
