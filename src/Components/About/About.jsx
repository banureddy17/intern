import React, { useState } from "react";
import "./About.css";
import img1 from "../../Assests/img1.png";
import { GiHamburgerMenu } from "react-icons/gi";
function About() {
  const [close, setclose] = useState(false);
  function opendiv(params) {
    setclose(!close);
  }
  return (
    <>
      <div class="about">
        <div class="about1">
          <div class="img">
            <img src={img1} alt="" />
          </div>
          <div class={close ? "menu1" : "menu"}>
            <ul>
              <li>About us</li>
              <li>sell on</li>
              <li>1MDM</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <GiHamburgerMenu className="closeicon" onClick={opendiv} />
      </div>
    </>
  );
}

export default About;
