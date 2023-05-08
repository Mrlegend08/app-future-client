import React from "react";
import "./index.scss";
const ChessHeroSection = () => {
  return (
    <>
      <section className="chess-hero-section">
        <div className="container">
          <div className="chess-hero-section__wrapper">
            <h1 className="chess-hero-section__title">Шахматная школа</h1>
            <span className="chess-hero-section__subtitle">
              Развитие мышления и логики
            </span>
            <div className="chess-hero-section__flex">
              <span
                style={{ maxWidth: "119px" }}
                className="chess-hero-section__flex-title"
              >
                Срок обучения: 5 лет
              </span>
              <span
                style={{ maxWidth: "309px" }}
                className="chess-hero-section__flex-title"
              >
                Режим занятий: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                2 раза в неделю по 2 академических часа
              </span>
            </div>
            <div className="chess-hero-section__info">от 4 350 ₽ в месяц</div>
            <span className="chess-hero-section__info-contiune">
              1 занятие бесплатное
            </span>
            <p className="chess-hero-section__desc">
              Прежде чем начать обучение советуем записаться на пробное заниятие
            </p>
            <button className="chess-hero-section__btn">
              Записаться на пробное занятие
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChessHeroSection;
