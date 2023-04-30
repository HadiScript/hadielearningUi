import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/UI/Footer";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Flow from "./pages/Flow";
import CourseDetail from "./pages/CourseDetail";
import ScrollTop from "./components/UI/ScrollTop";
import AuthorDetail from "./pages/AuthorDetail";
import Enroll from "./pages/Enroll";
import Disclaimer from "./pages/Disclaimer";
import PrivacyAndPolicy from "./pages/Privacy-And-Policy";
import HowItWorks from "./pages/HowItWorks";
import Check from "./forms/Check";
import Thanks from "./forms/Thanks";
import AllWorkshop from "./pages/AllWorkshop";
import WorkShopDetail from "./pages/WorkShopDetail";
// import Basics from "./tests/Basics";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route exact path="/author/:slug" element={<AuthorDetail />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/program/:slug" element={<CourseDetail />} />
          <Route path="/enroll/:enroll_to" element={<Check />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
          {/* Disclaimer */}

          {/* <Route path="/kkk" element={<Tesxts />} /> */}
          <Route path="/workshops" element={<AllWorkshop />} />
          <Route path="/workshop-detail/:slug" element={<WorkShopDetail />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
