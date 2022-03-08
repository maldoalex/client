import React, {Fragment} from "react";
import { Link } from "react-router-dom";


import navLogo from '../assets/midwestern-logo.png';
import talkie from '../assets/talkie.png';
import rabbit from '../assets/rabbit.png';
import shield from '../assets/shield.png';

const HomePage = (props) => {

  const obj1 = {
    names: [
      "Matt Johnson",
      "Matt Johnson",
      "Bart Paden",
      "Ryan Doss",
      "Jared Malcolm",
    ],
  };
  const obj2 = {
    names: [
      "Matt Johnson",
      "Bart Paden",
      "Bart Paden",
      "Jordan Heigle",
      "Jordan Heigle",
      "Tyler Viles",
    ],
  };
  //Create empty array
  let distinctNames = [];

  //Iterate over objects to pass in non-duplicate names into distinctNames array
  obj1.names.forEach((name) => {
    if (!distinctNames.includes(name)) {
      distinctNames.push(name);
    }
  });

  obj2.names.forEach((name) => {
    if (!distinctNames.includes(name)) {
      distinctNames.push(name);
    }
  });

  //Function that maps over array and creates ul
  const showPeople = () => {
    const nameList = document.querySelector(".name-list");
    if (nameList.innerHTML === '') {
      const ul = distinctNames
        .map((name) => {
          return `<ul><li>${name}</li></ul>`;
        })
        .join("");
      nameList.innerHTML = ul;
    } else {
      alert("The distinct list of names has already been displayed.");
    }
  };

  return (
    <Fragment>
      {/* NAVBAR */}
      <nav className="navbar">
        <img
          className="nav-logo"
          src={navLogo}
          alt="midwestern logo"
        />
        <div className="nav-links">
          <Link to="/contact" className="nav-link">
            contact
          </Link>
        </div>
      </nav>
      {/* CARD SECTION */}
      <section>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={talkie} alt="" />
            </div>
            <h1 className="card-title">Heading Two</h1>
            <p className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius
              quasi consectetur quaerat! Aperiam odit rem repudiandae?
            </p>
            <button className="card-btn">
              Learn More
            </button>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={rabbit} alt="" />
            </div>
            <h1 className="card-title">Heading Two</h1>
            <p className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis reiciendis placeat, obcaecati necessitatibus autem
              aspernatur possimus repellendus!
            </p>
            <button className="card-btn">
              Learn More
            </button>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={shield} alt="" />
            </div>
            <h1 className="card-title">Heading Two</h1>
            <p className="card-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              blanditiis incidunt quos deserunt, magni perferendis suscipit
              voluptates.
            </p>
            <button className="card-btn">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* HEADING SECTION */}
      <section>
        <div className="names-container">
          <h1>Heading One</h1>
          <p>
            Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <button id="listLink" onClick={showPeople}>this link</button> is clicked. If the operation has been completed already, notify the user that this has already been done.
          </p>
          <ul className="name-list"></ul>
        </div>
      </section>
    </Fragment>
  );
}

export default HomePage;