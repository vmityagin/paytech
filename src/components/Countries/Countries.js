import React from 'react';
import './Countries.css';
import chinaFlag from '../../images/china 2.svg';
import brazilFlag from '../../images/brazil.svg';
import kazakhstanFlag from '../../images/kazakhstan.svg';
import armeniaFlag from '../../images/armenia.svg';
import uzbekistanFlag from '../../images/uzbekistan.svg';
import tajikistanFlag from '../../images/tajikistan.svg';
import belarusFlag from '../../images/belarus.svg';
import kyrgyzstanFlag from '../../images/kyrgyzstan.svg';

function Countries() {
  return (
    <section className="countries">
      <div className="countries__inner">
        <p className="countries__label">Доступны переводы для</p>
        <ul className="countries__list">
          <li className="countries__item">
            <img className="countries__item-flag" src={chinaFlag} alt="" />
            <span className="countries__item-name">Китай</span>
          </li>
          <li className="countries__item">
            <img className="countries__item-flag" src={brazilFlag} alt="" />
            <span className="countries__item-name">Бразилия</span>
          </li>
          <li className="countries__item">
            <img className="countries__item-flag" src={kazakhstanFlag} alt="" />
            <span className="countries__item-name">Казахстан</span>
          </li>
          <li className="countries__item">
            <img className="countries__item-flag" src={armeniaFlag} alt="" />
            <span className="countries__item-name">Армения</span>
          </li>
          <li className="countries__item">
            <img className="countries__item-flag" src={uzbekistanFlag} alt="" />
            <span className="countries__item-name">Узбекистан</span>
          </li>
          <li className="countries__item">
            <img className="countries__item-flag" src={tajikistanFlag} alt="" />
            <span className="countries__item-name">Таджикистан</span>
          </li>
          <li className="countries__item">
            <img className="countries__item-flag" src={belarusFlag} alt="" />
            <span className="countries__item-name">Беларусь</span>
          </li>
          <li className="countries__item">
            <img className="countries__item-flag" src={kyrgyzstanFlag} alt="" />
            <span className="countries__item-name">Киргизия</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Countries;
