import React from "react";
import longArrow from "../../assets/icons/longarrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import robot from "../../assets/images/robot.png";
import komp from "../../assets/images/komp.png";
import komplar from "../../assets/images/komplar.png";
import koca from "../../assets/images/streetboy.png";
import office from "../../assets/images/officekomp.png";
import kameraroom from "../../assets/images/kamera.png";
import "./index.scss";
import { Link } from "react-router-dom";
const Novosti = () => {
  const handleToggle = (index) => {
    localStorage.setItem("index", JSON.stringify(index));
  };
  const imgs = [robot, komp, komplar, koca, office, kameraroom];
  const imgIems = imgs.map((item, index) => {
    return (
      <li className="novosti-section__item">
        <img
          className="novosti-section__img"
          src={item}
          alt="Rasm"
          width={380}
          height={250}
        />
        <span className="novosti-section__date">16 ноября 2021</span>
        <h3 className="novosti-section__item-title">Заголовок новости</h3>
        <p className="novosti-section__item-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
          elit, egestas ut feugiat id, laoreet volutpat risus.
        </p>
        <Link
          to={"morenews"}
          onClick={() => handleToggle(index)}
          className="novosti-section__btn"
        >
          Подробнее <img src={rightArrow} alt="Right arrow" width={20} />
        </Link>
      </li>
    );
  });
  return (
    <>
      <main className="site-main">
        <section className="novosti-section">
          <div className="container">
            <div className="novosti-section__wrapper">
              <div className="mepo-section__where">
                Главная
                <img src={longArrow} alt="Right Arrow" />
                Новости
              </div>
              <h1 className="mepo-section__title">
                Новости ХОД Future Academy
              </h1>
              <ul className="novosti-section__list">{imgIems}</ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Novosti;
