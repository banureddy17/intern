import React from "react";
import "../Success/Success.css";
import slider1 from "../../Assests/slider-1.webp";

function Success() {
  return (
    <>
      <div class="success">
        <h1>Success stories from 1mdm.com sellers</h1>
        <div class="success_man">
          <div class="success_con">
            Mr David runs a manufacturing company that works in this field of
            medical devices. With administrative and production across the
            country. With full respect for environment and several years’
            experience using IP systems that are conventional
          </div>
          <div class="success_img">
            <img src={slider1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
