import React from "react";
import HeroSection from "./HeroSection";
import KemSection from "./KemSection";
import VideoSection from "./videoSection";
import OtvizSection from "./OtvizSection";
import DobroSection from "./DobroSection";

const Home = () => {
  return (
    <>
      <main style={{ backgroundColor: "#f3f2f2" }} className="site-main">
        <HeroSection />
        <KemSection />
        <VideoSection />
        <OtvizSection />
        <DobroSection />
      </main>
    </>
  );
};

export default Home;
