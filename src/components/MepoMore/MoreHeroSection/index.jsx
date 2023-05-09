import React from "react";
import "./index.scss";
const MoreHeroSection = () => {
  return (
    <>
      <section className="more-hero-section">
        <div className="container">
          <div className="chess-hero-section__wrapper">
            <h1 className="chess-hero-section__title">Название мероприятия</h1>
            <span style={{marginBottom: "60px"}} className="chess-hero-section__subtitle">
              Подпись к названию
            </span>
            <div className="chess-hero-section__flex align-items-start">
              <span
                style={{ maxWidth: "181px", paddingTop: "3px" }}
                className="chess-hero-section__flex-title"
              >
                Узнайте самые востребованные профессии, на которые более 113
                тысяч вакансий
              </span>
              <span
                style={{ maxWidth: "181px", paddingTop: "3px" }}
                className="chess-hero-section__flex-title"
              >
                Выберите подходящую именно для вас
              </span>
              <span
                style={{ maxWidth: "181px", paddingTop: "3px" }}
                className="chess-hero-section__flex-title"
              >
                Сделайте первые шаги к возможности выйти на доход более 100
                тысяч рублей
              </span>
            </div>
            <span
              style={{ marginBottom: "34px" }}
              className="chess-hero-section__info-contiune"
            >
              Запишись сейчас
            </span>
            <button className="chess-hero-section__btn">
              Записаться на интенсив
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreHeroSection;
