import React from "react";
import Steps from "./Steps";

const Basics = (userReq, handleChange) => {
  return (
    <>
      <form className="">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-md-8 col-sm-12 ">
            <h2>Basics Information</h2>
            <hr />
            <Steps />
            <div className="form-group py-3">
              <label>
                First Name <span className="text-danger">*</span>{" "}
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                value={userReq.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group py-3">
              <label>
                last Name <span className="text-danger">*</span>{" "}
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="last Name"
                name="lastName"
                value={userReq.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group py-3">
              <label>
                Email <span className="text-danger">*</span>{" "}
              </label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="example@gmail.com"
                name="email"
                value={userReq.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Basics;
