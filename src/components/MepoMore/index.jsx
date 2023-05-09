import React from "react";
import MoreHeroSection from "./MoreHeroSection";
import MoreProgramSection from "./MoreProgramSection";
import NashSection from "../chess/ChessNashSection"
import MoreSliderSection from "./MoreSliderSection";
const MepoMore = () => {
  return (
    <>
      <main className="site-main">
        <MoreHeroSection />
        <MoreProgramSection />
        <NashSection/>
        <MoreSliderSection/>
      </main>
    </>
  );
};

export default MepoMore;
