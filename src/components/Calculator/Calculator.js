import React, { useState, useEffect } from 'react';
import './Calculator.css';
import chinaFlag from '../../images/china 2.svg';
import russiaFlag from '../../images/russia.svg';
import infoIcon from '../../images/features__item-hint.svg';
import brazilFlag from '../../images/brazil.svg';
import kazakhstanFlag from '../../images/kazakhstan.svg';
import armeniaFlag from '../../images/armenia.svg';
import uzbekistanFlag from '../../images/uzbekistan.svg';
import tajikistanFlag from '../../images/tajikistan.svg';
import belarusFlag from '../../images/belarus.svg';
import kyrgyzstanFlag from '../../images/kyrgyzstan.svg';

const COUNTRIES = [
  { flag: chinaFlag, name: 'Китай' },
  { flag: brazilFlag, name: 'Бразилия' },
  { flag: kazakhstanFlag, name: 'Казахстан' },
  { flag: armeniaFlag, name: 'Армения' },
  { flag: uzbekistanFlag, name: 'Узбекистан' },
  { flag: tajikistanFlag, name: 'Таджикистан' },
  { flag: belarusFlag, name: 'Беларусь' },
  { flag: kyrgyzstanFlag, name: 'Кыргызстан' },
];

function Calculator() {
  const [activeTab, setActiveTab] = useState('pay');
  const [countryPickerOpen, setCountryPickerOpen] = useState(false);

  useEffect(() => {
    if (countryPickerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [countryPickerOpen]);

  function openCountryPicker() {
    setCountryPickerOpen(true);
  }

  function closeCountryPicker() {
    setCountryPickerOpen(false);
  }

  return (
    <section className="calculator">
      <div className="calculator__inner">

        <h2 className="calculator__heading">
          Рассчитайте стоимость<br />международного перевода
        </h2>

        <div className="calculator__content">

          <div className="calculator__form">

            <div className="calculator__tabs">
              <button
                className={`calculator__tab${activeTab === 'pay' ? ' calculator__tab_active' : ''}`}
                type="button"
                onClick={() => setActiveTab('pay')}
              >
                <span className="calculator__tab-title">Оплатить поставщику</span>
                <span className="calculator__tab-desc">
                  Перевести деньги из России в другую страну
                </span>
              </button>
              <button
                className={`calculator__tab${activeTab === 'receive' ? ' calculator__tab_active' : ''}`}
                type="button"
                onClick={() => setActiveTab('receive')}
              >
                <span className="calculator__tab-title">Получить перевод</span>
                <span className="calculator__tab-desc">
                  Получить деньги из другой страны на свой счёт
                </span>
              </button>
            </div>

            <div className="calculator__fieldset">
              <p className="calculator__fieldset-label">Детали перевода</p>

              <div
                className="calculator__field calculator__field_type_select"
                onClick={openCountryPicker}
              >
                <img
                  className="calculator__field-flag"
                  src={chinaFlag}
                  alt=""
                />
                <div className="calculator__field-text">
                  <span className="calculator__field-label">{activeTab === 'pay' ? 'Куда' : 'Откуда'}</span>
                  <span className="calculator__field-value">Китай</span>
                </div>
                <span className="calculator__field-chevron" aria-hidden="true"></span>
              </div>

              <div className="calculator__field">
                <div className="calculator__field-text">
                  <label className="calculator__field-label" htmlFor="calc-amount">Сумма перевода, ¥</label>
                  <input className="calculator__field-input" id="calc-amount" type="text" defaultValue="10 000" />
                </div>
              </div>
            </div>

            <div className="calculator__fieldset">
              <p className="calculator__fieldset-label">Контакты</p>

              <div className="calculator__field">
                <img
                  className="calculator__field-flag"
                  src={russiaFlag}
                  alt=""
                />
                <div className="calculator__field-text">
                  <input className="calculator__field-input calculator__field-input_placeholder" id="calc-phone" type="tel" placeholder="Номер телефона" />
                </div>
              </div>
            </div>

            <p className="calculator__disclaimer">
              При вводе номера телефона вы соглашаетесь{' '}
              <a className="calculator__disclaimer-link" href="#">с условиями</a>
            </p>

          </div>

          <div className="calculator__panel">
            <h3 className="calculator__panel-title">Стоимость перевода</h3>

            <ul className="calculator__panel-rows">
              <li className="calculator__panel-row">
                <span className="calculator__panel-row-label">Платёж в валюте</span>
                <span className="calculator__panel-row-value">10 000 ¥</span>
              </li>
              <li className="calculator__panel-row">
                <span className="calculator__panel-row-label">
                  Платёж в рублях
                  <img
                    className="calculator__panel-row-hint"
                    src={infoIcon}
                    alt="Подробнее"
                  />
                </span>
                <span className="calculator__panel-row-value">114 600 ₽</span>
              </li>
              <li className="calculator__panel-row">
                <span className="calculator__panel-row-label">Комиссия от 0,5%</span>
                <span className="calculator__panel-row-value">5 730 ₽</span>
              </li>
            </ul>

            <hr className="calculator__panel-divider" />

            <div className="calculator__panel-total">
              <span className="calculator__panel-total-label">
                Итоговая стоимость
                <img
                  className="calculator__panel-total-hint"
                  src={infoIcon}
                  alt="Подробнее"
                />
              </span>
              <span className="calculator__panel-total-value">от 120 330 ₽</span>
            </div>

            <button className="calculator__submit" type="button">
              Оставить заявку
            </button>
          </div>

        </div>
      </div>

      {/* Backdrop */}
      {countryPickerOpen && (
        <div
          className="calculator__backdrop"
          onClick={closeCountryPicker}
          aria-hidden="true"
        />
      )}

      {/* Country picker panel */}
      {countryPickerOpen && (
        <div className="calculator__picker" role="dialog" aria-modal="true">
          <div className="calculator__picker-header">
            <h3 className="calculator__picker-title">
              {activeTab === 'pay' ? 'Куда перевести деньги' : 'Откуда перевести деньги'}
            </h3>
            <button
              className="calculator__picker-close"
              type="button"
              onClick={closeCountryPicker}
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>
          <ul className="calculator__picker-list">
            {COUNTRIES.map(({ flag, name }) => (
              <li key={name} className="calculator__picker-item">
                <img className="calculator__picker-flag" src={flag} alt="" />
                <span className="calculator__picker-name">{name}</span>
                <span className="calculator__picker-arrow" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      )}

    </section>
  );
}

export default Calculator;
