import React from "react";
import kulguOpa from "../../../assets/images/lauhgWomen.png";
import seryozni from "../../../assets/images/seryozniOpa.png";
import hola from "../../../assets/images/hola.png";
import soch from "../../../assets/images/soch.png";
import semizro from "../../../assets/images/semizro.png";
import kozoyne from "../../../assets/images/kozoynak.png";
import yulduzcha from "../../../assets/images/star.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./index.scss";
const OtvizSection = () => {
  const imgs = [
    kulguOpa,
    seryozni,
    hola,
    soch,
    semizro,
    kozoyne,
    kulguOpa,
    seryozni,
    hola,
    soch,
    semizro,
    kozoyne,
  ];
  const slideGenerator = imgs.map((item, index) => {
    return (
      <SwiperSlide style={{width: "280px", marginBottom: "30px"}}>
        <div key={index} className="otviz-section__swiper">
          <div className="otviz-section__swiper-user">
            <img
              className="otviz-section__swiper-img"
              src={item}
              alt="User img"
              width={40}
              height={40}
            />
            <div className="otviz-section__user-info">
              <h3 className="otviz-section__user-title">Имя Фамилия</h3>
              <span className="otviz-section__user-desc">
                Студент курса «WEB-разработчик»
              </span>
            </div>
          </div>
          <p className="otviz-section__swiper-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            corporis reprehenderit cumque soluta dolor rerum sit ratione
            voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ex amet totam eos et laboriosam enim explicabo iure, dicta quo!
          </p>
          <div className="otviz-section__swiper-flex d-flex align-items-center">
            <img
              className="otviz-section__flex-img"
              src={yulduzcha}
              alt="Yulduz"
              width={21}
              height={21}
              style={{marginRight: "8px"}}
            />
            <span className="otviz-section__flex-rate">4,87 / 5</span>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <section className="otviz-section">
        <div className="otviz-section__wrapper">
          <h2 className="otviz-section__title">Отзывы наших студентов</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={6}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slideGenerator}
        </Swiper>
      </section>
    </>
  );
};

export default OtvizSection;
