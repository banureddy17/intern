import React from "react";
import "./Footer.css";
import footer_banner from "../../Assests/footer-banner.png";

function Footer() {
  return (
    <>
      <div class="footer">
        <img src={footer_banner} alt="" />
        <div class="footer_con">
          <p>Ready to Grow Your Business?</p>
          <button>start selling</button>
          <button>chat with consultant</button>
        </div>
      </div>
    </>
  );
}

export default Footer;
