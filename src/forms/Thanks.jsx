import React from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const router = useNavigate();
  // setTimeout(() => {
  //   router("/");
  // }, 2000);
  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        display : "flex",
        justifyContent : "start",
        alignItems :"center",
        backgroundImage:
          "linear-gradient( 329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
      }}
    >
      <div style={{ marginLeft: "20px" }}>
        <span
          style={{
            fontSize: "30px",
            fontWeight: "bolder",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Write your way to a fulfilling and lucrative career
        </span>
        <br />
        <br />
        <span>Hi Hadi,</span>
        <br />
        <span> I hope you’re keeping well.</span>
        <br />
        <br />
        <span>
          Thank you for registering for our upcoming workshop on workshop "Write
          your way to a fulfilling and lucrative career". We are delighted to
          have you join us.
        </span>
        <br />
        <br />
        <span>
          The workshop will be held on 2 may | 6pm, and it will be conducted by
          Idamah Fatima
        </span>
        <br />
        <span>Please find the link to access the workshop: [link].</span>
        <br />
        <br />
        <span>
          Should you have any queries regarding the workshop, please do not
          hesitate to contact us at [contact information].
        </span>
        <br />
        <br />
        <span>Thank you for your interest!</span>
        <br />
        <br />
        <span>Best regards,</span>
        <br />
        <span>Hadi E-Learning</span>
      </div>
    </div>
  );
};

export default Thanks;
