import React from "react";
import "./Utube.css";

function Utube() {
  return (
    <>
      <div class="utube">
        <div class="utube_con">
          <div class="utube1">
            <iframe
              src="https://www.youtube.com/embed/TN7iJyc5Uks?si=bOUS7nDsW5b9L4F5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="utube2">
            <p>
              Connect with millions of business buyers from around the world.
            </p>
            <p>
              Get the tools and know-how to build a successful ecommerce
              presence for your business.
            </p>
            <p>
              Pocket more from each sale, with take rates as low as 0% in some
              cases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Utube;
