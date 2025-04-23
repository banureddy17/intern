import React from "react";
import "./Footer_bar.css";
import logo from "../../Assests/logo-white.png";

function Footer_bar() {
  return (
    <>
      <div class="foot_bar">
        <div class="foot1">
          <div class="foot_sec1">
            <img src={logo} alt="" />
            <p>One Medical Devices</p>
            <p>Market Place</p>
          </div>
          <div class="foot_sec2">
            <h2>Platform</h2>
            <div class="foot_sec_con">
              <p>sell on 1MDM</p>
              <p>Pricing</p>
              <p>About us</p>
              <p>Our story</p>
              <p>Careers</p>
              <p>Brands</p>
              <p>Blog</p>
            </div>
          </div>
          <div class="foot_sec3">
            <h2>Press Room</h2>
            <div class="foot_sec_con">
              <p>Images & B-Roll</p>
              <h2>Policies</h2>
              <p>Terms of service</p>
              <p>Privacy Policy</p>
              <p>Delivery Information</p>
            </div>
          </div>
          <div class="foot_sec4">
            <h2>Reach Us</h2>
            <div class="foot_sec_con">
              <p>Corporate Information</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer_bar;
