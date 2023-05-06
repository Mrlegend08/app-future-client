import React from "react";
import HeroSection from "./HeroSection";
import KemSection from "./KemSection";
import VideoSection from "./videoSection";

const Home = () => {
  return (
    <>
      <main style={{ backgroundColor: "#f3f2f2" }} className="site-main">
        <HeroSection />
        <KemSection />
        <VideoSection />
      </main>
    </>
  );
};

export default Home;
