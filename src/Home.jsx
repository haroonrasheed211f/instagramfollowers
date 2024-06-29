import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import ServicesDropDown from "./components/ServicesDropDown";
import BestServices from "./components/BestServices";

const Home = () => {
  const data = {
    name: "Instagram Services",
    nameservice:
      "Instagram is one of the best social media platforms to reach millions of followers. Buying active and real Instagram followers will allow you to increase your network of followers naturally.Not only this but you will also save your precious time and get the job done in an effortless manner.",
    btnservice: [
      "Instagram Followers",
      "Instagram Likes",
      "Instagram Comments",
    ],
  };

  return (
    <>
      <HeroSection myData={data} />
      <Trusted />
      <ServicesDropDown />
      <Services />
      <BestServices />
    </>
  );
};

export default Home;
