import React from "react";
import HeroSection from "../components/HeroSection";
import Trusted from "../components/Trusted";
import BestServices from "../components/BestServices";
import ServicesWeOffer from "../components/ServicesWeOffer";
import PackageTime from "../components/PackageTime";
import Slide from "../components/Slide";
import Faqs from "../components/Faqs";
import ServicesDropDown from "../components/ServicesDropDown";
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
      <BestServices />
      <ServicesWeOffer />
      <PackageTime />
      <Slide />
      <Faqs />
    </>
  );
};

export default Home;
