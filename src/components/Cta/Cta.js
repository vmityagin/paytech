import React, { useState } from 'react';
import './Cta.css';
import phoneImg from '../../images/phone.png';
import SuccessModal from '../SuccessModal/SuccessModal';
import { buildPayload, submitToSheets } from '../../utils/api';

function Cta() {
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const [phoneRaw, setPhoneRaw] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!phoneRaw) {
      setPhoneError(!phoneDisplay || phoneDisplay === '+7 (' ? 'empty' : 'incomplete');
      return;
    }
    setIsSubmitting(true);
    try {
      await submitToSheets(buildPayload({ type: 'cta', phone: phoneRaw }));
      setPhoneDisplay('');
      setPhoneRaw('');
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
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
          <form className="cta__form" onSubmit={handleSubmit}>
            <input
              className={`cta__input${phoneError ? ' cta__input_error' : ''}`}
              type="tel"
              placeholder="Номер телефона"
              value={phoneDisplay}
              onChange={handlePhoneChange}
              onFocus={handlePhoneFocus}
              onBlur={handlePhoneBlur}
            />
            {phoneError === 'empty' && (
              <p className="cta__error">Введите номер телефона</p>
            )}
            {phoneError === 'incomplete' && (
              <p className="cta__error">Некорректный формат номера телефона</p>
            )}
            {phoneError !== 'empty' && phoneError !== 'incomplete' && phoneError && (
              <p className="cta__error">{phoneError}</p>
            )}
            <button className="cta__btn" type="submit" disabled={!phoneRaw || isSubmitting}>
              {isSubmitting ? <span className="calculator__spinner" /> : 'Оставить заявку'}
            </button>
            <p className="cta__disclaimer">
              При вводе номера телефона вы соглашаетесь{' '}
              <a className="cta__disclaimer-link" href="#">с условиями</a>
            </p>
          </form>
        </div>

        <div className="cta__phone">
          <img
            className="cta__phone-img"
            src={phoneImg}
            alt=""
          />
        </div>

      </div>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

    </section>
  );
}

export default Cta;
