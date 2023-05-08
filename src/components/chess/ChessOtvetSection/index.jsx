import React from "react";

import plus from "../../../assets/images/add.png";
import x from "../../../assets/images/x.png";
import "./index.scss";
const ChessOtvetSection = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  return (
    <>
      <section className="otvet-section">
        <div className="container">
          <div className="otvet-section__wrapper">
            <h2 className="otvet-section__title">
              Найдите ответ на свой вопрос
            </h2>
            <div className="otvet-section__details-flex">
              <details className="otvet-section__details">
                <summary
                  onClick={() => setOpen(!open)}
                  className="otvet-section__summary"
                >
                  Кому подойдёт это курс?
                  <img
                    className="otvet-section__summery-img"
                    src={open ? x : plus}
                    alt="Plus"
                  />
                </summary>
                <p className="otvet-section__desc">
                  А Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam dignissim, neque sit amet aliquam cursus, ante urna
                  porta mauris, eget venenatis risus turpis ac nisl. Aenean
                  blandit, nulla tincidunt efficitur placerat, ante nisl auctor
                  ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet
                  metus, non semper dui. Phasellus pellentesque vitae leo in
                  dapibus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Suspendisse id aliquam
                  nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien
                  ultricies leo, sit amet placerat arcu sem id sem.
                </p>
              </details>
              <details className="otvet-section__details">
                <summary
                  onClick={() => setOpen2(!open2)}
                  className="otvet-section__summary"
                >
                  Что нужно ребенку для занятий?
                  <img
                    className="otvet-section__summery-img"
                    src={open2 ? x : plus}
                    alt="Plus"
                  />
                </summary>
                <p className="otvet-section__desc">
                  А Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam dignissim, neque sit amet aliquam cursus, ante urna
                  porta mauris, eget venenatis risus turpis ac nisl. Aenean
                  blandit, nulla tincidunt efficitur placerat, ante nisl auctor
                  ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet
                  metus, non semper dui. Phasellus pellentesque vitae leo in
                  dapibus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Suspendisse id aliquam
                  nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien
                  ultricies leo, sit amet placerat arcu sem id sem.
                </p>
              </details>
              <details className="otvet-section__details">
                <summary
                  onClick={() => setOpen3(!open3)}
                  className="otvet-section__summary"
                >
                  Где можно узнать расписание занятий?
                  <img
                    className="otvet-section__summery-img"
                    src={open3 ? x : plus}
                    alt="Plus"
                  />
                </summary>
                <p className="otvet-section__desc">
                  А Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam dignissim, neque sit amet aliquam cursus, ante urna
                  porta mauris, eget venenatis risus turpis ac nisl. Aenean
                  blandit, nulla tincidunt efficitur placerat, ante nisl auctor
                  ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet
                  metus, non semper dui. Phasellus pellentesque vitae leo in
                  dapibus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Suspendisse id aliquam
                  nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien
                  ultricies leo, sit amet placerat arcu sem id sem.
                </p>
              </details>
              <details className="otvet-section__details">
                <summary
                  onClick={() => setOpen4(!open4)}
                  className="otvet-section__summary"
                >
                  Что делать, если ребенок пропустит занятие?
                  <img
                    className="otvet-section__summery-img"
                    src={open4 ? x : plus}
                    alt="Plus"
                  />
                </summary>
                <p className="otvet-section__desc">
                  А Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam dignissim, neque sit amet aliquam cursus, ante urna
                  porta mauris, eget venenatis risus turpis ac nisl. Aenean
                  blandit, nulla tincidunt efficitur placerat, ante nisl auctor
                  ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet
                  metus, non semper dui. Phasellus pellentesque vitae leo in
                  dapibus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Suspendisse id aliquam
                  nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien
                  ultricies leo, sit amet placerat arcu sem id sem.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChessOtvetSection;
