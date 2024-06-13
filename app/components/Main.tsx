import React from "react";
import Hero from "./UI/Hero";
import Advantages from "./UI//Advantages";
import Customizable from "./UI//Customizable";
import Testimonial from "./UI/Testimonial";
import FAQ from "./UI/FAQ";
import Features from "./UI/Features";
import DownloadSection from "./UI/DownloadSection";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Advantages />
      <Customizable />
      <Testimonial />
      <FAQ />
      <DownloadSection />
    </div>
  );
};

export default Main;
