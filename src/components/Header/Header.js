import React, { useState } from 'react';
import './Header.css';
import logoPath from '../../images/logo.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <button
          className="header__btn header__btn_grade_secondary"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Закрыть' : 'Контакты'}
        </button>

      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="header__menu">
          <p className="header__menu-tagline">
            Оператор международных банковских расчётов для бизнеса
          </p>
          <a href="mailto:help@pay-tech.ru" className="header__menu-email">
            help@pay-tech.ru
          </a>
          <div className="header__menu-phone-block">
            <a href="tel:+74955320546" className="header__menu-phone">
              8 495 532 05 46
            </a>
            <span className="header__menu-hours">09:00 – 18:00 мск</span>
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;
