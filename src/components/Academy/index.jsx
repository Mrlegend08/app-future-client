import React from "react";
import HeroSection from "../Home/HeroSection";
import AcademInfoSection from "./AcademyInfoSection";
import AcadameyNashSection from "./AcademyNashSection";
import AcademyProgramSection from "./AcademyProgramSection";
const Academy = () => {
  return (
    <>
      <main className="site-main">
        <HeroSection />
        <AcademInfoSection />
        <AcadameyNashSection />
        <AcademyProgramSection />
      </main>
    </>
  );
};

export default Academy;
