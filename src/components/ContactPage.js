import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/midwestern-logo.png";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <Fragment>
      <div className="sections-container">
        {/* SECTION-BLACK */}
        <section className="section-black">
          <div className="section-black-logo">
            <img src={navLogo} alt="midwestern logo" />
          </div>
          <div className="heading-one">
            <h1><span>Heading</span> One</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis saepe, maiores totam animi accusantium. Hic inventore doloremque ipsam sit!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda laudantium voluptas molestias atque architecto at?
            </p>
          </div>
        </section>
        {/* SECTION-WHITE */}
        <section className="section-white">
          <div className="form-links">
            <Link to="/" className="form-link">home</Link>
          </div>

          <div className="form-container">
            <h1>Heading Two</h1>
            <ContactForm />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ContactPage;
