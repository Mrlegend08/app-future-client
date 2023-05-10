import React from "react";
import holali from "../../../assets/images/hola-lin.png";
import brat from "../../../assets/images/bratlin.png";
import hola2 from "../../../assets/images/hola2lin.png";
import okaxon from "../../../assets/images/okaxonli.png";
import jingalak from "../../../assets/images/jingalak.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const AcadameyNashSection = () => {
  const imgs = [holali, brat, hola2, okaxon, jingalak, holali, okaxon, brat];
  const cardGene = imgs.map((item, index) => {
    return (
      <SwiperSlide key={index} className="nash-section__card">
        <img
          className="nash-section__card-img"
          src={item}
          alt="User imgs"
          width={140}
          height={140}
        />
        <h3 className="nash-section__card-title">Имя Фамилия</h3>
        <p className="nash-section__card-desc">
          Выпускница Гарвардского
          <span style={{ display: "block" }}>Университета.</span>
          Более 10 лет играет в шахматы и участ вует в турнирах.
        </p>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className="nash-section">
        <div className="container">
          <div className="otviz-section__wrapper">
            <h1 className="otviz-section__title">Наши преподаватели</h1>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ marginLeft: "370px" }}
          className="nash-section__flex d-flex align-items-center"
        >
          {cardGene}
        </Swiper>
      </section>
    </>
  );
};

export default AcadameyNashSection;
