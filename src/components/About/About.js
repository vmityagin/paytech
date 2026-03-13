import React from 'react';
import './About.css';
import phoneIcon from '../../images/phone_small.svg';
import bankIcon from '../../images/bank_aprove.svg';
import arrowIcon from '../../images/arrow_forward.svg';

function About() {
  return (
    <section className="about">
      <div className="about__inner">

        <div className="about__head">
          <h2 className="about__title">
            PayTech — финтех-платформа банковских переводов
          </h2>
          <p className="about__subtitle">
            Это не классический банк и не агентская цепочка
          </p>
        </div>

        <div className="about__flow">

          <div className="about__item">
            <img
              className="about__item-icon"
              src={phoneIcon}
              alt=""
            />
            <h3 className="about__item-title">Вы обращаетесь к нам</h3>
            <p className="about__item-desc">
              Мы уточняем детали и подбираем оптимального банковского партнёра
            </p>
          </div>

          <img
            className="about__arrow"
            src={arrowIcon}
            alt=""
            aria-hidden="true"
          />

          <div className="about__item">
            <img
              className="about__item-icon"
              src={bankIcon}
              alt=""
            />
            <h3 className="about__item-title">Банк исполняет платёж</h3>
            <p className="about__item-desc">
              Осуществляет конвертацию, проводит валютный контроль
              и несёт ответственность
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
