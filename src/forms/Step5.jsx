import React from "react";

const Step5 = (props) => {
  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <>
      <br />
      <h5>Basic information</h5>
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
          // value={userReq.firstName}
          // onChange={handleChange}
        />
      </div>

      <div className="form-group py-3">
        <label>
          Last Name <span className="text-danger">*</span>{" "}
        </label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="Last Name"
          name="lastName"
          // value={userReq.firstName}
          // onChange={handleChange}
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
          // value={userReq.email}
          // onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Step5;
