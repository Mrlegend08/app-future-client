import React from "react";
import logo from "../../assets/icons/logo.svg";
import location from "../../assets/icons/location.svg";
import totoparrow from "../../assets/icons/totoparrow.svg";
import tobottomarrow from "../../assets/icons/tobottomarrow.svg";
import user from "../../assets/icons/user.svg";
import miniburger from "../../assets/icons/mini-burger.svg";
import "./index.scss";
const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__wrapper d-flex align-items-center justify-content-between">
            <div className="site-header__start d-flex align-items-center">
              <a className="site-header__logo-link" href="#link">
                <img
                  className="site-header__logo-img"
                  src={logo}
                  alt="Site Logo"
                  width={"100"}
                  height={"70.65"}
                />
              </a>
              <nav className="site-header__navbar">
                <ul className="site-header__list d-flex align-items-center">
                  <li className="site-header__item d-flex align-items-center">
                    <img
                      width={20}
                      height={15}
                      src={miniburger}
                      alt="Miniburger"
                      style={{ marginRight: "6px" }}
                    />
                    <a href="#link" className="site-header__link">
                      Все курсы
                    </a>
                  </li>
                  <li className="site-header__item">
                    <a href="#link" className="site-header__link">
                      Мероприятия
                    </a>
                  </li>
                  <li className="site-header__item">
                    <a href="#link" className="site-header__link">
                      Базы знаний
                    </a>
                  </li>
                  <li className="site-header__item">
                    <a href="#link" className="site-header__link">
                      Карьера
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="site-header__end d-flex align-items-center">
              <div className="site-header__dropdown d-flex align-items-center">
                <img src={location} alt="Location img" /> Нижний Новгород
                <img src={tobottomarrow} alt="To bottom arrow" />
                <ul className="site-header__dropdown-list">
                  <li className="site-header__dropdown-item">
                    <input
                      className="site-header__dropdown-radio"
                      id="gorod1"
                      type="radio"
                      name="НижнийНовгород"
                    />

                    <label for="gorod1" className="site-header__dropdown-text">
                      Дзержинск
                      <span className="site-header__dropdown-radio-uncheck">
                        <span className="site-header__dropdown-radio-check"></span>
                      </span>
                    </label>
                  </li>
                  <li className="site-header__dropdown-item">
                    <input
                      className="site-header__dropdown-radio"
                      id="gorod2"
                      type="radio"
                      name="НижнийНовгород"
                    />
                    <label for="gorod2" className="site-header__dropdown-text">
                      Нижний Новгород
                      <span className="site-header__dropdown-radio-uncheck">
                        <span className="site-header__dropdown-radio-check"></span>
                      </span>
                    </label>
                  </li>
                  <li className="site-header__dropdown-item">
                    <input
                      className="site-header__dropdown-radio"
                      id="gorod3"
                      type="radio"
                      name="НижнийНовгород"
                    />
                    <label for="gorod3" className="site-header__dropdown-text">
                      On-line
                      <span className="site-header__dropdown-radio-uncheck">
                        <span className="site-header__dropdown-radio-check"></span>
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <a className="site-header__phone-number" href="tel:+88009503398">
                8 800 950-33-98
              </a>
              <button className="site-header__login d-flex align-items-center">
                <img src={user} alt="User img" /> Войти
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
