import React from 'react';
import './Pricing.css';
import cachedIcon from '../../images/cached.svg';
import workloadIcon from '../../images/assured_workload.svg';
import percentIcon from '../../images/percent.svg';
import infoIcon from '../../images/info.svg';

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing__inner">

        <div className="pricing__info">
          <h2 className="pricing__title">
            Вы платите банку<br />за банковский перевод<br />без посредников
          </h2>
          <p className="pricing__subtitle">
            Стоимость перевода складывается из трёх понятных элементов
          </p>
        </div>

        <ul className="pricing__list">

          <li className="pricing__item">
            <img className="pricing__item-icon" src={cachedIcon} alt="" />
            <h3 className="pricing__item-title">Конвертация валюты</h3>
          </li>

          <li className="pricing__item">
            <img className="pricing__item-icon" src={workloadIcon} alt="" />
            <h3 className="pricing__item-title">Валютный контроль</h3>
          </li>

          <li className="pricing__item">
            <img className="pricing__item-icon" src={percentIcon} alt="" />
            <h3 className="pricing__item-title">Банковская комиссия</h3>
          </li>

          <li className="pricing__item pricing__item_type_summary">
            <img className="pricing__item-icon" src={infoIcon} alt="" />
            <p className="pricing__item-text">
              Итоговая стоимость перевода обычно укладывается
              в диапазон 0,5% - 1,5% от суммы операции
            </p>
            <p className="pricing__item-note">
              В зависимости от направления и объёма
            </p>
          </li>

        </ul>

      </div>
    </section>
  );
}

export default Pricing;
