import React from "react";
import { FaRegComment, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseSideBar = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="blog__sidebar">
          <div className="sidebar__widget mb-20 ">
            <div className="sidebar__widget-title mb-20">
              <h4>Duration</h4>
              <span>3 months</span>
            </div>
            {/* <div className="sidebar__widget-content">
              <div className="rc-post">
                <ul>
                  <li className="d-flex mb-20">4 months</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="sidebar__widget mb-75 ">
            <div className="sidebar__widget-title mb-50">
              {/* <h4>Who this course is for:</h4> */}
            </div>
            <div className="sidebar__widget-content">
              <div className="rc-post">
                <Link to={"/enroll/program"}>
                  <button className="z-btn">Enroll now</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="sidebar__widget mb-75 ">
            <div className="sidebar__widget-title mb-50">
              <h4>Categories</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="cat-link">
                <ul>
                  <li>Frontend Development</li>
                  <li>Leads to mobile development</li>
                  <li>Leads to mern stack development</li>
                  <li>Leads to full stack software engineer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sidebar__widget mb-60 ">
            <div className="sidebar__widget-title mb-50">
              <h4>Recent Comments</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="rc__comments">
                <ul>
                  <li className="d-flex mb-25">
                    <div className="rc__comments-icon mr-30">
                      <i>
                        <FaRegComment style={{ marginTop: "-2px" }} />
                      </i>
                    </div>
                    <div className="rc__comments-content">
                      <h6>Justin Case</h6>
                      <p>My lady mush hanky panky young delinquent.!</p>
                    </div>
                  </li>
                  <li className="d-flex mb-25">
                    <div className="rc__comments-icon mr-30">
                      <i>
                        <FaRegComment style={{ marginTop: "-2px" }} />
                      </i>
                    </div>
                    <div className="rc__comments-content">
                      <h6>Eric Widget</h6>
                      <p>My lady mush hanky panky young delinquent.!</p>
                    </div>
                  </li>
                  <li className="d-flex mb-25">
                    <div className="rc__comments-icon mr-30">
                      <i>
                        <FaRegComment style={{ marginTop: "-2px" }} />
                      </i>
                    </div>
                    <div className="rc__comments-content">
                      <h6>Penny Tool</h6>
                      <p>My lady mush hanky panky young delinquent.!</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CourseSideBar;
