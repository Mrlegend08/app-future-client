import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import VseKursPage from "../pages/VseKursPage";
import ChessPage from "../pages/ChessPage";
import RegisterPage from "../pages/RegisterPage";
import MepoPage from "../pages/MepoPage";
import MepoMorePage from "../pages/MepoMorePage";
import NovostiPage from "../pages/NovostiPage";
import MoreNewsPage from "../pages/MoreNewsPage";
import AcademyPage from "../pages/AcademyPage";
import ContactPage from "../pages/ContactPage";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="vseKurs" element={<VseKursPage />} />
        <Route path="chess" element={<ChessPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="mepo" element={<MepoPage />} />
        <Route path="mepomore" element={<MepoMorePage />} />
        <Route path="news" element={<NovostiPage />} />
        <Route path="news/morenews" element={<MoreNewsPage />} />
        <Route path="academy" element={<AcademyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<h1>404 not Found</h1>} />
      </Routes>
    </>
  );
};

export default Root;
