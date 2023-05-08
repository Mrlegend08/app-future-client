import React from "react";
import "./index.scss";
import chessBird from "../../../assets/images/chess-bird-bg.png";
import rux from "../../../assets/images/rux.png";
import shox from "../../../assets/images/shox.png";
import fil from "../../../assets/images/fil.png";
import ot from "../../../assets/images/ot.png";
import guyChess from "../../../assets/images/chess-boy.png";

import piyoda from "../../../assets/images/piyoda.png";
import oila from "../../../assets/images/oila.png";
import tv from "../../../assets/images/tv.png";
import starvoy from "../../../assets/images/starvoy.png";
import piyodaqol from "../../../assets/images/piyodaqol.png";
import radiosoat from "../../../assets/images/soatradio.png";

const ChessInfoSection = () => {
  const infoImgs = [piyoda, oila, tv, starvoy, piyodaqol, radiosoat];
  const infoTexts = [
    "Интересные уроки по шахматам",
    "Шахматы для взрослых и детей",
    "Обучение шахмат онлайн",
    "Профессиональное обучение шахматам",
    "Шахматные турниры",
    "Сеанс одновременной игры с GM",
  ];
  const itemMap = infoImgs.map((img, index) => {
    return (
      <li key={index} className="info-section__bottom-item">
        <img
          className="info-section__bottom-img"
          src={img}
          alt={infoTexts[index]}
          width={50}
          height={40}
        />
        <span className="info-section__bottom-desc">{infoTexts[index]}</span>
      </li>
    );
  });
  return (
    <>
      <section className="info-section">
        <div className="container">
          <div className="info-section__wrapper">
            <div className="info-section__wrapper-top">
              <img
                className="info-section__top-img"
                src={chessBird}
                alt="Chess bird"
                width={390}
                height={273}
              />
              <ul className="info-section__top-list">
                <li className="info-section__top-item">
                  <img
                    className="info-section__item-img"
                    src={rux}
                    alt="Rux img"
                    width={25}
                    height={40}
                  />
                  <h3 className="info-section__item-title">Цель 1</h3>
                  <p className="info-section__item-desc">
                    Привить любовь и интерес к шахматам
                  </p>
                </li>
                <li className="info-section__top-item">
                  <img
                    className="info-section__item-img"
                    src={shox}
                    alt="shox img"
                    width={30}
                    height={50}
                  />
                  <h3 className="info-section__item-title">Цель 2</h3>
                  <p className="info-section__item-desc">
                    Получить удовольствие от процесса игры, от факта победы в
                    партии, от спасения
                  </p>
                </li>
                <li className="info-section__top-item">
                  <img
                    className="info-section__item-img"
                    src={fil}
                    alt="Fil img"
                    width={25}
                    height={40}
                  />
                  <h3 className="info-section__item-title">Цель 3</h3>
                  <p className="info-section__item-desc">
                    Научить анализировать свои и чужие ошибки, учиться на них с
                    помощью GM мирового уровня
                  </p>
                </li>
                <li className="info-section__top-item">
                  <img
                    className="info-section__item-img"
                    src={ot}
                    alt="Ot img"
                    width={25}
                    height={40}
                  />
                  <h3 className="info-section__item-title">Цель 4</h3>
                  <p className="info-section__item-desc">
                    Получить удовольствие от процесса игры, от факта победы в
                    партии, от спасения
                  </p>
                </li>
              </ul>
            </div>
            <img
              className="info-section__position-img"
              src={guyChess}
              alt="Guy chess"
              width={780}
              height={436}
            />
            <div className="info-section__wrapper-bottom">
              <h2 className="info-section__bottom-title">Школа шахмат</h2>
              <p className="info-section__bottom-description">
                Шахматы - это отличная идея для времяпрепровождения с
                родителями, детьми и друзьями. Игра дает полезные в жизни
                навыки: учит побеждать и проигрывать, развивает творческие
                способности, вырабатывает стрессо-устойчивость, терпение,
                помогает сосредоточиться, а так же помогает осознать последствия
                своих действий.
              </p>
              <ul className="info-section__bottom-list">{itemMap}</ul>
            </div>
          </div>
        </div>
        <div className="info-section__bot">
          <div className="container">
            <div className="info-section__bot-wrapper">
              <div className="info-section__bot-flex">
                <p className="info-section__bot-start">
                  Шахматы могут помочь вам планировать наперед, не торопиться с
                  решениями и взвешивать их плюсы и минусы.
                </p>
                <p className="info-section__bot-start">
                  Шахматами можно наслаждаться в любом возрасте — в результате,
                  тренировка мозга может укреплять ваше здоровье.
                </p>
              </div>
              <button className="info-section__bot-btn">
                Записаться на курс
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChessInfoSection;
