import React from "react";
import "./About.css";
import img1 from "../../Assests/img1.png";

function About() {
  return (
    <>
      <div class="about">
        <div class="about1">
          <div class="img">
            <img src={img1} alt="" />
          </div>
          <div class="menu">
            <ul>
              <li>About us</li>
              <li>sell on</li>
              <li>1MDM</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
