import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Faqs";
import Trusted from "../components/Trusted";

const Threads = () => {
  const data = {
    name: "Thread Services",
    nameservice:
      "Thread is one of the best social media platforms to reach millions of followers. Buying active and real Thread followers will allow you to increase your network of followers naturally.Not only this but you will also save your precious time and get the job done in an effortless manner.",
    btnservice: ["Thread Followers", "Thread Likes", "Thread Comments"],
  };
  return (
    <>
      <HeroSection myData={data} />
      <Trusted />
      <Services />
    </>
  );
};

export default Threads;
