import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/UI/Breadcrumb";
import PagesNavbar from "../components/UI/PagesNavbar";
import CourseSideBar from "../components/course/CourseSideBar";
import { courses_data } from "../data/courses";
import { RxAvatar } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const CourseDetail = () => {
  const { slug } = useParams();
  const findedCourse = courses_data.find((x) => x.slug === slug);
  return (
    <>
      <PagesNavbar />
      <Breadcrumb title={findedCourse.title} subtitle={findedCourse.title} />

      {/* start */}
      <>
        <section className="blog__area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="blog__details-wrapper mr-50">
                  <div className="blog__details-thumb w-img mb-45">
                    <img src={findedCourse.image} alt="" />
                  </div>
                  <div className="blog__text mb-40">
                    <h1>{findedCourse.title}</h1>
                    <p>{findedCourse.Overview}</p>

                    <p>
                      <h2>Requirements</h2>
                      {findedCourse.Prerequisites}
                    </p>
                  </div>
                  {/* <div className="blog__tag mb-30">
                    <span>Tag : </span>
                    <a href="#">tag#1</a>
                    <a href="#">tag#2</a>
                    <a href="#">tag#3</a>
                    <a href="#">tag#4</a>
                  </div> */}

                  <div className="blog__author mb-95 d-sm-flex">
                    <div className="blog__author-img mr-30">
                      <FaUser size={50} color="gray" />
                      {/* <img src="/assets/img/blog/author/author-1.jpg" alt="" /> */}
                    </div>
                    <div className="blog__author-content">
                      <h5>
                        {/* <Link to={`/author/${findedCourse.author.name}`}> */}
                        Trainer One
                        {/* </Link> */}
                      </h5>
                      <span>Author</span>
                      {/* <p>
                        I said cracking goal down the pub blag cheeky bugger at
                        public school A bit of how's your father boot.!
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              <CourseSideBar />
            </div>
          </div>
        </section>
      </>
      {/* ends*/}
    </>
  );
};

export default CourseDetail;
