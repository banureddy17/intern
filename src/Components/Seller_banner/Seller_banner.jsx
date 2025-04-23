import React from "react";
import sell_banner from "../../Assests/seller-banner.png";
import "./Seller_banner.css";
function Seller_banner() {
  return (
    <>
      <div class="seller_banner">
        <img src={sell_banner} alt="" />
        <div class="seller_banner1">
          <div class="sell1">
            <div class="sell_range">
              <h4>Sell on 1mdm.com</h4>
              <h1>Reach millions of B2B buyers globally</h1>
            </div>
            <div class="sell_button">
              <button>Start selling</button>
              <button>chat with consultant</button>
            </div>
          </div>
          <div class="sell2">
            <div class="range">
              <p>26,000,000</p>
              <p>active buyers globally</p>{" "}
            </div>
            <div class="range">
              <p>400,000</p>
              <p>product inquiries daily</p>
            </div>
            <div class="range">
              <p>200</p>
              <p>countries and regions represented</p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="mdm">
        1mdm.com is a leading ecommerce platform that helps SMEs go global
      </h1>
      ;
    </>
  );
}

export default Seller_banner;
