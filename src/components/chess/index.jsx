import React from "react";
import ChessHeroSection from "./ChessHeroSection";
import ChessInfoSection from "./ChessInfoSection";
import ChessAkademySection from "./ChessAcademySection";
import ChessNashSection from "./ChessNashSection";

const Chess = () => {
  return (
    <>
      <main className="site-main">
        <ChessHeroSection />
        <ChessInfoSection />
        <ChessAkademySection />
        <ChessNashSection />
      </main>
    </>
  );
};

export default Chess;
