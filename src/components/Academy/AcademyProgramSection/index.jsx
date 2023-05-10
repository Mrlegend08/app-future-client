import React from "react";
import tinkoff from "../../../assets/images/tinkoffLogo.png";
import alfabank from "../../../assets/images/alfabanklogo.png";
import vkontakt from "../../../assets/images/vkontaktlogo.png";
import avito from "../../../assets/images/avitologo.png";
import playtime from "../../../assets/images/playtime.png";
import budget from "../../../assets/images/budget.png";
import mobileGame from "../../../assets/images/mobile-game.png";
import it from "../../../assets/images/it.png";
import "./index.scss";
const AcademyProgramSection = () => {
  const imgs = [
    tinkoff,
    alfabank,
    vkontakt,
    avito,
    alfabank,
    vkontakt,
    avito,
    vkontakt,
    tinkoff,
    alfabank,
    avito,
    tinkoff,
  ];
  const componyLogos = imgs.map((item, index) => {
    return (
      <li className="academy-program-section__middle-item">
        <img
          className="academy-program-section__middle-img"
          src={item}
          alt="Img"
        />
      </li>
    );
  });
  return (
    <>
      <section className="academy-program-section">
        <div className="container">
          <div className="academy-program-section__wrapper">
            <h2 className="academy-program-section__title">Наши программы</h2>
            <ul className="academy-program-section__start-list">
              <li className="academy-program-section__start-item">
                Предполагают пролонгированное обучение
              </li>
              <li className="academy-program-section__start-item">
                Составлены с учетом возрастных и индивидуальных особенностей
                детей
              </li>
              <li className="academy-program-section__start-item">
                Авторские и не имеют аналогов
              </li>
              <li className="academy-program-section__start-item">
                Составлены на основе деятельностного и компетентностного
                подходов
              </li>
              <li className="academy-program-section__start-item">
                Реализуются с помощью современных педагогических технологий
              </li>
              <li className="academy-program-section__start-item">
                Актуальны и фундаментальны
              </li>
            </ul>
            <ul
              style={{ marginBottom: "104px" }}
              className="video-section__list"
            >
              <li className="video-section__item">
                <h3 className="video-section__item-title">600</h3>
                <span className="video-section__item-desc">Курсов</span>
              </li>
              <li className="video-section__item">
                <h3 className="video-section__item-title">82</h3>
                <span className="video-section__item-desc">
                  Ведущих преподавателей
                </span>
              </li>
              <li className="video-section__item">
                <h3 className="video-section__item-title">14 795</h3>
                <span className="video-section__item-desc">Выпускников</span>
              </li>
            </ul>
            <h3 className="academy-program-section__middle-title">
              Наши партнеры
            </h3>
            <ul className="academy-program-section__middle-list">
              {componyLogos}
            </ul>
            <h3 className="academy-program-section__middle-title">
              Нажми, если это о тебе
            </h3>
            <ul className="academy-program-section__bottom-list">
              <li className="academy-program-section__bottom-item academy-program-section__bottom-one">
                <img
                  className="academy-program-section__bottom-img"
                  src={playtime}
                  alt="Play time"
                  width={53}
                  height={53}
                />
                <span className="academy-program-section__bottom-desc">
                  Я хочу, чтобы мой ребенок был успешным
                </span>
              </li>
              <li className="academy-program-section__bottom-item academy-program-section__bottom-two">
                <img
                  className="academy-program-section__bottom-img"
                  src={budget}
                  alt="Play time"
                  width={53}
                  height={53}
                />
                <span className="academy-program-section__bottom-desc">
                  Я хочу больше зарабатывать
                </span>
              </li>
              <li className="academy-program-section__bottom-item academy-program-section__bottom-three">
                <img
                  className="academy-program-section__bottom-img"
                  src={mobileGame}
                  alt="Play time"
                  width={53}
                  height={53}
                />
                <span className="academy-program-section__bottom-desc">
                  Мой ребенок не выпускает гаджет из рук
                </span>
              </li>
              <li className="academy-program-section__bottom-item academy-program-section__bottom-four">
                <img
                  className="academy-program-section__bottom-img"
                  src={it}
                  alt="Play time"
                  width={53}
                  height={53}
                />
                <span className="academy-program-section__bottom-desc">
                  Я хочу стать айтишником
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademyProgramSection;
