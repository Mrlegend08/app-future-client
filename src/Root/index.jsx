import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import VseKursPage from "../pages/VseKursPage";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="vseKurs" element={<VseKursPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
