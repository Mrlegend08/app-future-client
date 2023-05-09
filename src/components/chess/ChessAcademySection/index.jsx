import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import qizcha from "../../../assets/images/qizchashaxmat.png";
import sariqSoch from "../../../assets/images/sariqbolashaxmat.png";
import iktabola from "../../../assets/images/iktabolashaxmat.png";
import odamla from "../../../assets/images/odamlarbn.png";
import bola from "../../../assets/images/bolaoyla.png";
  // Import Swiper styles
  import "swiper/css";
import "./index.scss";
const ChessAkademySection = () => {
  const imgs = [
    qizcha,
    sariqSoch,
    iktabola,
    odamla,
    bola,
    qizcha,
    sariqSoch,
    iktabola,
    bola,
  ];
  const slideGenerator = imgs.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <img className="academy-section__img" src={item} alt="Rasm" />
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className="academy-section">
        <div className="container">
          <div className="academy-section__wrapper-top">
            <h2 className="academy-section__title">
              Chess academy для школьников
            </h2>
            <p className="academy-section__desc">
              Обеспечиваем индивидуальный подход к учащимся. В основе процесса
              обучения — тесное и открытое взаимодействие педагода и ученика.
              Обучение проходит по программе, созданной GM.
            </p>
          </div>
        </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ marginBottom: "123px" }}
          >
            {slideGenerator}
          </Swiper>
        <div className="container">
          <div className="academy-section__wrapper-bottom">
            <h2 className="academy-section__title">Содержание курса</h2>
            <p className="academy-section__bottom-desc">
              Программа включает в себя изучение истории возникновения игры в
              шахматы, современные тенденции игры в онлайн-шахматы, знакомство
              со знаменитыми шахматистами прошлого и настоящего. Дети знакомятся
              с фигурами и правилами игры, узнают основные понятия, отрабатывая
              все в игровой практике. Дебют, мителльшпиль, эндшпиль, стратегия и
              тактика игры, особенности позиции – все это включено в первый год
              обучения, а пятилетний курс предполагает обучение ребенка до
              уровня КМС.
            </p>
            <div className="chess-hero-section__flex">
              <span
                style={{ maxWidth: "119px", color: "black" }}
                className="chess-hero-section__flex-title"
              >
                Срок обучения: 5 лет
              </span>
              <span
                style={{ maxWidth: "309px", color: "black" }}
                className="chess-hero-section__flex-title"
              >
                Режим занятий: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                2 раза в неделю по 2 академических часа
              </span>
            </div>
            <div
              style={{ color: "black" }}
              className="chess-hero-section__info"
            >
              от 4 350 ₽ в месяц
            </div>
            <button className="chess-hero-section__btn">
              Записаться на пробное занятие
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChessAkademySection;
