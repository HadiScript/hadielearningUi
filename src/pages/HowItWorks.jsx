import React from "react";
import PagesNavbar from "../components/UI/PagesNavbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineForm } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import CTA from "../components/home/CTA";
import { RiAdminFill } from "react-icons/ri";
import { BsFiletypeKey } from "react-icons/bs";
import { GoKeyboard } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import Breadcrumb from "../components/UI/Breadcrumb";
import Price from "../components/UI/Price";

const HowItWorks = () => {
  return (
    <>
      <PagesNavbar />
      <Breadcrumb
        title={"How it works?"}
        subtitle={"How to join us?"}
        image={"/assets/images/bread-work.jpg"}
      />
      <div className="container pt-90">
        <div className="text-center pb-50">
          <h2>How to join us?</h2>
          {/* <span>line line lineline line line line line </span> */}
        </div>
        <VerticalTimeline lineColor="#4e96c3">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundImage:
                " linear-gradient(   329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #0f3f5d" }}
            iconStyle={{ background: "#235f83" }}
            icon={<AiOutlineForm color="white" />}
          >
            <h3 className="vertical-timeline-element-title text-light">
              Enrollment Application Form
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-light">
              Application Form
            </h4>
            <p className="text-light">
              To get started, students need to fill out the enrollment
              application form, which can be found on our website.
            </p>
            <p className="text-light">
              The form collects basic information such as name, contact details,
              and course preferences.
            </p>
            <p className="text-light">
              Once the form is completed, students can submit it to the admin
              for processing.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{
              backgroundImage:
                " linear-gradient(   329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #3a7ba4" }}
            iconStyle={{ background: "#3a7ba4", color: "#fff" }}
            icon={<MdOutlinePayment />}
          >
            <h3 className="vertical-timeline-element-title text-light">
              Pay Registration Fee
            </h3>
            <p className="text-light">
              Upon receiving the enrollment application form, the student is
              required to pay a registration fee. <br /> <br /> The registration
              fee helps cover administrative costs and confirms the student's
              commitment to the course. <br /> <br />
              Payment options are available on our website, and students can
              choose the method that is most convenient for them.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundImage:
                " linear-gradient(   329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #0f3f5d" }}
            iconStyle={{ background: "#235f83" }}
            icon={<RiAdminFill color="white" />}
          >
            <h3 className="vertical-timeline-element-title text-light">
              Admin Assignment
            </h3>
            <p className="text-light">
              After the student's enrollment application form and registration
              fee are received, our admin reviews the information and assigns
              the student an account.
            </p>
            <p className="text-light">
              The admin creates an account for the student, which includes a
              unique username and password for secure access to the platform.
            </p>
            <p className="text-light">
              The assigned account will also include a designated batch for the
              enrolled course.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{
              backgroundImage:
                " linear-gradient(   329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #3a7ba4" }}
            iconStyle={{ background: "#3a7ba4", color: "#fff" }}
            icon={<BsFiletypeKey color="white" />}
          >
            <h3 className="vertical-timeline-element-title text-light">
              Access Course Materials and Community
            </h3>
            <p className="text-light">
              Once the student's account is created and the batch is assigned,
              the student gains access to the course materials. <br /> <br />{" "}
              Course materials may include lectures, videos, assignments,
              quizzes, and other learning resources, depending on the course.
              <br /> <br />
              In addition to course materials, students can also participate in
              the course community.
              <br />
              <br />
              The course community allows students to interact with fellow
              learners, ask questions, share insights, and engage in discussions
              related to the course.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundImage:
                " linear-gradient(   329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #0f3f5d" }}
            iconStyle={{ background: "#235f83" }}
            icon={<GoKeyboard color="white" />}
          >
            <h3 className="vertical-timeline-element-title text-light">
              Learn at Your Own Pace
            </h3>
            <p className="text-light">
              Hadi E-Learning provides a self-paced learning environment,
              allowing students to learn at their own convenience.
            </p>
            <p className="text-light">
              Students can access course materials and the course community
              24/7, providing flexibility in their learning journey.
            </p>
            <p className="text-light">
              Progress tracking tools are also available, allowing students to
              monitor their learning progress and stay on track with their
              course goals.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{
              backgroundImage:
                " linear-gradient(   329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #3a7ba4" }}
            iconStyle={{ background: "#3a7ba4", color: "#fff" }}
            icon={<BiSupport color="white" />}
          >
            <h3 className="vertical-timeline-element-title text-light">
              Support and Assistance
            </h3>

            <p className="text-light">
              Our team at Hadi E-Learning is dedicated to providing support and
              assistance to our students throughout their learning journey.{" "}
              <br /> <br />
              Students can reach out to our admin or customer support for any
              technical issues, inquiries, or clarifications related to the
              platform or the course.
              <br />
              <br />
              We strive to ensure a seamless learning experience for our
              students and are committed to helping them achieve their
              educational goals.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <CTA />
        <Price />
      </div>
    </>
  );
};

export default HowItWorks;
