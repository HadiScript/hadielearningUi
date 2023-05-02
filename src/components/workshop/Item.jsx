import React from "react";
import { FaRegComments } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Item = ({
  image,
  title,
  heading,
  content,
  outlines,
  slug,
  user_image,
  name,
  dateAndTime,
  userExp,
}) => {
  return (
    <>
      <div className="blog__item-3 mb-50 fix">
        <div className={`blog__thumb-3 w-img fix `}>
          <Link to={`/workshop-detail/${slug} `}>
            <img src={`/assets/images/workshop/${image}.jpg`} alt="" />
          </Link>
        </div>
        <div className="blog__content-2">
          <div className="blog__meta-2 mb-15 d-sm-flex align-items-center">
            <div className="d-flex align-items-center  pr-20 mr-20">
              <Link to={`/workshop-detail/${slug} `} className="pr-10">
                <img
                  src={`assets/images/profile_workshop/idama.jpg`}
                  alt=""
                  height={80}
                />
              </Link>
              <div>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {name}
                </span>
                <br />
                <small style={{ fontSize: "14px" }}>{userExp}</small>
                <br />
                <small style={{ fontSize: "14px" }}>{dateAndTime}</small>
              </div>
            </div>
            {/* <div className="blog__date">
              <span>{dateAndTime}</span>
            </div> */}
          </div>
          <br />

          <h3>
            <Link to={`/workshop-detail/${slug} `}>{title}</Link>
          </h3>
          <p>{content.substring(0, 150)}...</p>
          <div className="blog__btn d-sm-flex justify-content-between">
            <div className="blog__btn">
              <Link to={`/workshop-detail/${slug} `} className="link-btn-2">
                Read More
                <i>
                  {" "}
                  <CgArrowLongRight />{" "}
                </i>
                <i>
                  {" "}
                  <CgArrowLongRight />{" "}
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
