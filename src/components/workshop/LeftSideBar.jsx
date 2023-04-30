import React from "react";
import { FaRegComment, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="blog__sidebar">
          <div className="sidebar__widget mb-50 ">
            <div className="sidebar__widget-title mb-50">
              <h4>Popular Tags</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="tags">
                <Link to="#">DigitalSkillsWorkshop</Link>
                <Link to="#">TechTraining</Link>
                <Link to="#">DigitalLiteracy</Link>
                <Link to="#">TechForAll</Link>
                <Link to="#">DigitalEmpowerment</Link>
                <Link to="#">DigitalInclusion</Link>
                <Link to="#">DigitalTransformation</Link>
                <Link to="#">TechSkillsForAll</Link>
                <Link to="#">FutureOfWork</Link>
                <Link to="#">BridgingTheDigitalDivide</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
