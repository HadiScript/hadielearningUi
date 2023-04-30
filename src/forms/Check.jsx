import React, { useEffect, useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";
import "./ccc.css";
import Step4 from "./Step4";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { toast } from "react-hot-toast";
import { courses_data } from "../data/courses";
import { workshop_data } from "../data/workshop_data";

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

const Check = () => {
  const { enroll_to } = useParams();
  const router = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [gender, setGender] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [workshop, setWorkshop] = React.useState("");
  const [enrollTo, setEnrollTo] = React.useState("");
  const [userReq, setUserReq] = React.useState(INITIAL_USER);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setEnrollTo(enroll_to);
  }, [enroll_to]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserReq((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    setGender(event.target.value);
  };

  let selectedEnrolled;
  if (enrollTo && enrollTo === "workshop") {
    selectedEnrolled = workshop_data.find((x) => x.key === workshop);
  }

  const data = {
    ...userReq,
    gender,
    course,
    education,
    enrollTo,
    workshop,
    workshopDetails: {
      
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(data, "here is req");
    // return;
    try {
      setLoading(true);
      const payload = { ...data };

      const response = await axios.post(
        // "https://hadielearning.com/api/enroll-stu",
        "http://localhost:8000/api/enroll-stu",
        payload
      );
      //   console.log(response);
      toast.success(response.data.message, { position: "bottom-center" });

      setUserReq(INITIAL_USER);
      setLoading(false);
      router("/thanks");
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

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button className="z-btn mx-2" onClick={handlePrev}>
          Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 4) {
      return (
        <button className="z-btn " onClick={handleNext}>
          Next
        </button>
      );
    }
    return null;
  };

  const submitButton = () => {
    if (currentStep === 4) {
      return (
        <button className="z-btn" type="submit" onClick={handleSubmit}>
          Submit {loading && <p>...loading...</p>}
        </button>
      );
    }
    return null;
  };

  return (
    <>
      <div id="enrollScreen" className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 bg-danger" id="forImage" />
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" id="rightCol">
            <div className="form" onSubmit={handleSubmit}>
              <div
                className="row d-flex justify-content-center align-items-center"
                style={{ height: "110vh" }}
              >
                <div className="col-md-8  col-sm-12 " id="startForm">
                  <h2> Application Enrollment </h2>
                  <br />
                  <MultiStepProgressBar currentStep={currentStep} />

                  {/* <CardText /> */}
                  <Step1
                    currentStep={currentStep}
                    handleChange={handleChange}
                    nextButton={nextButton}
                    email={userReq.email}
                    lastName={userReq.lastName}
                    firstName={userReq.firstName}
                    phoneNumber={userReq.phoneNumber}
                    dateOfBirth={userReq.dateOfBirth}
                    gender={gender}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                  <Step2
                    currentStep={currentStep}
                    handleChange={handleChange}
                    nextButton={nextButton}
                    previousButton={previousButton}
                    city={userReq.city}
                    address={userReq.address}
                    idCard={userReq.idCard}
                  />
                  <Step3
                    currentStep={currentStep}
                    handleChange={handleChange}
                    nextButton={nextButton}
                    previousButton={previousButton}
                    parentName={userReq.parentName}
                    parentPhoneNumber={userReq.parentPhoneNumber}
                    parentOccupations={userReq.parentOccupations}
                  />
                  <Step4
                    currentStep={currentStep}
                    handleChange={handleChange}
                    submit={submitButton}
                    previousButton={previousButton}
                    education={education}
                    enrollTo={enrollTo}
                    interest={userReq.interest}
                    wantToAchieve={userReq.wantToAchieve}
                    setEducation={setEducation}
                    course={course}
                    setCourse={setCourse}
                    workshop={workshop}
                    setWorkshop={setWorkshop}
                    _enroll_to={enroll_to}
                    // setEnrollTo={setEnrollTo}
                  />
                  {/* <CardFooter> */}
                  <div className="col-12">
                    {/* {previousButton()}
                    {nextButton()}
                    {submitButton()} */}
                  </div>
                </div>
                {/* </CardFooter> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;
