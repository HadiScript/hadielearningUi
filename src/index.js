import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-modal-video/scss/modal-video.scss";
import "react-image-lightbox/style.css";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import AllContext from "./context/AllContext";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.Fragment>
    <AllContext>
      <Toaster />
      <App />
    </AllContext>
  </React.Fragment>,
  document.getElementById("root")
);
