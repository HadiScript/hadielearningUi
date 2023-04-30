import React from "react";
import PagesNavbar from "../../UI/PagesNavbar";
import MobHero from "../MobHero";
import TopHeader from "../../UI/TopHeader";
import Hero from "../Hero";
import "./heros.css";

const ResponsiveHeros = () => {
  return (
    <>
      <div id="mobile">
        <PagesNavbar />
        <MobHero />
      </div>
      <div id="web">
        <TopHeader />
        <Hero />
      </div>
    </>
  );
};

export default ResponsiveHeros;
