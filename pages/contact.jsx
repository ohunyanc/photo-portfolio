import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Fill and submit the form below for more quotes"
      />
      <Contact />
    </div>
  );
};

export default contact;
