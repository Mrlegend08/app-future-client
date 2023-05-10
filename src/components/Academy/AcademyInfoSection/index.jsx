import React from "react";
import bird from "../../../assets/images/academy-bird.png";
import moreX from "../../../assets/images/mepo-x.png";
import moreO from "../../../assets/images/mepo-o.png";
import moreTriangly from "../../../assets/images/mepo-triangly.png";
import academyVideo from "../../../assets/images/academy-boy.png";
import okaxon from "../../../assets/images/academy-programmer.png";
import nastroyka from "../../../assets/images/academy-nastroy.png";
import doctor from "../../../assets/images/academy-doctor.png";
import children from "../../../assets/images/academy-children.png";
import book from "../../../assets/images/academy-book.png";
import teacher from "../../../assets/images/academy-teacher.png";
import "./index.scss";
const AcademInfoSection = () => {
  return (
    <>
      <section className="academy-info-section">
        <div className="container">
          <div className="academy-info-section__wrapper">
            <ul className="academy-info-section__list">
              <img
                className="academy-info-section__bird"
                src={bird}
                alt="Qush"
                width={300}
                height={353}
              />
              <li className="academy-info-section__item">
                <img
                  className="academy-info-section__item-img"
                  src={moreX}
                  alt="Img"
                  width={32}
                  height={32}
                />
                <h3 className="academy-info-section__item-title">
                  Мы создали Академию
                </h3>
                <p className="academy-info-section__item-desc">
                  для детей, чтобы компьютер был не зависимостью и игрушкой, а
                  другом на пути обучения и развития.
                </p>
              </li>
              <li className="academy-info-section__item">
                <img
                  className="academy-info-section__item-img"
                  src={moreO}
                  alt="Img"
                  width={32}
                  height={32}
                />
                <h3 className="academy-info-section__item-title">
                  Мы создали Академию
                </h3>
                <p className="academy-info-section__item-desc">
                  для подростков, чтобы «Кем я хочу стать?» больше не был самым
                  сложным вопросом.
                </p>
              </li>
              <li className="academy-info-section__item">
                <img
                  className="academy-info-section__item-img"
                  src={moreTriangly}
                  alt="Img"
                  width={38}
                  height={31}
                />
                <h3 className="academy-info-section__item-title">
                  Мы создали Академию
                </h3>
                <p className="academy-info-section__item-desc">
                  для взрослых, чтобы у них была возможность начать с читатого
                  листа и создать лучшую версию себя в любом возрасте.
                </p>
              </li>
            </ul>
            <div className="academy-info-section__img-box">
              <img
                className="academy-info-section__img"
                src={academyVideo}
                alt="Boy"
                width={780}
                height={436}
              />
            </div>
            <div className="academy-info-section__flex">
              <div className="academy-info-section__flex-start">
                <img
                  className="academy-info-section__flex-img"
                  src={okaxon}
                  alt="Okaxon"
                  width={380}
                  height={400}
                />
                <div className="d-flex align-align-items-start flex-column">
                  {" "}
                  <p className="academy-info-section__flex-desc">
                    «Все началось с любви к шахматам. Я хотел предвидеть ход
                    противника, хотел просчитать его действия, хотел побеждать.
                    Я не стал гением шахмат, но стратег и психолог из меня
                    неплохой» - смеется Иван Иванович. Идея открыть Академию
                    шахмат пришла к нему в 2020 году, когда в период полного
                    локдауна он вдруг вспомнил про хобби - игру в шахматы.
                    Оказалось, что для игры в шахматы сейчас и доска-то не
                    обязательна, все есть в телефоне. Племянник (сын?) Ивана
                    Ивановича большую часть дня проводил в стрелялках на
                    планшете. «Я показал ему шахматы. К июню он уже был неплохим
                    соперником» - Вскоре идея небольшой академии шахмат
                    превратилась в план создания Академии Будущего, где дети
                    смогут учиться тому, что им нравится, а взрослые попытаются
                    изменить жизнь. Уж очень это сейчас актуально".
                  </p>
                  <span className="academy-info-section__flex-gap">
                    Из интервью с основателем Академии Будущего Ивановым И.И.
                  </span>
                </div>
              </div>
              <h3 className="academy-info-section__flex-title">Имя Фамилия</h3>
              <span className="academy-info-section__flex-text">
                Основатель Академии будущего ХОД
              </span>
            </div>
            <h2 className="academy-info-section__real-title">Наши ценности</h2>
            <ul className="academy-info-section__bottom-list">
              <li className="academy-info-section__bottom-item">
                <img
                  className="academy-info-section__bottom-item-img"
                  src={nastroyka}
                  alt="img"
                />
                <p className="academy-info-section__bottom-item-desc">
                  Содержание обучения должно быть актуальным, а методика
                  проверенная годами.
                </p>
              </li>
              <li className="academy-info-section__bottom-item">
                <img
                  className="academy-info-section__bottom-item-img"
                  src={doctor}
                  alt="img"
                />
                <p className="academy-info-section__bottom-item-desc">
                  Педагог - прежде всего личность компетентная и харизматичная.
                </p>
              </li>
              <li className="academy-info-section__bottom-item">
                <img
                  className="academy-info-section__bottom-item-img"
                  src={children}
                  alt="img"
                />
                <p className="academy-info-section__bottom-item-desc">
                  Точка развития образования - ребенок, его интересы и
                  потребности
                </p>
              </li>
              <li className="academy-info-section__bottom-item">
                <img
                  className="academy-info-section__bottom-item-img"
                  src={book}
                  alt="img"
                />
                <p className="academy-info-section__bottom-item-desc">
                  Прогрессом правит любовь к знаниям
                </p>
              </li>
              <li className="academy-info-section__bottom-item">
                <img
                  className="academy-info-section__bottom-item-img"
                  src={teacher}
                  alt="img"
                />
                <p className="academy-info-section__bottom-item-desc">
                  Технологии правят миром, а человек эти технологии создает
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademInfoSection;
