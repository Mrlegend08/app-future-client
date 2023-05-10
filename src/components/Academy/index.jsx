import React from "react";
import HeroSection from "../Home/HeroSection";
import AcademInfoSection from "./AcademyInfoSection";
import AcadameyNashSection from "./AcademyNashSection";
const Academy = () => {
  return (
    <>
      <main className="site-main">
        <HeroSection />
        <AcademInfoSection />
        <AcadameyNashSection />
      </main>
    </>
  );
};

export default Academy;
