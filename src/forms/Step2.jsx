import React from "react";

const Step2 = ({
  previousButton,
  nextButton,
  handleChange,
  currentStep,
  city,
  address,
  idCard,
}) => {
  if (currentStep !== 2) {
    return null;
  }

  return (
    <>
      <br />
      <h5>Locations</h5>
      <div className="form-group py-3">
        <label>
          City <span className="text-danger">*</span>{" "}
        </label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="last Name"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </div>

      <div className="form-group py-3">
        <label>
          Address <span className="text-danger">*</span>{" "}
        </label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="Address"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </div>

      <div className="form-group py-3">
        <label>
          CNIC <span className="text-danger">*</span>{" "}
        </label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="32101XXXXXXXX without hyphen"
          name="idCard"
          value={idCard}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-between">
        <>{previousButton()}</>
        {!(city.length >= 3) || !(address.length >= 5) || !(idCard.length === 13) ? (
          <button className="z-btn-disable mx-2">next</button>
        ) : (
          <>{nextButton()}</>
        )}
      </div>
    </>
  );
};

export default Step2;
