import React from "react";
import nastro from "../../../assets/images/nastroy.png";
import book from "../../../assets/images/book.png";
import teacer from "../../../assets/images/teacer.png";
import doctor from "../../../assets/images/doctor.png";
import "./index.scss";
const DobroSection = () => {
  return (
    <>
      <section className="dobro-section">
        <div className="container">
          <div className="dobro-section__wrapper">
            <h2 className="dobro-section__title">
              Добро пожаловать в Академию будущего ХОД
            </h2>
            <ul className="dobro-section__list">
              <li className="dobro-section__item">
                <img src={nastro} alt="Dobro img" />
                <p className="dobro-section__desc">
                  Передовой подход к образовательному процессу
                </p>
              </li>
              <li className="dobro-section__item">
                <img src={book} alt="Dobro img" />
                <p className="dobro-section__desc">
                  Непрерывное усовершенствование и пополнение базы курсов
                </p>
              </li>
              <li className="dobro-section__item">
                <img src={teacer} alt="Dobro img" />
                <p className="dobro-section__desc">
                  Только практикующие преподаватели
                </p>
              </li>
              <li className="dobro-section__item">
                <img src={doctor} alt="Dobro img" />
                <p className="dobro-section__desc">
                  Сопровождение на всех этапах. От начала обучения до
                  трудоустройства
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default DobroSection;
