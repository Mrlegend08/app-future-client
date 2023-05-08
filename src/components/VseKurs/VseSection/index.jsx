import React from "react";
import childern from "../../../assets/images/children.png";
import guys from "../../../assets/images/guys.png";
import family from "../../../assets/images/family.png";
import banner from "../../../assets/images/banner.png";
import phoneIcon from "../../../assets/images/phone-icon.svg";
import "./index.scss";
const VseSection = () => {
  const [toggle, setToggle] = React.useState(0);
  const elItems = document.querySelectorAll(".vse-section__item");
  const handleToggle = () => {
    elItems.forEach((item, index) => {
      if (index === toggle) {
        item.classList.add("vse-section__toggle");
      } else {
        item.classList.remove("vse-section__toggle");
      }
    });
  };
  handleToggle();
  return (
    <>
      <section className="vse-section">
        <div className="container">
          <div className="vse-section__wrapper">
            <h1 className="vse-section__title">Все программы обучения</h1>
            <div className="vse-section__start">
              <ul className="vse-section__list">
                <li
                  className="vse-section__item vse-section__toggle"
                  onClick={() => setToggle(0)}
                >
                  <img src={childern} alt="Дети" width={49} height={49} />
                  <div className="vse-section__item-flex">
                    <h3 className="vse-section__item-title">Дети</h3>
                    <span className="vse-section__item-info">8 — 14 лет</span>
                  </div>
                </li>
                <li className="vse-section__item" onClick={() => setToggle(1)}>
                  <img src={guys} alt="Дети" width={49} height={49} />
                  <div className="vse-section__item-flex">
                    <h3 className="vse-section__item-title">Подростки</h3>
                    <span className="vse-section__item-info">14 — 18 лет</span>
                  </div>
                </li>
                <li className="vse-section__item" onClick={() => setToggle(2)}>
                  <img src={family} alt="Дети" width={49} height={49} />
                  <div className="vse-section__item-flex">
                    <h3 className="vse-section__item-title">Взрослые</h3>
                    <span className="vse-section__item-info">18 — ∞ </span>
                  </div>
                </li>
              </ul>
              <div className="vse-section__line"></div>
            </div>
            <div className="vse-section__end d-flex" style={{ gap: "20px" }}>
              <div className="vse-section__sidebar">
                <div className="vse-section__sidebar-flex">
                  <h3 className="vse-section__sidebar-title">
                    Уровень сложности
                  </h3>
                  <form className="vse-section__sidebar-form" action="post">
                    <label>
                      <input
                        className="vse-section__sidebar-input"
                        type="radio"
                        name="Уровень"
                        style={{ display: "none" }}
                      />
                      <span class="gradient-border">
                        <span className="vse-section__bg"></span>
                      </span>
                      <span className="vse-section__form-title">Новичок</span>
                    </label>
                    <label>
                      <input
                        className="vse-section__sidebar-input"
                        type="radio"
                        name="Уровень"
                        style={{ display: "none" }}
                      />
                      <span class="gradient-border">
                        <span className="vse-section__bg"></span>
                      </span>
                      <span className="vse-section__form-title">
                        Пользователь
                      </span>
                    </label>
                    <label>
                      <input
                        className="vse-section__sidebar-input"
                        type="radio"
                        name="Уровень"
                        style={{ display: "none" }}
                      />
                      <span class="gradient-border">
                        <span className="vse-section__bg"></span>
                      </span>
                      <span className="vse-section__form-title">
                        Профессионал
                      </span>
                    </label>
                    <label>
                      <input
                        className="vse-section__sidebar-input"
                        type="radio"
                        name="Уровень"
                        style={{ display: "none" }}
                      />
                      <span class="gradient-border">
                        <span className="vse-section__bg"></span>
                      </span>
                      <span className="vse-section__form-title">Читер</span>
                    </label>
                  </form>
                </div>
                <div className="vse-section__sidebar-flex">
                  <h3 className="vse-section__sidebar-title">Тип обучения</h3>
                  <form className="vse-section__sidebar-form" action="post">
                    <label>
                      <input
                        className="vse-section__sidebar-input"
                        type="radio"
                        name="tip"
                        style={{ display: "none" }}
                      />
                      <span class="gradient-border">
                        <span className="vse-section__bg"></span>
                      </span>
                      <span className="vse-section__form-title">Любой</span>
                    </label>
                    <label>
                      <input
                        className="vse-section__sidebar-input"
                        type="radio"
                        name="tip"
                        style={{ display: "none" }}
                      />
                      <span class="gradient-border">
                        <span className="vse-section__bg"></span>
                      </span>
                      <span className="vse-section__form-title">Профессия</span>
                    </label>
                    <label>
                      <input
                        className="vse-section__sidebar-input"
                        type="radio"
                        name="tip"
                        style={{ display: "none" }}
                      />
                      <span class="gradient-border">
                        <span className="vse-section__bg"></span>
                      </span>
                      <span className="vse-section__form-title">Курс</span>
                    </label>
                  </form>
                </div>
                <div className="vse-section__sidebar-difficult">
                  <h3
                    style={{ marginBottom: "22px" }}
                    className="vse-section__sidebar-title"
                  >
                    Длительность
                  </h3>
                  <p className="vse-section__sidebar-info">
                    от 1 до 24 месяцев
                  </p>
                  <div className="vse-section__gradient-range">
                    <span class="gradient-border">
                      <span className="vse-section__bg-yes"></span>
                    </span>
                    <div className="vse-section__line-gradient"></div>
                    <span class="gradient-border">
                      <span className="vse-section__bg-yes"></span>
                    </span>
                  </div>
                </div>
                <img src={banner} alt="Banner" width={280} height={400} />
              </div>
              <div className="vse-section__menu">
                <h2 className="vse-section__menu-title">Направление</h2>
                <div className="vse-section__end d-flex align-items-center flex-wrap">
                  <button className="vse-section__btn">Робототехника</button>
                  <button className="vse-section__btn">Создание игр</button>
                  <button className="vse-section__btn">Web-разработка</button>
                  <button className="vse-section__btn">Мультимедиа</button>
                  <button className="vse-section__btn">Шахматы</button>
                  <button className="vse-section__btn">
                    3D-моделирование и дизайн
                  </button>
                  <button className="vse-section__btn">Английский язык</button>
                  <button className="vse-section__btn">Блогинг</button>
                  <button className="vse-section__btn">Soft skills</button>
                </div>
                <ul className="vse-section__menu-list">
                  <li className="vse-section__menu-item vse-section__card-one">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-two">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>

                    <span className="vse-section__item-badge">-10%</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-three">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-four">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-five">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                    <span className="vse-section__item-badge">-10%</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-six">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>

                    <span className="vse-section__item-badge">-10%</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-seven">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-eight">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-nine">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                  </li>
                  <li className="vse-section__menu-item vse-section__card-ten">
                    <span className="vse-section__subject">Программа</span>
                    <div className="vse-section__menu-flex">
                      <img src={phoneIcon} alt="Phone" width={26} height={42} />
                      <p className="vse-section__menu-title">
                        «Разработка мобильных приложений»
                      </p>
                    </div>
                    <p className="vse-section__menu-desc">
                      Разработчик мобильных приложений создаёт приложения,
                      которыми люди ежедневно пользуются на смартфонах, умных
                      часах и планшетах.
                    </p>
                    <span className="vse-section__item-data">24 месяца</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VseSection;
