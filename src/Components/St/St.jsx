import React from "react";
import "../St/St.css";
import img2 from "../../Assests/img2.png";
function St() {
  return (
    <>
      <div class="store">
        <div class="store1">
          <div class="st1">
            <div>
              <p>Custom storefront</p>
            </div>
            <div>
              <p>Advertising tools</p>
            </div>
            <div>
              <p>Data and Analytics</p>
            </div>
            <div>
              <p>Customer support</p>
            </div>
          </div>
          <div class="st2">
            <div>
              <h1>Set up a store that showcases your brand</h1>
            </div>
            <div>
              <p>
                Differentiate yourself from the competition with a full store
                dedicated to your products- no coding or design skills
                necessary!
              </p>
            </div>
          </div>
          <div class="st3">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default St;
