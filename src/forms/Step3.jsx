import React from "react";

const Step3 = ({
  currentStep,
  handleChange,
  nextButton,
  previousButton,
  parentName,
  parentPhoneNumber,
  parentOccupations,
}) => {
  if (currentStep !== 3) {
    return null;
  }

  return (
    <>
      <br />
      <h5>Parents Information</h5>
      <div className="form-group py-3">
        <label>
          Father Name <span className="text-danger">*</span>{" "}
        </label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="Parents Name"
          name="parentName"
          value={parentName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group py-3">
        <label>
          Occupation <span className="text-danger">*</span>{" "}
        </label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="Occupation"
          name="parentOccupations"
          value={parentOccupations}
          onChange={handleChange}
        />
      </div>

      <div className="form-group py-3">
        <label>
          Phone no# <span className="text-danger">*</span>{" "}
        </label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="03XXXXXXXXX"
          name="parentPhoneNumber"
          value={parentPhoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex justify-content-between">
        <>{previousButton()}</>
        {!(parentName.length >= 3) ||
        !(parentPhoneNumber.length === 11) ||
        !parentOccupations ? (
          <button className="z-btn-disable mx-2">next</button>
        ) : (
          <>{nextButton()}</>
        )}
      </div>
    </>
  );
};

export default Step3;
