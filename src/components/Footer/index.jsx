import React from "react";
import "./index.scss";

import whiteLogo from "../../assets/icons/white-logo.svg";
import bird from "../../assets/images/bird.png";
import wIcon from "../../assets/icons/w-logo.svg";
import instagram from "../../assets/icons/instagram-icon.svg";
import facebook from "../../assets/icons/facebook.svg";
import telegram from "../../assets/icons/telegram-icon.svg";
import youtube from "../../assets/icons/youtube-icon.svg";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__position">
          <div className="container">
            <div className="site-footer__position-wrapper">
              <img
                className="site-footer__position-img"
                src={bird}
                alt="Qush"
                width={276}
                height={311}
              />
              <div className="site-footer__position-start">
                <h2 className="site-footer__position-title">
                  Помочь с выбором?
                </h2>
                <p className="site-footer__position-desc">
                  Оставьте заявку и наши специалисты свяжутся с вами, ответят на
                  все вопросы и подберут подходящий вариант обучения.
                </p>
              </div>
              <div className="site-footer__position-end">
                <form className="site-footer__form" method="post">
                  <input
                    className="site-footer__position-name"
                    type="text"
                    name="firstName"
                    placeholder="Ваше имя"
                    aria-label="Ваше имя"
                    required
                  />
                  <div className="site-footer__position-input-flex">
                    <input
                      className="site-footer__position-phone"
                      type="text"
                      name="telephoneNumber"
                      placeholder="Ваш телефон"
                      aria-label="Ваш телефон"
                      required
                    />
                    <input
                      className="site-footer__position-email"
                      type="email"
                      name="telephoneNumber"
                      placeholder="Ваш телефон"
                      aria-label="Ваш телефон"
                      required
                    />
                  </div>
                  <div className="site-footer__position-submit-flex">
                    <p className="site-footer__position-submit-desc">
                      Нажимая на кнопку, я соглашаюсь &nbsp;&nbsp;&nbsp;&nbsp;
                      на обработку персональных данных &nbsp;&nbsp;&nbsp;&nbsp;
                      и с правилами пользования Платформой
                    </p>
                    <button className="site-footer__position-submit-btn">
                      Отправить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="site-footer__wrapper">
            <div className="site-footer__start">
              <img
                className="site-footer__logo"
                src={whiteLogo}
                alt="site logo"
                width={83}
                height={58.64}
              />
              <div className="site-footer__contact-flex">
                <a className="site-footer__contact-tel" href="tel:+98009503398">
                  8 800 950-33-98
                </a>
                <address className="site-footer__contact-address">
                  г. Москва, ул. Ленина, д. 50
                </address>
                <a
                  className="site-footer__contact-email"
                  href="mailto:info@hodfutureacademy.ru"
                >
                  info@hodfutureacademy.ru
                </a>
              </div>
              <div className="site-footer__social-network">
                <a href="#link" className="site-footer__social-link">
                  <img
                    src={wIcon}
                    alt="W"
                    className="site-footer__social-imgs"
                  />
                </a>
                <a href="#link" className="site-footer__social-link">
                  <img
                    src={instagram}
                    alt="Instagram icon"
                    className="site-footer__social-imgs"
                  />
                </a>
                <a href="#link" className="site-footer__social-link">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="site-footer__social-imgs"
                  />
                </a>
                <a href="#link" className="site-footer__social-link">
                  <img
                    src={youtube}
                    alt="YouTube"
                    className="site-footer__social-imgs"
                  />
                </a>
                <a href="#link" className="site-footer__social-link">
                  <img
                    src={telegram}
                    alt={telegram}
                    className="site-footer__social-imgs"
                  />
                </a>
              </div>
              <span className="site-footer__copyright">
                © ХОД, Future Academy
              </span>
            </div>
            <ul className="site-footer__list">
              <li style={{ maxWidth: "150px" }} className="site-footer__item">
                <h3 className="site-footer__item-title">Детям</h3>
                <a href="#link" className="site-footer__link">
                  Робототехника
                </a>
                <a href="#link" className="site-footer__link">
                  Создание игр
                </a>
                <a href="#link" className="site-footer__link">
                  Программирование
                </a>
                <a href="#link" className="site-footer__link">
                  Мультимедиа
                </a>
                <a href="#link" className="site-footer__link">
                  Soft skills
                </a>
                <a href="#link" className="site-footer__link">
                  Шахматы
                </a>
                <a href="#link" className="site-footer__link">
                  Блогинг
                </a>
                <a href="#link" className="site-footer__link">
                  Создание игр
                </a>
                <a href="#link" className="site-footer__link">
                  Программирование
                </a>
                <a href="#link" className="site-footer__link">
                  Мультимедиа
                </a>
                <a href="#link" className="site-footer__link">
                  Soft skills
                </a>
              </li>
              <li style={{ maxWidth: "267px" }} className="site-footer__item">
                <h3 className="site-footer__item-title">Подросткам</h3>
                <a href="#link" className="site-footer__link">
                  Web-разработка
                </a>
                <a href="#link" className="site-footer__link">
                  Прикладное программирование
                </a>
                <a href="#link" className="site-footer__link">
                  Графическое моделирование
                </a>
                <a href="#link" className="site-footer__link">
                  Game Development
                </a>
                <a href="#link" className="site-footer__link">
                  Soft skills
                </a>
                <a href="#link" className="site-footer__link">
                  Разработчик мобильных приложений
                </a>
                <a href="#link" className="site-footer__link">
                  Блогинг
                </a>
                <a href="#link" className="site-footer__link">
                  Создание игр
                </a>
                <a href="#link" className="site-footer__link">
                  Программирование
                </a>
                <a href="#link" className="site-footer__link">
                  Мультимедиа
                </a>
                <a href="#link" className="site-footer__link">
                  Soft skills
                </a>
              </li>
              <li style={{ maxWidth: "186px" }} className="site-footer__item">
                <h3 className="site-footer__item-title">Взрослым</h3>
                <a href="#link" className="site-footer__link">
                  Разработчик игр на Unity
                </a>
                <a href="#link" className="site-footer__link">
                  Разработка ПО
                </a>
                <a href="#link" className="site-footer__link">
                  Графический Дизайн
                </a>
                <a href="#link" className="site-footer__link">
                  Тестировщик ПО
                </a>
                <a href="#link" className="site-footer__link">
                  Интернет Маркетинг
                </a>
                <a href="#link" className="site-footer__link">
                  Java-разработчик
                </a>
                <a href="#link" className="site-footer__link">
                  Python–разработчик
                </a>
                <a href="#link" className="site-footer__link">
                  IOS-разработчик
                </a>
                <a href="#link" className="site-footer__link">
                  Программирование
                </a>
              </li>
              <li style={{ maxWidth: "103px" }} className="site-footer__item">
                <h3 className="site-footer__item-title">Информация</h3>
                <a href="#link" className="site-footer__link">
                  Об академии
                </a>
                <a href="#linl" className="site-footer__link">
                  Мероприятия
                </a>
                <a href="#link" className="site-footer__link">
                  Новости
                </a>
                <a href="#link" className="site-footer__link">
                  База знаний
                </a>
                <a href="#link" className="site-footer__link">
                  Карьера
                </a>
                <a href="#link" className="site-footer__link">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
