import React from "react";
import longArrow from "../../assets/icons/longarrow.svg";
import rightToArrow from "../../assets/icons/rightToArrow.svg";
import date from "../../assets/images/date.png";
import phoneIcon from "../../assets/images/phone-icon.svg";
import shutter from "../../assets/images/shutterstock.png";
import "./index.scss";
const Mepo = () => {
  return (
    <>
      <main className="site-main">
        <section className="mepo-section">
          <div className="container">
            <div className="mepo-secton__wrapper">
              <div className="mepo-section__where">
                Главная
                <img src={longArrow} alt="Right Arrow" />
                Мероприятия
              </div>
              <h1 className="mepo-section__title">Все мероприятия</h1>
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
              <ul
                style={{ marginBottom: "20px" }}
                className="p-0 mepo-section__list d-flex flex-wrap justify-content-between"
              >
                <li
                  style={{ maxWidth: "380px" }}
                  className="vse-section__menu-item vse-section__card-one"
                >
                  <span className="vse-section__subject">Встреча</span>
                  <div className="vse-section__menu-flex">
                    <img src={phoneIcon} alt="Phone" width={26} height={42} />
                    <p className="vse-section__menu-title">
                      Заголовок мероприятия
                    </p>
                  </div>
                  <p className="vse-section__menu-desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <span className="vse-section__item-data">16 ноября 2021</span>
                </li>
                <li
                  style={{ maxWidth: "380px" }}
                  className="vse-section__menu-item vse-section__card-three"
                >
                  <span className="vse-section__subject">Встреча</span>
                  <div className="vse-section__menu-flex">
                    <img src={phoneIcon} alt="Phone" width={26} height={42} />
                    <p className="vse-section__menu-title">
                      Заголовок мероприятия
                    </p>
                  </div>
                  <p className="vse-section__menu-desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <span className="vse-section__item-data">16 ноября 2021</span>
                </li>
                <li
                  style={{ maxWidth: "380px" }}
                  className="vse-section__menu-item vse-section__card-four"
                >
                  <span className="vse-section__subject">Встреча</span>
                  <div className="vse-section__menu-flex">
                    <img src={phoneIcon} alt="Phone" width={26} height={42} />
                    <p className="vse-section__menu-title">
                      Заголовок мероприятия
                    </p>
                  </div>
                  <p className="vse-section__menu-desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <span className="vse-section__item-data">16 ноября 2021</span>
                </li>
              </ul>
              <div className="mepo-section__zago">
                <div className="mepo-section__zago-start">
                  <img
                    className="mepo-section__zago-img"
                    src={shutter}
                    alt="Brat"
                    width={280}
                    height={250}
                  />
                  <div className="mepo-section__zago-flex">
                    <span className="mepo-section__zago-text">Вебинар</span>
                    <h3 className="mepo-section__zago-start-title">
                      Заголовок мероприятия
                    </h3>
                    <p className="mepo-section__zago-start-desc">
                      Краткий анонс мероприятия в нескольких предложениях.
                      Текст, который будет заинтересовывать пользователя
                    </p>
                    <span className="mepo-section__zago-start-subtitle">
                      16 ноября 2021
                    </span>
                  </div>
                </div>

                <div className="mepo-section__zago-end">
                  <h3 className="mepo-section__zago-end-title">
                    Заголовок мероприятия
                  </h3>

                  <p className="mepo-section__zago-end-desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                </div>
              </div>
              <ul
                className="p-0 mepo-section__list d-flex flex-wrap justify-content-between"
              >
                <li
                  style={{ maxWidth: "380px" }}
                  className="vse-section__menu-item vse-section__card-seven"
                >
                  <span className="vse-section__subject">Встреча</span>
                  <div className="vse-section__menu-flex">
                    <img src={phoneIcon} alt="Phone" width={26} height={42} />
                    <p className="vse-section__menu-title">
                      Заголовок мероприятия
                    </p>
                  </div>
                  <p className="vse-section__menu-desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <span className="vse-section__item-data">16 ноября 2021</span>
                </li>
                <li
                  style={{ maxWidth: "380px" }}
                  className="vse-section__menu-item vse-section__card-nine"
                >
                  <span className="vse-section__subject">Встреча</span>
                  <div className="vse-section__menu-flex">
                    <img src={phoneIcon} alt="Phone" width={26} height={42} />
                    <p className="vse-section__menu-title">
                      Заголовок мероприятия
                    </p>
                  </div>
                  <p className="vse-section__menu-desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <span className="vse-section__item-data">16 ноября 2021</span>
                </li>
                <li
                  style={{ maxWidth: "380px" }}
                  className="vse-section__menu-item vse-section__card-two"
                >
                  <span className="vse-section__subject">Встреча</span>
                  <div className="vse-section__menu-flex">
                    <img src={phoneIcon} alt="Phone" width={26} height={42} />
                    <p className="vse-section__menu-title">
                      Заголовок мероприятия
                    </p>
                  </div>
                  <p className="vse-section__menu-desc">
                    Краткий анонс мероприятия в нескольких предложениях. Текст,
                    который будет заинтересовывать пользователя
                  </p>
                  <span className="vse-section__item-data">16 ноября 2021</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Mepo;
