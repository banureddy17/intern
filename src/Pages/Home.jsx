import React from "react";
import Head from "../Components/Head/Head";
import About from "../Components/About/About";
import Seller_banner from "../Components/Seller_banner/Seller_banner";
import Utube from "../Components/Utube/Utube";
import Red_box from "../Components/Red_box/Red_box";
import St from "../Components/St/St";
import Success from "../Components/Success/Success";
import Footer from "../Components/Footer/Footer";
import Footer_bar from "../Components/Footer_bar/Footer_bar";
import Final_foot from "../Components/Final_foot/Final_foot";

function Home() {
  return (
    <>
      <Head />
      <About />
      <Seller_banner />
      <Utube />
      <Red_box />
      <St />
      <Success />
      <Footer />
      <Footer_bar />
      <Final_foot />
    </>
  );
}

export default Home;
