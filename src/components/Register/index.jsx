import React from "react";
import linearW from "../../assets/icons/linearW.svg";
import linearInsta from "../../assets/icons/linearInsta.svg";
import linearFacebook from "../../assets/icons/linearFacebook.svg";
import linearYoutube from "../../assets/icons/linearYoutube.svg";
import linearTg from "../../assets/icons/linearTg.svg";
import "./index.scss";
const Register = () => {
  const [toggle, setToggle] = React.useState(0);
  const elItems = document.querySelectorAll(".register-section__title");
  const handleToggle = () => {
    elItems.forEach((item, index) => {
      if (index === toggle) {
        item.classList.add("register-section__title-toggle");
      } else {
        item.classList.remove("register-section__title-toggle");
      }
    });
  };
  handleToggle();
  return (
    <>
      <main className="site-main">
        <section className="register-section">
          <div className="container">
            <div className="register-section__wrapper">
              <div className="register-section__choose ">
                <span
                  onClick={() => setToggle(0)}
                  className="register-section__title register-section__title-toggle"
                >
                  Вход
                </span>
                <span
                  onClick={() => setToggle(1)}
                  className="register-section__title"
                >
                  Регистрация
                </span>
              </div>
              <form className="register-section__form">
                <input
                  className="register-section__input"
                  type="text"
                  placeholder="Поле ввода"
                  aria-label="Поле ввода"
                  required
                />
                <input
                  className="register-section__input"
                  type="text"
                  placeholder="Поле ввода"
                  aria-label="Поле ввода"
                  required
                />
                <input
                  className="register-section__input"
                  type="text"
                  placeholder="Поле ввода"
                  aria-label="Поле ввода"
                  required
                />
                <span className="register-section__form-title">
                  Войти с помощью соцсетей:
                </span>
                <div className="register-section__social-flex">
                  <a className="register-section__social-link" href="#link">
                    <img
                      className="register-section__social-img"
                      src={linearW}
                      alt="W icom"
                    />
                  </a>
                  <a className="register-section__social-link" href="#link">
                    <img
                      className="register-section__social-img"
                      src={linearInsta}
                      alt="Instagram icon"
                    />
                  </a>
                  <a className="register-section__social-link" href="#link">
                    <img
                      className="register-section__social-img"
                      src={linearFacebook}
                      alt="Facebook icon"
                    />
                  </a>
                  <a className="register-section__social-link" href="#link">
                    <img
                      className="register-section__social-img"
                      src={linearYoutube}
                      alt="YouTube icom"
                    />
                  </a>
                  <a className="register-section__social-link" href="#link">
                    <img
                      className="register-section__social-img"
                      src={linearTg}
                      alt="Telegram icom"
                    />
                  </a>
                </div>

                <button className="register-section__btn">Войти</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
