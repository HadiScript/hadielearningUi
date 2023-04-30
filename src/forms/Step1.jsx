import React from "react";

const Step1 = ({
  currentStep,
  email,
  firstName,
  lastName,
  dateOfBirth,
  phoneNumber,
  gender,
  handleCheckboxChange,
  nextButton,
  handleChange,
}) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <>
      <br />
      <h5>Basic Information</h5>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 py-3">
          <label>
            First Name <span className="text-danger">*</span>{" "}
          </label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 col-sm-12 col-xs-12 py-3">
          <label>
            Last Name <span className="text-danger">*</span>{" "}
          </label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
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
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex form-group py-3">
        <div className="form-check " style={{ marginRight: "20px" }}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            value="female"
            checked={gender === "female"}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Female
          </label>
        </div>

        <div className="form-check " style={{ marginRight: "20px" }}>
          <input
            className="form-check-input"
            type="checkbox"
            value="male"
            checked={gender === "male"}
            onChange={handleCheckboxChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Male
          </label>
        </div>
        <div className="form-check " style={{ marginRight: "20px" }}>
          <input
            className="form-check-input"
            type="checkbox"
            value="other"
            checked={gender === "other"}
            onChange={handleCheckboxChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Other
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 py-3">
          <label>
            Date of birth <span className="text-danger">*</span>
          </label>
          <input
            required
            type="date"
            className="form-control"
            placeholder="last Name"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 col-sm-12 col-xs-12 py-3">
          <label>
            Phone no# <span className="text-danger">*</span>
          </label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="03XXXXXXXXX"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="col-md-12">
        {(!email || !(firstName.length >= 3) || !(lastName.length >= 3) || !gender || !(phoneNumber.length ===11) || !dateOfBirth )? (
          <button className="z-btn-disable">next</button>
        ) : (
          <>{nextButton()}</>
        )}
      </div>
    </>
  );
};

export default Step1;
