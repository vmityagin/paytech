import React from 'react';
import './Header.css';
import logoPath from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">

        {/* Левый блок: лого + слоган */}
        <div className="header__logo-block">
          <a href="/" className="header__logo-link" aria-label="Pay-tech — на главную">
            <img
              className="header__logo-img"
              src={logoPath}
              alt="Pay-tech"
            />
          </a>
          <div className="header__divider" aria-hidden="true"></div>
          <p className="header__tagline">
            Оператор международных<br />банковских расчётов для бизнеса
          </p>
        </div>

        {/* Правый блок: контакты + кнопка (только desktop) */}
        <div className="header__contacts">
          <a href="mailto:help@pay-tech.ru" className="header__email">
            help@pay-tech.ru
          </a>
          <div className="header__divider" aria-hidden="true"></div>
          <div className="header__phone-block">
            <a href="tel:+74955320546" className="header__phone">
              8 495 532 05 46
            </a>
            <span className="header__phone-hours">09:00 – 18:00 мск</span>
          </div>
          <div className="header__divider" aria-hidden="true"></div>
          <button className="header__btn header__btn_grade_primary" type="button">
            Оставить заявку
          </button>
        </div>

        {/* Кнопка «Контакты» (только tablet и mobile) */}
        <button className="header__btn header__btn_grade_secondary" type="button">
          Контакты
        </button>

      </div>
    </header>
  );
}

export default Header;
