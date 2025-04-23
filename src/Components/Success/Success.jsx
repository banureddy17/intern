import React from "react";
import "../Success/Success.css";
import slider1 from "../../Assests/slider-1.webp";
import men2 from "../../Assests/men2.webp";
import men3 from "../../Assests/men3.webp";
import girl from "../../Assests/girl1.webp";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const success = [
  {
    img: slider1,
    para: " LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
  },
  {
    img: men2,
    para: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
  },
  {
    img: men3,
    para: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
  },
  {
    img: girl,
    para: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
  },
];
console.log(success);

function Success() {
  return (
    <>
      <div class="success">
        <h1>Success stories from 1mdm.com sellers</h1>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {success.map((suc, index) => {
            return (
              <SwiperSlide key={index}>
                <div class="success_man">
                  <div class="success_con">{suc.para}</div>
                  <div class="success_img">
                    <img src={suc.img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Success;
