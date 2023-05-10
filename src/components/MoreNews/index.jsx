import React from "react";
import longArrow from "../../assets/icons/longarrow.svg";

import robot from "../../assets/images/robot.png";
import komp from "../../assets/images/komp.png";
import komplar from "../../assets/images/komplar.png";
import koca from "../../assets/images/streetboy.png";
import office from "../../assets/images/officekomp.png";
import kameraroom from "../../assets/images/kamera.png";
import "./index.scss"
const MoreNews = () => {
    
  const imgs = [robot, komp, komplar, koca, office, kameraroom];
  const number = localStorage.getItem("index")
  return (
    <>
      <main className="site-main">
        <section className="more-news-section">
          <div className="container">
            <div className="more-news-section__wrapper">
              <div className="mepo-section__where">
                Главная
                <img src={longArrow} alt="Right Arrow" />
                Новости
              </div>
              <h1
                style={{ marginBottom: "10px" }}
                className="mepo-section__title"
              >
                Заголовок новости
              </h1>
              <span className="more-news-section__data">16 ноября 2021</span>
              <p className="more-news-section__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget varius eleifend, massa nibh imperdiet
                est, vel sagittis quam justo vestibulum eros. Cras dignissim mi
                quis fringilla feugiat. Proin malesuada luctus diam, vitae
                faucibus dolor venenatis vel. In hac habitasse platea dictumst
              </p>
              <div className="more-news-section__img-block">
                <img
                  className="more-news-sectiona__img"
                  src={imgs[number]}
                  alt="Img"
                  width={780}
                  height={436}
                />
              </div>
              <p className="more-news-section__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget varius eleifend, massa nibh imperdiet
                est, vel sagittis quam justo vestibulum eros. Cras dignissim mi
                quis fringilla feugiat. Proin malesuada luctus diam, vitae
                faucibus dolor venenatis vel. In hac habitasse platea dictumst.
                Vestibulum tristique porta aliquam. Suspendisse blandit et
                sapien sit amet sagittis. Praesent tristique ante sed lacinia
                congue. Etiam egestas mauris at arcu gravida interdum. Aliquam
                feugiat risus lacus, ac rutrum dolor porttitor vitae. Etiam
                porta, nunc sit amet pellentesque posuere, risus nulla
                sollicitudin enim, commodo bibendum nulla lacus et lorem.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              <p className="more-news-section__info">
                Proin sit amet lorem consequat, elementum nibh vitae, congue
                quam. Nunc sapien sapien, commodo nec lorem a, elementum
                facilisis tortor. Sed porta ultrices orci, maximus tincidunt est
                sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros
                urna, gravida quis lorem at, facilisis pulvinar felis. In eget
                hendrerit ex, nec consequat orci. Suspendisse a est porta,
                fringilla ligula nec, ornare dolor. In tristique sagittis mauris
                dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a
                leo tincidunt, in commodo elit sollicitudin. Fusce consectetur
                nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est
                quis felis molestie dictum. Sed consequat malesuada quam, id
                malesuada augue euismod nec. Phasellus ultrices velit non
                venenatis sagittis.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MoreNews;
