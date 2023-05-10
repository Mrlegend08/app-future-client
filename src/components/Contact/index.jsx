import React from "react";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import longArrow from "../../assets/icons/longarrow.svg";
import location from "../../assets/icons/locationLinear.svg";
import linearW from "../../assets/icons/linearW.svg";
import linearInsta from "../../assets/icons/linearInsta.svg";
import linearFacebook from "../../assets/icons/linearFacebook.svg";
import linearYoutube from "../../assets/icons/linearYoutube.svg";
import linearTg from "../../assets/icons/linearTg.svg";
import yandex from "../../assets/images/yandexImg.png";
import map from "../../assets/images/map.png"
import "./index.scss"
const Contact = () => {
  return (
    <>
      <main className="site-main">
        <section className="contact-section">
          <div className="container">
            <div className="contact-section__wrapper">
              <div className="mepo-section__where">
                Главная
                <img src={longArrow} alt="Right Arrow" />
                Новости
              </div>
              <h1 className="mepo-section__title">Контакты</h1>
              <div className="contact-section__flex">
                <div className="contact-section__flex-star">
                  <div className="contact-section__flex-item">
                    <img src={phone} alt="Phone" width={16} height={23.94} />
                    <a
                      className="contact-section__flex-text"
                      href="tel:+88009503398"
                    >
                      8 800 950-33-98{" "}
                    </a>
                  </div>
                  <div className="contact-section__flex-item">
                    <img src={mail} alt="Mail" width={23} height={16.94} />
                    <a
                      className="contact-section__flex-desc"
                      href="mailto:info@hodfutureacademy.ru"
                    >
                      info@hodfutureacademy.ru
                    </a>
                  </div>
                  <div
                    style={{ marginBottom: "68.5px" }}
                    className="contact-section__flex-item"
                  >
                    <img src={location} alt="Location" width={21} height={26} />
                    <address className="contact-section__flex-desc">
                      г. Москва, ул. Ленина, д. 50
                    </address>
                  </div>
                  <div
                    style={{ marginBottom: "14.54px" }}
                    className="register-section__social-flex"
                  >
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
                  <img src={yandex} alt="yandex img" />
                </div>
                <img src={map} alt="Map" width={882} height={410} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
