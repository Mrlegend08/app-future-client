import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import VseKursPage from "../pages/VseKursPage";
import ChessPage from "../pages/ChessPage";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="vseKurs" element={<VseKursPage />} />
        <Route path="chess" element={<ChessPage />} />
        <Route path="*" element={<h1>404 not Found</h1>} />
      </Routes>
    </>
  );
};

export default Root;
