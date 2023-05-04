import React from 'react'
import "./index.scss"
import bottomAbsolute from "../../../assets/images/hero-bottom.png"
import bottomRightAbsolute from "../../../assets/images/hero-oq.png"
const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section__background">
          <div className="container">
            <div className="hero-section__wrapper">
              <h1 className="hero-section__title">
                Образовательная платформа
                <span className="hero-section__subtitle">
                  ХОД Future Academy
                </span>
              </h1>
              <p className="hero-section__info">
                Актуальные знания для новичков и профессионалов
              </p>
              <img className='hero-section__bottom-abso' src={bottomAbsolute} alt="Bottom absolute img"  width={338} height={131}/>
              <img className='hero-section__right-abso' src={bottomRightAbsolute} alt="Bottom left absolute img"  width={126} height={266}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection
