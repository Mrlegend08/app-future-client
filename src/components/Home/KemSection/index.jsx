import React from "react";
import "./index.scss";
import childern from "../../../assets/images/children.png";
import guys from "../../../assets/images/guys.png";
import family from "../../../assets/images/family.png";
import birdSing from "../../../assets/images/bird-withsentence.png";

import { NavLink } from "react-router-dom";
const KemSection = () => {
  const [toggle, setToggle] = React.useState(0);
  const elItems = document.querySelectorAll(".kem-section__item");
  const handleToggle = () => {
    elItems.forEach((item, index) => {
      if (index === toggle) {
        item.classList.add("kem-section__toggle");
      } else {
        item.classList.remove("kem-section__toggle");
      }
    });
  };
  handleToggle();
  return (
    <>
      <section className="kem-section">
        <img
          className="kem-section__position-img"
          src={birdSing}
          alt="Qush"
          width={300}
          height={353}
        />
        <div className="container">
          <div className="kem-section__wrapper">
            <div className="kem-section__start">
              <ul className="kem-section__list">
                <li
                  className="kem-section__item kem-section__toggle"
                  onClick={() => setToggle(0)}
                >
                  <img src={childern} alt="Дети" width={49} height={49} />
                  <div className="kem-section__item-flex">
                    <h3 className="kem-section__item-title">Дети</h3>
                    <span className="kem-section__item-info">8 — 14 лет</span>
                  </div>
                </li>
                <li className="kem-section__item" onClick={() => setToggle(1)}>
                  <img src={guys} alt="Дети" width={49} height={49} />
                  <div className="kem-section__item-flex">
                    <h3 className="kem-section__item-title">Подростки</h3>
                    <span className="kem-section__item-info">14 — 18 лет</span>
                  </div>
                </li>
                <li className="kem-section__item" onClick={() => setToggle(2)}>
                  <img src={family} alt="Дети" width={49} height={49} />
                  <div className="kem-section__item-flex">
                    <h3 className="kem-section__item-title">Взрослые</h3>
                    <span className="kem-section__item-info">18 — ∞ </span>
                  </div>
                </li>
              </ul>
              <div className="kem-section__line"></div>
            </div>
            <div className="kem-section__end d-flex align-items-center flex-wrap">
              <NavLink to={"Робототехника"} className="kem-section__btn">
                Робототехника
              </NavLink>
              <NavLink to={"igr"} className="kem-section__btn">
                Создание игр
              </NavLink>
              <NavLink to={"Web-разработка"} className="kem-section__btn">
                Web-разработка
              </NavLink>
              <NavLink to={"multi"} className="kem-section__btn">
                Мультимедиа
              </NavLink>
              <NavLink to={"chess"} className="kem-section__btn">
                Шахматы
              </NavLink>
              <NavLink to={"3D"} className="kem-section__btn">
                3D-моделирование и дизайн
              </NavLink>
              <NavLink to={"english"} className="kem-section__btn">
                Английский язык
              </NavLink>
              <NavLink to={"bloging"} className="kem-section__btn">
                Блогинг
              </NavLink>
              <NavLink to={"soft"} className="kem-section__btn">
                Soft skills
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KemSection;
