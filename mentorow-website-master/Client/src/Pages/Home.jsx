import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RolesDetails from "../Components/RolesDetails";
import Caption from "../Components/Caption";
import Cards from "../Components/Cards";
import Mentors from "../Components/Mentors";
import Collection from "../Components/Collection";
// import Question from "../Components/Question";
import ContactUs from "../Components/ContactUs";
import SimpleStep from "../Components/SimpleStep";
// import Layout from "../Components/Layout";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RolesDetails/>
      <Caption/>
      <Cards/>
      <Collection/>
      <SimpleStep />
      <Mentors />
      <ContactUs />
    </>
  );
}

export default Home;
