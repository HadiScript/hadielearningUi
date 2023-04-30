import React, { useState } from "react";
import PagesNavbar from "../components/UI/PagesNavbar";
import axios from "axios";
import { toast } from "react-hot-toast";

const init_vals = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [info, setInfo] = useState(init_vals);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "https://hadielearning.com/api/contact",
        info
      );
      toast.success(response.data.message, { position: "bottom-center" });

      setInfo(init_vals);
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
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="contact__map">
                <iframe
                  title="contact"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Faisal plaza, civic center, Lahore, Punjab&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <div
                  className="contact__wrapper d-md-flex justify-content-between wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="contact__info mr-100">
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <h4>Address</h4>
                        <p>
                          Hall 2nd Floor, Faisal Plaza
                          <br />
                          Civic Center, Lahore
                        </p>
                      </li>
                      <li>
                        <h4>call us</h4>
                        <p>
                          <a href="tel:03-1111-93339">03-1111-93339</a>
                        </p>
                      </li>
                      <li>
                        <h4>Email Address</h4>
                        <p>
                          <a href="mailto:contact@hadielearning.com">
                            contact@hadielearning.com
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="contact__form">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        name="name"
                        value={info.name}
                        onChange={handleChange}
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        name="email"
                        value={info.email}
                        onChange={handleChange}
                      />
                      <textarea
                        required
                        placeholder="Your Message"
                        name="message"
                        value={info.message}
                        onChange={handleChange}
                      ></textarea>
                      <button type="submit" className="z-btn">
                        Send Message {loading && "..loading.."}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
