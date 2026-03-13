import React from 'react';
import './Cta.css';
import phoneImg from '../../images/phone.png';

function Cta() {
  return (
    <section className="cta">
      <div className="cta__card">

        <div className="cta__content">
          <h2 className="cta__title">
            Предпочитаете обсудить<br />условия по телефону?
          </h2>
          <p className="cta__subtitle">
            Подберём удобный и надёжный маршрут перевода
          </p>
          <div className="cta__form">
            <input
              className="cta__input"
              type="tel"
              placeholder="Номер телефона"
            />
            <button className="cta__btn" type="button">
              Оставить заявку
            </button>
            <p className="cta__disclaimer">
              При вводе номера телефона вы соглашаетесь{' '}
              <a className="cta__disclaimer-link" href="#">с условиями</a>
            </p>
          </div>
        </div>

        <div className="cta__phone">
          <img
            className="cta__phone-img"
            src={phoneImg}
            alt=""
          />
        </div>

      </div>
    </section>
  );
}

export default Cta;
