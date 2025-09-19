import React from "react";
import "./stylings/Aboutus.css"
import Footer from "./Footer";

const AboutUsSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center gx-4">
          {/* Left Column - Image */}
          <div className="col-md-5">
            <div className="ms-md-2 ms-lg-5">
              <img
                className="img-fluid rounded-3"
                src="images/download1.jpeg"
                alt="About Us"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="col-md-6 offset-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">Our Story</span>
              <h2 className="display-5 fw-bold">About Us</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      
    </section>
  );
};

export default AboutUsSection;
