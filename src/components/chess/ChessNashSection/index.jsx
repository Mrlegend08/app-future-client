import React from "react";
import holali from "../../../assets/images/hola-lin.png";
import brat from "../../../assets/images/bratlin.png";
import hola2 from "../../../assets/images/hola2lin.png";
import okaxon from "../../../assets/images/okaxonli.png";

import "./index.scss";
const ChessNashSection = () => {
  const imgs = [holali, brat, hola2, okaxon];
  const cardGene = imgs.map((item, index) => {
    return (
      <div key={index} className="nash-section__card">
        <img
          className="nash-section__card-img"
          src={item}
          alt="User imgs"
          width={140}
          height={140}
        />
        <h3 className="nash-section__card-title">Имя Фамилия</h3>
        <p className="nash-section__card-desc">
          Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и
          участвует в турнирах.
        </p>
      </div>
    );
  });
  return (
    <>
      <section className="nash-section">
        <div className="container">
          <div className="otviz-section__wrapper">
            <h1 className="otviz-section__title">Наши преподаватели</h1>
            <div className="nash-section__flex d-flex align-items-center">{cardGene}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChessNashSection;
