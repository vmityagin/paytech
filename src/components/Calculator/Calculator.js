import React, { useState, useEffect } from 'react';
import './Calculator.css';
import russiaFlag from '../../images/russia.svg';
import infoIcon from '../../images/features__item-hint.svg';
import Tooltip from '../Tooltip/Tooltip';
import { COUNTRIES, TOOLTIPS, CBR_RATE, BANK_MARKUP, COMMISSION_RATE } from '../../utils/constants';
import { buildPayload, submitToSheets } from '../../utils/api';

function Calculator() {
  const [activeTab, setActiveTab] = useState('pay');
  const [countryPickerOpen, setCountryPickerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [amountRaw, setAmountRaw] = useState('10000');
  const [amountError, setAmountError] = useState(false);
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const [phoneRaw, setPhoneRaw] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  function formatAmount(raw) {
    if (!raw) return '';
    return raw.replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
  }

  function handleAmountChange(e) {
    const digits = e.target.value.replace(/\D/g, '');
    setAmountRaw(digits);
    setAmountError(false);
  }

  function handleAmountBlur() {
    if (!amountRaw) {
      setAmountError(true);
    }
  }

  function formatPhoneDisplay(digits10) {
    let result = '+7 (';
    if (!digits10) return result;
    result += digits10.slice(0, 3);
    if (digits10.length > 3) result += ') ' + digits10.slice(3, 6);
    if (digits10.length > 6) result += '-' + digits10.slice(6, 8);
    if (digits10.length > 8) result += '-' + digits10.slice(8, 10);
    return result;
  }

  function handlePhoneFocus() {
    if (!phoneDisplay) {
      setPhoneDisplay('+7 (');
      setPhoneError('');
    }
  }

  function handlePhoneBlur() {
    if (!phoneDisplay || phoneDisplay === '+7 (') {
      setPhoneDisplay('');
      setPhoneError('empty');
    } else if (!phoneRaw) {
      setPhoneError('incomplete');
    } else {
      setPhoneError('');
    }
  }

  function handlePhoneChange(e) {
    setPhoneError('');
    const allDigits = e.target.value.replace(/\D/g, '');
    if (!allDigits) {
      setPhoneDisplay('+7 (');
      setPhoneRaw('');
      return;
    }
    const first = allDigits[0];
    let digits10;
    if (first === '7' || first === '8') {
      digits10 = allDigits.slice(1, 11);
    } else if (first === '9') {
      digits10 = allDigits.slice(0, 10);
    } else {
      setPhoneDisplay('+7 (');
      setPhoneRaw('');
      setPhoneError('Принимаем только российские номера');
      return;
    }
    setPhoneDisplay(formatPhoneDisplay(digits10));
    setPhoneRaw(digits10.length === 10 ? '+7' + digits10 : '');
  }

  function openCountryPicker() {
    setCountryPickerOpen(true);
  }

  function closeCountryPicker() {
    setCountryPickerOpen(false);
  }

  function selectCountry(country) {
    setSelectedCountry(country);
    setCountryPickerOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let valid = true;
    if (!amountRaw) { setAmountError(true); valid = false; }
    if (!phoneRaw) {
      setPhoneError(!phoneDisplay || phoneDisplay === '+7 (' ? 'empty' : 'incomplete');
      valid = false;
    }
    if (!valid) return;
    setIsSubmitting(true);
    try {
      await submitToSheets(buildPayload({
        type: activeTab,
        country: selectedCountry.name,
        currency: selectedCountry.currency,
        amount: amountRaw,
        phone: phoneRaw,
        amountRub: paymentRub,
        commission,
        total,
      }));
      setAmountRaw('10000');
      setPhoneDisplay('');
      setPhoneRaw('');
    } finally {
      setIsSubmitting(false);
    }
  }

  const amount = parseFloat(amountRaw) || 0;
  const paymentRub = Math.round(amount * CBR_RATE * BANK_MARKUP);
  const commission = Math.round(paymentRub * COMMISSION_RATE);
  const total = paymentRub + commission;

  return (
    <section className="calculator">
      <div className="calculator__inner">

        <h2 className="calculator__heading">
          Рассчитайте стоимость<br />международного перевода
        </h2>

        <form className="calculator__content" onSubmit={handleSubmit}>

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
                  src={selectedCountry.flag}
                  alt=""
                />
                <div className="calculator__field-text">
                  <span className="calculator__field-label">{activeTab === 'pay' ? 'Куда' : 'Откуда'}</span>
                  <span className="calculator__field-value">{selectedCountry.name}</span>
                </div>
                <span className="calculator__field-chevron" aria-hidden="true"></span>
              </div>

              <div className={`calculator__field${amountError ? ' calculator__field_error' : ''}`}>
                <div className="calculator__field-text">
                  <label className="calculator__field-label" htmlFor="calc-amount">Сумма перевода, {selectedCountry.currency}</label>
                  <input
                    className="calculator__field-input"
                    id="calc-amount"
                    type="text"
                    inputMode="numeric"
                    value={formatAmount(amountRaw)}
                    onChange={handleAmountChange}
                    onBlur={handleAmountBlur}
                  />
                </div>
              </div>
              {amountError && (
                <p className="calculator__phone-error">Введите сумму перевода</p>
              )}
            </div>

            <div className="calculator__fieldset">
              <p className="calculator__fieldset-label">Контакты</p>

              <div className={`calculator__field${phoneError ? ' calculator__field_error' : ''}`}>
                <img
                  className="calculator__field-flag"
                  src={russiaFlag}
                  alt=""
                />
                <div className="calculator__field-text">
                  {phoneError === 'incomplete' && (
                    <span className="calculator__field-label">Номер телефона</span>
                  )}
                  <input
                    className="calculator__field-input calculator__field-input_placeholder"
                    id="calc-phone"
                    type="tel"
                    placeholder="Номер телефона"
                    value={phoneDisplay}
                    onChange={handlePhoneChange}
                    onFocus={handlePhoneFocus}
                    onBlur={handlePhoneBlur}
                  />
                </div>
              </div>
              {phoneError === 'empty' && (
                <p className="calculator__phone-error">Введите номер телефона</p>
              )}
              {phoneError === 'incomplete' && (
                <p className="calculator__phone-error">Некорректный формат номера телефона</p>
              )}
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
                <span className="calculator__panel-row-value">{amountRaw ? formatAmount(amountRaw) : '0'} {selectedCountry.currency}</span>
              </li>
              <li className="calculator__panel-row">
                <span className="calculator__panel-row-label">
                  Платёж в рублях
                  <Tooltip text={TOOLTIPS.calcPaymentRub}>
                    <img
                      className="calculator__panel-row-hint"
                      src={infoIcon}
                      alt="Подробнее"
                    />
                  </Tooltip>
                </span>
                <span className="calculator__panel-row-value">{formatAmount(String(paymentRub))} ₽</span>
              </li>
              <li className="calculator__panel-row">
                <span className="calculator__panel-row-label">Комиссия от 0,5%</span>
                <span className="calculator__panel-row-value">{formatAmount(String(commission))} ₽</span>
              </li>
            </ul>

            <hr className="calculator__panel-divider" />

            <div className="calculator__panel-total">
              <span className="calculator__panel-total-label">
                Итоговая стоимость
                <Tooltip text={TOOLTIPS.calcTotal}>
                  <img
                    className="calculator__panel-total-hint"
                    src={infoIcon}
                    alt="Подробнее"
                  />
                </Tooltip>
              </span>
              <span className="calculator__panel-total-value">от {formatAmount(String(total))} ₽</span>
            </div>

            <button className="calculator__submit" type="submit" disabled={!amountRaw || !phoneRaw || isSubmitting}>
              {isSubmitting ? <span className="calculator__spinner" /> : 'Оставить заявку'}
            </button>
          </div>

        </form>
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
            {COUNTRIES.map((country) => (
              <li
                key={country.name}
                className="calculator__picker-item"
                onClick={() => selectCountry(country)}
              >
                <img className="calculator__picker-flag" src={country.flag} alt="" />
                <span className="calculator__picker-name">{country.name}</span>
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
