import React from "react";
import "./index.scss";
import videoGuy from "../../../assets/images/videoGuy.png";
import rightToArrow from "../../../assets/icons/rightToArrow.svg";
import date from "../../../assets/images/date.png";
import monitor from "../../../assets/images/monitor.png";
import newspaper from "../../../assets/images/newspaper.png";
import diagrama from "../../../assets/images/diagram.png";
import vectorGroup from "../../../assets/images/vectors-group.png";
const VideoSection = () => {
  return (
    <>
      <section className="video-section">
        <div className="container">
          <div className="video-section__wrapper">
            <img
              className="video-section__position-img"
              src={videoGuy}
              alt="Video Guy"
              width={780}
              height={436}
            />
            <p className="video-section__desc">
              Актуальные знания от признанных экспертов рынка для новичков и
              практикующих специалистов.
            </p>
            <ul className="video-section__list">
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
            <div className="video-section__adver">
              <div className="video-section__adver-start">
                <div className="video-section__start-top">
                  <img src={date} alt="Date img" width={107} height={106} />
                </div>
                <div className="video-section__start-bottom">
                  <h3 className="video-section__bottom-title">
                    День открытых дверей
                  </h3>
                  <p className="video-section__bottom-desc">
                    Приглашаем всех желающих на бесплатную экскурсию в мир
                    востребованных профессий и полезных навыков
                  </p>
                </div>
              </div>
              <div className="video-section__adver-end">
                <button className="video-section__adver-btn">
                  Записаться
                  <img
                    src={rightToArrow}
                    alt="Right arrow"
                    width={5.81}
                    height={10.97}
                  />
                </button>
              </div>
            </div>
            <div className="video-section__about">
              <div className="video-section__about-start">
                <img
                  className="video-section__start-img"
                  src={monitor}
                  alt="Monitor"
                  width={77.55}
                  height={77.55}
                />
                <h3 className="video-section__start-title">
                  Программы обучения
                </h3>
                <p className="video-section__about-start-desc">
                  В списке наших курсов вы сможете найти профессию и занятие по
                  душе, изучить новое и получить практические знания, которые
                  помогут получить работу мечты.
                </p>
                <button className="video-section__about-btn">
                  Подробнее
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.87354 1.99658L7.68115 7.56201L1.87354 12.9655"
                      stroke="#00093c"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="video-section__about-end">
                <div className="video-section__about-top">
                  <div className="video-section__about-top-start">
                    <img
                      className="video-section__about-top-start-img"
                      src={newspaper}
                      alt="Newspaper"
                      width={68.49}
                      height={68.49}
                    />
                    <h3 className="video-section__about-top-start-title">
                      Новости Академии
                    </h3>
                  </div>
                  <div className="video-section__about-top-end">
                    <img
                      className="video-section__about-top-end-img"
                      src={diagrama}
                      alt="Diagram"
                      width={68.49}
                      height={68.49}
                    />
                    <h3 className="video-section__about-top-end-title">
                      Мир IT
                    </h3>
                  </div>
                </div>
                <div className="video-section__about-bottom">
                  <img
                    className="video-section__about-bottom-img"
                    src={vectorGroup}
                    alt="Vector group"
                    width={97.34}
                    height={97.23}
                  />
                  <div className="video-section__about-flex d-flex align-items-start flex-column">
                    <h3 className="video-section__about-bottom-title">
                      Попробуй!
                    </h3>
                    <p className="video-section__about-bottom-desc">
                      Пройдите тест и узнайте свои способности в сфере
                      информационных технологий
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
