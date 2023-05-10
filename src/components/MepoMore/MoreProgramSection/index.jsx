import React from "react";
import "./index.scss";

import bird from "../../../assets/images/mepo-bird.png";
import moreX from "../../../assets/images/mepo-x.png";
import moreO from "../../../assets/images/mepo-o.png";
import moreTriangly from "../../../assets/images/mepo-triangly.png";
import plus from "../../../assets/images/add.png";
import x from "../../../assets/images/x.png";
const MoreProgramSection = () => {
      const [open, setOpen] = React.useState(false);
      const [open2, setOpen2] = React.useState(false);
      const [open3, setOpen3] = React.useState(false);
  return (
    <>
      <section className="more-program-section">
        <div className="container">
          <div className="more-program-section__wrapper">
            <ul className="more-program-section__list">
              <img
                className="more-program-section__bird"
                src={bird}
                alt="bird"
                width={390}
                height={273}
              />
              <li className="more-program-section__item">
                <img
                  className="more-program-section__item-img"
                  src={moreX}
                  alt="More X"
                  width={32}
                  height={32}
                />
                <h3 className="more-program-section__item-title">Заголовок</h3>
                <p className="more-program-section__item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                  condimentum, ligula eget
                </p>
              </li>
              <li className="more-program-section__item">
                <img
                  className="more-program-section__item-img"
                  src={moreO}
                  alt="More O"
                  width={32}
                  height={32}
                />
                <h3 className="more-program-section__item-title">Заголовок</h3>
                <p className="more-program-section__item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                  condimentum, ligula eget
                </p>
              </li>
              <li className="more-program-section__item">
                <img
                  className="more-program-section__item-img"
                  src={moreTriangly}
                  alt="More Triangle"
                  width={38}
                  height={31}
                />
                <h3 className="more-program-section__item-title">Заголовок</h3>
                <p className="more-program-section__item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                  condimentum, ligula eget
                </p>
              </li>
            </ul>
            <div className="more-program-section__end">
              <h2 className="more-program-section__title">
                Программа мероприятия
              </h2>
              <p className="more-program-section__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget varius eleifend, massa nibh imperdiet
                est, vel sagittis quam justo vestibulum eros. Cras dignissim mi
                quis fringilla feugiat. Proin malesuada luctus diam, vitae
                faucibus dolor venenatis vel. In hac habitasse platea dictumst.
              </p>
              <div className="otvet-section__details-flex">
                <details className="otvet-section__details">
                  <summary
                    onClick={() => setOpen(!open)}
                    className="otvet-section__summary"
                  >
                    День первый
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
                    blandit, nulla tincidunt efficitur placerat, ante nisl
                    auctor ipsum, in auctor mauris lacus sed nibh. Quisque id
                    imperdiet metus, non semper dui. Phasellus pellentesque
                    vitae leo in dapibus. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Suspendisse id aliquam nunc. Sed dignissim, nibh quis
                    dapibus dapibus, ex sapien ultricies leo, sit amet placerat
                    arcu sem id sem.
                  </p>
                </details>
                <details className="otvet-section__details">
                  <summary
                    onClick={() => setOpen2(!open2)}
                    className="otvet-section__summary"
                  >
                    День второй
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
                    blandit, nulla tincidunt efficitur placerat, ante nisl
                    auctor ipsum, in auctor mauris lacus sed nibh. Quisque id
                    imperdiet metus, non semper dui. Phasellus pellentesque
                    vitae leo in dapibus. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Suspendisse id aliquam nunc. Sed dignissim, nibh quis
                    dapibus dapibus, ex sapien ultricies leo, sit amet placerat
                    arcu sem id sem.
                  </p>
                </details>
                <details className="otvet-section__details">
                  <summary
                    onClick={() => setOpen3(!open3)}
                    className="otvet-section__summary"
                  >
                    День третий
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
                    blandit, nulla tincidunt efficitur placerat, ante nisl
                    auctor ipsum, in auctor mauris lacus sed nibh. Quisque id
                    imperdiet metus, non semper dui. Phasellus pellentesque
                    vitae leo in dapibus. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Suspendisse id aliquam nunc. Sed dignissim, nibh quis
                    dapibus dapibus, ex sapien ultricies leo, sit amet placerat
                    arcu sem id sem.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreProgramSection;
