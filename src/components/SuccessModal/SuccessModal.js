import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './SuccessModal.css';

function SuccessModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="success-modal__backdrop" onClick={onClose} />
      <div className="success-modal__card">
        <div className="success-modal__icon" aria-hidden="true" />
        <div className="success-modal__text">
          <p className="success-modal__title">Заявка отправлена</p>
          <p className="success-modal__subtitle">Скоро свяжемся с вами</p>
        </div>
      </div>
    </>,
    document.body
  );
}

export default SuccessModal;
