import React from "react";
import HeroSection from "./HeroSection";
import KemSection from "./KemSection";

const Home = () => {
  return (
    <>
      <main className="site-main">
        <HeroSection />
        <KemSection />
      </main>
    </>
  );
};

export default Home;
