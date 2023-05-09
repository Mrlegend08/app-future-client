import React from "react";
import lesson from "../../../assets/images/lesson.png";
import kindergarden from "../../../assets/images/kindergarden.png";
import compony from "../../../assets/images/compony.png";
import { Swiper, SwiperSlide } from "swiper/react";
import coworking from "../../../assets/images/coworiking.png";
import marketing from "../../../assets/images/marketing.png";

import "swiper/css";
import "./index.scss";
import qizlardiOrash from "../../../assets/images/qizorash.png";
const MoreSliderSection = () => {
  const imgs = [
    lesson,
    kindergarden,
    compony,
    coworking,
    marketing,
    qizlardiOrash,
    lesson,
    compony,
  ];
  const slideGenerator = imgs.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <img className="academy-section__img" src={item} alt="Rasm" />
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className="more-section-slider">
        <div className="container">
          <div className="academy-section__wrapper-top">
            <h2 className="academy-section__title">
              Фотографии с прошлых мероприятий
            </h2>
            <p
              style={{ marginBottom: "40px" }}
              className="academy-section__desc"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
              elit, egestas ut feugiat id, laoreet volutpat risus. Cras
              condimentum, ligula eget varius eleifend, massa nibh imperdiet
              est, vel sagittis quam justo.
            </p>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ marginBottom: "123px" }}
        >
          {slideGenerator}
        </Swiper>
      </section>
    </>
  );
};

export default MoreSliderSection;
