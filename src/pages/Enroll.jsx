import React from "react";
import PagesNavbar from "../components/UI/PagesNavbar";
import axios from "axios";
import { toast } from "react-hot-toast";

const INITIAL_USER = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  idCard: "",
  address: "",
  city: "",
  dateOfBirth: "",

  parentName: "",
  parentOccupations: "",
  parentPhoneNumber: "",

  interest: "",
  wantToAchieve: "",
};

const Enroll = () => {
  const [gender, setGender] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [enrollTo, setEnrollTo] = React.useState("");
  const [userReq, setUserReq] = React.useState(INITIAL_USER);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserReq((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    setGender(event.target.value);
  };

  const data = {
    ...userReq,
    gender,
    course,
    education,
    enrollTo,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(data, "here is req");
    // return;
    try {
      setLoading(true);
      const payload = { ...data };

      const response = await axios.post(
        "https://hadielearning.com/api/enroll-stu",
        // "http://localhost:8000/api/enroll-stu",
        payload
      );
      //   console.log(response);
      toast.success(response.data.message, { position: "bottom-center" });

      setUserReq(INITIAL_USER);
      setLoading(false);
    } catch (err) {
      let {
        response: {
          data: { message },
        },
      } = err;
      toast.error(message, { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PagesNavbar page="contactPage" />

      <section className="contact__area">
        <div className="container p-4">
          <h1>Application form</h1>
          <br />
          <form className="row g-4" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <div className="col my-3">
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
              <div className="col my-3">
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
              <div className="col my-3">
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
              <div className="col my-3">
                <div className="form-check">
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

                <div className="form-check">
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
                <div className="form-check">
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

              <div className="form-group">
                <label>
                  Address <span className="text-danger">*</span>{" "}
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="last Name"
                  name="address"
                  value={userReq.address}
                  onChange={handleChange}
                />
              </div>

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
                  value={userReq.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-3">
                <label>
                  Date of birth <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="date"
                  className="form-control"
                  placeholder="last Name"
                  name="dateOfBirth"
                  value={userReq.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-3">
                <label>
                  Phone no# <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="03XXXXXXXXX"
                  name="phoneNumber"
                  value={userReq.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group py-3">
                <label>
                  CNIC <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="XXXXXXXXXXXXX with out Hyphen"
                  name="idCard"
                  value={userReq.idCard}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
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
                  value={userReq.parentName}
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
                  value={userReq.parentOccupations}
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
                  value={userReq.parentPhoneNumber}
                  onChange={handleChange}
                />
              </div>

              <hr />

              <div className="form-group py-3">
                <label>
                  Your interest <span className="text-danger">*</span>{" "}
                </label>
                <textarea
                  required
                  type="text"
                  className="form-control"
                  placeholder="Occupation"
                  name="interest"
                  value={userReq.interest}
                  onChange={handleChange}
                />
              </div>

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
                  <option value="">choose</option>
                  <option value="matrix">Matric</option>
                  <option value="2ndyear">Intermediate</option>
                  <option value="graduate ">Graduate </option>
                  <option value="masters">Masters</option>
                </select>
              </div>

              <div className="form-group py-3">
                <label>Enroll To</label>
                <select
                  required
                  className="form-select"
                  value={enrollTo}
                  onChange={(e) => {
                    setEnrollTo(e.target.value);
                  }}
                >
                  <option value="">choose</option>
                  <option value="program">Program</option>
                  <option value="workshop">Workshop</option>
                </select>
              </div>

              <div className="form-group py-3">
                <label>Choose Course</label>
                <select
                  required
                  className="form-select"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                >
                  <option value="">choose</option>
                  <option value="reactjs">FE - ReactJs</option>
                  <option value="nodejs">BE - NodeJs</option>
                  <option value="3d-max">3d max</option>
                  <option value="php">PHP</option>
                  <option value="AutoCAD">AutoCAD</option>
                </select>
              </div>

              <div className="form-group py-3">
                <label>
                  Want tot achieve? <span className="text-danger">*</span>{" "}
                </label>
                <textarea
                  required
                  type="text"
                  className="form-control"
                  placeholder="Occupation"
                  name="wantToAchieve"
                  value={userReq.wantToAchieve}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" onClick={handleSubmit} className="z-btn">
                Submit {loading && "..loading.."}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Enroll;
