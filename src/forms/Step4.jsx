import React from "react";

const Step4 = ({
  currentStep,
  handleChange,
  submit,
  previousButton,
  education,
  enrollTo,
  course,
  interest,
  wantToAchieve,
  setEducation,
  setCourse,
  workshop,
  setWorkshop,
  _enroll_to,
  // setEnrollTo,
}) => {
  if (currentStep !== 4) {
    return null;
  }

  return (
    <>
      <br />
      <h5>Education & Interest</h5>

      <div className="form-group py-3">
        <label>Education</label>
        <select
          required
          className="form-select"
          value={education}
          onChange={(e) => {
            setEducation(e.target.value);
          }}
        >
          <option value="">Choose</option>
          <option value="matric">Matric</option>
          <option value="intermediate">Intermediate</option>
          <option value="bachelor">Bachelor </option>
          <option value="masters">Masters</option>
        </select>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 py-3">
          <label>Enroll To</label>
          <select required className="form-select" value={enrollTo}>
            <option value="enrollTo">
              {enrollTo === "workshop" && "Workshop"}{" "}
              {enrollTo === "program" && "Program"}
            </option>
          </select>
        </div>

        {_enroll_to === "program" && (
          <div className="col-md-6 col-sm-12 col-xs-12 py-3">
            <label>Choose Course</label>
            <select
              required
              className="form-select"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            >
              <option value="">Choose</option>
              <option value="reactjs">FE - ReactJs</option>
              <option value="nodejs">BE - NodeJs</option>
              <option value="3d-max">3d max</option>
              <option value="php">PHP</option>
              <option value="AutoCAD">AutoCAD</option>
            </select>
          </div>
        )}

        {_enroll_to === "workshop" && (
          <div className="col-md-6 col-sm-12 col-xs-12 py-3">
            <label>Choose Workshop</label>
            <select
              required
              className="form-select"
              value={workshop}
              onChange={(e) => {
                setWorkshop(e.target.value);
              }}
            >
              <option value="">Choose</option>
              <option value="content-writing">Content Wrting</option>
              <option value="3d-max">3D Max</option>
            </select>
          </div>
        )}
      </div>

      <div className="form-group py-3">
        <label>
          Your interest <span className="text-danger">*</span>{" "}
        </label>
        <textarea
          required
          type="text"
          className="form-control"
          placeholder="Your Interest"
          name="interest"
          value={interest}
          onChange={handleChange}
        />
      </div>

      <div className="form-group py-3">
        <label>
          What do you want to achieve? <span className="text-danger">*</span>{" "}
        </label>
        <textarea
          required
          type="text"
          className="form-control"
          placeholder="What do you want to achieve?"
          name="wantToAchieve"
          value={wantToAchieve}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex justify-content-between">
        <>{previousButton()}</>
        {!education ||
        !(wantToAchieve.length >= 10) ||
        !(interest.length >= 10) ||
        !enrollTo ||
        !(course || workshop) ? (
          <button className="z-btn-disable mx-2">submit</button>
        ) : (
          <>{submit()}</>
        )}
      </div>
    </>
  );
};

export default Step4;
