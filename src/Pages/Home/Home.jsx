import React from "react";
import ContactUs from "../../Component/ContactUs/ContactUs";
import Cta from "../../Component/Cta/Cta";
import Faq from "../../Component/Faq/Faq";
import Fetures from "../../Component/Fetures/Fetures";
import NewCollection from "../../Component/NewCollection/NewCollection";
import Stats from "../../Component/Stats/Stats";
import Team from "../../Component/Team/Team";
import Banner from "./Banner";
import ProductCategory from "./ProductCategory";
import ReviewSection from "./ReviewSection";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductCategory />
      <NewCollection />
      <Team />
      <ReviewSection />
      <Fetures />
      <Faq />
      <Stats />
      <Cta />
      <ContactUs />
    </>
  );
};

export default Home;
