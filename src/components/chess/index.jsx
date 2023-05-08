import React from "react";
import ChessHeroSection from "./ChessHeroSection";
import ChessInfoSection from "./ChessInfoSection";
import ChessAkademySection from "./ChessAcademySection";

const Chess = () => {
  return (
    <>
      <main className="site-main">
        <ChessHeroSection />
        <ChessInfoSection />
        <ChessAkademySection/>
      </main>
    </>
  );
};

export default Chess;
